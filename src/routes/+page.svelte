<script>
    const dates = [
        { day: "october 20", href: "/october-20", active: false },
        { day: "october 21", href: "/october-21", active: false },
        { day: "october 22", href: "/october-22", active: false },
        { day: "october 23", href: "/october-23", active: false },
        { day: "october 24", href: "/october-24", active: false },
        { day: "october 27", href: "/october-27", active: false },
        { day: "october 28", href: "/october-28", active: false },
        { day: "october 29", href: "/october-29", active: false },
        { day: "october 30", href: "/october-30", active: false },
        { day: "october 31", href: "/october-31", active: true }, // Active date
        { day: "november 1", href: "https://www.youtube.com/watch?v=JrFwPOElh0s", active: false },
        { day: "november 2", href: "/november-2", active: false },
        { day: "november 3", href: "/november-3", active: false},
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
.wrapper {
    width: 100%;
    padding: 1rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}

.header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 1em;
}

.left {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    user-select: none;
    width: 60%;
}

.left img {
    max-width: 100%;
    height: auto;
}

.right {
    text-align: right;
    position: relative;
    user-select: none;
    width: 35%;
}

.right-img {
    position: relative;
    z-index: 2;
    max-width: 100%;
    height: auto;
}

.halo {
    position: absolute;
    top: -0.5em;
    right: -0.5em;
    width: 100%;
    z-index: 1;
}

.dates-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 0.5rem;
    margin-top: auto;
    margin-bottom: 2rem;
}

.date-column {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: fit-content;
}

.date-column:nth-child(2) {
    margin: 0 auto;
}

.date-column:nth-child(3) {
    margin-left: auto;
}

.date-link {
    font-size: clamp(1.5rem, 5vw, 4rem);
    color: blue;
    text-decoration: underline;
    text-align: left;
    white-space: nowrap;
    font-family: 'reg', sans-serif;
    letter-spacing: -1px;
}

.active {
    color: #ff0066;
}

@media screen and (max-width: 768px) {
    .header {
        flex-direction: column;
        gap: 2rem;
        padding-bottom: 2rem;
    }

    .left {
        width: 100%;
        gap: 1rem;
    }

    .right {
        width: 100%;
        text-align: center;
    }

    .right-img {
        width: 90%;
        margin: 0 auto;
    }

    .halo {
        top: -0.5em;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
    }

    .date-link {
        font-size: 1.25rem;
        letter-spacing: -0.5px;
    }
    
    .dates-grid {
        gap: 0.25rem;
        margin-bottom: 2rem;
    }
    
    .date-column {
        gap: 0.5rem;
    }
}
  </style>