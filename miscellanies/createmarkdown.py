#! /usr/bin/env python
# -*- coding: utf-8 -*-

from lxml import etree
import glob,json

files = glob.glob('*.html')

commands = []
for f in files:
	commands.append('./html2text.py '+f+' > '+f[:-5]+'.md')
	
print commands

new = open("createmarkdown.sh", 'wb')
new.writelines(commands)