<script>
    import img1 from '$lib/assets/oct21/1.jpeg';
    import img2 from '$lib/assets/oct21/2.jpeg';
    import img3 from '$lib/assets/oct21/3.jpeg';
    import img4 from '$lib/assets/oct21/4.jpeg';
    import img5 from '$lib/assets/oct21/5.jpeg';
    import img6 from '$lib/assets/oct21/6.jpeg';
    import img7 from '$lib/assets/oct21/7.jpg'; 

    let isExpanded = false;

    function toggleContent() {
    isExpanded = !isExpanded;
  }
</script>

<div class="menu">
    <a href="/">go back</a>
    <p>october 22-23, around 3am est</p>
</div>
<div class="main">
    <div class="left">
        
        <div class="content">
            <blockquote>
                i lost my dream, then my dream became being with you. <br>
                all the dreams I had forgotten returned carried along with my dream of you.
                <br>

passage of time
<br>
voyage of life
<br>
now i'm lost in my dreams.
            </blockquote>
        </div>
        <div class="content">
            10-r sariin 5nd ingej bichij baijee. Actually bi yag unendee yu gej bichihee meddeggue, unuudur yum bichih ystoigoo ch medehgui baina. Zugeer notesoo guilgej baigaad eniig haraad uhtsen baisan yum sergej baigaa yum shg. Gehdee ene udaa bi jinhneesee uhchihsen baihaa, ugue uheegui yag unendee
        </div>
        <div class="content-italic">
            (DISCLAIMER: I'VE BEEN THINKING ABOUT WHETHER I SHOULD INCLUDE THIS ONE NEXT OR NOT, BUT I WANT TO BE TRUE TO MYSELF AND EVERYONE WHO'S GOING TO READ IT p.s yag unendee bichsen yumaa sain oilgoggue ghdee siiruuleed ter uyiin medremjeeree bichlee)
        </div>
        <button on:click={toggleContent}>
            {isExpanded ? "told you it's .." : "very explicit and personal content, +21"}
        </button>
  
        {#if isExpanded}
            <div class="content">
            <p>bi bur buuljih geed tolgoi ergeed gedsneesee bugdiig ni buuljuud gargachmaar bnaa, bi unuudur baihgui eswel buh yumaa martaad eswel schizo uvchtei eswel suns hardag iim bolchwol ene yag suuliin udaa terenteigee temtsjhdag bchj bga yumaaa.</p>
            <p>odoo uneheer chadal algaa guijiin bi untii thu eniig boliulaad uguuch, turuun buuljih geed bur noiloo tewreed bur gardguee bi zugeer tsai bolgoj uuhgui idtsen bol buuljuud gargachih bsn bn pizda yorteoi yum shg deerees hoish muug idej uzii ntr geed yridag bsin yrisaar bgd ingeed er ni llalar hussen yum gehdee huzuugeer yaltchgui orooh yumaa. bi odoonoos urgelj goy saihan yum husej bnaa amlaj baina unuudriig l aaw eej, uwuu emee, uvug deedes, umnuh amidral mine bi guij bn unuudriig l dawuulaad uguuch amidralaaraa amlaj bn. hund ch uurtuu ch bugded ni margaash gej yag algaa gehdee</p>
            <p>emnlegruu guichmeer sanagdaad bhin, udur 12t hicheel tarj ircheed shuud untaad oroi 6iin ued ene roommate ngu nzuudaa awchirtsan tuchigneed boldgu ydj bhd am hataad us uuh geed bas tamhi tatah geed bolkon deer garsan chn nz ni tursun udriin beleg geed 5g muug ugsun gne uuruu neg udaa idej uzeed dahij idehgui getsen bolohoor bas zarj boldgu chi sonirhohuu geed uuttai horchiison yag ngu googleer hardag "id shidtei" muug.
                bi gehdee ygd za gesnee odoo bur haramsaad bardgue, ene chn zogsodgu yum baina, duusdaggui yum bn 30 minut 10000 tsag shg sanagdaj bn, ydj bhd bi ter ued weekndiin - how do i make you love me sonsood suuj bsn, ill fix you mushroom tea geed yaj heregdldgiin bol gsn tsai ni muuhai amtgu bas zuulhun ordog geed googledheer. ehend uzej bhd 1-2 bur 1.5 aas hetrehgui gedim bnlee bi zaz yolo geed 2.5 aar neg hiigeed uuchaad deeshee harj hewteed 1 tsag ungruud yu ch nuluulku bhar hud yum bshu ugsa eniig bailgaad ch yahin geed uldseniig ni bas haluun usand dewteegeed uutsan chn
                hooloinoos aimar haluun uur, bur dotroos maani haluun gal shg sanagdaad, oron deeree hewtej bsn ch guij bgam shg nudee anihaar mnii hiij bsn buh muuhai yum haragdaad, hairtai hunee araar ni tawiad, dandaa hudlaa yridag, 2 ohiniig gomdooson, asuudal garaad irwel zugtdag, uuriin medelgui tenegeesee bolood gomdoochdog, hzee ch unenee helehgui dandaaaa bur dandaa unenees zugtaad odoo ter buh UNEN tsuglaraad denduu tom bolood nmg yag darj awaad amisgal booh gej bsn.
                buh hun, minii ergen toirond baigaa bsn baih gej bga buh hunees bi chin setgeleesee uuchlalt guimaar baina. namaig uneheer uuchlaarai hogiin adgiin novshiin amitan baisand maani. bi yag ene chigeeree ingeed uhcwel bi hzee ch ywj chadahgui bhaa. </p>
                <hr>
                <p><i>Rhubarb сонсоод бүх жаргалтай байсан үеээ төсөөлөөд зөвхөн амьсгал дээрээ анхаараад унтчихсан.</i></p>
        </div>
        {/if}
    </div>
    {#if isExpanded}
    <div class="right">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/IB_FP_rEih4?si=B5RS3xz5zyW6Yojq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_AWIqXzvX-U?si=mbIbY5OJxZDrOpW_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p><i>I think this song saved me that night.</i></p>

    </div>
    {/if}
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

    .right img {
        width: 100%;
        max-width: 600px;
    }
    .content {
        font-size: 14px;
        line-height: 1.5;
        margin-top: 1rem;
    }
    blockquote {
        font-size: 1.5rem;
        line-height: 1.5;
        font-family: 'Times New Roman', serif;
        color: black;
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

</style>