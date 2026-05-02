// ── Sex Handbook A-Z ─────────────────────────────────────────────────────────
const HANDBOOK_ITEMS = [
  {
    title: "Example A — Aftercare",
    img: "hb_a.jpg",
    sub1: "The essential wind-down after play",
    sub2: "Comfort, connection & communication",
    sections: [
      {
        heading: "What Is Aftercare?",
        body: "Aftercare refers to the care, comfort and emotional support partners offer each other after sexual activity — especially after intense or BDSM-style encounters. It helps both partners return safely to a normal emotional state.",
        img: "hb_a.jpg"
      },
      {
        heading: "Physical Aftercare",
        body: "Physical aftercare might include cuddling, wrapping in a soft blanket, providing water or snacks, gentle massage, or tending to any marks or soreness. The goal is to make your partner feel physically safe and cared for.",
        img: null
      },
      {
        heading: "Emotional Aftercare",
        body: "Emotional aftercare involves reassurance, verbal affirmation, checking in with how your partner is feeling, and expressing gratitude for the experience you shared. Some people experience 'sub drop' or 'top drop' — a sudden emotional low after an intense scene — and gentle presence is the antidote.",
        img: null
      }
    ]
  },
  {
    title: "Example B — Body Language",
    img: "hb_b.jpg",
    sub1: "Reading unspoken signals",
    sub2: "Desire, comfort & hesitation cues",
    sections: [
      {
        heading: "Why Body Language Matters",
        body: "Words only carry part of the message during intimacy. Learning to read and respond to non-verbal cues — tensed muscles, relaxed breathing, leaning in or pulling back — builds deeper trust and ensures both partners feel safe.",
        img: "hb_b.jpg"
      },
      {
        heading: "Signs of Pleasure",
        body: "Positive signals include relaxed muscles, deepened breathing, flushed skin, eye contact, arching toward touch, and small sounds of pleasure. These tell you that what you're doing is working — keep going, or build gradually.",
        img: null
      },
      {
        heading: "Signs of Discomfort",
        body: "Watch for tensed shoulders, held breath, a still or rigid body, turning away, or a sudden drop in responsiveness. These are signals to pause, check in verbally, and adjust your approach. Never override discomfort signals.",
        img: null
      }
    ]
  },
  {
    title: "Example C — Clitoral Stimulation",
    img: "hb_c.jpg",
    sub1: "The most reliable route to female orgasm",
    sub2: "Technique, pressure & patience",
    sections: [
      {
        heading: "Anatomy Basics",
        body: "The clitoris is far larger than most people realise — only the small external 'glans' is visible. The full organ extends internally in a wishbone shape around the vaginal canal. External stimulation of the glans is the most direct path to orgasm for the majority of people with a vulva.",
        img: "hb_c.jpg"
      },
      {
        heading: "Technique Tips",
        body: "Start with very light indirect pressure — through the hood or to one side of the glans. Use a consistent rhythm. Ask your partner to guide pressure and speed. Combining clitoral stimulation with gentle penetration or G-spot massage dramatically increases intensity for many.",
        img: null
      },
      {
        heading: "Common Mistakes",
        body: "Too much pressure too soon is the most common error. Changing rhythm just as your partner gets close is another. Saliva or lubricant is almost always needed. Never rush — the average time to clitoral orgasm is 15–20 minutes of focused stimulation.",
        img: null
      }
    ]
  },
  {
    title: "Example D — Dirty Talk",
    img: "hb_d.jpg",
    sub1: "Using words as foreplay",
    sub2: "Starting slowly, building confidence",
    sections: [
      {
        heading: "Why Words Work",
        body: "Dirty talk activates the brain — the body's largest erogenous zone. Hearing desire expressed verbally triggers arousal pathways independent of physical touch. Even whispered descriptors of what you're doing can dramatically intensify sensation.",
        img: "hb_d.jpg"
      },
      {
        heading: "How to Start",
        body: "Begin with observations rather than demands: 'I love how you feel' or 'You look incredible right now.' Build from there to expressing what you want next. Ask permission-style questions — 'Can I tell you exactly what I want to do to you?' — which feel low-stakes but are deeply arousing.",
        img: null
      },
      {
        heading: "Setting Boundaries",
        body: "Before introducing dirty talk, briefly discuss vocabulary preferences. Some words are charged for some people. Agree on what language feels exciting versus off-putting. A simple 'Is it okay if I talk during this?' opens the door and ensures you both stay comfortable.",
        img: null
      }
    ]
  },
  {
    title: "Example E — Erogenous Zones",
    img: "hb_e.jpg",
    sub1: "Beyond the obvious hotspots",
    sub2: "Mapping your partner's pleasure",
    sections: [
      {
        heading: "The Full Map",
        body: "Erogenous zones include far more than genitals. The nape of the neck, inner wrists, behind the knees, earlobes, lower back, inner thighs, scalp, and feet are all densely nerve-rich areas that respond powerfully to touch, breath, or light pressure.",
        img: "hb_e.jpg"
      },
      {
        heading: "How to Explore",
        body: "Run a fingertip very slowly across skin while watching your partner's reaction. Areas that cause an involuntary intake of breath, goosebumps, or tensing are worth returning to. Ask: 'Does this feel good?' Building a mental map of your partner's unique responses is a long-term project.",
        img: null
      },
      {
        heading: "Surprising Hotspots",
        body: "Studies have shown that the nape of the neck and inner wrists rank surprisingly high in erotic sensitivity tests. For many people, gentle hair-pulling at the scalp or light biting at the trapezius muscle (top of the shoulder) can be intensely arousing. Individual variation is vast — explore openly.",
        img: null
      }
    ]
  },
  {
    title: "Example F — Fantasy & Role Play",
    img: "hb_f.jpg",
    sub1: "Bringing imagination into the bedroom",
    sub2: "Scripts, personas & safe words",
    sections: [
      {
        heading: "The Power of Fantasy",
        body: "Sexual fantasy is one of the most normal aspects of human sexuality. Sharing — and occasionally acting out — fantasies with a trusted partner can deepen intimacy, reignite desire, and create new dimensions of pleasure that physical touch alone cannot reach.",
        img: "hb_f.jpg"
      },
      {
        heading: "How to Introduce Role Play",
        body: "Start with low-stakes scenarios: strangers meeting at a bar, masseur and client, or simply calling each other by fictional names. Discuss the 'scene' beforehand so both partners know the general direction, but leave room for improvisation. Agree on a safe word that pauses everything immediately.",
        img: null
      },
      {
        heading: "Boundaries & Aftercare",
        body: "Even light role play can stir unexpected emotions. After a scene, step fully out of character and reconnect as yourselves. Check in: 'How did that feel for you?' Some scenarios work better in fantasy than in reality — and that's perfectly fine. Never shame a partner for a fantasy they share.",
        img: null
      }
    ]
  },
  {
    title: "Example G — G-Spot",
    img: "hb_g.jpg",
    sub1: "Locating and stimulating the anterior wall",
    sub2: "Pressure, angle & patience",
    sections: [
      {
        heading: "Where Is It?",
        body: "The G-spot (Gräfenberg spot) sits on the anterior (front) wall of the vagina, typically 5–8 cm inside. It often feels slightly ridged or spongy compared to the surrounding tissue. It is part of the internal clitoral complex and is most accessible when the person is already aroused.",
        img: "hb_g.jpg"
      },
      {
        heading: "Stimulation Technique",
        body: "Insert one or two fingers palm-up and use a 'come hither' curling motion toward the navel. Start gently — sensitivity increases with arousal. Sex positions with a downward angle of penetration (doggy-style, or the partner on top leaning forward) also stimulate this area well.",
        img: null
      },
      {
        heading: "Female Ejaculation",
        body: "Sustained G-spot stimulation in some people can trigger female ejaculation — the expulsion of fluid from the Skene's glands. This is entirely normal. Communicating openly about the sensation (which can feel like needing to urinate) removes anxiety and allows your partner to relax fully into the experience.",
        img: null
      }
    ]
  },
  {
    title: "Example H — Hand Techniques",
    img: "hb_h.jpg",
    sub1: "Manual stimulation mastered",
    sub2: "Grip, rhythm & lubrication",
    sections: [
      {
        heading: "For Penises",
        body: "Use a full grip with light to firm pressure. Begin slowly with long strokes. Many people vary between a twisting motion and a straight pump — ask your partner which they prefer. Always use lubrication. Pay attention to the frenulum (underside of the glans) which is extremely sensitive.",
        img: "hb_h.jpg"
      },
      {
        heading: "For Vulvas",
        body: "Start outside the labia, building warmth before moving inward. Use the pad of one or two fingers on or around the clitoral hood. Circular, side-to-side, and up-and-down motions all work depending on the individual. Ask for feedback — every person is different. Never use dry fingers.",
        img: null
      },
      {
        heading: "Reading Rhythm",
        body: "Once you find a technique your partner responds to, resist the urge to change it. Maintain consistent rhythm and pressure as arousal builds. Let your partner signal — verbally or with movement — when they want more intensity. The most common mistake is varying speed at exactly the wrong moment.",
        img: null
      }
    ]
  },
  {
    title: "Example I — Intimacy & Connection",
    img: "hb_i.jpg",
    sub1: "Sex as emotional bonding",
    sub2: "Presence, eye contact & vulnerability",
    sections: [
      {
        heading: "Beyond the Physical",
        body: "Physical intimacy is most fulfilling when it is accompanied by emotional presence. Being fully in the moment — not thinking about tomorrow — amplifies every sensation and creates the felt sense of being truly seen by another person. This is what separates great sex from merely mechanical sex.",
        img: "hb_i.jpg"
      },
      {
        heading: "Eye Contact",
        body: "Sustained eye contact during sex is one of the most vulnerable and connecting experiences available. It requires slowing down. Try it for just 30 seconds during a moment that feels natural. Many couples report it as unexpectedly profound — and occasionally overwhelming in the best way.",
        img: null
      },
      {
        heading: "Vulnerability as Aphrodisiac",
        body: "Telling your partner exactly what you want, or exactly how they make you feel, requires courage. That vulnerability is itself erotic. Partners who can say 'I want you so much right now' without irony or deflection tend to report consistently higher levels of sexual satisfaction.",
        img: null
      }
    ]
  },
  {
    title: "Example J — Jealousy & Trust",
    img: "hb_j.jpg",
    sub1: "Navigating complex emotions in relationships",
    sub2: "Communication & security",
    sections: [
      {
        heading: "Jealousy Is Normal",
        body: "Jealousy is a near-universal human emotion rooted in fear of loss. Feeling it is not a character flaw. The question is not whether jealousy arises, but how you communicate and work with it. Suppressing or weaponising it both cause long-term damage.",
        img: "hb_j.jpg"
      },
      {
        heading: "Communicating About It",
        body: "When jealousy surfaces, try naming the underlying fear rather than the surface emotion: 'I felt insecure when you spent so long talking to them' is more useful than 'Why were you flirting?' Specific, non-accusatory language keeps conversations productive.",
        img: null
      },
      {
        heading: "Building Trust",
        body: "Trust is built in the small moments — following through on promises, being honest about minor things, showing up emotionally. Couples who address micro-moments of disconnection before they accumulate maintain far higher baseline security, which directly feeds sexual confidence and openness.",
        img: null
      }
    ]
  },
  {
    title: "Example K — Kegel Exercises",
    img: "hb_k.jpg",
    sub1: "Pelvic floor training for both partners",
    sub2: "Stronger orgasms & better control",
    sections: [
      {
        heading: "What Are Kegels?",
        body: "Kegel exercises strengthen the pelvic floor muscles — the hammock of muscle that supports the bladder, bowel, and uterus. These muscles are directly involved in orgasm for all genders, and their strength correlates strongly with orgasm intensity and ejaculatory control.",
        img: "hb_k.jpg"
      },
      {
        heading: "How to Do Them",
        body: "Identify the pelvic floor muscles by imagining you're stopping mid-urination. Contract those muscles for 3–5 seconds, then fully release for 5 seconds. Repeat 10–15 times per set, working up to three sets per day. Both partners benefit from this practice.",
        img: null
      },
      {
        heading: "The Payoff",
        body: "Regular kegel practice leads to more intense orgasms (the muscles contract during climax), better ejaculatory control for people with penises, and increased sensitivity for people with vaginas. Results typically appear within 4–6 weeks of consistent daily practice.",
        img: null
      }
    ]
  },
  {
    title: "Example L — Lubrication",
    img: "hb_l.jpg",
    sub1: "The most underrated bedroom essential",
    sub2: "Types, uses & compatibility",
    sections: [
      {
        heading: "Why Lube Matters",
        body: "Natural lubrication varies enormously between individuals and changes with stress, hormones, medication, and arousal level. Using lube is never a sign of failure — it dramatically reduces friction-related discomfort, makes all activity more pleasurable, and is essential for anal play.",
        img: "hb_l.jpg"
      },
      {
        heading: "Types of Lubricant",
        body: "Water-based lubes are the most versatile — safe with all toy materials and condoms, easy to clean. Silicone-based lubes last much longer and are excellent for shower use or anal play, but degrade silicone toys. Oil-based lubes are intensely moisturising but break down latex condoms.",
        img: null
      },
      {
        heading: "How Much to Use",
        body: "More than you think. Start with a generous amount and reapply freely — particularly water-based lubes that absorb over time. Warming it between your hands before applying makes the sensation gentler. Keep a bottle on the nightstand so it never feels like an interruption.",
        img: null
      }
    ]
  },
  {
    title: "Example M — Massage",
    img: "hb_m.jpg",
    sub1: "Sensual touch as extended foreplay",
    sub2: "Technique, oils & presence",
    sections: [
      {
        heading: "Setting the Scene",
        body: "A sensual massage works best with: warm lighting, a comfortable surface, body-safe massage oil or lotion (coconut oil is a popular choice), and — crucially — unhurried time. Tell your partner this is entirely for them, with no expectation of anything in return.",
        img: "hb_m.jpg"
      },
      {
        heading: "Technique Basics",
        body: "Begin with long, broad strokes across the back to warm the muscles. Gradually slow and deepen pressure. Use your palms, thumbs, and knuckles. Move from the lower back upward to the shoulders, then down the arms and legs. The slower the movement, the more erotic the sensation.",
        img: null
      },
      {
        heading: "Transition to Intimacy",
        body: "Allow massage to transition to intimacy organically if both partners are open to it — there's no need to signal or announce it. Running fingertips along the inner thighs, lower back, or chest can shift the mood naturally. Or keep it as pure massage — rest and touch are equally valuable.",
        img: null
      }
    ]
  },
  {
    title: "Example N — New Experiences",
    img: "hb_n.jpg",
    sub1: "Why novelty matters in long-term sex",
    sub2: "Trying new things with care",
    sections: [
      {
        heading: "The Novelty Effect",
        body: "Dopamine — the brain's reward and motivation chemical — spikes in response to novelty. Long-term couples who actively introduce new experiences into their sex lives maintain higher levels of desire and satisfaction than those who default to familiar routines, even if those routines are pleasurable.",
        img: "hb_n.jpg"
      },
      {
        heading: "Low-Stakes Novelty",
        body: "New doesn't have to mean extreme. A different room, a different time of day, music you've never played before, a new position, a blindfold, or trying massage oil for the first time all qualify as novelty. The neural response to 'new' is activated even by small changes.",
        img: null
      },
      {
        heading: "Discussing New Ideas",
        body: "Use a 'yes / no / maybe' list — each partner independently marks items as things they definitely want, definitely don't want, or are open to discussing. Share your lists. The overlap of two 'maybe' answers is your most fertile territory for exploration — it's mutual curiosity, not pressure.",
        img: null
      }
    ]
  },
  {
    title: "Example O — Oral Sex",
    img: "hb_o.jpg",
    sub1: "Giving and receiving with confidence",
    sub2: "Technique, hygiene & enthusiasm",
    sections: [
      {
        heading: "Foundation Principles",
        body: "Genuine enthusiasm matters more than any specific technique. A partner who is clearly enjoying giving oral sex is dramatically more arousing than one who is technically proficient but visibly reluctant. If you're giving oral sex, commit fully — your energy is felt.",
        img: "hb_o.jpg"
      },
      {
        heading: "For Vulvas",
        body: "Start gently — a flat tongue with broad strokes. Let your partner's breathing and movement guide you. The clitoris is typically the focus, but labia and vaginal entrance are also sensitive. Introduce fingers slowly if your partner is receptive. Never stop what's working unless asked to increase intensity.",
        img: null
      },
      {
        heading: "For Penises",
        body: "Vary pressure, depth, and tongue contact. The frenulum — the ridge on the underside of the glans — is the most sensitive area for most people. Use hands alongside your mouth to manage depth and add stimulation. Communication ('tell me what feels best') makes good oral sex into exceptional oral sex.",
        img: null
      }
    ]
  },
  {
    title: "Example P — Pleasure Mapping",
    img: "hb_p.jpg",
    sub1: "Discovering your body together",
    sub2: "An exercise in mutual exploration",
    sections: [
      {
        heading: "What Is Pleasure Mapping?",
        body: "Pleasure mapping is a deliberate, slow exploration of each other's bodies with the goal of discovering — rather than assuming — what feels good. It separates discovery from performance, removing pressure and replacing it with curiosity. It works beautifully as a dedicated evening activity.",
        img: "hb_p.jpg"
      },
      {
        heading: "How to Do It",
        body: "Take turns. One partner lies still while the other explores slowly with fingertips, breath, and lips, asking periodically: 'Does this feel good? Better here or here?' The exploring partner tracks responses mentally. Then swap. No outcome is expected — the exploration is the activity.",
        img: null
      },
      {
        heading: "What You'll Discover",
        body: "Even long-term couples consistently report surprising discoveries during pleasure mapping — unexpected sensitivity in 'ordinary' areas, preferences that were never articulated, or previously avoided areas that turn out to be highly erotic when approached with patience. This is a practice worth returning to repeatedly.",
        img: null
      }
    ]
  }
];

// ── Erotica Fiction ───────────────────────────────────────────────────────────
const EROTICA_ITEMS = [
  {
    title: "Story A — The Late Train",
    img: "er_a.jpg",
    sub1: "A stranger. A glance. A decision.",
    sub2: "Contemporary romance · Short read",
    sections: [
      {
        heading: "Part One — Platform 9",
        body: "The last train from the city was almost empty. She found a seat by the window and watched the platform lights blur into the dark. When he sat down across the aisle — not near the door, not in any of the empty seats closer to the exit, but exactly across from her — she told herself it meant nothing. He had dark hair, a loosened tie, and a way of looking at the world as though he found it quietly amusing. She looked back at the window.",
        img: "er_a.jpg",
        italic: false
      },
      {
        heading: "Part Two — The Look",
        body: "He spoke first. Not a line — just: 'Is this train always this empty?' She said she didn't know, this wasn't her usual journey. He said it wasn't his either. They talked past two stops before she realised she'd turned fully toward him, her book forgotten face-down on her lap. The carriage was very warm. Or she was. The distinction had stopped being clear.",
        img: null,
        italic: false
      },
      {
        heading: "Part Three — Her Stop",
        body: "When the announcement came for her station she stood, and something shifted in the air between them — the way a held breath releases. He stood too. 'This is my stop as well,' he said, which she was almost entirely certain was a lie, and she decided, somewhere between the seat and the door, that she didn't mind at all.",
        img: null,
        italic: true
      }
    ]
  },
  {
    title: "Story B — The Hotel Room",
    img: "er_b.jpg",
    sub1: "Old lovers. Unexpected reunion.",
    sub2: "Contemporary romance · Short read",
    sections: [
      {
        heading: "Part One — The Lobby",
        body: "She saw him before he saw her, which gave her two full seconds to decide how to handle it. He looked exactly the same — the slight width of his shoulders, the way he carried himself as though rooms belonged to him. She had moved to another country precisely to stop seeing him in crowds and being wrong. This time she was not wrong.",
        img: "er_b.jpg",
        italic: false
      },
      {
        heading: "Part Two — Dinner",
        body: "They had dinner because refusing felt more dramatic than accepting. They talked about safe things — their jobs, the city, mutual friends they no longer kept in common touch with. The wine was good. The restaurant was loud. Under the table, his knee pressed lightly against hers and stayed there, and neither of them mentioned it, and she drank her wine and did not move.",
        img: null,
        italic: false
      },
      {
        heading: "Part Three — The Lift",
        body: "In the lift he pressed the button for his floor and then looked at her with a question that was barely a question. She reached past him and pressed the same number. The doors closed. The lift rose. He touched her face with one hand, very carefully, as if she might be made of something fragile. She was not made of anything fragile. She kissed him first.",
        img: null,
        italic: true
      }
    ]
  },
  {
    title: "Story C — Sunday Morning",
    img: "er_c.jpg",
    sub1: "No alarm. No plans. Just the two of you.",
    sub2: "Intimate domestic romance · Short read",
    sections: [
      {
        heading: "Part One — Waking",
        body: "The light that came through the curtains was the particular pale gold of early summer, the kind that makes even ordinary rooms look borrowed from a painting. She woke slowly — the good kind of waking, where consciousness arrives without urgency. He was already awake, lying on his back beside her, looking at the ceiling with the relaxed attention of a man with nowhere to be.",
        img: "er_c.jpg",
        italic: false
      },
      {
        heading: "Part Two — No Rush",
        body: "She traced the line of his shoulder with one finger, experimentally, as if taking inventory. He turned his head and looked at her. 'Hi,' he said, which was not a brilliant thing to say and was somehow the exact right thing to say. She moved closer. Outside, a bird was being extremely insistent about something. They ignored it comprehensively.",
        img: null,
        italic: false
      },
      {
        heading: "Part Three — After",
        body: "They stayed in bed until the light changed colour, sliding from gold to white to the bright flat light of mid-morning. She lay with her head on his chest listening to his breathing slow back to normal. Eventually one of them would make coffee. That was a problem for later. For now, his hand was in her hair and the bird had given up, and there was nothing in the world requiring them to be anywhere else.",
        img: null,
        italic: true
      }
    ]
  },
  {
    title: "Story D — The Portrait",
    img: "er_d.jpg",
    sub1: "An artist. A subject. A boundary crossed.",
    sub2: "Slow burn romance · Short read",
    sections: [
      {
        heading: "Part One — The Studio",
        body: "The studio was north-facing and cold in the way that old buildings are cold — from the walls outward, rather than from the air. He'd been painting her for three weeks. Not her face — that was finished. Now he was working on her hands, and he kept asking her to hold them differently, and she kept thinking about the way he said her name when he was concentrating.",
        img: "er_d.jpg",
        italic: false
      },
      {
        heading: "Part Two — The Correction",
        body: "He came across the room to adjust her posture — her shoulders, specifically, which he said were carrying tension that showed in the painting. He stood behind her and placed his hands carefully on her shoulders and said 'there' and did not move for a moment longer than was strictly necessary. She didn't breathe. The radiator ticked.",
        img: null,
        italic: false
      },
      {
        heading: "Part Three — The Painting",
        body: "He never finished the portrait. She asked him once, months later, why — the canvas was still in the corner of the studio, turned to face the wall. He was quiet for a moment. 'Because I knew,' he said eventually, 'that once I finished it, I'd have to stop finding reasons to ask you back.' She turned the canvas around and looked at her hands in the painting and thought that was possibly the most honest thing anyone had ever said to her.",
        img: null,
        italic: true
      }
    ]
  },
  {
    title: "Story E — Rain",
    img: "er_e.jpg",
    sub1: "Stranded. Together. For the first time.",
    sub2: "First encounter romance · Short read",
    sections: [
      {
        heading: "Part One — The Storm",
        body: "The rain arrived without warning, the way it does in early autumn — one moment the sky was merely grey, the next the street was a river. She ran for the nearest doorway. He was already there. They stood shoulder to shoulder watching the downpour, close enough that she could feel warmth radiating from his jacket.",
        img: "er_e.jpg",
        italic: false
      },
      {
        heading: "Part Two — Waiting",
        body: "They started talking because there was nothing else to do. His name was ordinary and she forgot it immediately and then couldn't ask again. He had a dry way of observing things that made her laugh when she wasn't expecting to. The rain showed no interest in stopping. At some point their shoulders stopped being merely adjacent and started leaning, just slightly.",
        img: null,
        italic: false
      },
      {
        heading: "Part Three — The Clearing",
        body: "When the rain eased he said 'I should probably—' and she said 'Yes, probably.' Neither of them moved. Then he said 'There's a coffee place around the corner if the rain comes back,' which was a very thin pretext and they both knew it. She said she'd heard it was very good. They walked around the corner in the last of the rain.",
        img: null,
        italic: true
      }
    ]
  },
  {
    title: "Story F — The Appointment",
    img: "er_f.jpg",
    sub1: "Professional lines. Personal feelings.",
    sub2: "Forbidden tension romance · Short read",
    sections: [
      {
        heading: "Part One — First Session",
        body: "He was her client. That was the rule, and it was a good rule, and she had no intention of breaking it. He came in every Thursday at five, took the armchair by the window, and talked about his life in the careful way of someone who had learned that honest speech was not always safe. She listened the way she was trained to listen — fully, without judgment. The problem was everything else.",
        img: "er_f.jpg",
        italic: false
      },
      {
        heading: "Part Two — The Last Session",
        body: "He came in on the last Thursday and told her he was moving — a different city, a fresh chapter. He thanked her in the formal way of closing sessions. Then, at the door, he paused and said: 'I need to tell you something, and I need you to hear it as something I'm telling you as a person, not as a professional.' She said she was listening.",
        img: null,
        italic: false
      },
      {
        heading: "Part Three — After",
        body: "She crossed the room and gave him the card of a colleague she trusted. 'In case you need someone to talk to in the new city,' she said. Then she added her own number underneath it. 'And this, in case you want to talk to me.' The distinction was clear to both of them. He looked at the card for a long moment and then looked at her. 'I was hoping you'd say that,' he said.",
        img: null,
        italic: true
      }
    ]
  },
  {
    title: "Story G — By the Sea",
    img: "er_g.jpg",
    sub1: "A holiday cottage. End of summer.",
    sub2: "Romantic getaway · Short read",
    sections: [
      {
        heading: "Part One — Arrival",
        body: "The cottage was smaller than the photographs suggested and smelled of sea air and old wood. They stood in the kitchen looking at each other over their bags and laughed — at the tiny rooms, at the ancient cooker, at the fact that they'd driven three hours for this. He found wine in the boot of the car. The sun was already turning gold over the water.",
        img: "er_g.jpg",
        italic: false
      },
      {
        heading: "Part Two — The Evening",
        body: "They ate at the little table by the window with the shutters open and the sound of the sea underneath everything. She told him things she'd been meaning to say for months. He listened the way she loved — fully, leaning slightly forward, not looking for the gap to speak. The wine ran out. Stars appeared. Neither of them pointed this out.",
        img: null,
        italic: false
      },
      {
        heading: "Part Three — The Bedroom",
        body: "The bed took up most of the room. He lay down first and held his arm out and she went to him in the way she always did — fitting against his side as though she'd been designed specifically for that space. The sea was very loud through the window. She thought: this is it. Not a conclusion — a beginning, offered again each time she chose to take it. She took it.",
        img: null,
        italic: true
      }
    ]
  },
  {
    title: "Story H — The Library",
    img: "er_h.jpg",
    sub1: "A quiet place. An unexpected connection.",
    sub2: "Slow burn literary romance · Short read",
    sections: [
      {
        heading: "Part One — The Stacks",
        body: "She worked in the university library on Tuesday afternoons and he came in every Tuesday at two to read — always the same armchair, always a different book. She knew which shelf he browsed because she'd started checking after his visits: art history, mostly. Occasionally architecture. Once, philosophy of time.",
        img: "er_h.jpg",
        italic: false
      },
      {
        heading: "Part Two — The Conversation",
        body: "He approached the desk one afternoon with a book she hadn't expected — a novel. He wanted to know if she'd read it. She had. They talked for twenty minutes about a single chapter, both of them perched slightly awkwardly — him standing, her half-seated — as if neither wanted to fully commit to the conversation's length. She liked him very much. She checked her watch, which she never did while working.",
        img: null,
        italic: false
      },
      {
        heading: "Part Three — Closing Time",
        body: "He was the last person in the building when she turned the lights off in the stacks. He was still in the armchair, book closed, clearly waiting. 'I thought you might want company walking out,' he said, which was extremely transparent and entirely effective. She pulled on her coat. The library at night, all dark shelves and soft exits, felt like the inside of something private. They walked out into the evening together.",
        img: null,
        italic: true
      }
    ]
  },
  {
    title: "Story I — New Year",
    img: "er_i.jpg",
    sub1: "Midnight. A decision. A kiss.",
    sub2: "Celebration romance · Short read",
    sections: [
      {
        heading: "Part One — The Party",
        body: "The party was too loud and too warm and she'd been counting down to midnight mostly out of a sense that she was required to want it. Then she saw him across the room and adjusted her forecast for the evening significantly. He was talking to someone, laughing at something — the easy laugh of a person who found the world genuinely funny rather than performing the finding.",
        img: "er_i.jpg",
        italic: false
      },
      {
        heading: "Part Two — Before Midnight",
        body: "They ended up on the balcony, away from the noise, watching the city. It was too cold for the balcony. Neither of them went back inside. He said 'What are you hoping for next year?' which was not really a party question and she liked him for it. She said: 'Fewer loud parties.' He laughed. They stood close enough that she could feel the warmth he was generating against the cold.",
        img: null,
        italic: false
      },
      {
        heading: "Part Three — Midnight",
        body: "Inside, the countdown started. She counted along in her head. When she reached zero she looked at him and he was already looking at her, which was its own kind of answer. He leaned in and she closed the small distance remaining. The city outside erupted with light. She barely noticed. It was an exceptionally good beginning to a year.",
        img: null,
        italic: true
      }
    ]
  },
  {
    title: "Story J — The Road Trip",
    img: "er_j.jpg",
    sub1: "Miles of open road. Nowhere to hide.",
    sub2: "Adventure romance · Short read",
    sections: [
      {
        heading: "Part One — Hour Three",
        body: "By the third hour she'd stopped pretending to be interested in the map and started paying attention to him instead: the way one hand rested on the top of the wheel, the slight movement of his jaw when he was thinking, the way he looked at the road and occasionally — briefly — at her. The countryside was very flat and very wide. There was nowhere to look that wasn't him or everything else.",
        img: "er_j.jpg",
        italic: false
      },
      {
        heading: "Part Two — The Stop",
        body: "They pulled into a layby because the light on the hills was doing something remarkable — all amber and long shadow — and he wanted to photograph it. She stood beside him. He took two photographs and then put the camera down and looked at the light instead. 'Better without the lens,' he said. She thought: yes. Most things are.",
        img: null,
        italic: false
      },
      {
        heading: "Part Three — The Motel",
        body: "The motel had a vacancy sign that flickered and a room with a window facing west. She sat on the edge of the bed, which was large and white and absolute. He sat beside her. They'd been talking for nine hours and suddenly there was nothing left to say that could be said with words, which was, she thought, the whole point of this trip really. They'd both known before they started.",
        img: null,
        italic: true
      }
    ]
  },
  {
    title: "Story K — After the Exhibition",
    img: "er_k.jpg",
    sub1: "Art. Champagne. An honest conversation.",
    sub2: "Cultural romance · Short read",
    sections: [
      {
        heading: "Part One — The Opening",
        body: "She was looking at a painting when he appeared beside her — not intruding, just arriving at the same painting from the opposite direction. They stood looking at it together in the particular silence of two people who both know what they're looking at. Then he said something about the blue in it and she turned, surprised, because it was exactly right.",
        img: "er_k.jpg",
        italic: false
      },
      {
        heading: "Part Two — Champagne",
        body: "They circled the gallery together, which became the main event rather than the paintings. He had opinions — strong ones, lightly held. She disagreed with him about the centerpiece work and told him so directly, which made him smile properly for the first time. The champagne was very cold and the room was warm. At some point they were standing very close, which had happened organically, which was the best way.",
        img: null,
        italic: false
      },
      {
        heading: "Part Three — Outside",
        body: "Outside the gallery he said 'I don't want the evening to be over' with such plain honesty that she didn't have to decide how to interpret it. She said she knew a place nearby. He said he'd trust her judgment entirely, which she noted was an unusual degree of trust to extend to someone he'd met ninety minutes ago, and which said something good about him. They walked.",
        img: null,
        italic: true
      }
    ]
  },
  {
    title: "Story L — Letters",
    img: "er_l.jpg",
    sub1: "Words on paper. An old-fashioned love.",
    sub2: "Epistolary romance · Short read",
    sections: [
      {
        heading: "Part One — The First Letter",
        body: "She wrote to him because she couldn't say it in person and because a letter, once sent, removes the option of not saying it. She wrote six drafts before she found the sentence that was actually true: 'I think about you more than is proportionate to how long I've known you.' She posted it before she could reconsider and spent the next four days being extremely calm about the possibility that it had been a catastrophic mistake.",
        img: "er_l.jpg",
        italic: false
      },
      {
        heading: "Part Two — The Reply",
        body: "His reply arrived on the fifth day. It was three pages long, which she took as a good sign before she'd read a word. He wrote the way he spoke — plainly, without performance — and what he said was: 'I have been trying to work out a way to tell you this for three months and you have now made it considerably easier, so thank you.' She read it three times.",
        img: null,
        italic: false
      },
      {
        heading: "Part Three — In Person",
        body: "They wrote for another two weeks and then she arrived on his doorstep unannounced on a Saturday morning, which was not the plan but was the only thing that made sense. He opened the door and said 'I thought it might be you' which was either very intuitive or a very good line, and she decided the distinction didn't matter. She was inside before he'd finished the sentence.",
        img: null,
        italic: true
      }
    ]
  },
  {
    title: "Story M — The Cabin",
    img: "er_m.jpg",
    sub1: "Deep winter. No signal. Just warmth.",
    sub2: "Isolation romance · Short read",
    sections: [
      {
        heading: "Part One — Snowed In",
        body: "The snow started on the second night and by morning the road was gone. She stood at the window with coffee watching the world turn white and thought: this is either a disaster or exactly what needed to happen. He came up behind her and looked over her shoulder at the same view. 'We're not going anywhere today,' he said. She turned. 'No,' she said. 'We're not.'",
        img: "er_m.jpg",
        italic: false
      },
      {
        heading: "Part Two — The Fire",
        body: "He made the fire competently, which she found unexpectedly attractive. She read and he read and the fire collapsed and rebuilt and collapsed again. At some point she moved from the armchair to the hearthrug and he followed without comment. The snow outside made the silence inside feel very complete, the way silence feels when it has edges.",
        img: null,
        italic: false
      },
      {
        heading: "Part Three — Night",
        body: "The power went out at nine. He lit candles — he'd found them earlier, 'in case' — and the room turned amber and close. They were very near each other on the hearthrug. The fire needed no attention. There was absolutely nothing else to attend to. She thought: the snow was a gift. She thought: I will think so tomorrow too. She stopped thinking and reached for him.",
        img: null,
        italic: true
      }
    ]
  },
  {
    title: "Story N — The Dance",
    img: "er_n.jpg",
    sub1: "A wedding. A slow song. A conversation.",
    sub2: "Wedding romance · Short read",
    sections: [
      {
        heading: "Part One — The Reception",
        body: "She was seated at a table with people she mostly knew when the band started. He appeared at her elbow — someone's cousin, someone had said — and held out his hand with the slightly self-conscious formality of someone who had decided to do a brave thing and was now committed to it. She took his hand.",
        img: "er_n.jpg",
        italic: false
      },
      {
        heading: "Part Two — The Slow Song",
        body: "The first song was fast. The second was slow. By then they had stopped pretending they were going to return to their respective tables. He was a good dancer — not showy, just present, which was rarer. They talked close to each other's ears and the room grew small. She was aware of his hand at the small of her back. She was very aware of it.",
        img: null,
        italic: false
      },
      {
        heading: "Part Three — Last Dance",
        body: "The bride threw the bouquet and the room erupted. In the noise he leaned down and said something into her ear that she didn't quite catch and she said 'What?' and he said it again, quieter, which meant she had to lean even closer to hear it. What he said was not complicated. Her answer was not complicated either. They stayed for the last dance and left together after.",
        img: null,
        italic: true
      }
    ]
  },
  {
    title: "Story O — The Confession",
    img: "er_o.jpg",
    sub1: "Years of waiting. One honest moment.",
    sub2: "Long friendship romance · Short read",
    sections: [
      {
        heading: "Part One — Years",
        body: "They'd been friends for six years, which was long enough that she knew exactly how he took his coffee and which side of the bed he slept on (she'd gathered this through entirely non-alarming means) and what he sounded like when he laughed without meaning to. She also knew, and had known for at least three of those six years, that this was a problem.",
        img: "er_o.jpg",
        italic: false
      },
      {
        heading: "Part Two — The Conversation",
        body: "The conversation happened in his kitchen on a Tuesday, unremarkably. She was helping him make dinner and he was being funny and she was laughing and then she wasn't, because she'd realised she couldn't do another Tuesday like this and another after that, and so she said — while he was stirring something and had his back to her — 'I need to tell you something and it may make things weird.' He turned around. 'Okay,' he said, and waited.",
        img: null,
        italic: false
      },
      {
        heading: "Part Three — What Happened Next",
        body: "She told him. He was quiet for long enough that she started backpedalling, verbally, at some pace. He crossed the kitchen and took her face in both hands and said 'Stop talking' — not unkindly — and kissed her in a way that suggested he had thought about it rather more than once. The dinner burned. It was completely worth it.",
        img: null,
        italic: true
      }
    ]
  },
  {
    title: "Story P — The Morning After",
    img: "er_p.jpg",
    sub1: "Waking up. Choosing to stay.",
    sub2: "Tender aftermath romance · Short read",
    sections: [
      {
        heading: "Part One — First Light",
        body: "He woke before her, which gave him time to look at her sleeping and think carefully about what he was prepared to feel. The honest answer was: more than he'd planned. Her hair was across the pillow. The room was very quiet. He made the calculation that people make when they understand that something has changed and cannot be changed back, and decided he was not going to panic.",
        img: "er_p.jpg",
        italic: false
      },
      {
        heading: "Part Two — Coffee",
        body: "He made coffee because it was something to do and because if she woke to the smell of it she would know he was still there, which felt important. He heard her move in the other room. He heard the pause — the moment of recollection — and then footsteps and then she appeared in the kitchen doorway, wearing his shirt, looking at him with an expression that was trying to be neutral and wasn't quite managing it.",
        img: null,
        italic: false
      },
      {
        heading: "Part Three — Staying",
        body: "She said 'You stayed' and he said 'Obviously' and handed her a mug, and they stood in the kitchen with the morning light coming in and drank coffee and eventually she said something ordinary about the day and he answered and that was it, really — the small ordinary thing that meant they were going to be fine. Better than fine. They were going to be something entirely new.",
        img: null,
        italic: true
      }
    ]
  }
];
