<script>
    import Poll from "$lib/components/Poll.svelte";
    const question = 'yo who do I choose to make promo?';
    const endpoint = '/november-19'; 
    import imageOne from "$lib/assets/nov19/1.png";
    import journey from "$lib/assets/nov19/journey.mp4";
</script>

<div class="menu">
    <a href="/">go back</a>
    <p>november 19</p>
</div>
<div class="main">
    <div class="left">
        <div class="content">
            <div class="title">
                1. challenge: music poster
            </div>
            <p>
                alright y'all, PSAD final assignment just dropped... we have to make a poster for our favorite music artist and i’m leaning toward J Dilla, especially his Donuts album, but tbh i kinda wanna challenge myself to step out of my comfort zone now. i feel like i’ve found my style, but sometimes it feels a bit one dimensional, sooo drop your votes.
            </p>
                <br>
            <img src={imageOne} alt="">
            <Poll pollQuestion={question} apiEndpoint={endpoint} />
            <video src={journey} autoplay loop muted>
                <track kind="captions"></video>
            <!-- <div class="content">
                <div class="title">
                    2. studying: Herb Lubalin
                </div>
                <p>
                    <a href="https://lubalin100.com/">more resource</a>
                </p>
            </div> -->
            <i>until tomorrow with a big thing!
                        <br>
                        Sincerely, 
                        Battogtokh
                    </i>
                    </div>

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
video {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;

}
.left {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 0 2rem;
    flex-direction: column;
}

/* .right {
    width: 50%;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    flex-direction: column;
    align-items: flex-end;
    gap: 4rem;
} */

.left img,
.left i {
    width: 100%;
    max-width: 600px;
    align-self: center;
    justify-self: center;
    text-align: center;
}
.title {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-family: 'bold' !important;
    letter-spacing: -2px;
}
.content {
    font-size: 14px;
    line-height: 1.5;
    margin-top: 1rem;
}
.content a {
    text-decoration: none;
    color: blue;
    font-size: 2rem;
    letter-spacing: -2px;
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
        align-items: center;
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