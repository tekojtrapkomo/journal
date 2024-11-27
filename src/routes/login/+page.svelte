<script>
    import { onMount } from "svelte";
    let password = '';
    let message = '';
    let image = '';
    let userAgent = '';
    import { fade } from "svelte/transition";

    onMount(() => {
    userAgent = navigator.userAgent;
  });
  import Marquee from "svelte-fast-marquee";

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
    <!-- <Marqueeck 
	--marqueeck-bg-color="blue" 
	--marqueeck-text-color="white"
	--marqueeck-padding-y="0.5rem">
    nov 31 9am est 🥳 
</Marqueeck> -->
<Marquee>
	fixed server errors, we back! 🥳 <div class="space"></div>
    fixed server errors, we back! 🥳 <div class="space"></div>
    fixed server errors, we back! 🥳 <div class="space"></div>
    fixed server errors, we back! 🥳 <div class="space"></div>
	fixed server errors, we back! 🥳 <div class="space"></div>
	fixed server errors, we back! 🥳 <div class="space"></div>

 </Marquee>
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
        <div transition:fade class="message-container">
            <p>{message}</p>
        </div>
        {/if}
    </form>
    
    <div class="hint">
        <a target="_blank" aria-label="instagram" href="https://instagram.com/battogtokh_">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="blue"/></svg>
        </a>
        <a target="_blank" aria-label="hint" href="https://www.youtube.com/watch?v=ewKVBIQsP5w">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.53846C7.32682 3.53846 3.53846 7.32682 3.53846 12C3.53846 16.6732 7.32682 20.4615 12 20.4615C16.6732 20.4615 20.4615 16.6732 20.4615 12C20.4615 7.32682 16.6732 3.53846 12 3.53846ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="blue"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16.359C12.4248 16.359 12.7692 16.0146 12.7692 15.5897V11.4872C12.7692 11.0623 12.4248 10.7179 12 10.7179C11.5752 10.7179 11.2308 11.0623 11.2308 11.4872V15.5897C11.2308 16.0146 11.5752 16.359 12 16.359Z" fill="blue"/>
            <path d="M13.0256 8.41026C13.0256 7.84381 12.5664 7.38462 12 7.38462C11.4336 7.38462 10.9744 7.84381 10.9744 8.41026C10.9744 8.9767 11.4336 9.4359 12 9.4359C12.5664 9.4359 13.0256 8.9767 13.0256 8.41026Z" fill="blue"/>
            </svg></a>
    </div>
</div>


<style>
    .marq {
        font-family: 'reg', sans-serif;
        position: fixed;
        width: 100vw;
        background-color: blue;
        color: white;
        padding: 0.5rem 0;
        text-align: center;
    }
    .space {
        margin-right: 10rem;
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
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .image-container{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 2rem;
    }
    p {
        font-size: 2rem;
        font-family: 'bold', sans-serif;
        letter-spacing: -1px;
        color: black;
        position: absolute;
        bottom: 0;
        padding-bottom: 5rem;
        left: 50%;
        transform: translateX(-50%);
        text-transform: uppercase;
        text-align: center;
        width: 70%;
    }
    @media screen and (max-width: 768px) {
        input {
            font-size: 2rem;
            padding-left: 3rem;
        }
        input::placeholder {
            font-size: 2.8rem;
        }
        button {
            font-size: 2.8rem;
            display: flex;
            justify-content: flex-end;
            padding-right: 2.5rem;
        }
        p {
            font-size: 1.5rem;
        }
    }
</style>