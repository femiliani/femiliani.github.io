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
GG is restricton cloning with a fancier class of restriction enzymes (RE). What's the difference? The REs you are likely familiar with cut within their recognition site. This means that everytime EcoRI cuts it produces the same overhangs. 2/n

GG is performed with TypeIIS REs. They are different because they cut AWAY from their recognition site. They don't care what the sequence they cut is. And therefore we can make it whatever overhangs we need. 3/n
<p float="left">
  <img src="/images/CFA_2/CFA_2_1.png" width="600" />
</p>
This is important because ligating two frags cut with EcoRI will reconstitute an EcoRI site, and it will sit there between your frags. But we can design T-IIS sites that drop out and leave only the overhang. Seamless assembly! 4/n


Why Golden Gate?
======
When to use GG? Like Gibson it can handle multi-fragment (30++) seamless assemblies, but since there is no chewback it will work when the fragments share similarities. Eg for simultaneously inserting two U6 promoters fragments. 5/n

You will often find T-IIS dual sites for common drop-in plasmids, eg a sgRNA sequence into a U6+scaffold. Later I'll explain why Gibson is more convenient. 6/n

Unlocking the potential of Type IIS REs
======
Let's look at a sgRNA drop-zone to understand the advantages of T-IIs. Between the U6 and scaffold are two outward facing BsaI sites. i.e. the enzyme sits on the two highlighted portions and cuts outwards towards the U6 and scaffold. 7/n
<p float="left">
  <img src="/images/CFA_2/CFA_2_2.png" width="600" />
</p>

Now we can introduce our guide sequence by annealing two oligos that have the correct overhangs, wow, seamless assembly. Full protocol=https://www.addgene.org/crispr/zhang/ 8/n
<p float="left">
  <img src="/images/CFA_2/CFA_2_3.png" width="600" />
</p>

I find Gibson (specifically NEB HiFi) to be more convenient for this. As I showed you last time, create the final plasmid, copy 25 bases on either end of the guide and follow this protocol: https://www.neb.com/-/media/nebus/files/application-notes/appnote_bridging_dsdna_with_ssdna_oligo_and_nebuilder_hifi_dna_assembly_to_create_sgrna-cas9_expression_vector.pdf?rev=8537d5c90b07406b85b9f2221e2410f6 9/n

Now that we know T-IIs, let's look at GG! In the sgRNA dropzone we saw that unlike TypeII (EcoRI) when our fragment ligated in it didn't re-introduce a cut site. This is how GG can be used to for multi-fragment one-pot assemblies! 10/n

GG uses fragments with RE sites that cut themselves out and exposes overhangs (unique to each junction) so that the fragments come together in the correct order. 11/n
<p float="left">
  <img src="/images/CFA_2/CFA_2_4.png" width="600" />
</p>

The protocol of GG is repeated rounds of cutting at 37C, ligating at 16C, and ends on a cut at 37C! When the correct fragments ligate, they don't reintroduce a cut site and don't cut in the next cycle 12/n 

But if a restriction end ligates back on, it will be cut in the next cycle and have another chance to come together correctly during the ligation. The final cutting ensures that anything that isn't what you want is linear 13/n

Let me walk you through what happens to create the correct matching overhangs. Here I am showing how to add the same overhang to the backbone so it matches the insert. And adding the BbsI sites to expose the right overhangs. 14/n
<p float="left">
  <img src="/images/CFA_2/CFA_2_5.png" width="600" />
  <img src="/images/CFA_2/CFA_2_6.png" width="600" />
  <img src="/images/CFA_2/CFA_2_7.png" width="600" />
</p>

MAKE SURE THE FRAGMENTS AND BACKBONE DONT CONTAIN THE SITE YOU PLAN TO USE 15/n

You do this to all the fragments and you're done. I'm a control freak and like to be able to know exactly what happens to my cloning so I do it manually. You can use NEBridge https://goldengate.neb.com/ 16/n

For the cloning, gel purify the parts and combine them together with restriction enzyme and ligase. You have to take some care that enzyme and ligase are compatible, NEB has great resources for this.  17/n

I also found this protocol really helpful when first starting out http://parts.igem.org/wiki/images/e/eb/Rice_igem_protocols.pdf 18/n

Finally, gibson and golden gate head to head. What are the advantages? Both are great for complex, multi-fragment, seamless constructions. GG handles repetitive sequences in fragments much better. Gibson is much simple to design. 19/n

For both these approaches we looked at PCRing the whole backbone. But with Gibson you don't have to, you can integrate things into 1 or 2 restriction sites and with HiFi chewback make it seamless. 20/n 

I will end it here, for more info and slightly better organization check out the posts I am starting to put together here: https://femiliani.github.io/year-archive/ As always, hope you found something useful! fin. 