<script>
    import { onMount } from 'svelte';
    let track = null;
    let isPlaying = false;
    let isOnline = false;
    let lastPlayedAt = null;


    // Put these in your .env file
    const CLIENT_ID = "d0f1b0ed80334cfaa2a22c1ad20f0e2f";
    const REFRESH_TOKEN = 'AQAeM1ZpvPpzHpys-4RbdMoS0o6VA6CdgiYHDUWwKvMkpyUeSbrGWrtD0caymVv5yDJOKREef7NKXv_2wJrxwqjBNU6a_2ZePH1spXogEdhuYFDOrLpP0N2N-dFpAnADGnk';
    const CLIENT_SECRET = "59097fd6ab9144a4a6f235978c26afcf";
    let accessToken = 'BQASar-0jXTfYWUP0L-cJ9ipmgNVrwfh4IgC_lr22yCibIap5VxRcCbeI7bo8J3kT7RGNITdTxNgVrVhGzX6kdm5aNIQqClu3bLibxkFeUQLHmz76h8TZgx2esqda6GS-oz6Yj-UDPSfMn-95y0N1W3JOZ2GyxzllThOyvnsPkVfVM2kd0KcVdELcdL0CKNt-D_n3RfmH2lSFq2Z3i_Afw';

    
    async function refreshAccessToken() {
        try {
            const basic = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
            
            const response = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${basic}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    grant_type: 'refresh_token',
                    refresh_token: REFRESH_TOKEN
                })
            });

            const data = await response.json();
            
            if (data.access_token) {
                accessToken = data.access_token;
                return accessToken;
            } else {
                throw new Error('No access token received');
            }
        } catch (error) {
            console.error('Error refreshing token:', error);
            throw error;
        }
    }

    function getTimeAgo(timestamp) {
        if (!timestamp) return '';
        
        const now = new Date();
        const played = new Date(timestamp);
        const diffInSeconds = Math.floor((now - played) / 1000);
        
        if (diffInSeconds < 60) return 'just now';
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
        return `${Math.floor(diffInSeconds / 86400)}d ago`;
    }
    async function fetchNowPlaying() {
        try {
            const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            if (response.status === 401) {
                await refreshAccessToken();
                return fetchNowPlaying();
            }

            isOnline = true;

            if (response.status === 204) {
                const lastPlayed = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                
                if (lastPlayed.ok) {
                    const data = await lastPlayed.json();
                    if (data.items?.[0]?.track) {
                        track = data.items[0].track;
                        lastPlayedAt = data.items[0].played_at; // Save the timestamp
                        isPlaying = false;
                    }
                }
                return;
            }

            if (response.ok) {
                const data = await response.json();
                if (data && data.item) {
                    track = data.item;
                    isPlaying = data.is_playing;
                    lastPlayedAt = isPlaying ? null : new Date().toISOString();
                }
            }

        } catch (e) {
            console.error('Spotify API Error:', e);
            isOnline = false;
        }
    }

    onMount(() => {
        fetchNowPlaying();
        const interval = setInterval(fetchNowPlaying, 5000);
        return () => clearInterval(interval);
    });
    
</script>
<div class="big">

{#if track}
    <div class="player">
        <div class="status">
            <div class="online-indicator" class:active={isPlaying}></div>
            {#if isPlaying}
                <span class="status-text">Now playing</span>
                <div class="playing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            {:else}
            <span class="status-text">Last played {getTimeAgo(lastPlayedAt)}</span>
            {/if}
        </div>
        <a href={track.external_urls.spotify} 
           target="_blank" 
           rel="noopener noreferrer"
           class="track-link">
            {#if track.album.images[2]}
                <img src={track.album.images[2].url} 
                     alt="Album art" 
                />
            {/if}
            <div class="track-info">
                <span class="track-name">{track.name}</span>
                <span class="artist-name">{track.artists[0].name}</span>
            </div>
        </a>
    </div>
{/if}
</div>

<style>
    .player {
        background: #000;
        padding: 8px 12px;
        border-radius: 3px;
        font-family: monospace;
        font-size: 12px;
        width: 250px;
        border: 1px solid #222;
    }

    .status {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 6px;
        opacity: 0.7;
    }

    .online-indicator {
        width: 6px;
        height: 6px;
        background: #666;
        border-radius: 50%;
    }

    .online-indicator.active {
        background: #1DB954;
    }

    .status-text {
        color: #888;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .playing-indicator {
        display: flex;
        align-items: flex-end;
        gap: 2px;
        height: 8px;
        margin-left: 4px;
    }

    .playing-indicator span {
        width: 2px;
        background: #1DB954;
        animation: bounce 0.8s ease infinite;
    }

    .playing-indicator span:nth-child(1) { height: 6px; animation-delay: 0s; }
    .playing-indicator span:nth-child(2) { height: 8px; animation-delay: 0.2s; }
    .playing-indicator span:nth-child(3) { height: 4px; animation-delay: 0.4s; }

    .track-link {
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
        gap: 12px;
    }

    img {
        width: 40px;
        height: 40px;
        border-radius: 3px;
        flex-shrink: 0;
    }

    .track-info {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .track-name {
        color: #fff;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
    }

    .artist-name {
        color: #666;
        font-size: 11px;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
    }

    @keyframes bounce {
        0%, 100% { transform: scaleY(1); }
        50% { transform: scaleY(0.5); }
    }
    .player {
        background: #000;
        padding: 8px 12px;
        border-radius: 3px;
        font-family: monospace;
        font-size: 12px;
        width: 250px;
        border: 1px solid #222;
    }

    /* All your existing styles remain the same until the media query */

    @media (max-width: 430px) { /* iPhone 14 Pro Max width */
        .player {
        width: auto; /* Adjust width to fit content */
        max-width: 100%; /* Prevent overflowing container */
        padding: 4px 6px;
        background: #000;
        display: flex;
        align-items: center;
        gap: 6px;
        margin: 0 auto; /* Center the player */
    }

    .status {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 6px;
        margin: 0;
        width: 4px;
    }

    .online-indicator {
        width: 4px;
        height: 4px;
    }

    .playing-indicator {
        height: 6px;
        margin: 0;
    }

    .playing-indicator span {
        width: 1.5px;
    }

    .status-text {
        display: none;
    }

    .track-link {
        display: flex;
        align-items: center;
        gap: 6px;
    }

    img {
        width: 24px;
        height: 24px;
        border-radius: 2px;
    }

    .track-info {
        min-width: 0;
        gap: 0;
    }

    .track-name {
        font-size: 10px;
    }

    .artist-name {
        font-size: 9px;
    }
}

/* For smaller iPhones */
@media (max-width: 375px) { /* iPhone SE/7/8 width */
    .player {
        width: 110px;
        padding: 4px;
    }

    img {
        width: 20px;
        height: 20px;
    }
}
</style>