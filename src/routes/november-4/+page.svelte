<script>
    import { enhance } from '$app/forms';
    import { invalidateAll } from '$app/navigation';
    
    /** @type {import('./$types').PageData} */
    export let data;
    
    /** @type {import('./$types').ActionData} */
    export let form;

    let password = '';
    let loading = false;

    function handleEnhance() {
        loading = true;
        return async ({ update }) => {
            await update();
            loading = false;
            if (form?.success) {
                await invalidateAll();
            } else {
                password = '';
            }
        };
    }

    $: hasAccess = data.hasNov4Access;
</script>

{#if hasAccess}
    <div class="main">
        <div class="left">
            <p>can you believe that i thought, and really believed, made myself convinced that i'm the worst hahahahah</p>
            
            <br>
            <p>butneer ni oroi 9uus zaw garahaar bichnee</p>
            <img src="https://3.bp.blogspot.com/-ZsFo_thGv5M/Uc0EghCht5I/AAAAAAAAHy0/TO6rqFWUVBw/s600/IBM-Bionic-Body-Armor-Dodges-Bullets-2.jpg" alt="">
            <br>
            <p>call me war veteran, the way my soul dodged that ballistic warhead missile</p>
            <a href="/">hoooome</a>
        </div>
    </div>
{:else}
    <div class="container">
        <div class="left-side">
            <div class="wrap">
                <form 
                    method="POST"
                    use:enhance={handleEnhance}
                >
                    <input 
                        type="password" 
                        name="password"
                        bind:value={password} 
                        placeholder="enter password" 
                        required 
                        disabled={loading}
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? '...' : 'go!'}
                    </button>
                    <p class="hint">can't let noooo one read this. but if there's a will, there's a way, and a hint below</p>
                    {#if form?.message}
                        <p class={form.success ? 'success' : 'error'}>{form.message}</p>
                    {/if}
                </form>
            </div>
        </div>
        <div class="right-side">
            <iframe 
                src="https://www.youtube.com/embed/fZ4kURbpN50?si=k6G2xLJuoXgRaN4N" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
            ></iframe>
        </div>
    </div>
{/if}

<style>
    .container {
        display: flex;
        width: 100%;
        height: 100vh;
    }

    .left-side {
        flex: 0.7;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .right-side {
        flex: 0.3;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f5f5f5;
    }

    .wrap {
        max-width: 400px;
        width: 100%;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        position: relative;
    }

    input {
        border: none;
        width: 100%;
        font-size: 4rem;
        background: transparent;
        padding: 0;
    }

    input::placeholder {
        font-size: 3.6rem;
        font-family: 'reg', sans-serif;
        color: black;
        letter-spacing: -1px;
    }

    input:focus {
        outline: none;
    }

    button {
        color: blue;
        border: none;
        background: none;
        cursor: pointer;
        font-size: 4rem;
        text-align: right;
        font-family: 'reg', sans-serif;
        letter-spacing: -1px;
        padding: 0;
        align-self: flex-end;
        margin-top: -1rem;
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .hint {
        font-size: 1rem;
        font-family: 'reg', sans-serif;
        letter-spacing: -1px;
        color: #666;
        margin-top: 1rem;
        width: 100%;
        text-align: center;
    }

    .error {
        font-size: 1rem;
        font-family: 'reg', sans-serif;
        letter-spacing: -1px;
        color: red;
        text-align: center;
        width: 100%;
    }

    .success {
        font-size: 1rem;
        font-family: 'reg', sans-serif;
        letter-spacing: -1px;
        color: #4CAF50;
        text-align: center;
        width: 100%;
    }

    .right-side iframe {
        width: 100%;
        height: 100%;
    }

    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-family: 'reg', sans-serif;
    }
    .left {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .left a {
        font-size: 4rem;
        color: blue;
        text-decoration: none;
    }

    @media screen and (max-width: 1024px) {
        .container {
            flex-direction: column;
        }

        .left-side {
            flex: none;
            height: 70vh;
            padding: 1rem;
        }

        .right-side {
            flex: none;
            height: 30vh;
        }

        input {
            font-size: 2rem;
        }

        input::placeholder {
            font-size: 2.8rem;
        }

        button {
            font-size: 2.8rem;
        }

        .hint, .error, .success {
            font-size: 0.8rem;
        }
    }
</style>