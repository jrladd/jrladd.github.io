
 <section data-menu-title="Title:  Get To Know Your Computer"></section>
<br>
<br>
## Get to Know Your Computer:
### The Unix Command Line
<!-- #### <i class="em em-thinking_face"></i> <i class="em em-bacon"></i> <i class="em em-computer"></i> -->

[jrladd.com/commandline](https://jrladd.com/commandline)
<br>
<br>
 <small>[John R Ladd](https://jrladd.com/) / [@johnrladd](https://twitter.com/johnrladd) </small>

<small>To navigate, press the arrows <i class="em em-arrow_right"></i> <i class="em em-arrow_down"></i> or hit the space bar</small>

---

### What is Unix? What is the Command Line?

![](img/iknowthis.gif)

<small>Unix: A family of operating systems that includes MacOS and Linux</small>

<small>Command Line (shell): "a program that takes keyboard commands and passes them to the operating system to carry out" ([Shotts](https://nostarch.com/tlcl2))</small>

<small>GUI (graphical user interface): the "normal", visual interface of windows and applications</small>

<small>Synonyms/Acronyms for "command line": CLI, shell, sh, bash, terminal</small>

<!-- <img style="float:left;" width="45%" data-src="img/jones.png">

<img style="float:right;" width="45%" data-src="img/allgroups.png"/> -->


---

### What can you do with CLI?


- navigate your computer
- manage files (create, delete, read, edit)
- run programs
- use programming languages
- access the internet and download files
- combine commands/applications
- count, aggregate, and analyze... anything!


---

### The Basics

- `pwd`: Print Working Directory, see where you are currently

<!-- .element: class="fragment" -->
- `cd <directory/path>`: Change Directory; move to any directory/folder

<!-- .element: class="fragment" -->
- ls: list contents of current directory (or any directory)

<!-- .element: class="fragment" -->
- `mkdir <directory name>`: Make a new directory/folder

<!-- .element: class="fragment" -->
- `<TAB>`: autocomplete any filename or directory

<!-- .element: class="fragment" -->
- `man <command>`: see manual for any command

<!-- .element: class="fragment" -->

---

# But First, Directory Structure

--

### There's No Place Like Home

When you type `pwd` and hit enter you'll see your "home" directory. In my case it's:

```
/home/jrladd
```

In yours it might be "`/Users/yourUsername`" or something else.

This is also written as "`~`"

Typing "`cd ~`" will always bring you home!

--

### Navigating the Filesystem

```
pwd
```
<!-- .element: class="fragment" -->

```
ls
```
<!-- .element: class="fragment" -->

```
mkdir test_dir
ls
cd test_dir
```
<!-- .element: class="fragment" -->

```
cd ..
```
<!-- .element: class="fragment" -->

```
ls De<TAB>
```
<!-- .element: class="fragment" -->

```
man ls
```
<!-- .element: class="fragment" -->

```
ls -la De<TAB>
```
<!-- .element: class="fragment" -->

---

### Manipulating Files

<small>`touch <filename>`: create empty file/change its timestamp</small>
<!-- .element: class="fragment" -->
<small>`echo "<any text>"`: repeat any text to standard output</small>
<!-- .element: class="fragment" -->
<small>`<command> > <filename>`: put any output into file</small>
<!-- .element: class="fragment" -->
<small>`<command> >> <filename>`: put any output at end of file</small>
<!-- .element: class="fragment" -->
<small>`<command> < <filename>`: put contents of file into command</small>
<!-- .element: class="fragment" -->
<small>`*`: any bit of text (So `*.txt` would be all `.txt` files)</small>
<!-- .element: class="fragment" -->
<small>`cat <filename>`: repeat contents of file to standard output</small>
<!-- .element: class="fragment" -->
<small>`less <filename>`: see file in basic file viewer</small>
<!-- .element: class="fragment" -->
<small>`cp <filename> <destination/new filename>`: Copy a file</small>
<!-- .element: class="fragment" -->
<small>`mv <filename> <destination/new filename>`: Move or rename a file</small>
<!-- .element: class="fragment" -->
<small>`rm <filename>`: Remove a file or directory (Be careful!)</small>
<!-- .element: class="fragment" -->

--

### Manipulating Files (cont.)

```
cd test_dir
ls
```
<!-- .element: class="fragment" -->

```
touch test_file.txt
ls
```
<!-- .element: class="fragment" -->

```
echo "Knock, Knock"
echo "Knock, Knock" > test_file.txt
cat test_file.txt
```
<!-- .element: class="fragment" -->

```
echo "Who's there?" >> test_file.txt
cat test_file.txt
```
<!-- .element: class="fragment" -->

```
less te<TAB>
q
```
<!-- .element: class="fragment" -->

--

### Manipulating Files (cont.)

```
cp test_file.txt duplicate_file.txt
cat duplicate_file.txt
ls
cat *.txt
```
<!-- .element: class="fragment" -->

```
mv test_file.txt renamed_file.txt
cat renamed_file.txt
ls
```
<!-- .element: class="fragment" -->

```
rm duplicate_file.txt
```
<!-- .element: class="fragment" -->

---

### Analyzing Files

<small>`wget <URL>`: download a file from the internet</small>
<!-- .element: class="fragment" -->
<small>`unzip <zipfile>`: extract the contents of a .zip file</small>
<!-- .element: class="fragment" -->
<small>`wc <filename>`: counts words (`-w`), lines (`-l`), and characters (`-c`)</small>
<!-- .element: class="fragment" -->
<small>`grep <search term> <filename>`: search within a file or group of files, use `-c` to count occurrences</small>
<!-- .element: class="fragment" -->
<small>`tr '<original_text>' '<replacement_text>' < <filename>`: transform all occurrences of some text with some other text</small>
<!-- .element: class="fragment" -->
<small>`sort`: put anything into alphabetical/numerical order</small>
<!-- .element: class="fragment" -->
<small>`uniq`: reduce a list to only unique items, use `-c` to count them</small>
<!-- .element: class="fragment" -->
**<small>`|`: "pipe" is the Most Useful Operator, move the output of one command to the output of any other</small>**
<!-- .element: class="fragment" -->

--

### Manipulating Files (cont.)

```
wget jrladd.com/inauguralspeeches.zip
ls
```
<!-- .element: class="fragment" -->

```
unzip ina<TAB>
ls
cd inauguralspeeches
ls
```
<!-- .element: class="fragment" -->


```
"How many words are in one file? in all files?"
wc -w 1_washington_1789.txt
wc -w *.txt
```
<!-- .element: class="fragment" -->

```
echo "Who's there?" >> test_file.txt
cat test_file.txt
```
<!-- .element: class="fragment" -->

```
less te<TAB>
q
```
<!-- .element: class="fragment" -->

---

### Thank you!

<i class="em em-bacon"></i> <i class="em em-bacon"></i> <i class="em em-bacon"></i>
