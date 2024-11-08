<script>
    export let src = '';
    export let title = 'Audio Track';
    
    let audio;
    let progress = 0;
    let duration = 0;
    let currentTime = 0;
    let playing = false;
    let volume = 1;
  
    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
  
    function handleTimeUpdate() {
      currentTime = audio.currentTime;
      progress = (currentTime / duration) * 100;
    }
  
    function handleLoadedMetadata() {
      duration = audio.duration;
    }
  
    function togglePlay() {
      if (playing) {
        audio.pause();
      } else {
        audio.play();
      }
      playing = !playing;
    }
  
    function handleProgressClick(event) {
      const bounds = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const percentage = x / bounds.width;
      audio.currentTime = percentage * duration;
    }
  
    function handleVolumeChange(event) {
      volume = event.target.value;
      audio.volume = volume;
    }
  </script>
  
  <div class="audio-player">
    <audio
      bind:this={audio}
      {src}
      on:timeupdate={handleTimeUpdate}
      on:loadedmetadata={handleLoadedMetadata}
    ></audio>
    
    <div class="title">{title}</div>
    
    <div class="controls">
      <button on:click={togglePlay}>
        {#if playing}
          ⏸️
        {:else}
          ▶️
        {/if}
      </button>
      
      <div class="progress-bar" on:click={handleProgressClick}>
        <div class="progress" style="width: {progress}%"></div>
      </div>
      
      <div class="time">
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
      
      <div class="volume">
        🔊
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          on:input={handleVolumeChange}
        />
      </div>
    </div>
  </div>
  
  <style>
    .audio-player {
      background: #000;
      color: #fff;
      padding: 1rem;
      border-radius: 4px;
      width: 100%;
      max-width: 500px;
    }
  
    .title {
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }
  
    .controls {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  
    button {
      background: none;
      border: none;
      color: #fff;
      cursor: pointer;
      padding: 0.5rem;
    }
  
    .progress-bar {
      flex: 1;
      background: #333;
      height: 4px;
      cursor: pointer;
      position: relative;
    }
  
    .progress {
      background: #fff;
      height: 100%;
      position: absolute;
    }
  
    .time {
      font-size: 0.8rem;
      min-width: 100px;
    }
  
    .volume {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  
    input[type="range"] {
      width: 80px;
    }
  </style>