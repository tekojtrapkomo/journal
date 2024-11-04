<script>
    import '../app.css';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    import {onMount} from 'svelte';
    inject({ mode: dev ? 'development' : 'production' });

    onMount(() => {
        inject();
            const script = document.createElement('script');
            script.defer = true;
            script.src = btoa('aHR0cHM6Ly9jbG91ZC51bWFtaS5pcy9zY3JpcHQuanM='); // Encoded umami URL
            script.dataset.websiteId = '60d97bf7-9627-46fc-81e2-269f0806d7f5'; // Your ID
            document.head.appendChild(script);
        
    })
</script>

<slot/>