#! /usr/bin/env python
# -*- coding: utf-8 -*-

import glob

files = glob.glob('*.md')

for f in files:
	md = open(f, 'r+')
	mdstring = md.read()
	newtext='---\nlayout: default\n---\n'+mdstring
	md.seek(0)
	md.write(newtext)
	md.close()