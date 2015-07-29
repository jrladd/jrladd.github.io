#! /usr/bin/env python
# -*- coding: utf-8 -*-

import glob

files = glob.glob('*.md')

lines=[]
for f in files:
	lines.append('mkdir '+f[:-3]+' && mv '+f+' '+f[:-3]+'/index.md\n')
	
newfile = open('create_folder.sh', 'wb')
newfile.writelines(lines)
newfile.close()