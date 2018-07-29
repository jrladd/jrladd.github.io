---
layout: post
title: " Writing a Dissertation in Markdown"
tags: writing, markdown, command line, dissertation
---

I started writing my dissertation this semester, and the beginning of this big new project prompted me to take a close look at the tools I use to write. As I was figuring out what my workflow  would be for the next few years, I found it helpful to read blog posts and essays about the working habits of others. My favorite was Ben Schmidt's [convincing post](http://benschmidt.org/2014/09/05/markdown-historical-writing-and-killer-apps/) on the value of Markdown, and I wound up adopting a method that is close to his recommendations (and to the recommendations of the people he links to in that post).

Now that I've gotten comfortable with my new workflow, I thought it would be helpful---for myself and for, perhaps, someone who like me is looking for a new way to work---to record how I write.

## Building Blocks: Platforms, Tools, and Habits

I abandoned Microsoft Word after I finished my undergraduate degree (now longer ago than I care to admit), and its problems are so familiar that I don't feel the need to rehearse them here: it is slow, it is complex, and it doesn't play well with others. Since then I've been using Google Docs to do the bulk of my writing. This allowed me to work from anywhere, to collaborate easily, and to write without worry that I would lose unsaved work due to a crashed program. Still, there were plenty of problems. Integration with other file formats is much better than it used to be, but transferring between Docs and Word (for student work, or professor's comments) can still be a pain. And sending a converted Google Doc from the Gmail client, though Google made both services, requires a few extra steps of downloading and attaching. Finally, I could never shake the nervousness caused by a writing platform entirely in the cloud. At the end of a writing session, I would find myself copying the work into a plaintext document that I could store locally---just in case.

So I needed a method that provided the flexibility of remote storage with the stability of files that could be easily stored and manipulated. Plus, I use multiple platforms daily, often moving from my iMac to my ultraportable Chromebook, and occasionally popping onto a Linux machine. I needed cross-platform writing tools that would allow me to create documents that looked the same on each machine.

##Flexible Plaintext

The solution to all these problems, for me, is Markdown. Markdown is a plaintext writing format first developed by [John Gruber](https://daringfireball.net/projects/markdown/) and usefully extended by [Fletcher Penney](http://fletcherpenney.net/multimarkdown/) and many others. It has become a popular way to write for the web, and though lots of small variations exist, at its core Markdown is a fairly simple set of rules for formatting text. You use `*` to \*emphasize\* text: one for *italic* and two for **bold**. Headers are marked with one or more `#`. Links are `[embedded](http://url.com/)` in brackets and parentheses. Blockquotes begin with `>`, bulleted lists with `-`, and numbered lists with a simple `1.`, `2.`, `3.`[^1]

[^1]: This post is not intended as a full tutorial for Markdown, but there are many good ones out there. You might start by looking at the original [Markdown syntax](https://daringfireball.net/projects/markdown/).

It was inspired by the conventions of plaintext email, but the better touchstone for me was instant messaging. I got very comfortable using asterisks or underscores in chat sessions as a teen. I was able to learn the syntax very quickly---much more quickly, than, say, raw HTML. And that's the point: Markdown can easily be converted into HTML, but it's much easier to write and to read. And as academics have been discovering in the past five years or so, it can be used for much more than just web writing.

Because Markdown is plaintext, there's no fear that the files you write today will become unreadable in 5 or 10 years time (unlike putting yourself at the mercy of the mercurial Microsoft or Google for future compatibility). My tendency to back up my files as plaintext was no longer necessary, since my files were already written in plaintext. And plaintext can be written in almost any editor. I use the open source [MacDown](http://macdown.uranusjr.com) which was made specifically for Markdown editing, but you could even use something as simple as MacOS's TextEdit.

This flexibility allows you to customize your work environment in ways you never could in a proprietary file format. Many Markdown editors even incorporate familiar keyboard shortcuts---cmd-I for italic, cmd-B for bold, etc.

Still, the transition from a GUI word processor to a plaintext writing format may be daunting for some. The most persuasive case I can make for switching is this: Markdown has helped me to *just*. *keep*. *writing*. Plaintext removes the distractions of complex word processors; I can't say how many hours I've spent fiddling with the exact look of a document rather than focusing on the writing. Markdown keeps me typing rather than clicking through menus. When I need a footnote I just type `^[` or `[^1]` and keep going without switching to the bottom of the page, remembering a three-key shortcut, or finding a nested menu item.[^2] Because everything in Markdown is done with typed syntax, there's little to stand between you and your writing.

[^2]: Footnotes were a later innovation added to Markdown. I find the syntax keeps me writing smoothly and helps me to keep the relation between text and footnote close in my mind. When using Pandoc, there's a similar syntax for citations that keeps you typing without going back and forth to a reference manager menu.

##Syncing and Backup

Markdown makes my life easier by putting my writing into small, easily-preservable plaintext files. But I've gotten used to being able to access my documents from anywhere, so I keep all my files synced with [Dropbox](https://www.dropbox.com/).

You've likely heard of Dropbox already: the popular "cloud" service stores your files on a remote server and allows you to access them from any device. I didn't have much use for Dropbox until I started writing in Markdown: since I was doing my writing in Docs, most of my important files were on Google Drive (Google's competitor to Dropbox). I never found Dropbox that useful for storing Word files or other proprietary file formats---if you found yourself on a computer that didn't have Word or had an older version of Word, the file would be of no use to you.

But Dropbox is the perfect companion to my use of Markdown. The lightweight plaintext files store easily within Dropbox's free limit of 2GB storage, and because Dropbox incorporates so well with native file browsers (like Finder on a Mac), backing up my Markdown files is as simple as hitting cmd-S.

##Converting Documents

From my perspective, Markdown and Dropbox are all I need: I have easy-to-read, organized files that I can access from anywhere. Of course, I'm not writing just for myself, and I need to be able to share my work in any number of file formats. Luckily for me, people much smarter than I am have come up with a solution to this problem. John MacFarlane, himself a humanities scholar, created the excellent [Pandoc](http://pandoc.org/) to convert text files between almost any format.

With a single command, my Markdown files can become HTML pages, Microsoft Word documents, or even PDFs. This allows me to write in flexible and sustainable Markdown while still sharing my files in the familiar ways. The command I use for Microsoft Word conversion looks like this:

`pandoc -S somefile.md -o newfile.docx --filter pandoc-citeproc`

If you've ever used the command line before, you'll recognize this as a fairly simple shell command. If this is totally unfamiliar, using Pandoc is a great way to get accustomed to the command line for the first time---it's a well-documented tool with a simple set of commands that does exactly what it says on the box. For step-by-step instructions on using Pandoc as an academic (including how to combine it with Zotero), I found [this _Programming Historian_ tutorial](http://programminghistorian.org/lessons/sustainable-authorship-in-plain-text-using-pandoc-and-markdown) to be very useful.

Pandoc will convert documents from other formats *to* Markdown as well, so if you're thinking about switching to Markdown, Pandoc can make things very easy. It is the rare tool that works exactly the way you expect, and it makes a great case for why academics should be involved in the design of their tools.

##Citing Sources

I use [Zotero](https://www.zotero.org/) to keep track of all my sources, but beyond using it to generate a Works Cited page, I wasn't fully integrating it into my workflow. I know that Microsoft Word allows you to enter inline or footnote citations with a single click, but Google Docs does not. I'd gotten into the habit of entering citations manually, which means I wasn't taking full advantage of Zotero's usefulness.

Like Pandoc, Zotero is a tool written by academics, and because it isn't beholden to a particular corporate interest, you can export your Zotero bibliography into many different file formats. One of these, the BibTex format, allows a simple way of entering sources into Markdown documents. The syntax is similar to the syntax for footnotes, and you can find more information on exactly how to do this in [the same _Programming Historian_ tutorial I mentioned above](http://programminghistorian.org/lessons/sustainable-authorship-in-plain-text-using-pandoc-and-markdown).

Why is using this syntax, through Zotero, a better way of entering citations? Because unlike manually entering an MLA parenthetical citation or an APA footnote, I'm not tied in to a single citation style. Using Pandoc, I can select the style of citation when I convert my document. If I'm asked to change the citation style, it is a matter of changing a small command rather than manually updating each source. This may not be quite as easy as the Word point-and-click interface for citations, but it is more flexible and it allows me more control over citations.

---

I feel a responsibility to think carefully about how the tools I use might alter my writing process. With Markdown, Dropbox, Pandoc, and Zotero, I can write knowing that I will never lose access to my files, and I can be flexible in the ways I share and distribute my work. This sustainability and flexibility makes my life easier right now and ensures that I am not locked into a proprietary service in the future. Most of all, it strips away many of the GUI distractions of other word processors and allows me to focus on my writing.