<script>
    import { enhance } from '$app/forms';
    import { invalidateAll } from '$app/navigation';
    
    /** @type {import('./$types').PageData} */
    export let data;
    
    /** @type {import('./$types').ActionData} */
    export let form;

    let password = '';
    let loading = false;

    function handleEnhance() {
        loading = true;
        return async ({ update }) => {
            await update();
            loading = false;
            if (form?.success) {
                await invalidateAll();
            } else {
                password = '';
            }
        };
    }

    $: hasAccess = data.hasNov4Access;
</script>

{#if hasAccess}
    <div class="main">
        <div class="left">
            <p>Hi Battogtokh,

                Thank you for opening up during your meditation. You made it easy to flow.
                
                About the events that occurred weeks ago - it was actually the time for you to learn a lesson. There was no escape, and you can't blame anyone, including yourself, for that to happen. As your 25th is going to end soon, Super Full Moon started on October 17th and ended on the 24th. This will be a lesson for you to be honest with yourself. If you are not honest with yourself, you can't be honest with your loved one. If you can't be honest with your loved one, you can't live the life you imagine with her. It's as simple as that. I can tell you are viewing them as a lesson for you, and that is the biggest step for growth and change.
                
                Despite these events that made you feel such distress, I could really sense that you have a very wonderful and charming soul. Not everyone has it - it is truly a gift. A gift from your most recent past life, your parents, and your destiny. 
                
                You are longing for someone you deeply love, and the connection between you and I'm going to assume it's a she, is profound. Your feelings are true. You both are connected by a very strong yellow cord that cannot be easily severed. You two met on a karmic trail, and some would call this a soulmate connection. From the moment this connection began, the cord between you has grown brighter with each passing year, despite the challenges. It may feel like an addiction - the more you try to shake it off, the stronger it becomes. And you should think of life not as a single linear line but as hundreds of lines intertwined at the end and that's who you are. These lines include your birth date, time, heredity, karma, and each past life, that's what we call destiny.
                
                Let's dive into your horoscopic traits. As cliché as astrology may seem, most people overlook the profound effects of their zodiac sign. It represents the deeper, often unseen side of astrological influence.
                
                As a Sagittarius, you are naturally drawn to exploration, growth, and freedom. Think of yourself like a kid that wonders about everything in this life. People born under Sagittarius are often seekers, not just in the physical sense but on an intellectual and emotional level. Sagittarius is ruled by Jupiter. Your desire to understand the bigger picture and find meaning in life's events is a defining trait. With your very strong Sagittarius presence, you thrive in relationships that allow you to be yourself and explore the world while still holding hands with your significant other while feeling deeply connected and grounded.
                
                During that, I could feel two additional fire signs, indicating that both Aries and Leo are present in your life currently. Aries is ruled by Mars, and Leo is ruled by the Sun. I suggest exploring these connections at your convenience.
                
                
                Your other half lives life boldly, pursuing desires with a directness that is both admirable and intimidating. Her nature suggests someone who deeply values honesty and independence, seeking a partner who can match her passion and intensity. These traits strongly indicate an Aries influence. While Aries is known for its fearless approach to life, this sign can also be impulsive, sometimes reacting quickly before fully processing emotions.
                
                In a relationship with a Sagittarius, Aries can bring excitement, inspiration, and shared interests. There's a natural spark between the two of you. Fire signs are known for their intensity, passion, and energy, and when these two fire signs come together, there's often a mutual understanding and attraction that can feel like a magnetic pull. However, both signs are also fiercely independent, and this can create a "push and pull" dynamic where each partner craves closeness but also needs their own space. For a relationship like yours to work, both partners need to feel secure in their individual spaces while still being strongly committed to the relationship.
                
                Looking ahead, the next two months hold powerful energies that will bring both clarity and introspection to Sagittarius. November, as the Moon moves through Scorpio, offers a time to delve deep into what truly matters. Scorpio's influence encourages transformation, inviting you to reflect on your core values, desires, and unresolved emotions. This period may bring heightened self-awareness and an urge to address lingering questions or doubts, particularly about your relationship. With the Moon currently in Sagittarius today and moving into Capricorn tomorrow, you're uniquely positioned to harness both energies. Being born just before Capricorn season, you carry its influence despite being strongly Sagittarian. This creates a perfect alignment for authentic self-expression and being truly yourself.
                
                As December approaches, the Sun and the Moon enter Sagittarius, shifting your energy toward optimism. This is your time, and it may bring a renewed sense of hope and expansion. The Sagittarius energy makes communication feel more lighthearted, open, and hopeful.
                
                If you want to have a heartfelt, honest conversation with your loved one, this month is the time for that. If you want to approach more lighthearted and warm conversations, you should wait until December. But I would suggest trying to have a conversation during the Moon in Scorpio to address the underlying issues and unresolved complications.
                
                Whatever the outcome, your connection runs deeper than conscious awareness, and hearts have a way of finding their way back to where they truly belong, and this applies to both of you.
                
                The Celtic Cross tarot will shed light on the potential outcomes and steps forward for you:
                
                1. Present Situation - The Death: So you're showing up as the Death card.The Death card signifies endings and beginnings, death and rebirth, evolution and transformation. This tells me that something in you has shifted profoundly as a result of these past events. But it's not something to be afraid of! The Death card signals that one major phase in your life is ending, and a new one is going to start. You just need to close one door, so the new one will open. The past needs to be placed behind you, so you can focus your energy on what is ahead of you. As mentioned earlier, there are two more fire signs, and you're now closing this door with wholehearted gratitude for the times shared, love experienced, and lessons learned.
                
                2. Crossing Influence - Two of Swords: This card highlights indecision or the need to choose between paths. It points to an inner struggle between holding onto hope for a future with your loved one and finding closure to move forward. The Two of Swords suggests it's time to make a choice, even amid uncertainty. Trust that clarity will emerge as you process your emotions honestly.
                
                3. Recent Past - Five of Wands: Signifying conflict or competition, this card may reflect the disagreements or miscommunications affecting your relationship. It suggests recent tensions arose from both partners seeking understanding without fully hearing each other. This energy invites you to consider how open communication and empathy could have transformed those past conflicts, helping guide your approach moving forward.
                
                4. Conscious Goal - The Lovers: In your matter, The Lovers signals your desire for deep connection, harmony, and commitment. You yearn for a balanced relationship where both partners bring their whole selves and embrace vulnerability. This card also represents choice, aligning decisions with true values. Its placement suggests you're consciously seeking love grounded in authenticity and mutual respect.
                
                5. Self-Perception - The Hermit: This card reflects your current state of introspection and self-discovery. You're seeking internal answers, striving to understand your heart and motivations more deeply. The Hermit suggests this reflective period is essential for personal growth, indicating the need to look inward to move forward.
                
                6. External Influence - The Tower: Representing sudden changes, disruptions, or revelations, this could indicate physical distance, work schedules, legal, or financial issues. While The Tower can feel unsettling, it carries transformative power. It suggests that while external factors may challenge the connection, they also create opportunities for creativity and growth, encouraging adaptability.
                
                7. Outcome - Ace of Cups: This is a beautiful sign of renewed connections, new beginnings in love, and forgiveness. You're entering a period of openness and emotional fulfillment. The Ace of Cups heralds a fresh start bringing joy, compassion, and potential for deep connection. It encourages maintaining an open heart, trusting that love flows into your life. Think of building blocks with your loved one, whether accidentally or intentionally knocked down, or toppled by external forces. Rebuilding creates something more beautiful and stronger, maintained with greater care and protected from outside influences.
                
                In one of your past lives, I see a setting that feels both distant yet familiar - perhaps in medieval times. Your life was devoted to creating and sharing harmony with the world. I see a starched ruff, suggesting you may have been monarch or someone of power. You lived in a contemplative place - likely a secluded, peaceful town surrounded by nature. During this lifetime, though your relationships were few, they ran profoundly.
                
                This past life memory serves as a gentle reminder that love, even when challenged, is everything that matters after all.
                
                Your spirits offer this advice:
                
                Journaling for Inner Clarity: Take time each day to journal, letting your thoughts and feelings flow freely without censorship. Write letters to yourself and your loved ones, reflecting on your journey and the qualities you value in relationships.
                Practicing Boundaries: Set clear intentions for communication, especially in relationships, and establish mutual boundaries. Express yourself directly with statements like "I don't appreciate when you do this" when faced with controllable situations. Honor these boundaries once set.
                I sense a blockage in your throat chakra, which can lead to difficulty expressing yourself fully and truthfully. While I'm not a chakra expert, I recommend seeking a reiki healing session or exploring practices to unblock this chakra. The blockage seems connected to the air you're inhaling - perhaps from a hazardous work environment or substance use like cigarettes, marijuana, or other inhalants. If you're smoking, please understand these substances aren't meant for you and could lead to serious karmic hereditary issues and suffering to your loved ones. If it's your work conditions, change your environment as soon as possible.
                
                For meditation: Find a quiet, comfortable space. Close your eyes, breathe deeply, and visualize warm golden light filling your heart. Let this light expand outward, surrounding you with warmth and compassion. Repeat this affirmation: "I know now that I can see through mirage with pure love in my heart. I trust in the journey, knowing that my heart guides me toward peace." Allow this light and affirmation to fill you with calm, releasing any tension or fear.
                
                And from me to you: Having witnessed many heartbreaks and breakups, I believe it would be truly tragic for both of you to separate. Tonight, I'll pray to the moon and stars for you.
                
                Thank you for allowing me to briefly yet openly enter your soul and share in your joys and pains. You are truly a gifted and wonderful person and soul. You and the person in your dreams and thoughts deserve each other. But remember to be kind-hearted to everything! Your purpose in this life is to influence this world for the better. Your most recent past life remains deeply connected to you - trust your gut feelings always. When you do, everything you wish for will manifest in this life.
                
                Now go and enjoy this wonderful life of yours, Battogtokh!
                
                - Steve M.
                
                </p>
                <div class="content">
                    why fancy clown? because i'm having  a really bad issues with jealousy.
                </div>
        </div>
    </div>
{:else}
    <div class="container">
        <div class="left-side">
            <div class="wrap">
                <form 
                    method="POST"
                    use:enhance={handleEnhance}
                >
                    <input 
                        type="password" 
                        name="password"
                        bind:value={password} 
                        placeholder="enter password" 
                        required 
                        disabled={loading}
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? '...' : 'go!'}
                    </button>
                    <p class="hint">can't let noooo one read this. but if there's a will, there's a way, and a hint below</p>
                    {#if form?.message}
                        <p class={form.success ? 'success' : 'error'}>{form.message}</p>
                    {/if}
                </form>
            </div>
        </div>
        <div class="right-side">
            <iframe 
                src="https://www.youtube.com/embed/fZ4kURbpN50?si=k6G2xLJuoXgRaN4N" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
            ></iframe>
        </div>
    </div>
{/if}

<style>
    .container {
        display: flex;
        width: 100%;
        height: 100vh;
    }

    .left-side {
        flex: 0.7;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .right-side {
        flex: 0.3;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f5f5f5;
    }

    .wrap {
        max-width: 400px;
        width: 100%;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        position: relative;
    }

    input {
        border: none;
        width: 100%;
        font-size: 4rem;
        background: transparent;
        padding: 0;
    }

    input::placeholder {
        font-size: 3.6rem;
        font-family: 'reg', sans-serif;
        color: black;
        letter-spacing: -1px;
    }

    input:focus {
        outline: none;
    }

    button {
        color: blue;
        border: none;
        background: none;
        cursor: pointer;
        font-size: 4rem;
        text-align: right;
        font-family: 'reg', sans-serif;
        letter-spacing: -1px;
        padding: 0;
        align-self: flex-end;
        margin-top: -1rem;
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .hint {
        font-size: 1rem;
        font-family: 'reg', sans-serif;
        letter-spacing: -1px;
        color: #666;
        margin-top: 1rem;
        width: 100%;
        text-align: center;
    }

    .error {
        font-size: 1rem;
        font-family: 'reg', sans-serif;
        letter-spacing: -1px;
        color: red;
        text-align: center;
        width: 100%;
    }

    .success {
        font-size: 1rem;
        font-family: 'reg', sans-serif;
        letter-spacing: -1px;
        color: #4CAF50;
        text-align: center;
        width: 100%;
    }

    .right-side iframe {
        width: 100%;
        height: 100%;
    }

    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-family: 'reg', sans-serif;
    }
    .left {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .left a {
        font-size: 4rem;
        color: blue;
        text-decoration: none;
    }

    @media screen and (max-width: 1024px) {
        .container {
            flex-direction: column;
        }

        .left-side {
            flex: none;
            height: 70vh;
            padding: 1rem;
        }

        .right-side {
            flex: none;
            height: 30vh;
        }

        input {
            font-size: 2rem;
        }

        input::placeholder {
            font-size: 2.8rem;
        }

        button {
            font-size: 2.8rem;
        }

        .hint, .error, .success {
            font-size: 0.8rem;
        }
    }
</style>