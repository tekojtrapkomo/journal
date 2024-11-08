<script>
    import Audio from '$lib/components/Audio.svelte';
    import thursdayDemo from '$lib/assets/thursday_demo.mp3';
    import IMG_5481 from '$lib/assets/IMG_5481.jpg';
</script>

<div class="menu">
    <a href="/">go back</a>
    <p>november 8, 4:56pm est</p>
</div>
<div class="main">
    <div class="left">
        <div class="content">
            Ilen dalangui, ard uldeesen buh yumaa neg musun shiidiy gehed yriltssand zunduu ih, bur mash ih bayrlalaa.
            Buh confusion, regret guilt, happiness buh lensee tailj baigaad realistically hoyulaa haraad hamgiin suuliin udaa hamt 4 tsagiin tursh ungursun buh amjilt, aldaa, onoo, dursamj bas surgamjaa yrihad, bi bas l suuliin 1 sar garuin tursh ih yum bodoj ungruulsen ch haraagui bas zunduu zuilsuud baijee.
        </div>
        <div class="content">
            Hoyulaa ghde bur jaahan huuhed baihaasaa l hoish hamt baigaad, denduu dastgtaatsan bie bienee tawij ywuulj chaddaggui, huleen zuvshuurduggui, huleen zuvshuurhiig ch husdeggui baij odoo gehdee hussen huseegui tsag ni boltson bolohoor, ghde ali ali ni huleetstei bas neelttei bas shudarga baisand l bi ih bayrljin. 
            Bi chamd yrihdaa burged zuudelsen gehed chi niseed ywj bn gej zuudelsen gheer unuu ugluu bur yaltchgu zuntei zuud baijee. Buh l tsag hugatsaa buh l davhtsal, buh zuil yag ene udur buyu chamaig Italy ywsnaas yag 2 jiliin daraa l boloh bj. Airport deer hoyulaa bie bieniigee suuliin udaa harj bgam shg sanagdsan ch aigaad muu yor gej bodood zunduu ugui geh gej hicheeseen gehdee chamd ch gsn adilhan bsn gej bodoj bgaagui yum bn. Ug ni minii visanii hariu garahad 7 honog uldtsen bsn ch baruun hatsar deer unseed sain suuj baigaarai gehed ywah gej baigaa hunii araas uildaggui gej bodoj bsn, say ch gsn hoyulaa ywah gej bga hunii araas uilj bolohgui geed ineegeed utsaa suuliin udaa taslahad nadad uneheer hezee ch medregdej bgagui medremj tursun. Sain muu gej helehiin argagui amidraldaa hezee ch umnu ni mederch bgagui medremj bnaa
        </div>
        <div class="content">
            Odoo buur gantshhan sariin daraa tugsluu gdg chn yasan sain medee we, ywdag udriinhuu margaash l hurdan eh orondoo ochih yumsan gdg bsn chn 2 jil ghde asar hurdan ungursun bnshd. Bas chi minii achaar zorilgotoi, passiontei bolson ghd chn ymr ih bayrlasan be 🥹, bi hezee ch uuriiguu sain naiz zaluu let alone sain er hun, sain hun gej neeh boddgui bsiin bi odoo aldaagaa uhaarj zasaj dahij dawtahgue ulam saijirnaa dahij bi tiim asuudal gargaj chuhal hunee gomdoohgue. Bi chamaas bas zunduuu ih yum sursan, turuun bugdiig ni heltsen odoo listlher mangar ih hha. 4 sard chi nmg ene jil songolt hiihndee gsniig chn eruusuu ach holbogdol uguugui bsn chn yaltchgu tsaanaasaa l boldgiim bnaa. Chi bas urdaa bga ter tom zorilgo, bas ternees gadnah buh l sanasan zuildee hureerei, chi bugded ni hurch chadnaa. 
        </div>
        <div class="content">
            Ene minii ergetsuulj oilgoson yumaa bichdeg talbar maani bhgu yu, bi bas saijirah geed l yumiig oilgoj uhaaraad l ywj bgaa shuu gedgiig endees haraarai. 
        </div>
        <div class="content">
            Hamgiin suuld ni, mash unetei zuvluguunuud ugsund bayrlalaa, bi bugdiig ni temdegleed awtsan bgaa bas bugdiig ni daganaa, bas hezee ch ungursun aldaagaa dawtaj dawtahguee neeree shuu amlaj baina. Chi bas shine humuustei neelttei baina shuu, gehdee uuriinhuuruu turuun helsen shg.
            Bas chinii zuv yum baina, social media deer nzuud bhaar yaltchgui l bolohgui yum bnaa.
        </div>
        <div class="content">
            <i>Ungursun buh jiluuded mash ih bayrlalaa. Yrisan shgee urgelj bie biedee saihniig l huseed ywnaa. Bayrtai Egshigleen</i>🤗
        </div>
    </div>

    <div class="right">
        <img src={IMG_5481} alt="IMG_5481" />   
        <iframe title="0614" style="border-radius:12px" src="https://open.spotify.com/embed/track/60GuVaeCAhrlPJypnRYg2F?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>        
        <p><i>I felt it was only right to end with the song we first started on the first day.</i></p>

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