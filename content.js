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
Amid a desolate salt pan, a shimmering golden cathedral stood. Inside it were several pillars, in the middle of them were pearls which glowed an eerie, faint, red, illuminating the otherwise dim cathedral. In the centre, a massive stained-glass illustration of a demon, with red eyes, alongside the demon’s other eyes, many hands, and a red robe.<br><br>

Then, outside the cathedral, a massive red staff with gold accents, an endlessly changing blue orb sat in the middle of it. This staff fell onto the surrounding salt pan. The staff easily destroyed the small planet, while also destroying ten pillars near a door to nowhere.<br><br>

The world collapsed, and the universe fed into one singular point, a singularity of every single story in existence. From the most well-known, most loved, to the least well-known, forgotten stories made by cavemen in the halcyon days of yore.<br><br>
* * * * *
Across the sands of the Infinite Shore, the shore of universes outside the bounds of the story that will be told, slept a dragon.<br><br>

It surrounded the shore. It surrounded the Tree of Creation.<br><br>

The dragon was dreaming in the depths of nothingness, Voru.<br><br>

The dragon was dreaming in the heights of the absolute void, Gwaktód.<br><br>

The dragon was dreaming in the depths of a backwater planet, Earth.<br><br>

The dragon was dreaming in the depths of time itself.<br><br>

The dragon was dreaming the past, the past within the future, the future, the future within the past, the past within the past, the future within the future. The dragon dreamed of stories, stories within stories, stories that didn't exist, couldn't exist, shouldn't exist, stories that weren't written, stories that had been forgotten, stories reconstructed.<br><br>

In truth, the “dragon” is not entirely a dragon. The dragon is a complex web of nodes that just happens to resemble a dragon. Maybe it was intentional, though the idea that the dragon only resembles a dragon is due to the mind being incapable of comprehending it as anything else is more compelling. The dragon was like a tree, whose branches, eyes, wings, whatever you choose to call them, they’re creatures conquered by it, these branches swirled around the vastness of Gwaktåd as the dragon slept. The branches were always shifting, no form suited them, no creature could define them. Some were vaguely humanoid, most were not.<br><br>

Then, the staff which was destroying the planet destroyed the Tree of Creation, the tree of trees, everything that existed in existence, peaceful worlds with powerful beings, organisations containing the anomalous, stories of eldritch horrors all coming down to take over worlds, a dreamer who dreamt their own universes. You could call the tree “Babel,” if you so pleased, after all, the Tree contained every story that ever would be told, could be told, minor alterations that generated a new book within this massive Tree. Think of a story you’ve read, maybe… The Call of Cthulhu, or The War of the Worlds, these books, along with all other books that have ever existed, are simply just a “component” of the Tree of Creation. These stories within the Tree form as universes, multiverses, and narratives. These stories are all nodes of the Tree… which to perception, appears to just be the branches of the Tree, and its roots. The dragon's branches were first to notice the destruction of the Tree… The staff ended the concept of “beginning” for the Tree, the staff warped time to shatter the Tree when it was being planted.<br><br>

Some beings glared at the staff destroying the newly planted tree, though without much interest, for them, it was a past already over, a past gone and forgotten, it was the future yet to happen, the future that already happened, but there was no “present.” For these beings, “now” didn't exist.<br><br>

The Infinite Shore, too, began to shrink, the grains of sand which made it up were falling in on themselves, turning into a singularity, becoming a singular stream of universes colliding into each other. The entities there resembled deities of all different religions, those forgotten, and others…<br><br>

Back in the present, the future, the past, the past within the past, future within the past, the distinction doesn't matter, it's just a time, it was when the dragon awoke, it dreamt itself wakening, dreamt itself dreaming its wakening, no matter how high up you went, the dragon was always wakening, until, as if no time had passed, since there is no notion of “time” in this spaceless location, the dragon woke up from the countless dreams it had dreamt.<br><br>

The dragon watched the staff destroy the Tree, it saw the beings which cared not for the Tree's destruction, and then, the dragon appeared everywhen, and, ejected the staff from the tree, and shattered it, and its pieces fell to the depths of Voru.<br><br>
* * * * *
Back in the salt pan, a woman with a striking black robe with long sleeves, which hid her eyes, on the robe were ears resembling the ears of Anubis. Her robe had gold and purple accents, while she wore a dark purple and black dress beneath her robe, and chains dangling off it. Intangible, changing, shifting, the future became the present, the present became the past, and the past became the future, everything, at the woman, all of it intersected, much like the beings watching the destruction of the Tree of Creation being destroyed… nothing could be set in stone about her… her form appeared to be bubbling, the universe, the multiverse, space and time, were all mundane components of her being. For a second, it was like her bubbling form ruptured, but this “rupture” was yet another mundane component of her being. Even the dragon which fixed the Tree of Creation was yet another mundane component of her.<br><br>

[U̱hŵkia sö ʒerd…… U̱ƥrčik „Wukong“ flənidis sənź u̱mkꝛpik ənƙrek „Ruyi“…… U̱ŵkrsia ʒerd i̕ỻi…… Neka rc̥pia ʒerd…… Plc̥ia ɓu̱heo ceder zejnes…… ñeðnsia ʒerd ƭed.]<br><br>

I apologise, it appears some Ortothan has slipped through the cracks, humans, you readers can’t read Ortothan. I’ll fix this error:<br><br>

[As expected…… Wukong destroyed the planet without controlling Ruyi’s strength…… I warned him…… yet now I must handle the clean-up. The main event lies in the future…… I’ll have to deal with this again.]<br><br>

The woman spoke in a high-pitched voice, there could be multiple explanations, but no voice naturally sounds like that… something akin to a voice changer would be a best fit for what came out of her mouth. The bubbling, at this point, had calmed down, the bubbling occurred because of the destruction of the Tree of Creation, as if she was the Tree itself, though, I will say now, she is not. She most certainly is correlated to the Tree, however, she is not the Tree, she is not Creation.<br><br>

[Let's see…… the collapse of the Tree has been fixed…… all narratives are separate…… The Shore is endless yet again…… past…… present…… and future have been untangled. That should be all……]<br><br>

The woman lightly sighs, her magic circle dimming as well, before vanishing into thin air. In another area of this Salt Pan, around the many pillars with bas-reliefs, where a Devourer has been chained for life, a creature appears… or, more so, it's a guard, who has always been there, it just is “invisible.” But so is the woman. Clouded in layers, and layers, and layers of antimemes, the woman is basically invisible…… or, more bluntly, “she's easy to forget.” The creature does notice something off, there is something here, but where, who, and why, are a complete mystery. It can look past the woman, and not notice a thing. But it had to find something, it knew there was something, so it unravelled its tendrils, which created a massive circle; the woman simply jumped up, as her robe vanished, for a second, the world bubbled into nothingness, for a second, everything happened at once, for a second… Without a robe, her appearance could be mistaken as a bisque doll, her wavy blonde hair glimmered in the salt pan that surrounded her. Her outfit was gray, and form-fitting, with black accents, it appeared to be the outfit of an assassin, or something similar. The colour of her eyes was a light blue, though the colour changed intensity, and on her face, she had a white opera mask on, its intricate designs contrasted the plain white that it was; multiple feathers were on the right side of the opera mask. Placed around her entire outfit were pouches, seemingly with no pattern as to where they were placed, but always in the most necessary places. She was an assassin, function was superior to form, although her outfit was definitely “nice-looking”. As for her height? She didn't look tall, but was tall, she didn't look short, but was short, to her, height didn't matter.<br><br>

She took out a dagger, it was a silvery dagger, shining like the moonlight, she threw it at the creature…<br><br>

[A Ŵi̕ltəjə~~ really? That's the guard of the Devourer…… they're pathetic.]<br><br>

The Ŵi̕ltəjə tried to dodge the dagger, but many more daggers fly in from all directions. As the Ŵi̕ltəjə finally touched base with the ground, the woman threw down her dagger.<br><br>

[Oh… you talk all that, but now you're accepting your loss? Of course you would! Jeser granted me power! I could never lose!]<br><br>

[Far from it~~ I’m claiming my victory. And…… as for your second claim~~ we'll see about that.]<br><br>

[Wha-]<br><br>

In an instant, the Ŵi̕ltəjə is skewered by large black nails, that coalesced from the shadows of the Ŵi̕ltəjə and skewered him. The nails pierced the sky, if there was a sun, it would be completely blotted out by these nails.<br><br>

<div class="afterword-section">
    <h2>Afterword</h2>
    <p>By the way, if you expect complete seriousness in every part of this story, you should stop reading. As a side note, the afterword will always be some sort of gag.</p>
    <p>??? ??????: What… why is this story so serious!? And what's with the power levels? I know these characters are very powerful, but for Chapter 1, this is too much! We're not powerscaling here!</p>
    <p>Author: I got bored, so I included shitty power levels. Be happy I didn't say shit like "The woman is infinite layers into boundless, and can destroy omniverses with ease."</p>
    <p>??? ??????: That doesn't make it any better!</p>
</div>

<div class="author-notes">
    <h2>Author Notes</h2>
    <p>Hello. What the hell is this? Why is there a 6 (ỽ) in the middle my manuscript? And who made this o, christian (ð)? And why is there a weird H (ỻ)? And theres this.. Weird tongue sticking out at me (þ), there's even weird hats above the letters! How strange. Many stories are full of weird oddities, and my story isn't any exception. The voiceless alveolar lateral fricative, the /ɬ/ sound, also known as the sound that 99% of the world population messes up so badly it makes you wonder if God really did abandon Earth, usually, in languages like Welsh, you can find it as a double l, but in my story, because it's my story, you can find it written like this: ỻ. This one looks like 2 penguins holding hands…</p>

<img src="twopenguinsholdinghands.png" alt="ỻ"><br>

<small>Image courtesy of Cambrian Chronicles of YouTube, licensed under CC-BY-SA 4.0.</small><br>

<p>The letter Eth, or ð, is commonly found in icelandic languages, but I don't see any ice here… or land! But ð represents the /ð/ sound, and is a Christian too. Then there's the tongue sticking out at me, þ, which represents the /θ/… now finally, we get the fun one, the one I like best, the 6. Well, it's not actually a six, I like it because it's my favourite letter of all time, the Middle Welsh V, or ỽ, it represents the /Ỽ/ sound. So then, why are all these letters, alongside the ones with dapper hats, here? There's a simple explanation for that… I like making conlangs, and I like these letters.
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
    content: `A Ŵi̕ltəjə by itself is no trouble, the woman knew that, but what she did also know was that “There was something else.” The Ŵi̕ltəjə mentioned it, “Jeser granted me power.” He said it himself. So Jeser is here… and the woman knew it. <br><br>
    
Much akin to a magician using party tricks, the woman took out a dagger, it was a brilliant gold, shining in the brilliance of the sun-void salt flat… The dagger flew over the horizon, to the distance… Jeser only barely dodged it. Calmly, the woman appeared right next to Jeser.<br><br>

[So you're here… “Prince.”]<br><br>

[You—I have a name, you know!?]<br><br>

Jeser, surprised, inched backwards… Their voice was a mix of both a male, and female. You couldn't tell which voice truly belonged to them, only that one simply didn't belong to them.<br><br>

[I do know, but it's not really like I care. To me, you're just the prince of Ɑiv-Zo̕n. You lost your name when you joined its side.]<br><br>

[Hmph… I don't even remember giving my name to a Fae.]<br><br>

[Ɑiv-Zo̕n is ever-changing, he was “defined” as a Fae, therefore when you pledged your allegiance to him, you lost your name.]<br><br>

[Tch… even if the Scarlet King became a Fae in the future, that doesn't mean that the “whisper” I heard, and pledged allegiance to, was a Fae.]<br><br>

[You don't understand how the Law of Blood works.]<br><br>

[What do you know about it?]<br><br>

[<b><u>The Law of Blood</u></b> is a malleable law that defines all that Ɑiv-Zo̕n embodies…… if someone believes Ɑiv-Zo̕n is a Fae……. It has always been a Fae.]<br><br>

[But… I heard a “whisper.”]<br><br>

[What you heard is of no matter…… Ɑiv-Zo̕n is defined as such…… and because it is defined as such, it is such. It has always been such.]<br><br>

[Well, whatever, I pledged my allegiance to the Scarlet King. You cannot change that.]<br><br>

[Oh, really?]<br><br>

[What do you mean, are you implying you can change that?]<br><br>

[Maybe I can…… how would you know I can't? I know everything there is to know about everything…… Hell—I could provide any information that you desire…… haven't you been on a quest to discover your past?]<br><br>

[How did you—ah, I guess that makes sense, if you really do know everything there is to know about everything… no matter how confusing that statement may be. Fine, let's see if you can give me the information.]<br><br>

The world turned… black(?) it was at the very least extremely dark. It would be the perfect prison, except it wasn't a prison at all. Inside this “prison,” it's more of a room, the woman sat. When exactly she created this room, made tea, and sat down, is hard to figure out. But, we have all the time in the world to do so, don't we?<br><br>

[What the… why'd you make this? To imprison me?]<br><br>

Jeser laughed, it was an eerie sight, they were about to fight this. How could anyone beat a woman who simply just “created” a room for no apparent purpose, a room so impenetrable…<br><br>

[It's a good prison…… you are correct…… it could keep almost anyone in…… but it can also keep everything out.]<br><br>

[So you don't want anyone hearing this, then?]<br><br>

[Especially not Ɑiv-Zo̕n……]<br><br>

[Alright then, tell me.]<br><br>

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
        <li><a href="https://scpwiki.com/dust-and-blood" target="_blank" style="color: #FACADE; text-decoration: none;">"Dust and Blood"</a> by Djoric, from the SCP Wiki. Licensed under CC-BY-SA. — The Scarlet King is the one talking to Jeser during the story and is also referred to as “The Scarlet Sinner” by Krulåva .</li>
        <li><a href="https://scpwiki.com/second-hytoth-hub" target="_blank" style="color: #FACADE; text-decoration: none;">"Church of the Second Hytoth Hub"</a> by NatVoltaic, from the SCP Wiki. Licensed under CC-BY-SA. — Voruteuts are mentioned in the story, and the host of Jeser is one.</li>
        <li><a href="https://scpwiki.com/scp-435" target="_blank" style="color: #FACADE; text-decoration: none;">"SCP-435"</a> by sandrewswann, from the SCP Wiki. Licensed under CC-BY-SA.</li>
    </ul>
</div>`
}, {
    title: "Jeser",
    content: `Jeser waited for a response in the dim, dark room… where nothing could be heard. The woman sipped her tea, before she stood up, walking to an empty wall… where she pulled out a “book.” From absolutely nowhere.<br><br>
    
[Where did you get that from!?]<br><br>

[This room is connected to the three Trees…… you can visit the Tree of Life…… the Tree of Knowledge…… and the Tree of Creation. I got this one from the Tree of Knowledge. It details everything there is to know about your past. I have…… of course…… memorised it all.]<br><br>

[I will detail your past…… from beginning to end.]
* * * * *
Long in the past, there wasn’t much of anything. Well, everything was there, but it was barren, chaotic even. Such was the First Hytoth. A man usually sat around in a universe, watching the world, as it existed. He was married, not exactly now, but in both the past, and the future, he was. His clothing wasn’t standard, a massive blue and gold coat, a necklace, and black boots; he wasn’t old, but he wasn’t young either. Though he most certainly did look young.<br><br>

Many young children all watched as the man messed around with a bracelet, twirling it around on his hand, before he, uncharacteristically, dropped it. It smashed through the railing with a thud, destroying it, and much of the ground below it. The young children looked shocked, not only because of the heaviness of the bracelet, but also the man’s uncharacteristic dropping of it.<br><br>

Then, one of the children, squeezing through the crowd, tried to pick up the bracelet. No one believed he could do it. But the child, Jeser, as it turns out, did pick it up, a raging black flame consumed his hands… but he was fine.<br><br>

The man picked up the bracelet from Jeser’s hands, and put it on his wrist. The man was Nefel, the “everythingness” of the universe. Jeser was a disciple of his, as were the other young children. Teaching was one of the many things Nefel could do. He taught combat, but he also taught “magic.” It wasn't true magic, they were tricks, tricks that anyone could replicate, but only the best could fool anyone with it, and use it to their advantage.<br><br>

Sometimes, they were taught how to fight with a spear from Rakmu̱-ỻeųsan-, the partner of Nefel. Rakmu̱-ỻeųsan- was a good spear fighter, the Holy Fourth, the one who would go on to protect the Hytoth… but not right now, right now, “she wasn't even born yet.”
One day, neither Nefel nor Rakmu̱-ỻeųsan-, were in their home. The young children were baffled. When they saw him, Nefel… he was fighting. They'd seen him “fight,” but never at 100%. This wasn't 100%, but the children believed it was. Many Voruteuts were rushing out of the Voreik, they seemed like they were brainless… and being controlled by someone.<br><br>

Using a cutlass they'd never seen before, he destroyed some “pills” above the heads of the Voruteuts, which caused them to collapse—but they were not dead. Rakmu̱-ỻeųsan- did the same, she, too, was fighting off the horde, trying to protect this universe. But, there was a being, who was watching… Nefel noticed it, the Scarlet King, but it wasn't called that yet. It just went by Harak…<br><br>

Harak was defined by the Law of Blood, it was malleable, and, despite, at the time, only being a “whisper” it could easily take any of its multitude of forms.<br><br>

It stole the children.<br><br>

Nefel couldn't act fast enough. He had time, but Harak had something else. Its formless shape created a “shard”, a shard of contradictions… it wasn't omnipotent, but it could hold off Nefel, for now. But not forever.<br><br>





Jeser burned Harak's arms in an attempt to escape… and he escaped Harak's hands… Harak grinned, as Jeser ran towards Nefel…
The shard of contradictions can “force suggestions” on almost any being. Using this, Harak used a suggestion “strike down the child” on Nefel. Nefel, who was, surprisingly, tired, couldn't resist… and all Jeser really knew was that he was betrayed.
Harak saw potential in Jeser, but Jeser was far too kind. Jeser had to be groomed into a perfect being, capable of, potentially, defeating Nefel… brainwashing was something Harak excelled in, after all.
* * * * *
When the woman finished the story, they exited the room. Outside, a short girl waited. Her clothing was a brilliant white, and her eyes were red… in nature, she appeared both divine, and machine.<br><br>

[Ciel…… did you finish altering the information that Ɑiv-Zo̕n will receive?]<br><br>

[What do you mean altering…? And is that a .taim unit?]<br><br>

[Apologies, lord Jeser, I will answer your questions. I am Ciel.taim, one of the Spatio-temporal Artificial Intelligence units. As for altering the information, Ɑiv-Zo̕n, or as you call it, the Scarlet King, is expecting a battle between you two, and some information. In this case, I have lied, even made an agreement, saying “Jeser will give Ɑiv-Zo̕n information, and Ɑiv-Zo̕n will, in return, tell Jeser’s past.” This is so that you can hear his side of the story, and weigh the information, choose whichever story you want to believe.]<br><br>

[But… aren’t you guys trying to get me on your side?]<br><br>

[Yes, we are, but artificially forcing you on our side is not our intent. We intend to wholly bring you on our side, with you being completely and utterly willing to do so.]<br><br>

[I… see… I have the innate desire to listen to the “whisper” but it’s fading now… I think once it’s faded, I may be able to join.]<br><br>

[I should warn you, Ɑiv-Zo̕n is not going to easily let you betray it. Ɑiv-Zo̕n might even find out, I'd be careful. I've set up a communication channel to any taim unit in the area, so you should be able to find support anywhere, or give information anywhere. You might even find some spies in the midst. Ellie, Clef, and Clepta are 3 you should be able to find there.]<br><br>

[Thank you for the help.]<br><br>}]`
}];
