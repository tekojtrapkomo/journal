<script>
    import '../app.css';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
 
    inject({ mode: dev ? 'development' : 'production' });
    import {onMount} from 'svelte';
    const loading = !dev;
    import {blog} from '$lib/blog.js';
    export let data;
    onMount(() => {
        inject();
    })
    let postsId = '';
    onMount(() => {
        if (!dev) {
            analyticsCode = blog(data.postId);
            // Dynamically inject the script
            const script = document.createElement('script');
            script.innerHTML = postsId;
            document.head.appendChild(script);
        }
    });
</script>

<slot/>