---
title: 'Cloning for all #2 - Golden Gate'
date: 2022-04-15
permalink: /posts/2022/04/cloning-for-all-2/
tags:
  - CloningForAll
  - Golden Gate

---

On the second installment of #CloningForAll we look at Golden Gate. Have you ever thought "wow restriction cloning is so easy but having restriction sites between my fragments is ugly"? Read on for the best of both worlds. 


What is Golden Gate?
======
GG is restricton cloning with a fancier class of restriction enzymes (RE). What's the difference? The REs you are likely familiar with cut within their recognition site. This means that everytime EcoRI cuts it produces the same overhangs. GG is performed with TypeIIs REs. They are unique because they cut AWAY from their recognition site. They don't care what the sequence they cut is. And therefore we can make it whatever we need. 
<p float="left">
  <img src="/images/CFA_2/CFA_2_1.png" width="600" />
</p>
This is important because ligating two frags cut with EcoRI will reconstitute an EcoRI site, and it will sit there between your frags. But we can design T-IIS sites that drop out and leave only the overhang. Seamless assembly!


Why Golden Gate?
======
When to use GG? Like Gibson it can handle multi-fragment seamless assemblies (30++) because there is no chewback it will work when the fragments share similarities. Eg for simultaneously inserting two U6 promoters fragments. 

You will often find TIIS dual sites for common drop-in plasmids, eg a sgRNA sequence into a U6+scaffold. In a future post I'll explain why Gibson is more convenient when designing multi-sequence drop-ins for things like KO-screens. 

Unlocking the potential of Type IIS REs
======
