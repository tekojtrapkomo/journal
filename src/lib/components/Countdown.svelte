<script>
    import { onMount, onDestroy } from 'svelte';
    
    let secondsLeft = 0;
    let timerInterval;
    
    function calculateTimeLeft() {
      const targetDate = new Date('2024-11-26T00:00:00-05:00'); // EST is UTC-5
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference > 0) {
        secondsLeft = Math.floor(difference / 1000);
      } else {
        clearInterval(timerInterval);
        secondsLeft = 0;
      }
    }
    
    onMount(() => {
      calculateTimeLeft();
      timerInterval = setInterval(calculateTimeLeft, 1000);
    });
    
    onDestroy(() => {
      if (timerInterval) clearInterval(timerInterval);
    });
  </script>
  
  <div class="countdown-container">
    <div class="timer">
      <div class="time-block">
        <span class="number">{secondsLeft.toLocaleString()}</span>
      </div>
    </div>
  </div>
  
  <style>
    .countdown-container {
      text-align: center;
      padding: 2rem;
      font-family: 'reg', sans-serif;
    }
    
    .timer {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 1rem;
    }
    
    .time-block {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .number {
      font-size: 3rem;
      color: #333;
      font-family: 'reg', sans-serif;
    }
    
  </style>