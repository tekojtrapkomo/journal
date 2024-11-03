<script>
    import final from '$lib/assets/final.webp';

</script>

<div class="menu">
    <a href="/">go back</a>
    <p>november 2, 11:23pm est</p>
</div>
<div class="main">
    <div class="left">
            <div class="content">
                1. Hudlaa yrihgui.
            </div>
            <div class="content">
                2.Huuralt, araar tawilt baih yosgui.
            </div>
            <div class="content">
                3. Ymar ch ued shudarga baih yostoi.
            </div>
            <div class="content">
                4. Asuudal garaad irwel zaawal nuur tulah, zugtahgui.
            </div>
            <div class="content">
                5. Hairand hojil, hojigdol gej baihgui.
            </div>
            <div class="content">
                6. Hairtai gej helsen l bol hairtai gesen ug.
            </div>
            <div class="content">
                7. Love is the whole thing, we are only the pieces.
            </div>
            <div class="content">
                I'm feeling so much hope in life, that I will never ever make these mistakes ever again in my life. 😌
                I think now I can fully move on, and embrace my new journey, and I'll be more open to opportunities. I'm so excited for the future and especially november.
            </div>
            </div>

    <div class="right">
        <img src={final} alt="final quote">    
    </div>
</div>
<style>
/* Container */
.main {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 1em;
    font-family: 'reg', sans-serif;
}

.left {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    padding: 0 2rem;
    flex-direction: column;
}

.right {
    width: 50%;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    flex-direction: column;
    align-items: flex-end;
    gap: 4rem;
}

.right img,
.right iframe {
    width: 100%;
    max-width: 600px;
}

.content {
    font-size: 14px;
    line-height: 1.5;
    margin-top: 1rem;
}

.menu {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 1em;
    font-family: 'reg', sans-serif;
    letter-spacing: -4px;
    padding: 0 2rem 2rem 2rem;
}

.menu a {
    text-decoration: none;
    color: black;
    font-size: 4rem;
}

.menu p {
    font-size: 4rem;
    color: blue;
}

/* Mobile styles */
@media (max-width: 768px) {
    .main {
        flex-direction: column;
        align-items: center;
    }

    .left, 
    .right {
        width: 100%;
        max-width: 600px;
        padding: 0 1rem;
        align-items: flex-start;
    }

    .right {
        margin-top: 2rem;
    }

    .right img,
    .right iframe {
        width: 100%;
        margin: 0 auto;
    }

    .menu {
        padding: 0 1rem 1rem 1rem;
        
    }

    .menu a,
    .menu p {
        font-size: 2rem;
        letter-spacing: -3px;
    }

    .content {
        font-size: 16px;
        max-width: 600px;
    }
}
</style>