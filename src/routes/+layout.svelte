<script>
    import '../app.css';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    import {onMount} from 'svelte';
    inject({ mode: dev ? 'development' : 'production' });

      // Only load in production

function loadingTwo() {
  const script = document.createElement('script');
  script.defer = true;
  script.dataset.websiteId = "60d97bf7-9627-46fc-81e2-269f0806d7f5";

  script.src = atob("aHR0cHM6Ly9jbG91ZC51bWFtaS5pcy9zY3JpcHQuanM=");
  document.head.appendChild(script);
}
    onMount(() => {
        inject();
    })
</script>
<svelte:head>
    <script>
        {loadingTwo.toString()}; loadingTwo();
    </script>
</svelte:head>
<slot/>