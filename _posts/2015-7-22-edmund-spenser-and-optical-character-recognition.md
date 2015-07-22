---
layout: post
title: " Edmund Spenser and Optical Character Recognition"
tags: ocr, python, hdw
---

All DH tasks, even the most automated ones, are supported by the efforts of human investigators, who often spend countless hours entering and cleaning up data. At the HDW summer workshop, teams of faculty, staff, librarians, and undergraduate and graduate students spend 8 weeks sharing this kind of work on a wide array of digital projects.

With this many people working energetically over a short period of time, questions naturally arise about _efficiency_: when is it better to commit a whole team to a manual task for a few days than it is to spend those days working out an automated solution? I raised this question several weeks ago as part of my work on the Spenser project, a digital edition of the works of Edmund Spenser. 

##The Problem

In order to create the text of our edition, students check the xml transcripts on our archive site against scans of the early printed editions of Spenser’s printed works for accuracy in an effort to reduce the number errors in the archive transcriptions before the editors review the transcriptions and call for emendations. This checking process (affectionately called “raw dates” after a disappointing attempt at healthy snacking) involves three individuals working together. One person reads the transcript of the text aloud, spelling out any unconventional word. In the Spenser corpus, most words must be spelled aloud because of inconsistent orthography. Another person looks at scans of the control text on which the transcript is based; in our case this summer, this was the 1596 edition of Book IV of _The Faerie Queene_. And a third person looks at the scans of the text that is being reviewed for the first time, in this case the 1609 edition of Book IV of _The Faerie Queene_.

As the first person reads, the other two call out when they see variation between the transcript and their copy. In this way, we’re able to check our transcript of the 1596 edition and create a new transcript of the 1609 edition, while noting all points of variation between them.

This is not an error-free process, but it is very accurate. Most of the transcripts for the Spenser project that exist so far have been checked using “raw dates.” Unfortunately, “raw dates” takes a very long time to complete. It takes three people three hours to check a single canto of _The Faerie Queene_. Nine person-hours of work is a considerable time investment for this relatively small amount of text. At 12 cantos per book for six books, it would take three people 216 hours to complete the poem. That would be 36 of our 6-hour HDW workdays: almost the entire 8-week workshop.

We began to wonder if there weren’t a better, automated way of creating and checking transcripts, one that would be just as accurate as “raw dates” but much less labor-intensive.

##Two Proposed Solutions

We devised two quicker methods for creating a transcription and checking it: one human and one machine. We stopped “raw dates” after completing Book IV and devoted our time to testing these new methods before starting on the other books of _The Faerie Queene_.

The human method sounds almost too basic to be effective: one person simply types up a canto as quickly and as accurately as possible. It should be noted that [EEBO-TCP][tcp] used this method to produce one of the largest academic corpora of digitized print material, and it was their success that inspired us to try it. The TCP has two different people type up the same text, and then compares the texts to produce a more accurate transcript. (They use non-native speakers, to thwart conscious and unconscious guessing based on linguistic and cultural competences/prejudices.  We don’t replicate this caution.) Since we already had a transcript of the 1596 edition of the text, we opted not to type twice.

Instead, after one diligent undergraduate finished typing a transcription of the 1609 edition of Book IV Canto x of _The Faerie Queene_ (our test text for this experiment), we compared the new 1609 transcript to our original 1596 transcript using a simple Python script. We then had a different student go over the differences between the two transcripts, noting when a difference was the result of a real variant between the 1596 and 1609 editions, and when a difference was the result of an error in our 1609 transcript. After that, it was a simple matter to produce a corrected version of the hand-typed 1609 transcript.

The other method we tried involved Optical Character Recognition (OCR). Recently investigators at [EMOP][emop] have had success with late-17th and 18th century print. We tested some of EMOP’s trained OCR models on _The Faerie Queene_, but we decided that we should train our own model to account for the idiosyncrasies of the early 17th-century folio.

We trained the program we chose, [OCRopus][], on Book IV Canto ix (IV.ix) of _The Faerie Queene_, and ran that trained model on IV.x, the same canto that we typed. We checked this OCR transcript in the same way: first we ran a Python script to locate differences between the new transcript and the 1596 transcript, and then a student with fresh eyes looked at that list of differences to determine which were legitimate variants and which were OCR errors. Unsurprisingly, OCR produced more errors than hand-transcribing, but in terms of the level of technically “difficulty” it performed very well, producing a large but manageable number of errors.

##Results

We were interested in testing two measures: speed and accuracy. Our initial assumption was that OCR would be faster while hand-transcribing would be more accurate, but the results surprised us.

OCR takes no time to run in the command line: a student can set it and then work on a different task while it processes. However, it takes about a half hour per canto to pre-process the images. The 1609 _Faerie Queene_ appears in a two column format, and images must be split into columns before the OCR can read the text reliably.

Once images were pre-processed and OCR was run, our test of IV.x produced approximately 700 differences between the OCR transcript and the 1596 transcript. We knew that there were ~350 variants between the 1596 and 1609 editions, meaning that OCR produced about as many errors as it identified variants. It took a student 3.5 hours to go through all 700 variants to clean out the errors. In the end, we produced a reliable transcript of a single canto of _The Faerie Queene_ in 4 hours of work: less than half the time (3 hours for 3 people, or 9 hours) of “raw dates.”

This is a good result, but the number of errors produced by OCR slowed us down more than we would have liked. The hand transcription method, however, exceeded our expectations.

It took a student one hour to type IV.x at a reasonable speed. This resulted in 400 differences between our hand-typed transcript of 1609 and our transcript 1596, meaning that we introduced about 50 errors. These errors were filtered out by a different student in just one additional hour. In total, we spent only 2 hours of work completing a single canto, cutting the “raw dates” time down to a quarter of what it was.

Once we agreed that hand-transcribing was the preferred method for producing transcripts going forward, we conducted a final test of accuracy. Since we had already produced a transcript of IV.x using the “raw dates” method of reading aloud, we compared this transcript to our new, corrected hand-typed transcript. There were 51 differences between the two transcripts. Of those differences, 19 were the result of differences in notation and did not indicate actual errors in either process. Of the remaining 31, thirteen differences were the result of an error in the hand transcription process. That leaves 18 differences that resulted from errors in the “raw dates” process.

Surprisingly, in addition to being much faster, the hand transcription process was slightly more accurate than “raw dates.” And this was only at a first, likely more error-prone, pass: we hope to be even more accurate as we become more comfortable with this method.

---

In my three summers at the HDW summer workshop, I have been impressed with the diligent and thorough work done by the summer fellows. As part of the Spenser team, I wanted to make sure those efforts were being put to the best use. By comparing these methods, we were able to devise a faster, more accurate way of producing transcripts, freeing us up to concentrate on other tasks.

And we had a very productive summer: one member of our team, Noah Weber, color-corrected hundreds of scans of Spenser’s printed books in a batch process; another, Melody Li, OCR’d and corrected the 80-page index of the Spenser Encyclopedia; I produced a concordance of the Spenser corpus to help create a glossary for the edition; and together we edited help screens for the online archive, developed methods for highlighting variants, and more. None of these tasks would have been completed if we hadn’t paused our work of checking transcripts via “raw dates” and run tests on a more efficient method. We are now well on our way to a full transcript of Book I of the 1609 Faerie Queene, and we are doing so with a method that makes the best use of the human effort that has been--and continues to be--the reason for the success  of the Spenser project.

[tcp]: http://www.textcreationpartnership.org/tcp-eebo/
[emop]: http://emop.tamu.edu/
[OCRopus]: https://en.wikipedia.org/wiki/OCRopus
