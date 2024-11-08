<script>
    import Audio from '$lib/Audio.svelte';
    import thursdayDemo from '$lib/assets/thursday_demo.mp3';
</script>

<div class="menu">
    <a href="/">go back</a>
    <p>november 7, 7:49pm est</p>
</div>
<div class="main">
    <div class="left">
        <div class="content">
            bi uuruu iim aimr hetsuu bolj baij yagaad bi mnii hairtai hund iim hetsuu bga gej bodoj bgagum bol? Gehdee ingej mederch bj l hun oilgodog bh.  Zovlon uzsen hun l zovlong oilgodog gej uneheer unen yumaa. Er ni empathytei hun gej uvduj uzsen zovj uzsen l huniig heldeg yum bndaa, but isn't it so beautiful?
            But damn, isn't it actually so beautiful? Right now I want to be able to fully feel this pain, and the more I'm feeling it, the more I'm building disgust toward the actions I did before, toward the actions. and that's the beauty of it.
                                </div>
                                <div class="content">
                                    Khaliunaa bi chamd zunduu hairtai shuu, you won't imagine, and sooon i'll be able to express all of this fully. i just need 1-2 weeks to clear this communication chakra, so i can speak and act in harmony with my heart. and many other things as well. future is soo bright and warm for us. gehdee 1-2 doloo honog bhguu bolno esul uuruuur gejgam bishshuuu!!! yaag odoo bga shigee l hoyulaa ywj bgd, zugeer odoo bgagaas uurchlughud gsii, say bas aimr amgalan taivan bysalgal hiileee yag neg yanzaar l hoinoos jn tevercheed bhiin ajlaa hj bhd chn :P
                                </div>
                                <div style="font-size: 8px;" class="content">
                                    p.s - bi bas l buruu yrisan j bj magadgu ghde chi mni yg yu geh gesenbeee gdgiig oilgdim jn
                                </div>
            </div>

    <div class="right">
        <Audio src={thursdayDemo} title="11-07demo" />
        <p><i>wanted to see if i still got that bounce :P 04:02pm bhaaa</i></p>
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