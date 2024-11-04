<script>
    import '../app.css';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    import {onMount} from 'svelte';
    inject({ mode: dev ? 'development' : 'production' });
    onMount(() => {
        inject();
    })
</script>
<svelte:head>
    <script defer src="/utils" data-website-id="60d97bf7-9627-46fc-81e2-269f0806d7f5"></script>
</svelte:head>
<slot/>