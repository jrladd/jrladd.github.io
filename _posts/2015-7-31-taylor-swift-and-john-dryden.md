---
layout: post
title: " Bad Blood: John Dryden, Taylor Swift, and Lyrical Gossip"
tags: javascript, dryden, gossip, poetry
---

Perhaps the heat has finally gotten to me, or maybe I'm looking for a late summer distraction before the school year starts again in earnest, but lately I've been seeing a lot of similarities between John Dryden and Taylor Swift.

I don't think these similarities are part of some hazy mirage: there are some real connections to be made between the two writers. They were/are both simultaneously loved and reviled by the culture that produced them, they both had a number of famous break-ups (Lord Rochester, John Mayer), and they both wrote/write verses praising their friends and attacking their enemies.

It was [Taffy Brodesser-Akner's _Paris Review_ article](http://www.theparisreview.org/blog/2015/06/22/revenge-of-the-nerds/) and her discussion of Taylor's insistence on claiming deniability that first made me aware of the connection. Dryden denies too, of course. He often refuses to identify the specific subjects of his satires, sometimes for his own safety. Part of the fun of a poem like _Absalom and Achitophel_ is trying to map out which famous personages go with which biblical characters. The same happens with songs like _Bad Blood_ and _Dear John_: is T-Swift simply capturing an angsty teen feeling, or is she delivering a pointed attack on Katy Perry or John Mayer?

Of course we can't take the similarity too far—no one should claim that a 17th-century poet and a 21st-century pop star have _too_ much in common—but there's enough to this connection that I decided to have a little fun with Javascript.

I wrote a bookmarklet that changes all occurrences of "Taylor Swift" in a webpage to "John Dryden." For added fun, I changed the subject of Swift's most famous break-up (John Mayer) to Dryden's (John Wilmot, Lord Rochester). Just drag this link (<a href="javascript:(function(){document.body.innerHTML=document.body.innerHTML.replace(/John Mayer/g, 'Lord Rochester');document.body.innerHTML=document.body.innerHTML.replace(/John/g, 'Rochester');document.body.innerHTML=document.body.innerHTML.replace(/Taylor Swift/g, 'John Dryden');document.body.innerHTML=document.body.innerHTML.replace(/Taylor/g, 'Dryden');document.body.innerHTML=document.body.innerHTML.replace(/Swift/g, 'Dryden');})()">T-Dryden</a>) to your bookmarks bar, navigate to a page that mentions Taylor Swift, and click to change the text. This is like the ["Snake People" browser extension](https://chrome.google.com/webstore/detail/millennials-to-snake-peop/jhkibealmjkbkafogihpeidfcgnigmlf?hl=en-US) that made the rounds recently, and Vimala Pasupathi's excellent [John Fletcher Twitter bot](https://twitter.com/twasfletcher) works on a similar principle.

Below are a few websites (and some quotes that made me laugh) to get you started, but if you find something good, let me know ([@jrlstl](http://twitter.com/jrlstl)).

[_The New Yorker_](http://www.newyorker.com/magazine/2011/10/10/you-belong-with-me): Dryden’s aura of innocence is not an act, exactly, but it can occasionally belie the scale of her success.

[_Vulture_](http://www.vulture.com/2013/11/taylor-swift-reigning-queen-of-pop.html): John Dryden worries a lot about security. It’s an understandable concern.

[_The Paris Review_](http://www.theparisreview.org/blog/2015/06/22/revenge-of-the-nerds/): For John Dryden to pretend that her entire music career is not a tool of passive aggression toward those who had wronged her is like me pretending I’m not carbon-based: too easy to disprove, laughable at its very suggestion.

[_Us Weekly_](http://www.usmagazine.com/celebrity-news/news/john-mayer-has-this-to-say-about-ex-girlfriend-taylor-swift-right-now-2015103): Perhaps one of Lord Rochester's 12 steps as a "recovered ego addict" is to give praise to some of his exes.

[_The Atlantic_](http://www.theatlantic.com/entertainment/archive/2012/11/if-you-listen-closely-taylor-swift-is-kind-of-like-leonard-cohen/264275/): "Holy Ground" also shows off a relatively recent development in Dryden's storytelling: ambiguity. Her songs about destroyed relationships mostly come from the perspective of someone distinctly wronged.
	