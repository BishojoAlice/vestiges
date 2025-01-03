function pageBuilder(page, content){

    return `<div class="chapter-page">
                        <div class="chapter-navigation">
                            ${page > 0 ? `<a href="javascript:void(0)" class="nav-button prev-chapter" onclick="navToChapter(${page - 1}); ">← Prev</a>` : ''}
                            ${page < chapters.length - 1 ? `<a href="javascript:void(0)" class="nav-button next-chapter" onclick="navToChapter(${page + 1});">Next →</a>` : ''}
                        </div>
                        <h1>Chapter ${page + 1}: ${chapters[page].title}</h1>
                        <div class="chapter-content">
                            <p>${content}</p>
                        </div>
                        <div class="chapter-navigation">
                            ${page > 0 ? `<a href="javascript:void(0)" class="nav-button prev-chapter" onclick="navToChapter(${page - 1});">← Prev</a>` : ''}
                            ${page < chapters.length - 1 ? `<a href="javascript:void(0)" class="nav-button next-chapter" onclick="navToChapter(${page + 1});">Next →</a>` : ''}
                        </div>
                    </div>`;
}


const home=`<h1>The Vestiges of Reality</h1>
            <div class="summary">
                <h2>Story Summary</h2>
                <p>Dreams within dreams, an unwakeable dream. A reader or writer is a web of nodes, which, if collapsed, stops everything from functioning. Of course, this story won\'t tell you that "The characters can kill you for real!" this isn\'t that type of story. But us readers and authors are "fictional" too. Now then, who will untangle and collapse this "fictional" projection of this web of nodes?</p>
            </div>
            <div class="decoration">&#x2727; &#x2726; &#x2727;</div>
            <ul id="chapterList" class="chapters">
            </ul>
           <div class="decoration">&#x2727; &#x2726; &#x2727;</div>`;




const chapters = [{
    title: "An endless spiral of dreams within dreams within endless dreams",
    content: `
Amid a desolate salt pan, a shimmering golden cathedral stood. Inside it were several pillars, in the middle of them were pearls which glowed an eerie, faint, red, illuminating the otherwise dim cathedral. In the centre, a massive stained-glass illustration of a demon, with red eyes, alongside the demon’s other eyes, many hands, and a red robe. <br><br>
 
Then, outside the cathedral, a massive red staff with gold accents, an endlessly changing blue orb sat in the middle of it. This staff fell onto the surrounding salt pan. The staff easily destroyed the small planet, while also destroying ten pillars near a door to nowhere.<br><br>
 
The world collapsed, and the universe fed into one singular point, a singularity of every single story in existence. From the most well-known, most loved, to the least well-known, forgotten stories made by cavemen in the halcyon days of yore.<br><br>
 
* * * * *
 
Across the sands of the Infinite Shore, the shore of universes outside the bounds of the story that will be told, slept a dragon.<br><br> 
 
It surrounded the shore. It surrounded the Tree of Creation.<br><br>
 
The dragon was dreaming in the depths of nothingness, Voru.<br><br>
 
The dragon was dreaming in the heights of the absolute void, Shinkū.<br><br>
 
The dragon was dreaming in the depths of a backwater planet, Earth.<br><br>
 
The dragon was dreaming in the depths of time itself.<br><br>
 
The dragon was dreaming the past, the past within the future, the future, the future within the past, the past within the past, the future within the future. The dragon dreamed of stories, stories within stories, stories that didn't exist, couldn't exist, shouldn't exist, stories that weren't written, stories that had been forgotten, stories reconstructed.<br><br>
 
Questions such as “What is the dragon? or ”Why does an extra-universal entity resemble a dragon?” may be asked. In truth, the “dragon” is not entirely a dragon. The dragon is a complex web of nodes that just happens to resemble a dragon. Maybe it was intentional, though the idea that the dragon only resembles a dragon is due to the mind being incapable of comprehending it as anything else is more compelling. The dragon was like a tree, whose branches, eyes, wings, whatever you choose to call them, they’re creatures conquered by it, these branches swirled around the vastness of Shinkū as the dragon slept. The branches were always shifting, no form suited them, no creature could define them. Some were vaguely humanoid, most were not.<br><br>
 
Then, the staff which was destroying the planet destroyed the Tree of Creation, the tree of trees, everything that existed in existence, peaceful worlds with powerful beings, organisations containing the anomalous, stories of eldritch horrors all coming down to take over worlds, a dreamer who dreamt their own universes. These were all nodes of the Tree… the branches of the Tree. The dragon's branches were first to notice the destruction of the Tree… The staff ended the concept of “beginning” for the Tree, the staff warped time to shatter the Tree when it was being planted.<br><br>
 
Some beings glared at the staff destroying the newly planted tree, though without much interest, for them, it was a past already over, a past gone and forgotten, it was the future yet to happen, the future that already happened, but there was no “present.” For these beings, “now” didn't exist.<br><br>
 
The Infinite Shore, too, began to shrink, the grains of sand which made it up were falling in on themselves, turning into a singularity, becoming a singular stream of universes colliding into each other. The entities there resembled deities of all different religions, those forgotten, and others…<br><br>
 
Back in the present, the future, the past, the past within the past, future within the past, the distinction doesn't matter, it's just a time, it was when the dragon awoke, it dreamt itself wakening, dreamt itself dreaming its wakening, no matter how high up you went, the dragon was always wakening, until, as if no time had passed, since there is no notion of "time” in this spaceless location, the dragon woke up from the countless dreams it had dreamt.<br><br>
 
The dragon watched the staff destroy the Tree, it saw the beings which cared not for the Tree's destruction, and then, the dragon appeared everywhen, and, ejected the staff from the tree, and shattered it, and its pieces fell to the depths of Voru.<br><br>
 
* * * * *
 
Back in the salt pan, a woman with a striking black robe with long sleeves, which hid her eyes, on the robe were ears resembling the ears of Anubis. Her robe had gold and purple accents, while she wore a dark purple and black dress beneath her robe, and chains dangling off it. Intangible, changing, shifting, the future became the present, the present became the past, and the past became the future, everything, at the woman, all of it intersected, much like the beings watching the destruction of the Tree of Creation being destroyed… nothing could be set in stone about her… her form appeared to be bubbling, the universe, the multiverse, space and time, were all mundane components of her being. For a second, it was like her bubbling form ruptured, but this “rupture” was yet another mundane component of her being. Even the dragon which fixed the Tree of Creation was yet another mundane component of her.<br><br>

[Hyen sö jeranai…… uu-edōik Wukong pelod sānj uulengik enkhrek Ruyi…… Jerda uugeleda īll… Neka jeranei keio. Keder zeynes polej bhuheo…… Neka gödoram jeramœi the.]<br><br>

I apologise, it appears some Ortothan has slipped through the cracks, humans, you readers can’t speak Ortothan. I’ll fix this error:<br><br>

[As expected…… Wukong destroyed the planet without controlling Ruyi’s strength…… I warned him…… yet now I must handle the clean-up. The main event lies in the future…… I’ll have to deal with this again.]<br><br>

The woman spoke in a high-pitched voice, there could be multiple explanations, but no voice naturally sounds like that… something akin to a voice changer would be a best fit for what came out of her mouth. The bubbling, at this point, had calmed down, the bubbling occurred because of the destruction of the Tree of Creation, as if she was the Tree itself.<br><br>

[Hume levels stable at three…… Narrative Dimension overload fixed back to normal…… and the Tree of Creation repaired…… Infinite Shore fixed…… This should mean that I fixed all the damage Wukong caused…… whether sent out of time or back in time…… Well…… it’s going to happen again in the future…… This is such a headache……]<br><br>

The woman sighs slightly, her magic circle dimming as well, before vanishing into thin air.<br><br>

Elsewhere within the salt pan, a strange creature, with tentacles for arms, stood. Its most distinguishable traits were its striking white body, contrasting its black arms. The creature had no facial features and a dark, yet vibrant flame on the right side of its body.<br><br>

[Ahahaha… a vermin is now on the lands of the King? How impudent. Especially after lord Jeser granted me power…]<br><br>

The creature spoke, every single word that he spoke oozed arrogance.<br><br>

[How surprising…… The Psémas remain as arrogant as ever.]<br><br>

The woman spoke about the creature— the Pséma, whose tendrils unravelled, slashing at the lady, who dodged, as her robe vanished, for a second, the world bubbled into nothingness, for a second, everything happened at once, for a second… Her appearance could be mistaken as a bisque doll, her wavy silver hair glimmered in the salt pan that surrounded her. Her outfit was gray, and form-fitting, with black accents, it appeared to be the outfit of an assassin, or something similar. The colour of her eyes was a light blue, though the colour changed intensity, and on her face, she had a white opera mask on, its intricate designs contrasted the plain colours it had, while multiple feathers were on its right side. Placed around her entire outfit were pouches, seemingly with no pattern as to where they were placed. She didn't look tall, but was tall, she didn't look short, but was short, to her, height didn't matter.<br><br>

[Well~~ if you want a fight~~ I can give that to you~~ just be prepared to lose~~]<br><br>

[Me? Lose? Do you think I’d ever lose to a fool such as you? You’re a clown, you know that?]<br><br>

[A clown~~? Maybe I am~~ well~~ if I’m a clown~~ what are you? The entire circus?]<br><br>

[Tch. Insolent girl~~ you should not speak like that to someone stronger.]<br><br>

[But~~ you’re not really stronger than me~~ now~~ are you~~? So why should I respect you~~?]<br><br>

[Say that when you win.]<br><br>

[Well~~ I’m ready whenever you are~~ let’s settle this~~]<br><br>

The woman took out a dagger from one of her pouches, and then, she flung it at the Pséma who tried to deflect it, but his tendrils were cut off.<br><br>

[Annoying rodent. Well, in any case, you’re foolish, none of your attacks will ever kill me, I’m immune to everything you’re capable of.]<br><br>

[Ah~~ you’re a stupid one~~ huh~~? Watch me kill you.]<br><br>

The Pséma was hit with many daggers. The daggers fell from many piano wires, which were seemingly set up by the woman.<br><br>

[Fucking clown! You and your little tricks.]<br><br>

The Pséma tries to dodge the dagger, while many more daggers fly in from all directions. As the Pséma finally touched base with the ground, the woman threw down her dagger.<br><br>

[What? Accepting your loss?]<br><br>

[Far from it~~ I’m claiming my victory.]<br><br>

[Wha-]<br><br>

In an instant, the Pséma is skewered by many spikes, and large black nails, that coalesced from the shadows of the Pséma and skewered him.<br><br>

* * * * *

<div class="afterword-section">
    <h2>Afterword</h2>
    <p>By the way, if you expect complete seriousness in every part of this story, you should stop reading. As a side note, the afterword will always be some sort of gag.</p>
    <p>??? ??????: What… why is this story so serious!? And what's with the power levels? I know these characters are very powerful, but for Chapter 1, this is too much! We're not powerscaling here!</p>
    <p>Author: I got bored, so I included shitty power levels. Be happy I didn't say shit like "The woman is infinite layers into boundless, and can destroy omniverses with ease."</p>
    <p>??? ??????: That doesn't make it any better!</p>
</div>

<div class="author-notes">
    <h2>Author Notes</h2>
    <p>Welcome to the first chapter of this series! I hope the insane power of the characters didn't scare you. This series only exists because… this series was once revealed to me in a dream. It's bizarre, it's meant to be, but also cool. There are many SCP references, and, don't worry, they'll be explained in the future. Also, if you're confused about what happened at the start, good. Also, you can skip the afterword, not much happens here, it's just a relaxing break; filled with gag characters. And, who knows, you might see the personalities of characters already introduced expanded upon in these afterword chapters.</p>
</div>

* * * * *

<div class="copyright">
    <h2>Copyright Information</h2>
    <ul>
    <li><a href="https://scpwiki.com/scp-2317" target="_blank" style="color: #FACADE; text-decoration: none;">"SCP-2317"</a> by DrClef, from the SCP Wiki. Licensed under CC-BY-SA. — This is the salt pan, where the majority of the story takes place.</li>
    <li><a href="https://wanderers-library.wikidot.com/qlippoth-and-sefiros" target="_blank" style="color: #FACADE; text-decoration: none;">"Qlippoth and Sefiros"</a> by UraniumEmpire, from the Wanderer's Library. Licensed under CC-BY-SA. — The Tree of Creation in the beginning is from Qlippoth and Sefiros.</li>
    <li><a href="https://scpwiki.com/second-hytoth-hub" target="_blank" style="color: #FACADE; text-decoration: none;">"Church of the Second Hytoth Hub"</a> by NatVoltaic, from the SCP Wiki. Licensed under CC-BY-SA. — Mentioned Voru, a part of the Ortothan mythology</li>
    <li><a href="https://scpwiki.com/lord-jeser" target="_blank" style="color: #FACADE; text-decoration: none;">"Lord Jeser"</a> by Baronjoe, from the SCP Wiki. Licensed under CC-BY-SA. — Only mentioned.</li>
</ul>

</div>`.replace(/\[(.*?)\]/g, '<span style="color: #e9688e; font-style: italic;">[$1]</span>')
}, {
    title: "The Prince of Many Faces",
    content: `After the Pséma was killed, the woman looked towards the horizon and spotted a figure, moving, and spying on her. Her robe reappeared, as ten golden daggers flew at the figure in the distance. However, the daggers were merely burned up in the flames covering the right side of the figure’s body; much like the Pséma before.<br><br>

[So you’re Jeser huh…… or…… to be more precise…… you’re Jeser under a false disguise.]<br><br>

[I’m surprised, you got that correct.]</span><br><br>

Jeser, in their feminine disguise, spoke with two overlapping voices—one male and one female. The male voice dominated as if it was the one taking control over the other voice.<br><br>

[I am the Queen of Information…… Of course I did.]<br><br>

[Queen of Information, you say? How droll. You barely know about yourself and consider yourself the “Queen of Information”?]<br><br>

[Knowing about…… myself is meaningless…… I have no reason to care. All I need is to know my enemies…… And…… it seems to me that Aiv-Zon’s personality…… is rubbing off on you……]<br><br>

[Wasn’t the saying “If you know the enemy and know yourself, you need not fear the result of a hundred battles”?]<br><br>

[That…… refers only to battle capabilities…… not personal matters like one’s past……]<br><br>

[Fine then, have it your way. A polite conversation isn’t what I’m here for. Since you killed my subordinate, I have to fight you.]<br><br>

[Well…… that's fine, but…… you won't be killing me any time soon.]<br><br>

[We’ll see about that. If you’re the so-called “Queen of Information,” I doubt you’ll show me your true power, will you?]<br><br>

[Of course not…… It would be foolish……]<br><br>

[Well, that’s fine, I have surprises lined up for you too.]<br><br>

[Oh? Like…… say……. your regeneration snake four hundred metres southeast…… or your magic-infused air bubbles……?]<br><br>

[Tch. Well, I have to say, you’re good, but you don’t seem to know everything I have in store.]<br><br>

[Not even curious……. how I know? As well…… I know more than just that…… You practised throwing a ball…… likely a magic bomb. Its power is insufficient to harm me…… And you have a “Voruteut” as your host body…… perfect for this…… isn’t it?]<br><br>

[How… I made sure I had no spectators.]<br><br>

[As I said…… I am the Queen of Information… There’s no way I wouldn’t know everything about you]<br><br>

[W-well then, If you know so much, do you even know my past?]<<br><br>

There was no arrogance in Jeser’s voice, only a sombre feeling. They truly desired to know his past, it felt like he had tried over and over, again and again, failing time and time again.<br><br>

[That is…… not something I am obliged to tell you…… What I will say is that…… do not believe the words of Aiv-Zon as the pure truth…… maybe…… if you are able to change…… maybe…… just maybe…… I will tell you the truth.]<br><br>

[Fine, I’ll believe you. Once I beat you, I’ll extract all the information about my past from you.]<br><br>

[You can try…… But I don’t want to reveal too much. So…… Φανερός…… Ἀρχάγγελος.]<br><br>

(Author Note: Φανερός, Ἀρχάγγελος is read “Fanerós, Archángelos,” which is Ancient Greek for “Manifest, Archangel.”)<br><br>

Then, an angelic being appeared, clad in twenty wings with hundreds of eyes on each of them. A golden glow shone from her body, her skin was pale white, and her eyes were a gleaming golden hue. If there was one way to describe her, it’d be “Light.” The word light practically emanated from like, like, say, light.<br><br>

Instantly, a bright golden spear of light struck Jeser, as hundreds more appeared, each piercing Jeser’s skin.<br><br>

[Shit. This is not good……]<br><br>

Jeser was coughing, and wheezing, attempting to regain control of the fight. They could do nothing but watch as more beams of light surrounded him. However, in an instant, the beams were dispelled by an immense red aura.<br><br>

[Strange Power. Red Aura. Identified Origin. Scarlet Sinner.]<br><br>

The Archangel lady spoke in an odd, robotic tone. Her voice sent shivers down Jeser’s spine, despite being protected from the beams of light, they could do nothing but cower in fear.<br><br>

Before the Archangel could attack once more, a magic circle surrounded Jeser, still cowering in fear.<br><br>

[Escape? Interesting Choice. In The End, Action, Meaningless.]<br><br>

As the magic circle grew in intensity, the Archangel readied two glowing spears, and struck the magic circle, destroying it.<br><br>

[Di-didn’t that phantom bubble have several authors in it… and she quite easily shattered the magic circle and the connecting narrative… What is this monster.]<br><br>

In Jeser’s mind, a voice rang out, a deep, cruel voice, full of only hatred.<br><br>

(Jeser. I do not expect you to survive, I do not expect you to even come back without injury, however, I will tell you about your past if you return with some information.)<br><br>

Jeser thought for a moment, they needed to know their past, so they had to gain some bit of information.<br><br>

(My lord, the great Scarlet King, I accept your offer, I shall gather as much information as I can before escaping.)<br><br>

(Good. I expect your arrival soon.)<br><br>

[Królowa…… Go easy on him. I don’t need a child like him dead.]<br><br>

(A/N: Królowa is Polish for “Queen.”)<br><br>

[Processing Request… Understood.]<br><br>

Jeser stood before the archangel, Królowa, more determined than before. Their body rapidly healed from the prior grievous injuries.<br><br>

[I may not beat you at full power, but you sure as hell ain’t killing me, my Regeneration Snake can bring me back from reality erasure itself! And it’s locked behind an infinite barrier, something you can never cross, no matter how strong you are.]<br><br>

[Foolish, Watch.]<br><br>

Jeser felt a shiver run down their spine as Królowa spoke those words in a cruel, indifferent, inflectionless, intonationless, voice spoke to them. In a flash of light, the snake that was protected by an infinite barrier, and the surrounding salt pan was completely and utterly melted by a single beam. The idea of infinity soon became finite, and the idea of finity soon became infinite. The beam of light had been stopped, and been pushed back again and again, but it kept going, shattering past the barrier, making its “infinity” equate to nothing in comparison to what the beam of light was. <br><br>

[Hahaha… this is some insane power, but, this is also information… valuable information at that. I’ll see what more information I can gain here…]<br><br>

Dark, black, flames run up to Królowa and cover her, however, she easily dispels the fire, before pelting Jeser with more beams of light, which they barely dodge.<br><br>

[I’m not sure how much longer I can hold out here… So… I’ll call it quits, I’ll hand over the Voruteut body as well.]</span><br><br>

[Acknowledged. Under the orders of my queen, I will permit you  to leave.]<br><br>

Jeser was still shivering, despite her seemingly normal voice, something about her exuded an air of authority. “He has to leave”, “He can’t continue fighting, or else, he’s dead.” Those were the thoughts that ran through his head.<br><br>

In a burst of light, the flames on the Voruteut girl vanished, and presumably, Jeser with it. Królowa vanished back into the woman’s shadow, which now had glowing golden eyes, always watching.<br> <br>

The woman stopped the Voruteut girl from falling, as her form continued to bubble, as spacetime reached critical hazard, and the world collapsed, yet again, into a singularity. The destructive nature of the woman was, bit by bit, destroying every universe, and of course, this commentary. As the bubbling calmed down, space and time existed again, though several holes were in spacetime, this would’ve reflected in the body of the woman, but it did not, the “holes“ that existed in spacetime, despite having just formed, became a component of the woman, another mundane component.
<div class="afterword-section">
    <h2>Afterword</h2>
    <p>??? ???????: This is setting up some sort of mystery with Jeser’s past, and the woman’s emptiness, isn’t it?</p>
    <p>Author: Yep! It is. The next chapter is going to cover the Scarlet King in detail though.</p>
    <p>??? ???????: Also, shouldn’t I have a name by now?</p>
    <p>Author: I wanted to go and make you Sam Howell/SCP-3812, but I don’t think that’d work well.</p>
</div>

<div class="author-notes">
    <h2>Author Notes</h2>
    <p>I hope you’re ready because it’s chapter 2! With 90% more seriousness! I don’t have much more to say, I’ll keep this author's notes section short.</p>
</div>

* * * * *

<div class="copyright">
    <h2>Copyright Information</h2>
    <ul>
        <li><a href="https://scpwiki.com/scp-2317" target="_blank" style="color: #FACADE; text-decoration: none;">"SCP-2317"</a> by DrClef, from the SCP Wiki. Licensed under CC-BY-SA. — This is the salt pan, where the majority of the story takes place.</li>
        <li><a href="https://scpwiki.com/lord-jeser" target="_blank" style="color: #FACADE; text-decoration: none;">"Lord Jeser"</a> by Baronjoe, from the SCP Wiki. Licensed under CC-BY-SA. — Major character in the second chapter.</li>
        <li><a href="https://scpwiki.com/sandrewswann-s-proposal" target="_blank" style="color: #FACADE; text-decoration: none;">"S Andrew Swann's Proposal"</a> by sandrewswann, from the SCP Wiki. Licensed under CC-BY-SA. — Mentioned as the authors in a narrative, technically me, I guess?</li>
        <li><a href="https://scpwiki.com/dust-and-blood" target="_blank" style="color: #FACADE; text-decoration: none;">"Dust and Blood"</a> by Djoric, from the SCP Wiki. Licensed under CC-BY-SA. — The Scarlet King is the one talking to Jeser during the story and is also referred to as “The Scarlet Sinner” by Królowa.</li>
        <li><a href="https://scpwiki.com/second-hytoth-hub" target="_blank" style="color: #FACADE; text-decoration: none;">"Church of the Second Hytoth Hub"</a> by NatVoltaic, from the SCP Wiki. Licensed under CC-BY-SA. — Voruteuts are mentioned in the story, and the host of Jeser is one.</li>
        <li><a href="https://scpwiki.com/scp-435" target="_blank" style="color: #FACADE; text-decoration: none;">"SCP-435"</a> by sandrewswann, from the SCP Wiki. Licensed under CC-BY-SA.</li>
    </ul>
</div>`
}, {
    title: "A King Filled with Lies",
    content: `[My lord, I have uncovered some major details about the opposing troops.]<br><br>

Jeser was kneeling before a throne with a demonic creature; clad in a crimson body, and with red eyes, the same as the one from the portrait. It was the Scarlet King. <br><br>

[Jeser, worry not, I was watching, listening, I saw what happened.]<br><br>

[I understand. As for information about my past…]<br><br>

[I see… in that case if you think you are ready to know, and you truly wish to know, I shall grant you your wish.]<br><br>

[Yes, I am ready for it, my lord.]<br><br>

The King sighs, pausing for a moment, with an indescribable emotion on his demonic face, before speaking once more. His words were quiet, despite his otherworldly appearance.<br><br>

[Some long while ago, there was a power-hungry man named Nefel, he was the devil. He may still be around to this day, I know not of his whereabouts, but rumour has it that he is always lurking. For æons, he would hunt for people to gather misery from. Despite not having the power to feed himself from misery, he did so anyway. For this, he would always use his ability to “encompass” anything and everything imaginable.]<br><br>

Jeser tilted his head in confusion, pondering what it meant to encompass something.<br><br>

[To explain what may be on your mind at this moment; think of a star.]<br><br>

The King responded, noticing Jeser’s confusion on the topic.<br><br>

[Yes, I can.]<br><br>

[How hot would you say that star is?]<br><br>

Jeser ponders the question given by the king for a moment.<br><br>

[One million degrees?]<br><br>

[Now, with that in mind, listen carefully to what happens when something is encompassed, when he encompasses something, he would become immune to that thing.]<br><br>

[So, it would be the star in this case?]<br><br>

[Yes, you are correct. Furthermore, he would perpetually gain a stronger version of that ability. Fathom what that would be like.]<br><br>

[…Would his powers give him a star that’s two million degrees hot?]<br><br>

[Far from it, it would be one trillion degrees hot.]<br><br>

[I see… what a frightening power.]<br><br>

[With this power, he could also brainwash people, and force them to do his bidding. He would just encompass them, they could no longer fight back against him, and he was a sly one as well. He always weaved his words perfectly, every lie he told was believable. He was good at what he did.]<br><br>

[…And he did all of that to my small town?]<br><br>

[Yes, it did not take long for him to do so. With his capability to encompass beings, he could encompass anyone; from the lowliest peasant to the greatest nobles, and the king even. And as he did that, he would weave his words to perfection, like he always did.]<br><br>

Jeser looked mortified, the power owned by this Nefel, and the shattering of minds was all too much to process.<br><br>

[After conquering the city, he would routinely roam around the village, anyone who dared speak out against him was executed, well, not before being ruthlessly tortured first. During one of those routine checks, he found something that piqued his interest, he found you.]<br><br>

[He found m-me?]<br><br>

[Nefel was immediately interested in you, after all, you were powerful, but you also didn’t know what to do with your power. Everything in the world, but a mortal life span like everyone else. So, he chose to teach you]<br><br>

[And then… he…. taught me?]<br><br>

[Yes, at first, it was normal, but, as time went on, the assignments he had you do took a massive turn, from something normal, like training your flames to burn some small stuff, to destroying entire opposing villages with just your flames alone.]<br><br>

[I could do that… as a child? Those villages were probably protected by the gods! I couldn’t do anything like that even now if I tried.]<br><br>

[Despite his morality, Nefel was a good teacher, he could teach any subject to immense perfection, and make sure that information stuck with you forever.]<br><br>

[I-I see… so, what next?]<br><br>

[When he continued teaching you, he noticed something… your morals as a living being stopped you from doing the things he wanted you to. So, he chose a simple option, to rip out your memories, and recreate them with no morals, whatsoever,]<br><br>

[W-wait, if he ripped out my memories, how do you know, my lord?]<br><br>

[In truth, I was there as a subordinate of Nefel’s, I truly thought at the time he was righteous, but I was a foolish man back then. As I saw him torturing you, over and over again, I couldn’t stop myself from saving you from his claws when he tore out your memories.]<br><br>

[I-I truly am grateful for that, my lord.]<br><br>

[No need, I only did what anyone should have done in that situation.]<br><br>

In the shadows, some henchmen of the Scarlet King watched, all of their orbs glowed a faint blue. They listened but did not speak. When one whispered, the King ordered their silence.<br><br>

[Well, continuing where we left off… I had to flee from Nefel, he was far too strong for me to be able to handle in any meaningful manner. As I ran with the memory orb in hand, I tried giving it back to you, but all attempts failed, with nothing better to do, I absorbed it myself like I did my brothers.]<br><br>

[Your brothers?]<br><br>

[Ah, forgive me, I got sidetracked. As I was saying, I had no better option than to just absorb your memories, and so, I gained these abilities. And with it, I saw the truly horrifying crimes Nefel had committed against you, and your people, even the crimes he committed before I had joined. Watching the memories was akin to torture. Therefore, I chose to start a journey, to help you regain your morality, to help you learn. And, I think you should know the rest, right Jeser?]<br><br>

[Yes, I do.]<br><br>

Jeser walked out of the corridor of the king, and the henchmen loosened up.<br><br>

[You lot, you’re all dismissed. I shall see you all tomorrow, do not be late.]<br><br>

[[[[Understood!!!]]]]<br><br>

The four henchmen spoke in unison and promptly departed, each going their own ways.<br><br>

[Like I thought… he also failed to ever tell the truth.]<br><br>

One spoke in the shadows of the night as he exited the building, his eyes hidden behind a blindfold with centipede illustrations upon it, before long, he found himself before another throne, pitch black vines, contrasting with the red and white flowers blooming upon them.<br><br>

[The great Phantasmal Queen of Space and Time, I have returned, and as you predicted, the Scarlet Sinner never told the truth about the past of Jeser.]<br><br>

He spoke to his queen, the woman from before. Her robe blended in with the surrounding thorns, and she spoke in the same robotic tone as before.<br><br>

[Good work…… as always…… Montauk.]<br><br>

<div class="afterword-section">
    <h2>Afterword</h2>
    <p>Sugar-senpai: Eh? This is my name now?</p>
    <p>Author: Yeah. You’re Sugar-senpai, no correlation to any other character in media whatsoever.</p>
    <p>Sugar-senpai: Yeah right… whatever, I guess my form is complete? Well, let’s discuss that later… this story is too serious for me to focus on anything.</p>
    <p>Author: Is it now?</p>
    <p>Sugar-senpai: Anyway, as a fun fact, this chapter originally was an intermission, but it was changed fairly early into the writing of the 4th chapter.</p>
</div>

<div class="author-notes">
    <h2>Author Notes</h2>
    <p>This is a complicated chapter. Jeser finds out about his past, well, not really, but still. And then, we get to the last part, where we find that the Scarlet King was lying. I mean, if you read an inkling of SCP, you knew he was lying easily. As for Nefel, well, he’s not a you'll learn about him soon; but you can probably guess he may not be evil, given the Scarlet King is a goddamn compulsive liar.</p>
    <p>As for anything more, Montauk is here, from SCP-231. He’s a cool guy, maybe. This also takes place sometime after the Phantasmal Queen has left the salt pan, so, that’s why she’s somewhere else in this chapter.</p>
</div>

* * * * *

<div class="copyright">
    <h2>Copyright Information</h2>
    <ul>
        <li><a href="https://scpwiki.com/lord-jeser" target="_blank" style="color: #FACADE; text-decoration: none;">"Lord Jeser"</a> by Baronjoe, from the SCP Wiki. Licensed under CC-BY-SA. — Major character in the second chapter.</li>
        <li><a href="https://scpwiki.com/dust-and-blood" target="_blank" style="color: #FACADE; text-decoration: none;">"Dust and Blood"</a> by Djoric, from the SCP Wiki. Licensed under CC-BY-SA. — A major character here, the Scarlet King.</li>
        <li><a href="https://scpwiki.com/tuftos-proposal" target="_blank" style="color: #FACADE; text-decoration: none;">"Tufto's Proposal"</a> by Tufto, from the SCP Wiki. Licensed under CC-BY-SA. — Montauk is there, at the very end.</li>
    </ul>
</div>`
}, {
    title: "Meeting",
    content: `In the massive throne room of the Phantasmal Queen of Space and Time, a subordinate of hers, cloaked in black, was standing before her throne.<br><br>

[Great Queen of ours, the Koru-teusa have gathered a meeting at the Devourer’s Cathedral.]<br><br>

[Understood…… send them a message immediately with my acceptance……]<br><br>

[Yes!]<br><br>

As the subordinate of the Phantasmal Queen left, she sighed, as her voice became normal sounding.<br><br>

[I really do have to go back to the place of that devourer again, don’t I~~?]<br><br>

The Phantasmal Queen removed her robe, putting it near her throne, revealing her dress beneath the robe, a dark purple and black dress with intricate gold accents.<br><br>

She walked outside her palace door, appearing in the cathedral of the salt pan immediately, its orbs glowing a vibrant blue this time around, the Scarlet King mural on the wall shattered.<br><br>

There, seven people gathered an angelic woman with pure white hair, with leaves and flowers accentuating the hair. She had 20 wings on her back, and 3 on either side of her head, each a brilliant white with many feathers. Her clothing was a divine white, and red, contrasting her light-blue, almost white eyes. Her existence was chaotic, creating and not creating, existing and not existing, what is and isn't, everything that IS and IS NOT… in a sense, she was not a being, she was a universal truth, but she was not a universal truth, she was a being. If the Phantasmal Queen had been the idea of space and time, she was the thing that created it, the quantum fluctuations.<br><br>

Another man stood, his eyes gleaming a dark red, with a luxurious blue kimono, with red accents, with a white haori, while his haneri was also white. His hakama was a mix of white and black stripes, he had on a white, furry, haori himo as well. His existence was existence, existing everywhere, all at once. Part of him was everything, everything and everything, spacetime, chaos, void, death, creation, everything was part of him. <br><br>

Next to him was a woman, with pink hair, in a suit, with a long skirt that flowed to her knees, with red accents on both her skirt and suit. She had a massive red cloak with black fur covering her body. Despite being young for a concept, she has existed since time immemorial, concepts exist, have existed, will exist, forever She was order, her existence was order, balance. <br><br>

Some distance from her was a monkey with a golden headband, a tiger skin jacket, a navy blue shirt, and a small cape. He was a hand, strength, chaos, freedom, he was what he was because he was.<br><br>

Then was a person, with dark red armour, and what appeared to be 4 eyes across their face. If one was faced with it, what one would see is themself. Every single “themself” in existence, all in once place. They all meet up here, after all, everyone goes to the same place when they die. Yes, the armoured figure was Death itself. Elder gods which consume their brethren are, to him, like earthworms burrowing in the dirt.<br><br>

Finally, was a woman in elegant, and divine white and gold garments, she had silver hair and red eyes. Her eyes saw the end of all stories, nothing escaped, not even the pre-established “Everything” that the man in the haori embodied. Plants, animals, stars, universes, multiverses, the stories in which multiverses resided, the natural course of things, existence, the absence of it, space, time, and yes, even death - she casually destroys them just by walking along. If she chooses to “end” a being, their story is over, and the metaphorical book to their story is closed. To her, everything, from the grass upon which one stands, to a star that gives off the light of life, all of that, is just as important as an atom in the middle of nowhere. <br><br>

[Aika! Sup, you finally showed up today.]<br><br>

Strength, the monkey spoke, he was Sun Wukong, the Monkey King.<br><br>

[I couldn’t help it~~ I had other things to do~~]<br><br>

The Phantasmal Queen of Space and Time, Aika, responded.<br><br>

[Ah right, the Scarlet King spreading rumours about me? I take it that’s what you’ve been digging into lately?]<br><br>

Everything, Nefel-- the man with the white kimono, spoke next, joking about the rumours spread by the Scarlet King; he was the man from the Scarlet King’s false story.<br><br>

[Eh?! He was spreading bad rumours about Nefel-san!!]<br><br>

Said order-- the pinked haired girl, Rakmou-leusan, in response to Nefel’s statement.<br><br>

[Yeah~~ his rumours have got to the point of brainwashing, from what I can tell, he thinks that Jeser has the potential to beat you~~ So he’s grooming Jeser into being the strongest warrior he has, outshining even his leviathan army.]<br><br>

[Ahh… he’s really perpetuating such rumours, I didn’t believe he was capable of such things, he’s really thinking he’s able to do anything to us. I’ll crush him, over, and over again, he’ll be nothing but pulp. A beaten mess which is incapable of doing anything. Each of his hands will be turned into lumps of flesh, and whoever chooses to support him along with him. I don’t care friend or foe, if anyone dares stand in my way, I’ll do the same. And if he dares touch anyone else, like Ava-chan, I’ll reduce him to nothing, oh, but he’s already nothing, an ant, a miniscule being compared to use, I’ll be able to do some much-- If he can breathe beyond that, I’d commend him, but with the state he’d likely be in because of it, I could torture him much easier. First I’d take out each of his eyes, of course, being a powerful entity, he can regenerate them. It doesn’t really matter, since I can always do a Prometheus to him, it’s not going to be that hard. But chaining him to a rock and having a vulture eat out his eyes is boring, so, I’ll have to think of better ways. Which I already have, I’ll force him to live through the experiences of all the people he’s slaughtered, from Pangloss, to my dear children, the Humans. I’ll have him see hell, it doesn’t matter if he’s the devil, or whatever, I’ll do the same regardless. Oh, but there’s his subordinates, Moloch, I mean, there’s so much to talk about-- He’s such a fiend, that bull-headed demon. Forcing my children to sacrifice their own children? How despicable. How about I turn him into a child, and then sacrifice him, that’d be fun, surely. And his betrayal? Oh, he’d betray anyone, I may have cast him down to the Darkness Above, but even then, he’s foolish. He truly deserved it. He’s a simple-minded fool who only likes war and destruction. And then the Hanged King-- I’m not sure what I could do that he wouldn’t enjoy, his whole people are sadomasochistic freaks, so little I can do to make it worse. It’d just be best to remove him from this reality before he begins enjoying the torture. Oh, but I can still raze his country of Alagadda to the ground. Other than A’habbat, I’ll have to kill all of his brides, they’re bound to get in the way, though I don’t know if I should tear their limbs off one by one, or gouge out their eyes. Ahh… but then there’s the issue of the Treaty of Thorns and Flesh… Yaldabaoth would likely step in and try to stop me, ahh… but Sofia can deal with her…]<br><br>

The 20-winged creation, Paradwys spoke next, what she spoke, despite being words, and that could be understood, was near-incomprehensible. Every world she spoke, her eyes turned more and more red, as the red halo-like object on her hair slowly gleamed with arcane red runes.<br><br>

[Paradwys… first off~~ don’t speak so incomprehensibly, second, we can’t kill the Scarlet King yet~~ he’s using the power of… Sanna to hide himself.]<br><br>

[Ava-chan, I fully understand everything you’re getting at, but I don’t care. That fiend must be killed, I don’t care about the veil of Sanna. It’s useless to me, it’s meant to keep some other people out, but I'll break through, eventually. My hatred for him knows no bounds. I’ll shatter that veil of his with my own hands, it’s not something I can’t do. That antithetical storytelling device can do nothing against me. If anything, It’ll strengthen my resolve to torture him, after all, if he can’t die due to it, I’ll be able to torture him as much as I want. Now that you’ve reminded me, oh-- there’s so much I could do, I could torture him for eternity, and he’ll have to bear with it, his worthless veil will be used against him, I’ll have so much fun-- It’s almost insane how much fun I could have--]<br><br>

[Fine then~~ I’ll have to call off that date you were looking really happy for~~]<br><br>

What's this? A normal event happening… out of bounds of story, fixing error.<br><br>

[Wai-wai-wait, Ava-chan, you can’t do that!! This is heresy!]<br><br>

[… Do you even know what heresy means, Paradwys~~?]<br><br>

[No, I do not, and I don’t personally care, what I call heresy, is heresy.]<br><br>

[… Are you two seriously arguing about heresy and stuff during an official Koru-teusa meeting———– In other words… you’re talking about personal matters, while we have other matters to deal with, it isn’t acceptable right now.]<br><br>

In a simple intonation and inflectionless voice, the unavoidable End, Shiro, the woman with divine white and gold garments, ended the personal conversation between Paradwys and Aika.<br><br>

**Indeed, to continue, we have the rumours about Nefel spread through the word of the Insect, Harak, son of the Third Brood, and grooming Jeser to be his perfect warrior… How troublesome…**<br><br>

The armoured Death, All-Death; Ksitigarbha, continued with the prior conversation.<br><br>

[Yeah~~ really is very troublesome to maintain order and balance without killing the Scarlet King right now~~ which is currently impossible.]<br><br>

[Ava-chan, Wukong, how about you two journey and meet up with Lùth and Ýli.]<br><br>

[[Why is it the both of us!?]]<br><br>

[Well—— neither Ava-chan nor Wukong are technically members of the Koru-teusa, it’s easier this way.]<br><br>

[Fine~~ I’ll accept then.]<br><br>

**Well, we must all be off soon, good luck to both of you.**<br><br>

With that, All-Death left through a small portal, which appeared out of nowhere.<br><br>

[This was a short meeting, but good luck, Aika-chan, Wukong!]<br><br>

Paradwys would be next to leave, vanishing in a flash of light.<br><br>

[Best of luck to you both! See you, さらばだ]<br><br>

(A/N: さらばだ (Hepburn: Sarabada) means “Farewell.”)<br><br>

[Ah, Nefel-san, wait, Ai-tan, see you and Wukong-san, later!!]<br><br>

Both Nefel and Rakmou-leusan got together, with Nefel covering the both of them with his haori, as they vanished afterwards.<br><br>

[I should warn you, Kuro is not the way she seems right now———– In other words… Kuro may be planning something, not even I can comprehend what it is.]<br><br>

With those cautionary words, Shiro too left.<br><br>

[That’s everyone gone I guess~~]<br><br>

[Yeah, also, do you know why I had to sub in for Kuro?]<br><br>

[She said she had some important business to finish~~ So, she couldn’t attend the meeting today~~ I’ll bet she’s going to be here next time or something. There’s a lot of chaos~~ and she’s been handling all of that pretty frequently~~]<br><br>

[And, what about Voru?]<br><br>

[Ah~~ they’re dealing with all the Voruteuts~~ rumour has it that the Scarlet King took many young men and women. I know he took at least one~~ that being~~ the one who was Jeser’s host body. She’s being taken care of by Królowa right now. We’ll have to deal with that as well~~ I bet~~]<br><br>

[That’s done, roll the afterword.]

<div class="afterword-section">
    <h2>Afterword</h2>
    <p>Sugar-senpai: Did… did he just seriously roll the afterword? What idiocy.</p>
    <p>Kuro: Hey, hey!! I’m here!!</p>
    <p>Sugar-senpai: When did a major main story character just spawn in???</p>
    <p>Kuro: I’m technically the concept of the beginning, so I shouldn’t be here, but, eh, it’s more fun this way.</p>
    <p>Sugar-senpai: Answer my question!!</p>
    <p>Kuro: Ah, I’m just not taking part in the main story right now, so, I can be here, actually, most characters can be here, it shouldn’t be too hard for them.</p>
    <p>Sugar-senpai: Is the fourth wall just a suggestion for you lot!?</p>
    <p>Author: They looked up at the real world to tell the time, well, Kuro and Shiro did… yes, it is a suggestion.</p>
    <p>Sugar-senpai: Seriously!</p>
    <p>Author: Also, aren’t you going to talk about the slight amounts of sugar in the story?</p>
    <p>Sugar-senpai: Eh… what?</p>
    <p>Author: Did you not pay attention?</p>
    <p>Sugar-senpai: N-no…</p>
</div>

<div class="author-notes">
    <h2>Author Notes</h2>
    <p>We are now introduced to the Koru-teusa, who basically keep balance to the Hytoth; a Hytoth being a collection of every single universe in existence, every. single. universe. Well, as for them, they’re all different concepts, what they're the concepts of, I'll explain later.</p>
</div>

* * * * *

<div class="copyright">
    <h2>Copyright Information</h2>
    <ul>
        <li><a href="https://scpwiki.com/lord-jeser" target="_blank" style="color: #FACADE; text-decoration: none;">"Lord Jeser"</a> by Baronjoe, from the SCP Wiki. Licensed under CC-BY-SA. — Mentioned during the meeting.</li>
        <li><a href="https://scpwiki.com/tuftos-proposal" target="_blank" style="color: #FACADE; text-decoration: none;">"Tufto's Proposal"</a> by Tufto, from the SCP Wiki. Licensed under CC-BY-SA. — Montauk is mentioned during the meeting.</li>
        <li><a href="https://scpwiki.com/second-hytoth-hub" target="_blank" style="color: #FACADE; text-decoration: none;">"Church of the Second Hytoth Hub"</a> by NatVoltaic, from the SCP Wiki. Licensed under CC-BY-SA. — Voruteuts are mentioned in the story, Rakmou-leusan is a character as well, same with Voru.</li>
        <li><a href="https://scpwiki.com/dust-and-blood" target="_blank" style="color: #FACADE; text-decoration: none;">"Dust and Blood"</a> by Djoric, from the SCP Wiki. Licensed under CC-BY-SA. — The Scarlet King is mentioned, and so is Sanna.</li>
        <li><a href="https://scp-wiki.wikidot.com/song-of-sanna" target="_blank" style="color: #FACADE; text-decoration: none;">"Song of Sanna"</a> by Djoric, from the SCP Wiki. Licensed under CC-BY-SA. — Sanna’s tale from the SCP Wiki.</li>
        <li><a href="https://scpwiki.com/death-and-the-doctors-hub" target="_blank" style="color: #FACADE; text-decoration: none;">"Death and the Doctors Hub"</a> by Dmatix, from the SCP Wiki. Licensed under CC-BY-SA. — All-Death is one of the characters here, so…</li>
    </ul>
</div>`
}, {
    title: "The Palace",
    content: `After the Koru-teusa left, both Wukong and Aika talked for a long time, Wukong was sitting on his Somersault cloud, while Aika stood next to it.<br><br>

[Where are Lùth and Ýli anyway?]<br><br>

[Somewhere west of here.]<br><br>

[West!? Not again… I went west enough with Sanzang, and with the cosmic distances, it’s gonna be even further.]<br><br>

[There are a bunch of rivers and mountains in the way as well. Each with hundreds of demons.]<br><br>

[WE’RE OUTSIDE THE FUCKING UNIVERSE, HOW ARE THERE RIVERS AND MOUNTAINS!?!?!?!]<br><br>

[Yeah, so, let’s go.]<br><br>

[NO!!!]<br><br>

[Alright~~ fine~~ I’ll just teleport us.]<br><br>

[huh?]<br><br>

In an instant, both Wukong and Aika appeared before a Welsh-looking palace, it was seemingly made of stone and had many beautiful windows.<br><br>

[…you could DO THAT!?]<br><br>

[Yeah, that’s how I came to the Devourer’s planet.]<br><br>

[Well, I guess, you are the concept of space, after all.]<br><br>

[Mhm.]<br><br>

Two people, a man, and a woman seemed to notice Wukong and Aika’s arrival, one had a black, tattered cloak, with gold accents. His face was covered in shadow, and the only visible part of his face was his piercing red eyes. The woman had black hair, and a beautiful black dress to go along with it. She had two flowers on either side of her gleaming black hair, as she too had piercing red eyes.<br><br>

The man resembled all matter that had ever existed, strings that vibrated. His body exuded some strange "energy" something beyond comprehension, some knowledge further… a serpent, maybe? Guarding the Tree of everlasting Knowledge, with knowledge spanning across every single universe, on every single thing. It had information on everything, nothing, less than nothing, more than everything, it had information that existed outside the bounds of creation—all of that, contained within the massive libraries that made up the Tree of Knowledge.

The woman… she was "something," maybe even "nothing." What was certain about her was that she definitely wasn't a story, but, she also "had" a story. A story about [Data Lost], [Data Lost], and, most importantly, [Data Lost].

As Wukong and Aika entered the castle, a young butler, who was at the palace's front doors, greeted them, before bringing them to a table in what seemed to be a grand living room. Seated on this table were the two people from before.<br><br>

[Ai-san, Sun-kun, welcome!]<br><br>

The first to speak at this table was the woman, coming down from the stairs, followed by the cloaked man.<br><br>

[Oi! Bitch! Don’t you dare fucking call me Sun-kun again.]<br><br>

[Wukong~~ simmer down.]<br><br>

[Aika, don’t you dare stop me from teaching this bitch a lesson.]<br><br>

[Sun-kun, don’t you think you’re too weak to teach me a lesson?]<br><br>

The woman stared at Wukong, firing several beams of pure energy, and not being damaged by Wukong’s counterattacks by turning into energy.<br><br>

[They’re tearing this mansion down to the ground again, ain’t they…]<br><br>

The man in the cloak was watching the fight go down, he spoke in a casual accent, with his worries less on the two fighting, and more on the palace instead.<br><br>

[Nice complex hax ability you fucking dipshit, now check this out!]<br><br>

Wukong managed to strike through the woman’s energy form, knocking her down.<br><br>

[Guh…]<br><br>

[Never call the Great Sage Equalling Heaven “Sun-kun” again.]<br><br>

[Okay, Sun-san]<br><br>

The woman cheekily smiled as she said those words, before vanishing into energy and appearing behind Wukong.<br><br>

[But… I prefer saying Sun-kun, so I’ll continue with that~~]<br><br>

[Hey!]<br><br>

[So… should we just let the two of 'em fight, Aika?]<br><br>

[At this point~~ I couldn’t tell you, Ýli.]<br><br>

[Could ‘ya pretty please go stop ‘em from fightin’ here any more? They're tearing up the place]<br><br>

[Fine~~]<br><br>

In a fell swoop, both Wukong and the woman were on the ground, holding their hands on their head.<br><br>

[Ow ow ow ow ow ow…]<br><br>

[Ai-san… how rude…]<br><br>

[If I see any of you two idiots fighting one more time, I’ll ask Kuro to use her punch (strong) on you two.]<br><br>

[[We sincerely apologise]]<br><br>

[P-please don’t tell Kuro-sama about this.]<br><br>

[Y-yeah, what Lùth said, don’t tell Kuro-sama… please.]<br><br>

[Good, now behave.]<br><br>

[[Yes…]]<br><br>

“I still don’t forgive you for calling me Sun-kun”<br><br>

[I can still hear you, you know.]<br><br>

[Hyiih…]<br><br>

Wukong recoiled in shock at Aika’s words, before quickly shutting himself up.<br><br>

[Jeez… do I really need to babysit you two?]<br><br>

[Mnhh… no…]<br><br>

Wukong would be first to respond to her question, with Lùth quickly following suit.<br><br>

[N-no Ai-san, you don’t have to!]<br><br>

[I feel like I do though.]<br><br>

[I’m serious Ai-san, we can moderate ourselves, and we will do it from now on.]<br><br>

[Fine, but if I see you two messing around one more time, I will have to babysit you two.]<br><br>

Aika sighed and went back to where Ýli was waiting, he was watching the entire thing from the couch, his body still covered in a tattered cloak.<br><br>

[So, I guess we’re done with ‘em for now.]<br><br>

[Yeah, we are.]<br><br>

[Ýli-sama, one of Phantasmal Queen-sama’s subordinates is here. She calls herself Ellie.]<br><br>

An old butler, though still very fit in appearance, spoke, bowing gracefully before Aika and Ýli.<br><br>

[Ellie? Why is she here.]<br><br>

[Apologies, Phantasmal Queen-sama, she will not tell me why.]<br><br>

[That’s fine, just bring ‘er in, she probably would have something important to say here.]<br><br>

[Understood, Ýli-sama, I shall bring her in promptly. The rest of you servants set up a comfortable chair for Ellie-sama’s arrival!]<br><br>

Soon, a woman in a blindfold similar to Montauk, with blonde hair, and an amulet on her chest.<br><br>

[I apologise for interrupting you two, Phantasmal Queen-sama, and God of Matter-sama, but I have two very important news to share currently.]<br><br>

She spoke in a very formal manner, and in a very beautiful way too, she was covered in a brown trench coat, and she lightly bowed at the two before taking a seat.<br><br>

[As for the news… Rakmou-leusan-sama has been severely injured.]<br><br>

<div class="afterword-section">
    <h2> Afterword </h2>
        <p>Sugar-senpai: Finally! Finally! I’m free from the seriousness.</p>
        <p>Kuro: Look at the last line.</p>
        <p>Sugar-senpai: Hwoeh! W-what… why are you here again!? And what’s with this cliffhanger!?</p>
        <p>Kuro: Well, apparently, the author had something to do, so I’m here for them.</p>
        <p>Sugar-senpai: Jeez, well, that’s fine. Anyway, do you have anything to say about what happened to Rakmou-leusan?</p>
        <p>Kuro: W-what could you mean??</p>
        <p>Sugar-senpai: I’m pretty smart you know, I mean, hierarchically, you’re the second strongest, one of the few that can harm Rakmou-leusan, Nefel harming his wife is something he probably wouldn’t do, given he has the elegance of a Phantom Thief. So that leaves you and Shiro. Shiro’s been introduced, and you’re still a mystery. I’d say you’re more likely.</p>
        <p>Kuro: How did you get all that???</p>
        <p>Sugar-senpai: The author had notes on his table…</p>
        <p>Kuro: Like I thought, you’re not smart enough to do anything like that.</p>
`
}, {
    title: "Al'ealam ①",
    content: `[Wha… Rakmou-leusan bein’ injured is damn near unheard of.]<br><br>

[Ýli-sama, I very much do understand your worries, however, those worries are unneeded, as Nefel-sama is currently tending to her, he said that you all should go over there to discuss some stuff.]<br><br>

[Well… if that's the case… Ellie, you’re dismissed, you should go back to tending to that Voruteut we brought in.]<br><br>

[Understood, I shall depart immediately!]<br><br>

[Ýli, Lùth, Wukong, let’s go meet Nefel now.]<br><br>

[Yeah, yeah, also, could you teleport us… pretty please.]<br><br>

[Do you think I wouldn't~~?]<br><br>

[N-no, I just thought you were still mad from the last thing.]<br><br>

[This and that are different; we’re being serious right now.]<br><br>

[Alright…]<br><br>

Aika created a small portal to a beautiful, luscious cherry blossom grove. The sun glimmered through the leaves, and the leaves, and plants let off a faint pink glow. A stone path up towards a Japanese-styled house, as the 4 went up the hill, crossing a small Torii gate, and entering the house not too far away.<br><br>

[Woehh… this place is as beautiful as always.]<br><br>

The petals fell on Lùth’s hair, contrasting with her dark black outfit and hair. They continued walking until they reached the front door of the Japanese-style house. As they opened the sliding door, it was Nefel who greeted them.<br><br>

[Ah, you guys are finally here.]<br><br>

[Yeah, we’ve heard the general gist of the situation~~]<br><br>

[Well, as you may have heard, I’ve been tending to her, but, enough of that for now, do any of you want some tea? Or any other drinks]<br><br>

[Yeah, Nefel-san, tea would be great.]<br><br>

[Ah, Nefel, if that’s the case, I’ll have some coffee with that.]<br><br>

[I’m fine with tea.]<br><br>

[Should this conversation really be that light-hearted~~?]<br><br>

[Aika, I’m not much older than you, but, I feel like I’ve lived centillions of years more than you have… at this point, having light-hearted conversations is better than worrying over each and every detail.]<br><br>

[I guess that’s true~~ I’ll have some wine then.]<br><br>

[Alright, tea for Lùth and Wukong, coffee for Ýli, and wine for Aika, ah, and what type of wine?]<br><br>

[Red.]<br><br>

[Red wine, that should be somewhere in the cabinet downstairs, I’ll go get that first.]<br><br>

[I think Nefel-san is still trying to cope with the serious injuries of Rakmou-san. They’ve never been directly attacked before, and now, this happens…]<br><br>

[I’m inclined to agree with that~~]<br><br>

Nefel returned with a bottle of fine wine, and poured it in a wine glass, before giving Lùth and Wukong some tea, and Ýli some coffee.<br><br>

[Well, with our drinks in order… let’s talk about what you guys came here for.]<br><br>

[Yeah, what happened to Rakmou-leusan?]<br><br>

[She was heavily harmed when trying to contain a rampaging Al'ealam.]<br><br>

[Ehhh? Nefel-san, do I hear that right, that she was harmed trying to contain a rampaging Al'ealam, one of the concepts of order? Rakmou-san should be completely unharmed. She’s the superior concept of order, after all.]<br><br>

[That’s what one would be inclined to believe, but, the body of Al'ealam has been immensely tampered with.]<br><br>

[And what about Alim, is she okay?]<br><br>

[I’m not sure… she was remotely piloting her Al'ealam body, and we haven’t seen her since the body exploded. Well… the body of Al'ealam is still intact after that.]<br><br>

[I already have some theories about who’s behind this~~ but, as with any of my theories, I can’t be 100% sure. Anyway, Nefel, could you tell me where Rakhi’s room is?]<br><br>

[Yeah, it’s right around the corner.]<br><br>

Aika opened a sliding door, and entered a room with pink accents, with Rakmou-leusan lying down on a futon in the middle. She was unconscious. In her chest was a gaping hole, at least 30 cm in radius. It seemed that Rakmou-leusan was crying; possibly having a dream. In faint words, she spoke.<br><br>

[I’m sorry… Zeru… but… I can’t join you guys over there… I don’t want to… Eoghan too… I don’t want to… I don’t want to… I’m scared…]<br><br>

[…]<br><br>

[Nessa… I'm sorry I forgot you… I just should've been stronger… I should've been… Yorick… forgive me for… for… not helping you in time… Myron… Ursula too… I hope… you and… Eoghan have made up… but… why is everyone praising me… please stop… your praises hurt… I… I’m nothing but a liar… I don’t deserve to be next to you…]<br><br>

Aika just watched calmly, her emotions were indescribable, yet, it seemed as if she was almost about to cry. She hugged the unconscious Rakmou-leusan as if comforting her.<br><br>

[W-why… I don’t deserve something like this… all of you, you shouldn’t put so much trust in me!! I-I don’t want to betray your expectations again… please…]<br><br>

As Aika hugged Rakmou-leusan tightly, she was being healed. Aika’s emotions were now sadder, and she seemingly held back tears. She patted Rakmou-leusan’s head, as she was continually crying in her dreams, before falling silent, a smile on her face.<br><br>

Aika then held Rakmou-leusan’s head in her lap as she seemed to sing a soft lullaby, lulling Rakmou-leusan to sleep. The light shone through the otherwise dim room. Soon, Rakmou-leusan would wake up from her sleep.<br><br>

[Eh~~ Ai-tan… what are you doing here? And, more importantly… why am I on your lap.]<br><br>

[I was making your bad dreams go away.]<br><br>

[Eh? Ah- don’t tell me, you… were reminded of your past as well… I’m sorry about that…]<br><br>

[It’s not your fault, I was the one opening up my closed wounds.]<br><br>

[Don’t blame yourself, Ai-tan…]<br><br>

[Hah… you say that and the only things you say in your dreams are of you blaming yourself…]<br><br>

[Mnhh… you can’t just make a good argument like that!!]<br><br>

[Oh, I can’t?]<br><br>

[Yeah, you can’t!!]<br><br>

[I see…]<br><br>

[Ah! Nefel-san is probably worried about me, I have to go back to talk to him soon!]<br><br>

[Yeah… probably…]<br><br>

As Rakmou-leusan left the room, Aika stayed behind, instead of a smile that was on her face, she was crying now. She didn’t try to hold back her tears. She just sat there… alone.<br><br>`
}, {
    title: "Intermission: ~~Rakmou-leusan: Past ①~~",
    content: `Countless years had passed since Rakmou-leusan first began protecting the current Hytoth from the destruction that the chaotic Voruteuts caused. Her friends and family had long since died, but she always wrote notes; to them. Since the very beginning.<br><br>

“Mom, dad, it seems our entire Hytoth, the collection of all of the universes that exist, has been destabilised, but I won’t join you guys. I feel like I have a duty to protect the people who are experiencing this destabilisation, if I am strong enough, I’m certain I can protect everyone. I’ve learned some things from Zeru about different terms, I’ll explain them to you after I’ve saved everyone.” — Day 1 <br><br>

“Dear mom and dad…I don’t know how to say this, even though I put in so much effort, I couldn’t save anyone but my friends. We’re watching the Hytoth crumble around us right now, I don't know if there are any survivors, and I honestly doubt there are. I know I was going to tell you guys about the things that Zeru taught me, but right now, I don't think I can.” — Day 2 <br><br>

“Dear mom and dad, I know it's been a while since I wrote here, but I've been adjusting. There's a new Hytoth now, I'm still not sure who's the one making it, but, I think I met her some time ago. She wore a black dress, and she seemed to be very short, I'd say she was 140 cm at maximum. I only caught glimpses of her, though.” — Day 18<br><br>

“Dear mom and dad, I guess I should explain the things I learned some while ago from Zeru now. Like I said, the Hytoth is the collection of every single universe that has ever existed. Zeru also taught me about narratives, they're basically a single universe, and all of its timelines. Sometimes, a narrative is a multiverse, if all the different universes are interconnected. There's also a hypernarrative, which is a collection of all self-similar narratives, which is basically just a multiverse. As far as we know, the entire Hytoth is made up of these hypernarratives, which, as far as we know, nothing can be bigger than them. I'm not really sure about much more than that, and it's not because I couldn't follow everything he was saying… well… that is true, but still!!” — Day 19<br><br>

“Dear mom and dad, I'm not sure if I can write everything down as it happens, but, we've at least now transcended, to godhood, it seems our body leaks blood, which I doubt is good, our deific bodies can't hold our mortal blood. Ursula said that we may need some people doing blood sacrifices to help us live… I don't really like the prospect of that. I've never liked blood sacrifices, and the reasons people do it still elude me, but if it's necessary, We'll probably have to do it.” — Day 20<br><br>

“Dear mom and dad, I guess I forgot to explain transcendence, like with the whole narrative concepts, Zeru was the one who discovered it, I mean, he's the smartest of us. He found some rituals somewhere which could turn us into gods, and we all made an oath to protect the new Hytoth together. I'm not sure what the Concepts think of us, but, they rarely have interacted, some of us are even beginning to despise them for not helping people. I'm sure they have their reasons, but, for now, we have to fight alone. We'll be bringing guidance to those who need it in this new universe.” — Day 21<br><br>

“Well, both Zeru, and Ursula, both of them did something amazing. I couldn't believe my eyes when they did it. Zeru used his right arm as a weapon, since he can't use his left hand, but, you guys know that… Well, his left arm draws in from the energy of the entire cosmos, outshining trillions of stars, and Ursula ripped two swords from the fabric of reality itself. I'm not entirely sure how she did it, but she says that the weapons exist within the entire existential plane itself. Though, I'm not exactly sure what that means, entirely.” — Day 22<br><br>

“Dear mom and dad, it seems Eoghan has withdrawn himself from the group, he never forged new weapons once ascending, like Zeru and Ursula. He's simply improving the weapons that he already had. I'm not sure how long he'll take, I don't think we'll have anything of note happening for the next thousand years, so I'm not sure if I can write every day to you guys.” — Day 23<br><br>

“Dear mom and dad, I'm not certain how long it's been since I started doing these, so I'm not going to add dates, since the destruction of the Hytoth seems so very… distant. This Hytoth is growing to be large, and beautiful. We see the Concepts every now and then, and apparently, there's another group, albeit they're made of concepts, very much like us. Apparently, they're the "pillars” of order, a group of deities whose families chose to bear the title of "Concepts of Order.” They go around to every single universe, making sure nothing is being corrupted, nothing being destroyed. They work much harder than us, I believe, even though Zeru reassures us that we're all working really hard. It's nice, though, to have a group of people who are doing the things we're incapable of.”<br><br>

“Dear mom and dad, Eoghan has finally returned, he's built three ascended cannons of metal, and dark matter. With us all gathered together, we tested the cannon in an empty, desolate universe the pillars of order had let us use. The firing of the cannon was brilliant, it rang across the empty universe. It was really, really, loud, I couldn't believe it. Everyone was praising Eoghan, but I felt like Ursula was a bit envious at that moment, I'm not sure though.”<br><br>

* * * * *

During the many battles that the Koru-teusa faced during their time, it was the first true invasion of the Voruteuts, spearheaded by the mastermind behind it all, Aiv-Zon. During this time, the entirety of the Koru-teusa were overwhelmed, so, in a bid to protect the Hytoth, Zeyu-leusan, known by the Koru-teusa as Zeru, chose to sacrifice himself for the sake of the Hytoth. Gathering up all his energy, and all of his life essence, he put it all in a single holy lance, destroying all of the Voruteuts, but dying in the process.<br><br>

* * * * *

“Dear mom and dad, I'm sorry… I can't write anything today… I hope Zeru is there with you two.”<br><br>

“Dear mom and dad, I'm not sure where █████ is… she seems to have vanished. We looked for her many times, but, every time, Ursula, Eoghan, and Yorick would forget about their mission. It was really odd, I hope I can find… I'm not sure why… but I can't remember what I was writing about, my vl5lcn is blvvrlng mom… dad…”<br><br>

“Dear mom and dad, this is probably the first time I've written one day after the other in succession since I first started writing here… Yesterday, Ursula found me, collapsed in front of this diary, I'm not sure what I was doing, beyond the fact that I was writing to you guys. I'm sure Zeru would've had an explanation for it… I'm… sure…”<br><br>

"Dear mom and dad, I decided to write this early in the morning, Ursula and Eoghan got into a fight just now. I've been leading the group since the death of Zeru, so I've been mediating our arguments, but I've been having a constant ringing in my head, as if I've forgotten someone, someone… Ne-”<br><br>

"Dear mom and dad, It seems I collapsed while writing this again. I'm not sure why, but I'll stop dwelling on it. I always end up feeling better afterwards anyway. Well, whatever, Eoghan and Ursula have been fighting a lot more, Ursula is usually the one who starts the fights, and neither me, nor Yorick, know why she’s doing this.”<br><br>

“Dear mom and dad, apparently Eoghan is renowned across the Hytoth for his cannons, I’m always amazed by his creativity. But, as always, Ursula seemed envious. Maybe it’s because she used to be known by everyone, and loved. I’ll go talk to her about it tomorrow, I want her to feel better, and feel loved.”<br><br>

“Dear mom… and dad… I was too late… Eoghan and Ursula got in yet another fight, but it was more dangerous this time… and they ended up… they ended up… now me and Yorick are the… only two left. I’m not sure how much I can continue fighting… Our place feels so empty now, with Zeru, Ursula, Eoghan, and now, only me and Yorick are left.”<br><br>

“Ahh… they’re all gone… I’m the only one left… I… I’m the only…”<br><br>

This last note was covered in tears, the rest of it was all illegible. Yorun-leusan fell in the year 2000, after the largest wave of Voruteuts in history. Finally, after years of loneliness, all alone in the place she called home. The memories of the others rushed in, all of them, but, now, they were all gone. Rakmou-leusan stopped writing notes after this, not because she didn't care, but because, by herself, she had no time. She wanted to protect the Hytoth, to carry on the wishes of her fallen comrades.`
}];