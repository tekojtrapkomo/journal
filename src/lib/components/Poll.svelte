<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    let pollOptions = ['Sade', 'Drake', 'J Dilla'];
    export let pollQuestion = 'Who should I choose to make promo?';
    export let apiEndpoint = '/november-19';

    let pollResults = [];
    let currentVote = null;
    let loading = false;
    let userId = '';
    let newOption = '';
    let showAddForm = false;

    // Store to manage votes
    const voteStore = writable(null);

    function getUserId() {
        let id = localStorage.getItem('pollUserId');
        if (!id) {
            id = 'user_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('pollUserId', id);
        }
        return id;
    }

    async function fetchResults() {
        const res = await fetch(apiEndpoint);
        try {
            const data = await res.json();
            pollResults = data.map(result => ({
                ...result,
                votes: result.votes || 0
            }));
        } catch (error) {
            console.error('Error parsing results:', error);
            pollResults = [];
        }
    }

    async function handleVote(choice) {
        if (loading) return;
        
        loading = true;
        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'X-User-Id': userId
                },
                body: JSON.stringify({ 
                    newChoice: choice,
                    previousChoice: currentVote 
                }),
            });

            if (!response.ok) {
                throw new Error('Vote submission failed');
            }

            await fetchResults();
            currentVote = choice;
            voteStore.set(choice);
            localStorage.setItem('currentVote', choice);
            showAddForm = false;
            newOption = '';
        } catch (error) {
            console.error('Error submitting vote:', error);
            alert('Failed to submit vote. Please try again.');
        } finally {
            loading = false;
        }
    }

    async function handleAddOption(e) {
        e.preventDefault();
        const trimmedOption = newOption.trim();
        if (trimmedOption) {
            handleVote(trimmedOption);
        }
    }

    onMount(() => {
        userId = getUserId();
        fetchResults();
        
        const savedVote = localStorage.getItem('currentVote');
        if (savedVote) {
            currentVote = savedVote;
            voteStore.set(savedVote);
        }
    });
</script>

<div class="poll">
    <h1>{pollQuestion}</h1>
    
    {#if !currentVote}
        {#each pollOptions as option}
            <button 
                on:click={() => handleVote(option)}
                disabled={loading}
            >
                {option}
            </button>
        {/each}

        {#if showAddForm}
            <form class="add-form" on:submit={handleAddOption}>
                <input
                    type="text"
                    bind:value={newOption}
                    placeholder="add yours"
                    maxlength="50"
                    required
                />
                <div class="form-buttons">
                    <button type="submit" disabled={!newOption.trim() || loading}>
                        vote
                    </button>
                    <button 
                        type="button" 
                        class="cancel"
                        on:click={() => {
                            showAddForm = false;
                            newOption = '';
                        }}
                    >
                        cancel
                    </button>
                </div>
            </form>
        {:else}
            <button 
                class="add-option"
                on:click={() => showAddForm = true}
            >
                add yours
            </button>
        {/if}
    {:else}
        <div class="results">
            {#each pollResults as { name, votes }}
                <div class="result">
                    <span>{name}</span>
                    <span>{votes} {votes === 1 ? 'vote' : 'votes'}</span>
                </div>
            {/each}
            <button 
                on:click={() => {
                    currentVote = null;
                    voteStore.set(null);
                    localStorage.removeItem('currentVote');
                }}
                disabled={loading}
            >
                change vote
            </button>
        </div>
    {/if}
</div>

<style>
    .poll {
        width: 100%;
        max-width:500px;
        margin: 50px auto;
        padding: 20px;
        border: 2px solid #111;
        background: #fff;
        box-shadow: 10px 10px 0 #111;
        font-family: 'Reg', sans-serif;
    }

    h1 {
        font-size: 1.5rem;
        margin: 0 0 20px;
        font-family: 'Reg', sans-serif;
        letter-spacing: -2px;
    }

    button {
        display: block;
        width: 100%;
        margin: 10px 0;
        padding: 10px;
        font-size: 1rem;
        border: 2px solid #111;
        background: #fff;
        cursor: pointer;
        transition: background 0.2s ease-in-out;
        font-family: 'Reg', sans-serif;
        letter-spacing: -2px;

    }

    button:hover {
        background: blue;
        color: #fff;
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .results {
        margin-top: 20px;
    }

    .result {
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
        font-family: 'Bold', sans-serif;
    }
</style>