#! /usr/bin/env python
# -*- coding: utf-8 -*-

import glob,json

filenames = glob.glob('*/')

j = open('../../EEBO/case_anthologies/case_anthologies.json', 'r').read()
tcp = json.loads(j)

newfile = open('index.md', 'wb')
newfile.write('---\nlayout: default\n---\n\n#Index of Miscellanies\n---\n\n')
for r in tcp['records']:
	print r['TCP']
	for f in filenames:
		print f[:-1]
		if f[:-1] == r['TCP']:
			newfile.write("**Author:** "+r['Author']+'\n\n')
			newfile.write("**Title:** "+r['Title']+'\n\n')
			newfile.write("**Date:** "+r['Date']+'\n\n')
			newfile.write('**STC:** '+r['STC']+'\n\n')
			newfile.write('['+f[:-1]+'](/miscellanies/'+f[:-1]+')\n\n---\n')
			
newfile.close()