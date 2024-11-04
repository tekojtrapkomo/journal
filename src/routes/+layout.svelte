<script>
    import '../app.css';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
 
    inject({ mode: dev ? 'development' : 'production' });
    const loading = !dev;

    onMount(() => {
        inject();
    })

</script>
<svelte:head>
    {@html loading ? `
        <script>
            (function() {
                const s = document.createElement('script');
                s.defer = true;
                s.src = 'https://cloud.umami.is/script.js';
                s.setAttribute('data-website-id', '60d97bf7-9627-46fc-81e2-269f0806d7f5');
                document.head.appendChild(s);
            })();
        </script>
    ` : ''}
</svelte:head>
<slot/>