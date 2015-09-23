#! /usr/bin/env python
# -*- coding: utf-8 -*-

import glob,json,codecs

filenames = glob.glob('*/')

j = open('../../EEBO/case_known/signed_case_all.json', 'r').read()
tcp = json.loads(j)

list = sorted(tcp['records'], key=lambda k: k['Date'])

newfile = codecs.open('test_index.md', 'wb', 'utf-8')
newfile.write('---\nlayout: default\n---\n\n#Index of Miscellanies\n---\n\n')
for r in list:
	print r['TCP']
	newfile.write("**Author:** "+r['Author']+'\n\n')
	newfile.write("**Title:** "+r['Title']+'\n\n')
	newfile.write("**Date:** "+r['Date']+'\n\n')
	newfile.write('**STC:** '+r['STC']+'\n\n')
	if r['Signed'] != []:
		newfile.write('**Signed by:** ')
		for s in r['Signed']:
			newfile.write(s+', ')
	newfile.write('\n\n['+r['TCP']+'](/case/'+r['TCP']+')\n\n---\n')
			
newfile.close()