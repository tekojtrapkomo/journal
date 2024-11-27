<script>
    import { onMount } from "svelte";
    let password = '';
    let message = '';
    let image = '';
    let userAgent = '';
    import { fade } from "svelte/transition";
    import NowPlaying from "$lib/components/NowPlaying.svelte";
    onMount(() => {
    userAgent = navigator.userAgent;
  });
  import Marqueeck from "@arisbh/marqueeck";
    async function submitPassword(event) {
        event.preventDefault();
        const res = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password, userAgent })
        });
        const result = await res.json();
        if (result.success) {
            window.location.href = '/';
        } else {
        if (result.image) {
            image = result.image; 
            message = '';         
        } else {
            message = result.message; 
            image = '';             
        }
    }
    }
</script>
<div class="marq">
    <Marqueeck 
	--marqueeck-bg-color="blue" 
	--marqueeck-text-color="white"
	--marqueeck-padding-y="0.5rem">
	nov 31 9am est 🥳
</Marqueeck>
</div>
<div class="wrap">
    <form on:submit|preventDefault={submitPassword}>
        <input type="password" bind:value={password} placeholder="enter password" required />
        <button type="submit">go!</button>
        {#if image}
            <div transition:fade class="image-container">
                <img src={image} alt="Mr.Fresh" />
            </div>
        {/if}
        {#if message}
            <p>{message}</p>
        {/if}
    </form>
    
    <div class="hint">
        <a target="_blank" aria-label="hint" href="https://www.youtube.com/watch?v=eNvUS-6PTbs">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.53846C7.32682 3.53846 3.53846 7.32682 3.53846 12C3.53846 16.6732 7.32682 20.4615 12 20.4615C16.6732 20.4615 20.4615 16.6732 20.4615 12C20.4615 7.32682 16.6732 3.53846 12 3.53846ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="blue"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16.359C12.4248 16.359 12.7692 16.0146 12.7692 15.5897V11.4872C12.7692 11.0623 12.4248 10.7179 12 10.7179C11.5752 10.7179 11.2308 11.0623 11.2308 11.4872V15.5897C11.2308 16.0146 11.5752 16.359 12 16.359Z" fill="blue"/>
            <path d="M13.0256 8.41026C13.0256 7.84381 12.5664 7.38462 12 7.38462C11.4336 7.38462 10.9744 7.84381 10.9744 8.41026C10.9744 8.9767 11.4336 9.4359 12 9.4359C12.5664 9.4359 13.0256 8.9767 13.0256 8.41026Z" fill="blue"/>
            </svg></a>
    </div>
    <div class="spotify">
        <NowPlaying />
    </div>
</div>


<style>
    .marq {
        font-family: 'reg', sans-serif;
        position: fixed;
    }
    .spotify {
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 1rem;
        z-index: 999999;
    }
    .wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100dvh;
        overflow: hidden;
        width: 100vw;
    }
    form {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        font-family: 'reg', sans-serif;
    }
    input {
        border: none;
        width: 100%;
        font-size: 4rem;
    }
    input::placeholder {
        font-size: 3.6rem;
        font-family: 'reg', sans-serif;
        color: black;
        letter-spacing: -1px;
    }
    input:focus {
        outline: none;
        font-family: 'reg', sans-serif;
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
    }
    .hint {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 1rem;
    }
    .image-container{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 2rem;
    }
    p {
        font-size: 1rem;
        font-family: 'reg', sans-serif;
        letter-spacing: -1px;
        color: red;
        position: absolute;
        bottom: 0;
        padding-bottom: 5rem;
        left: 50%;
        transform: translateX(-50%);
    }
    @media screen and (max-width: 768px) {
        input {
            font-size: 2rem;
        }
        input::placeholder {
            font-size: 2.8rem;
        }
        button {
            font-size: 2.8rem;
            display: flex;
            justify-content: flex-end;
            padding-right: 1rem;
        }
        p {
            font-size: 0.8rem;
        }
    }
</style>