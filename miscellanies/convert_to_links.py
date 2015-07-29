#! /usr/bin/env python
# -*- coding: utf-8 -*-

import glob,json

filenames = glob.glob('*.html')

j = open('../../EEBO/case_anthologies/case_anthologies.json', 'r').read()
tcp = json.loads(j)


for r in tcp['records']:
	for f in filenames:
		if f[:-5] == r['TCP']:
			print "Author: ",r['Author']
			print "Title: ",r['Title']
			print "Date: ",r['Date']
			print '['+f[:-5]+'](/miscellanies/'+f+')\n'