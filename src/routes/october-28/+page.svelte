<script>
    import oct28_1 from '$lib/assets/oct28_1.jpeg';
    import oct28_2 from '$lib/assets/oct28_2.jpeg';
    import oct28_3 from '$lib/assets/oct28_3.jpeg';
    import oct28_mnrk from '$lib/assets/oct28_mnrk.jpeg'
    import vid1 from '$lib/assets/vid.mp4';
    import music from '$lib/assets/music.mp4';

</script>

<div class="menu">
    <a href="/">go back</a>
    <p>october 28, 12pm est</p>
</div>
<div class="main">
    <div class="left">
            <div  class="content">
AYOOOOO                </div>  
                <div class="content">
                    I GOT MY SUPERPOWERS BACK I DON'T KNOW HOW, WHEN I WAS MEDITATING LAST NIGHT RIGHT BEFORE SLEEP, FELT LIKE SOMETHING'S ON IT'S WAY, SOMETHING REALLY GOOD
                </div>
                <div class="content">
                    Side hustle-aa amjilttai hiih yumaa hiitsen, odoo nadaas dependent yum bhguu, ugluu Andre album sonsood narand eegeed bolkoon deeree zawilj suugaad zugeer buh medremjiig let go hiigeed amisgalaa l anhaarsiin.
                </div>
                <div class="content">
                    Side Hustle presentation tawiad, bi ug ni gatsaj sandraad bdg bsiin, but today every word just flowed naturally and so clear, bur hunii gatssaniig zasaj uguud hha, damn what a day! Felt like my self-esteem, self-love is sooo high, odoo ch gsn unthiin umnu ch gsn.
                </div>
                <div class="content">
                    Bi hugjimd ymar ih hairtai yum be? Hugjim gej ymar goy yum be? bi uneheer hugjim hiimeer bainaa, bi bur uneheer uneheer denduu yaj ch uurtuu hicheegeed, husehgui gej baisan ch hugjim chn bi uuruu yum bnshdee.
                </div>
                <div class="content">
                    Ene sprinttei gdgee sanaad zaa ymar duugaar hiihuu geed bj bsn chn flight fm freddit sonsool zugeer shuud visual ni nudend haragdaad, baahan keyframe hiigeed teriigee instagram storydoo hiigeed angiin group chatluu eniigee ywuulsan chn buuuun praise, hezee suuld iim recognition awsnaa ch martchij, baahan yum asuugaad, felt so good to actually do what i do but at my best.
                </div>
                <div class="content">
                    duu sonshoor l tsaanaasaa buh yum goy bolood ywchhimaa, ymr goy yum be hugjim gej, amidral gej. 
                </div>
                <div class="separator"></div>
                <div class="content">
                    Iim goy medremj, iim goy medsen yumaa, iim hiisen yumaa chamd bi gehdee ymar ih haruulmaar bnaa, ghde nmg block hiisen heweeree l bn. Ug ni hoyulaa bie biedee yumnuudaa huwaaltsii gej yrisan shd, gehdee bolohgue yag iim bodol, haramsaliin bodol l bolohgui. Odoo Khaliunaa jargaltai baigaa, iim ued force hiij orj irj l bolohgui. Yagaad ch yum haaya deep state meditationd bi turuuleed yum bichwel nadaas ulam holdoh yum shg sanagdaad bga, magadgui bi journal hutulj bga maani bas uneheer ene yumaa gargamaar daanch chamd l gargahgui bol utgagui sanagdsniih bh. at least ydaj uldeh yumdaa daraa ni helehed ch gsn.
                </div>
        </div>
  

    <div class="right">
        <video width="640" height="360" controls><track kind="captions">
            <source src={music} type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <p><i>Music is always within me</i></p>
        <img src={oct28_1} alt="img1">
        <video width="640" height="360" controls><track kind="captions">
            <source src={vid1} type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <img src={oct28_2} alt="img2">
        <p><i>iim bumbur awsaan</i></p>
        <img src={oct28_3} alt="img3">
        <p><i>Ene 25nii zurag</i></p>
        <img src={oct28_mnrk} alt="merch">
        <iframe  title="d" style="border-radius:12px" src="https://open.spotify.com/embed/track/5Qrcxc2YPomtX6UB0bwNaf?utm_source=generator" width="50%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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