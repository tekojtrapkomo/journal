<script>
    import nov3 from '$lib/assets/nov3.jpeg';
    import nov3_2 from '$lib/assets/nov3_2.jpeg';
    import nov3_4 from '$lib/assets/nov3_4.jpeg';
    import nov3_5 from '$lib/assets/nov3_5.jpeg';

</script>

<div class="menu">
    <a href="/">go back</a>
    <p>november 3, 5:39pm est</p>
</div>
<div class="main">
    <div class="left">
<div class="content">
    Bi er ni hund ataarhdaggui l dee, medehgui jild 2 yumuu 3 udaa l ataarhdag bh, er ni hund gehees iluu hunii hiisen yumand ih ataarhdag yum baina, goy design eswel goy duu sonshoor tsaanaasaa l ataarhal hudluud bdgiin. 
</div>
<div class="content">
    Say bi hund ataarhaj uzeeguigeeree ih ataarhlaa, zugeer l hamt suugaad tsagiig zugeer hamt ungruuguud, yriltsah yriltsdaggui yumaa gehed bie bienteigee zohitsson taarsan humuus, naizuud gej ymr goy yum be. 
</div>
<div class="content">
    Bie biendee setgelee ongoilgood uilj duulaad tewreldej yriltsii geegui, udurjin hamt suugaad udurjin hamt baiy ch geegui, zugeer l uzel sanaa, energy niilsen huntei zugeer l gadaa unuudur ymar goy bainaa, teriig hardaa geed l zugeer l engiin ch boltugai yria urnuuleh yumsan. Namaig hungui gazar amidardag yumuu gej bodoj bj magadgui l dee, gehdee uneheer yria niilsen, uzel sanaa niilsen, tsaanaasaa l energy niilsen tiim huntei yrihaar tsaanaasaa uur bdgaa bagiin naiz ch yumuu, sain naiz ch yumuu. End humuustei yum yrihaar buur yaag zugeer niileh bolomjgui 2 lego togloom shg, bi bur house partynd ywj uzlee, tursun udurt yawj uzlee, group uulzaltand ch yawj uzlee eruusuu tegj yrihaar bur ulam yrisnaas hetsuu bolohiin. End yag unendee tiim hun baihgui baihaa er ni haana ch baihgui baihaa, baisan humuusee bugdiig ni uuruusuu holduultsan, zarim ni tanihiin argagui uur boltson, uur boltson ch gej. Asuudal nadaa baina uu geed harahaar yaj ch hicheesen tsaanaasaa boldoggue. Not to dive into deep conversations, just talking about how beautiful that squirrel is would be more than enough with the right people.
Ingeed ch boltugai udur yu bolson talaaraa bichihgui bol zuud maani hurtel solioroh geed neheed bsn yum shigee odoo bodoh ni ee. 

Urid shunu hamag yumaa gargasnaas bolood noir hureegui yu yasan hamag hun l minii tuhai yriad bi hanaruu hartsan buh hun namaig haraad zogsoj bgam shg zuudleed. Tegsen oird 4 tsagt sereegum bshd dahij untay geed 7:30 hurtel hurvuuguud ydaj baihad tsag butsaad engiin huvaarit ortson. Bosiy geed bodjital bur tsaanaasaa viber orj nadaa zuud bas muruudliin talaar helj bsng ni unshmaar sanagdaad boldoggui tegeed guilgej baisan chn zalgaad ochij ochij zaawal call deer huruu ochood darchihdag ni yaj baigaambee. Yu ch gsn ugluu bas tumblr deer postlosoon.
</div>
            </div>

    <div class="right">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/bpOpYVDhKTE?si=ds-jCn_yJC1TKnKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <img src={nov3} alt="nov3">
        <img src={nov3_2} alt="nov3_2">
        <img src={nov3_4} alt="nov3_4">
        <img src={nov3_5} alt="nov3_5">
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