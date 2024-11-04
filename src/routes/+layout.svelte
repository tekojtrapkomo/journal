<script>
    import '../app.css';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
 
    inject({ mode: dev ? 'development' : 'production' });
    import {onMount} from 'svelte';
    const loading = !dev;

    onMount(() => {
        inject();
    })
</script>
<svelte:head>
  {#if loading}
    <script defer src="https://cloud.umami.is/script.js" data-website-id="60d97bf7-9627-46fc-81e2-269f0806d7f5"></script>
  {/if}
</svelte:head>
<slot/>