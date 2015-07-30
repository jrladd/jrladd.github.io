#! /usr/bin/env python
# -*- coding: utf-8 -*-

import glob,json

filenames = glob.glob('*.md')

j = open('../../EEBO/case_anthologies/case_anthologies.json', 'r').read()
tcp = json.loads(j)

newfile = open('newindex.md', 'wb')
newfile.write('---\nlayout: default\n---\n\n#Index of Miscellanies\n---\n\n')
for r in tcp['records']:
	print r['TCP']
	for f in filenames:
		print f[:-3]
		if f[:-3] == r['TCP']:
			newfile.write("**Author:** "+r['Author']+'\n')
			newfile.write("**Title:** "+r['Title']+'\n')
			newfile.write("**Date:** "+r['Date']+'\n')
			newfile.write('['+f[:-3]+'](/miscellanies/'+f[:-3]+')\n\n---\n')
			
newfile.close()