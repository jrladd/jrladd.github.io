#! /usr/bin/env python

import glob

files = glob.glob('A*.xml')

for f in files:
    with open(f, 'r+') as xml:
        content = xml.read()
        xml.seek(0, 0)
        xml.write('<?xml-stylesheet type="text/xsl" href="teibp.xsl"?>' + '\n' + content)
        xml.close()
