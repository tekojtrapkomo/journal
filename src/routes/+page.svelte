<script>
    const dates = [
        { day: "october 20", href: "/october-20", active: false },
        { day: "october 21", href: "/october-21", active: false },
        { day: "october 22", href: "/october-22", active: false },
        { day: "october 23", href: "/october-23", active: false },
        { day: "october 26", href: "/october-26", active: false },
        { day: "october 27", href: "/october-27", active: false },
        { day: "october 28", href: "/october-28", active: false },
        { day: "october 29", href: "/october-29", active: false },
        { day: "october 30", href: "/october-30", active: false },
        { day: "october 31", href: "/october-31", active: true }, // Active date
        { day: "november 1", href: "/november-1", active: false },
        { day: "november 2", href: "/november-2", active: false }
    ];

        // Calculate items per column
        const itemsPerColumn = Math.ceil(dates.length / 3);
    
    // Split into three arrays
    const column1 = dates.slice(0, itemsPerColumn);
    const column2 = dates.slice(itemsPerColumn, itemsPerColumn * 2);
    const column3 = dates.slice(itemsPerColumn * 2);
  
    
  </script>
  
  <div class="wrapper">
    <div class="header">
      <div class="left">
        <img src="/2024.png" alt="2024">
        <img src="/sub2.png" alt="subtitle">
      </div>
      <div class="right">
        <img class="right-img" src="/right.png" alt="right">
        <img class="halo" src="/halo.png" alt="halo">
      </div>
    </div>
    <div class="dates-grid">
        <div class="date-column">
            {#each column1 as { day, href, active }}
                <a {href} class="date-link {active ? 'active' : ''}">
                    {day}
                </a>
            {/each}
        </div>
        <div class="date-column">
            {#each column2 as { day, href, active }}
                <a {href} class="date-link {active ? 'active' : ''}">
                    {day}
                </a>
            {/each}
        </div>
        <div class="date-column">
            {#each column3 as { day, href, active }}
                <a {href} class="date-link {active ? 'active' : ''}">
                    {day}
                </a>
            {/each}
        </div>
    </div>
  </div>
  <style>
    /* Container */
    .wrapper {
        width: 100vw;
    padding: 2rem;
    min-height: 100vh; /* Make wrapper full height */
    display: flex;
    flex-direction: column;
    }
  
    /* Header */
    .header {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: flex-start;
      padding-bottom: 1em;
    }
  .left{
    display: flex;
    flex-direction: column;
    gap: 2rem; /* Adjust value as needed */
    user-select: none;

  }
  
  
    .right {
  text-align: right;
  position: relative;
  user-select: none;
}

.right-img {
  position: relative; /* Add positioning context */
  z-index: 2; /* Ensure it is above the halo */
}

.halo {
  position: absolute;
  top: -1em;
  right: -1em;
  width: 100%;
  z-index: 1; /* Ensure it is below the right-img */
}
.dates-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 0;
    margin-top: auto; /* This will push the grid to the bottom */
    margin-bottom: 3rem; /* Add some space from bottom */
    }

    .date-column {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        /* Add specific widths to each column to control alignment */
        width: fit-content;
    }

        /* Center column */
        .date-column:nth-child(2) {
        margin: 0 auto;
    }

    /* Right column */
    .date-column:nth-child(3) {
        margin-left: auto;
    }

    .date-link {
        font-size: 4rem;
        color: blue;
        text-decoration: underline; /* Underline all dates */
        text-align: left;
        white-space: nowrap;
        font-family: 'reg', sans-serif;
        letter-spacing: -3px;
    }
  
    .active {
        color: #ff0066; /* Pink color for active date */
    }


  </style>