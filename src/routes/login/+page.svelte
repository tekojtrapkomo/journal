<script>
    let password = '';
    let message = '';

    async function submitPassword() {
        const res = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password })
        });
        const result = await res.json();
        message = result.message;

        if (result.success) {
            window.location.href = '/';
        }
    }
</script>
<div class="wrap">
    <form on:submit|preventDefault={submitPassword}>
        <input type="password" bind:value={password} placeholder="enter password" required />
        <button type="submit">go!</button>
        <p>{message}</p>
    </form>
</div>


<style>
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
</style>