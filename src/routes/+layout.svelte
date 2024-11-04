<script>
    import '../app.css';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';

    import {browser} from '$app/environment';
    inject({ mode: dev ? 'development' : 'production' });

    onMount(() => {
        inject();
        if (browser) {
            const script = document.createElement('script');
            script.defer = true;
            script.src = 'https://cloud.umami.is/script.js';
            script.dataset.websiteId = '60d97bf7-9627-46fc-81e2-269f0806d7f5';
            document.head.appendChild(script);
        }
    })
</script>

<slot/>