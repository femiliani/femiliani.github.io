---
title: 'Cloning for all #1 - Gibson Assembly'
date: 2022-04-08
permalink: /posts/2022/04/cloning-for-all-1/
tags:
  - CloningForAll
  - Gibson Assembly

---

In the first #CloningForEveryone session we will look at Gibson Assembly, which in my opinion is the most worthwhile to learn because it will let you clone almost anything. And once you know the secret to it, it's as easy as restriction cloning.


How does Gibson assembly work?
======
The goal of these posts are not to bog you down in detail, but I think it is helpful to understand the principle of Gibson assembly. People familiar with restriction cloning know that it works by creating single stranded DNA (overhangs) by cutting with restriction enzymes, by creating complementary overhangs between two pieces of DNA these can anneal and be ligated together. Gibson assembly does the same thing, except that instead of relying on restriction sites to create overhangs it requires homologous DNA sequences (incorporated by PCR) between the backbone and the insert. This homology is double stranded, what happens next?
* exonuclease chews back 5' -> 3' leaving an exposed 3' overhang, this happens on both pieces leaving complementary overhangs that can anneal
* unlike in restriction cloning the overhangs can be different lengths so a polymerase in the mix fills in the gaps
* once the gaps are filled the DNA is ligated

For those interested in more detail here is a link to the [original Gibson assembly paper](https://www.nature.com/articles/nmeth.1318?report=reader) and here is the [NEB product information](https://www.neb.com/products/e5520-nebuilder-hifi-dna-assembly-cloning-kit#Product%20Information). 

When to use Gibson Assembly
------
Gibson assembly can replace restriction cloning, especially when there are no convenient restriction sites in your vector or insert. In addition it can be used to assemble plasmids from multiple fragments (I've never had to use it for more than 6, but there are plenty of reports it can do more). Gibson assembly creates seamless assemblies, i.e. you are not limited by having the restriction site between fragments when you bring them together. 

When to avoid Gibson Assembly
------
Gibson requires PCR to add homology to either the insert, vector, or both. If you are limited to a region that is very repetitive or GC rich and can't produce clean PCR products it will hurt efficiency (but it can still work if you are desperate). Additionally, and this took a lot of pain to learn, Gibson fails when the pieces you are trying to put in are very similar to each other. For example many CRISPR-screens are now using dual sgRNAs, these are usually created by having two U6 promoter + sgRNA + scaffold, even if you PCR on unique 20-30mers on the end of these U6-guide blocks the sequence inbetween is similar and efficiency takes a massive hit. To assemble these kinds of plasmids I recommend Golden Gate (which will be next weeks topic).

Planning your cloning
------
There are a lot of tools out there for Gibson cloning design. They are confusing to me. Gibson is incredibly powerful and so my suggestion is to design the plasmid you want, and the cloning will work. 

I'm going to walk you through a theoretical cloning project. I picked this example because there are no convenient restriction sites and this would be a nightmare to do with traditional restriction cloning. 

![px459](/femiliani.github.io/images/CFA_1/CFA_1_1.png)
<p float="left">
  <img src="/images/CFA_1/CFA_1_1.png" width="100" />
  <img src="/images/CFA_1/CFA_1_1.png" width="100" /> 
</p>



Original Twitter thread
------

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">In an attempt to pay-forward all the cloning advice I’ve been given here’s the start of <a href="https://twitter.com/hashtag/CloningForAll?src=hash&amp;ref_src=twsrc%5Etfw">#CloningForAll</a>. Today we start with the biggest bang for your buck. Gibson Assembly (GA). Along the way tips and tricks. 1/n</p>&mdash; Francesco Emiliani (@fe_emiliani) <a href="https://twitter.com/fe_emiliani/status/1512440266388647941?ref_src=twsrc%5Etfw">April 8, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Contains a lot of useful comments from people who share their techniques and also literature on cheaper alternatives to Gibson. Keep in mind that the NEB HiFi kit contains multiple enzymes to increase efficiency and also functionality so while these alternative reagents work for generic Gibson they might not work for all applications that NEB lists their HiFi kit can be used for. Refer to the literature to determine what you should and shouldn't use them for.

What reagents do I use?
------
I am not sponsored by any of these companies. I just can confidently say their products work. 

* NEB HiFi master mix - Cat# E2621
* NEB Q5 any will work, we use 2x hot-start master mix -  Cat# M0494
* Thermo Fisher SybrGreen - Cat# S7563

