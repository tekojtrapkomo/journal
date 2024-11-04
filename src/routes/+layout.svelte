<script>
    import '../app.css';
    import { dev, browser } from '$app/environment';
    import { inject } from '@vercel/analytics';
    import {onMount} from 'svelte';
    inject({ mode: dev ? 'development' : 'production' });
    onMount(() => {
        inject();
        if (browser) {
            const script = document.createElement('script');
            script.async = true;
            script.defer = true;
            script.src = 'https://cloud.umami.is/script.js';
            script.setAttribute('data-website-id', '60d97bf7-9627-46fc-81e2-269f0806d7f5');
            document.head.appendChild(script);
        }
    })
</script>
<svelte:head>
</svelte:head>
<slot/>