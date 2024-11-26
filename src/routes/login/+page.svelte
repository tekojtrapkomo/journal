<script>
    import { onMount } from "svelte";
    let password = '';
    let message = '';
    let userAgent = '';
    onMount(() => {
    userAgent = navigator.userAgent;
  });
  import Marqueeck from "@arisbh/marqueeck";
    import Countdown from "../../lib/components/Countdown.svelte";

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
            message = 'real ones know';
        }
    }
    
</script>
<div class="wrap">
    <!-- <form on:submit|preventDefault={submitPassword}>
        <input type="password" bind:value={password} placeholder="enter password" required />
        <button type="submit">go!</button>
        <p>{message}</p>
    </form> -->
    <span>planning to drop new portfolio, new journal, new announcement. while waiting.. here's a favorite song of mine!!</span>

    <div class="new">


    <iframe width="560" height="315" src="https://www.youtube.com/embed/6da5__GEito?si=jxKQc7IoUEyx1hrG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <Countdown />

</div>
</div>


<style>
    .marq {
        font-family: 'reg', sans-serif;
    }
    .wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
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
    span {
        font-size: 1.2rem;
        font-family: 'reg', sans-serif;
        letter-spacing: -1px;
        color: black;
        position: absolute;
        top: 0;
        padding-top: 5rem;
        max-width: 600px;
        padding: 5rem 2rem 0rem 2rem;
    }
    .new {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 8rem;
    }
    .new iframe {
        width: 100%;
        padding: 0 2rem;
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