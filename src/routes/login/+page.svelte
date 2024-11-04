<!-- <script>
    import { onMount } from "svelte";
    let password = '';
    let message = '';
    let userAgent = '';
    onMount(() => {
    userAgent = navigator.userAgent;
  });

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
    <form on:submit|preventDefault={submitPassword}>
        <input type="password" bind:value={password} placeholder="enter password" required />
        <button type="submit">go!</button>
        <p>{message}</p>
    </form>
</div> -->

<script>
    import { onMount } from "svelte";
    let password = '';
    let message = '';
    let userAgent = '';
    let referrer = '';
    let screenResolution = '';
    let timezone = '';
    let language = '';
    let deviceType = '';
    let preferredTheme = '';
    let visitTime = '';
    let utmParams = {
        source: '',
        medium: '',
        campaign: '',
        term: '',
        content: ''
    };

    onMount(() => {
        // Basic system info
        userAgent = navigator.userAgent;
        language = navigator.language;
        timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        screenResolution = `${window.screen.width}x${window.screen.height}`;
        preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        visitTime = new Date().toISOString();
        
        // Referrer information
        referrer = document.referrer;
        
        // Device type detection
        deviceType = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(userAgent) 
            ? 'mobile' 
            : /Tablet|iPad/.test(userAgent) 
                ? 'tablet' 
                : 'desktop';

        // Get UTM parameters from URL
        const urlParams = new URLSearchParams(window.location.search);
        utmParams = {
            source: urlParams.get('utm_source') || '',
            medium: urlParams.get('utm_medium') || '',
            campaign: urlParams.get('utm_campaign') || '',
            term: urlParams.get('utm_term') || '',
            content: urlParams.get('utm_content') || ''
        };
    });

    async function submitPassword(event) {
        event.preventDefault();
        
        // Prepare marketing data
        const marketingData = {
            password,
            userAgent,
            referrer,
            screenResolution,
            timezone,
            language,
            deviceType,
            preferredTheme,
            visitTime,
            utmParams,
            // Additional behavioral data
            timeOnPage: (new Date() - performance.timing.navigationStart) / 1000,
            isReturningUser: !!localStorage.getItem('previousVisit')
        };

        const res = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(marketingData)
        });
        
        const result = await res.json();

        if (result.success) {
            // Store visit timestamp for returning user detection
            localStorage.setItem('previousVisit', new Date().toISOString());
            window.location.href = '/';
        } else {
            message = 'real ones know';
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