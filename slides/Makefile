#clean :
#	rm nadah-outcomes.html

nadah-outcomes.html : nadah-outcomes.md
	pandoc -s -i -t revealjs nadah-outcomes.md -o nadah-outcomes.html -V theme=moon --slide-level 2

#slideshow : clean nadah-outcomes.html
