<script>
    import '../app.css';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
 
    inject({ mode: dev ? 'development' : 'production' });
    import {onMount} from 'svelte';

    onMount(() => {
        inject();
    })
</script>

<slot/>