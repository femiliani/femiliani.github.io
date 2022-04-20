---
title: 'Cloning for all #2 - Golden Gate'
date: 2022-04-15
permalink: /posts/2022/04/cloning-for-all-2/
tags:
  - CloningForAll
  - Golden Gate

---

On the second installment of #CloningForAll we look at Golden Gate, or seamless restriction cloning with nearly unlimited fragments! 1/n


What is Golden Gate?
======

Golden Gate is restriction cloning with fancy restriction enzymes. 
<p float="left">
  <img src="/images/CFA_2/CFA_2_1.png" width="600" />
</p>
* The restriction enzymes we all know and love e.g. EcoRI are Type IIP (for palindromic since their recognition site is a palindrome) cut where they bind, every time you cut with EcoRI you create the same overhangs so you can only put together two fragments cut with EcoRI. Every time you ligate two pieces cut with EcoRI you reconstitute the EcoRI site between them. 
* Golden Gate is done with Type IIS (Shifted cleavage) enzymes that recognize one site, and cut away from it. They don't care about the sequence of their cut site, so we can use them to create any overhang we need. Instead of having the recognition site between the two fragments we have seamless assemblies! 

Why Golden Gate?
======
Like Gibson assembly, Golden Gate opens up our world to multi fragment [(30++)](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0238592) seamless assemblies. If you are trying to introduce multiple fragments with homology Golden Gate is much liklier to work because it uses simple ligation of overhangs. I (and others) have found that the Gibson chewback can expose similar regions and create chaos in these situations. Finally, the enzymes required for Golden Gate are cheaper at scale, so if you have a large cloning project (especially if some fragments are common between plasmids) it is a much more economical option. 

Unlocking the potential of Type IIS Restriction Enzymes
======
The true magic of Golden Gate is that you cut away from the recognition site. I am going to use an example that uses Type IIS enzymes to show how they work and then we will get into true Golden Gate. CRISPR, it won a nobel, everybody does it these days. The machinery to express sgRNAs is usually a U6 (250 bp) + guide (20 bp) + scaffold (80 bp) + 6Ts to stop DNA Pol III. Since only 20 bp of that ~350 bp sequence need to change, there's no reason to put that all together every time. Enter Type IIS. Between the U6 and scaffold are two outward facing BsaI sites. i.e. the enzyme sits on the two highlighted portions and cuts outwards towards the U6 and scaffold.

<p float="left">
  <img src="/images/CFA_2/CFA_2_2.png" width="600" />
</p>

When you cut the 2x BsaI fragment drops out leaving unique overhangs. We introduce our guide sequence by annealing two oligos that have the correct overhangs, seamless assembly so that your guide starts at the right base. The position of the guide sequence with regards to the U6 and scaffold are important for its expression and function, so you can't afford to use Type IIP restriction sites that either 1) limit your options sequence wise, and 2) get in the way. 

> For a full description of the protocol you can find a great write up by [Addgene](https://www.addgene.org/crispr/zhang/) referencing the Zhang lab [protocol](https://media.addgene.org/cms/filer_public/6d/d8/6dd83407-3b07-47db-8adb-4fada30bde8a/zhang-lab-general-cloning-protocol-target-sequencing_1.pdf).

<p float="left">
  <img src="/images/CFA_2/CFA_2_3.png" width="600" />
</p>

> It's worth mentioning here that while this approach for guide design has served many well it requires a lot of steps and reagents. Annealing, phosphorylation, etc. I have become a fan of single-stranded Oligo Gibson assembly with NEB HiFi for these kinds of cloning projects. A single oligo and you are good to go. This works great for single guide drops, but where it truly shines is for plasmid library preparations. i.e. when you are trying to introduce a large amount of different sequences into the same drop site to create a library of plasmids. For the full protocol see [NEB's website](https://www.neb.com/-/media/nebus/files/application-notes/appnote_bridging_dsdna_with_ssdna_oligo_and_nebuilder_hifi_dna_assembly_to_create_sgrna-cas9_expression_vector.pdf?rev=8537d5c90b07406b85b9f2221e2410f6)


Let's look at Golden Gate
======

Similar to the guide dropzone, Golden Gate uses recognition sites that create a unique overhang and also cut the recognition site out of the fragment. By creating overhangs that are unique to each joining site you can bring the fragments together in the correct order. 
<p float="left">
  <img src="/images/CFA_2/CFA_2_4.png" width="600" />
</p>

The protocol of Golden Gate is repeated rounds of cutting at 37C, ligating at 16C, and ends on a cut at 37C! When the correct fragments ligate, they don't reintroduce a cut site and don't cut in the next cycle. But if a restriction end ligates back on, it will be cut in the next cycle and give the fragments another chance to come together correctly during the ligation. The final cutting ensures that anything that isn't what you want is linear and won't be propagated. 


Planning your cloning
======
You've seen most of my tricks in the [Gibson assembly thread](https://femiliani.github.io/posts/2022/04/cloning-for-all-1/) I will try to give you a visual of how to create the matching overhangs between fragments so you can understand how this all works. The first step is to make sure that the backbone and fragments dont have the Type IIS enzyme you plan to use (and hopefully avoid spending a significant amount of time finding all the sequences just to find that all the possible Type IIS sites are unusable). This is admittedly one of the drawbacks of Golden Gate and a reason Gibson is easier to design. Recently NEB came out with a new enzyme to try to overcome this [PaqCI](https://www.neb.com/products/r0745-paqci#Product%20Information) has a 7 bp recognition site (instead of 6) and is therefore rarer. 

<p float="left">
  <img src="/images/CFA_2/CFA_2_5.png" width="600" />
  <img src="/images/CFA_2/CFA_2_6.png" width="600" />
  <img src="/images/CFA_2/CFA_2_7.png" width="600" />
</p>


You've seen how to add the same overhang to both ends, one of them should already have it, the other one just needs it PCRed on. Now you do it for all the fragments. I'm a control freak and like to be able to know exactly what happens to my cloning so I do it manually. Normal humans use [NEBridge](https://goldengate.neb.com/)


NEB has some great resources for this, especially for which enzymes/buffers can be mixed. I also found this protocol really helpful when first starting out http://parts.igem.org/wiki/images/e/eb/Rice_igem_protocols.pdf


Wrapping it all up
======
Gibson and Golden Gate head to head. Both are great for complex, multi-fragment, seamless constructions. Golden Gate handles repetitive sequences in fragments much better (an example of this is trying to put 3 sgRNA cassettes in with U6+scaffold, good luck doing that with Gibson). Golden Gate is arguably cheaper since it just uses a little restriction enzyme + ligase. 

Gibson has strengths, it's arguably easier to design. For both these approaches we looked at PCRing the whole backbone to introduce homology arms (Gibson) or correct overhangs (Golden Gate). But with Gibson you don't have to PCR the backbone, you can cut the backbone with 1 or 2 restriction sites that are generally where you need them and PCR homology for the backbone onto the fragments. With the NEB HiFi chewback you can also remove or modify the drop in sites to make it seamless. 

And finally, for single drop ins, and especially libraries. Single stranded oligo Gibson is 100% the way to go. 

Fun literature: [35 fragment assembly with golden gate](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0238592)

And that's a wrap. Hope you found something useful here. Let me know if there's anything you'd like me to cover! Thanks for reading. 


<!--
For Twitter:

On the second installment of #CloningForAll we look at Golden Gate, or seamless restriction cloning with nearly unlimited fragments! 1/n


GG is restricton cloning with a fancier class of restriction enzymes (RE). What's the difference? The REs you are likely familiar with cut within their recognition site. This means that everytime EcoRI cuts it produces the same overhangs. 2/n

GG is performed with TypeIIS REs. They are different because they cut AWAY from their recognition site. They don't care what the sequence they cut is. And therefore we can make whatever overhangs we need. 3/n
<p float="left">
  <img src="/images/CFA_2/CFA_2_1.png" width="600" />
</p>
Ligating two fragments cut with EcoRI will reconstitute an EcoRI site, and it will sit there between your sequences. But we can design T-IIS sites that drop out and leave only the overhang. Seamless assembly! 4/n



When to use GG? Like Gibson it can handle multi-fragment (30++) seamless assemblies, but since there is no chewback it will work when the fragments share similarities. Eg for simultaneously inserting two U6 promoters fragments. 5/n

You will often find T-IIS dual sites for common drop-in plasmids, eg a sgRNA sequence into a U6+scaffold. Later I'll explain why Gibson is more convenient. 6/n

Unlocking the potential of Type IIS REs
======
Let's look at a sgRNA drop-zone to understand the advantages of T-IIS. Between the U6 and scaffold are two outward facing BsaI sites. i.e. the enzyme sits on the two highlighted portions and cuts outwards towards the U6 and scaffold. 7/n
<p float="left">
  <img src="/images/CFA_2/CFA_2_2.png" width="600" />
</p>

When you cut this fragment drops out leaving unique overhangs. We introduce our guide sequence by annealing two oligos that have the correct overhangs, seamless assembly so that your guide starts at the right base. Full protocol=https://www.addgene.org/crispr/zhang/ 8/n
<p float="left">
  <img src="/images/CFA_2/CFA_2_3.png" width="600" />
</p>

I find Gibson to be more convenient for this. You can use a single ssOligo, no PNK, etc. Great for single drops and it's my go to for libraries: https://www.neb.com/-/media/nebus/files/application-notes/appnote_bridging_dsdna_with_ssdna_oligo_and_nebuilder_hifi_dna_assembly_to_create_sgrna-cas9_expression_vector.pdf?rev=8537d5c90b07406b85b9f2221e2410f6 9/n

Now that we know T-IIs, let's look at GG! In the sgRNA dropzone we saw that unlike TypeIIP (EcoRI) when our fragment ligated in it didn't re-introduce a cut site. This is how GG can be used to for multi-fragment one-pot assemblies! 10/n

GG uses fragments with RE sites that cut themselves out and exposes overhangs (unique to each junction) so that the fragments come together in the correct order. 11/n
<p float="left">
  <img src="/images/CFA_2/CFA_2_4.png" width="600" />
</p>

The protocol of GG is repeated rounds of cutting at 37C, ligating at 16C, and ends on a cut at 37C! When the correct fragments ligate, they don't reintroduce a cut site and don't cut in the next cycle 12/n 

But if a restriction end ligates back on, it will be cut in the next cycle and have another chance to come together correctly during the ligation. The final cutting ensures that anything that isn't what you want is linear 13/n

Here I am showing how to add the same overhang to the backbone so it matches the insert. And adding the BbsI sites to expose the right overhangs. MAKE SURE THE FRAGMENTS AND BACKBONE DONT CONTAIN THE SITE YOU PLAN TO USE 14/n
<p float="left">
  <img src="/images/CFA_2/CFA_2_5.png" width="600" />
  <img src="/images/CFA_2/CFA_2_6.png" width="600" />
  <img src="/images/CFA_2/CFA_2_7.png" width="600" />
</p>


You do this to all the fragments and you're done. I'm a control freak and like to be able to know exactly what happens to my cloning so I do it manually. Normal humans use NEBridge https://goldengate.neb.com/ 15/n

For the cloning, gel purify the parts and combine them together with restriction enzyme and ligase. You have to take some care that enzyme and ligase are compatible, NEB has great resources for this.  16/n

I also found this protocol really helpful when first starting out http://parts.igem.org/wiki/images/e/eb/Rice_igem_protocols.pdf 17/n

Finally, gibson and GG head to head. Both are great for complex, multi-fragment, seamless constructions. GG handles repetitive sequences in fragments much better. GG is often cheaper. Gibson is much simpler to design imo. 18/n

For both these approaches we looked at PCRing the whole backbone. But with Gibson you don't have to, you can integrate things into 1 or 2 restriction sites and with HiFi chewback make it seamless. 19/n 

Fun literature: 35 fragment assembly with golden gate https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0238592

I will end it here, for more info and slightly better organization: https://femiliani.github.io/year-archive/ As always, hope you found something useful, and looking forward to learning new things from you all! fin. 
--->
