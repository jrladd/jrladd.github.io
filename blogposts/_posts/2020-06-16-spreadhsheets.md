---layout: post
title: "Working with Humanities Data in Google Sheets"
tags: digital humanities, networks, presentations
---

# Working with Humanities Data in Spreadsheets

*Mainly for Google Sheets, though most/all of this would also work in Excel.*

## Formula Basics

1) Formulas begin with =, and typing "=" usually triggers a bunch of autocomplete suggestions.

2) Formulas were designed to work with *numerical* information. If you've worked with them before, you're probably familiar with SUM() and AVERAGE().

3) A full list of formulae is available using the "sigma" dropdown, to the far right of the Google Sheets toolbar. Formulas can now be used for all sorts of things, including the kinds of data humanities scholars are often recording in spreadsheets.

4) There's lots of Help information for every single formula, usually a click or two away once you start typing a formula.

## Defining Ranges

Most functions take a range of cells as their main argument (what goes inside the parentheses). A range is two cells separated by a colon, i.e. `A2:A30`. Here are some examples:

- To get the sum of the values in the first 10 rows of the first column, you would type: 

```
=SUM(A1:A10)
```

- To get the average of the values in the first 10 columns of the second row, you would type:

```
=AVERAGE(A2:J2)
```

- To get the maximum value of all the values in the first 10 rows of the first 10 columns (i.e., in a whole 10x10 grid), you would type:

```
=MAX(A1:J10)
```

Knowing how to create ranges of different sizes and shapes using this notation can really speed up your work with spreadsheets.

You can refer to more than one range at a time in formulae, by putting all your ranges in brackets. If you want to find the sum of column A in rows 1 through 10, but then also of column B in rows 12-15, you could type:

```
=SUM({A1:A10,B12:B15})
```

Sometimes, when you copy a formula from one cell to another, the range will automatically change. (I.e. if you copy a formula from column J to column K, the spreadsheet software will assume you now care about the values in column K, rather than the ones in J.) If you want to keep some part of your range stable as you move the formula around, you can preface it with a $ sign.

The range `$A1:$A10` won't diverge from column A if you move the formula to a new column. And the range `A$2:J$2` won't switch from row 2 if you move the formula to a new row. The range `$A$1:$J$10` won't change at all no matter where you move it.

Finally, sometimes you want to select an entire column or row. You do this by omitting either the letter or number. The range `A1:A` will select the whole first column. The range `A1:1` will select the whole first row. By this principle, you can also select an entire sheet by using the range `A:Z` (so long as it doesn't have more than Z columns!).

## Referencing Multiple Sheets

When collecting data, it's often easiest to keep things straight by putting data into separate sheets. If you're collecting data on farm animals, you might have one sheet labeled "Cows," another for "Pigs," and a third for "Chickens." But when it comes time to analyze all that data, you might want to look at the same range in all three sheets.

You can refer to a different sheet by putting the sheet name with an exclamation point before the range.To get the sum of the values in the first 10 rows of the first column *in the Cows sheet*, you would type:

```
=SUM(Cows!A1:A10)
```

If your sheet name as a space in it, you will need to put the sheet name in quotation marks.

You can refer to the same range (or different ranges) in *multiple sheets* by using the same bracket notation from above. To find the sum of column A, rows 1-10 in the Cows, Pigs, and Chickens sheets, you can type:

```
=SUM({Cows!A1:A10, Pigs!A1:A10, Chickens!A1:A10})
```

If you have a lot of sheets, this can get tedious quickly. It might be easier in those cases to consolidate your data into a single sheet and refer to it all at once.

## Counting

If you're already familiar with spreadsheets at all, you're used to functions, like `SUM()` and `AVERAGE()`, that work on numerical fields. But humanities data often has text fields, and we want to be able to aggregate and work with this.

Take this example: imagine you have a spreadsheet with a column for gender. How many rows in your spreadsheet are marked "F"? You can find out using a conditional function called `COUNTIF()`.

This function takes two arguments: a range and the condition that cell must meet to be counted. Let's say your gender column is column B. You would type:

```
=COUNTIF(B1:B, "F")
```

This tells the spreadsheet to look in column B and to count a cell *only if* the value of the cell is "F".

This works well if you want to count things in your spreadsheet based on a single condition. But you don't have to limit yourself to just one condition. You can use the `COUNTIFS()` function to use multiple conditions. Imagine you have another column (C) that has age information. Here's how you would find the number of rows in your spreadsheet marked "F" with an age greater than 25:

```
=COUNTIFS(B1:B, "F", C1:C, ">25")
```

You can keep chaining multiple conditions to get exactly the count you need.

## Queries

You can get pretty far with the `COUNTIF()` functions from the last section, but sometimes you need to aggregate information in a more complex way. For this, I often turn to Google Sheets's unique `QUERY()` function (note: this function isn't available in Excel, though Excel will let you do similar things with different syntax). Query essentially lets you run SQL-like commands on your spreadsheet, as if it were a database. There are a ton of different options for these commands, and you should check out the full documentation. But learning just a couple of the basics will let you flexibly aggregate your humanities data.

The `QUERY()` function takes three arguments. The first is a range of cells: you should select the range of the full dataset over which you'd like to query. Which is to say: select *all* your data, not just the columns you specifically want to know about. The second argument is the query itself, which we'll get to in a second. The third argument is the number of header rows your data contains---this argument is optional, and you will typically leave it blank. However, you might need it if your data has more than one header row (for example, if you had two header rows, you'd enter the value 2).

A sample query function might look like:

```
=QUERY(A2:E20, "SELECT A,D WHERE D = 'cat'", 1)
```

The command above takes its information from the range `A2:E20`, looks for only one header row, and executes the query `select A,D where D = 'cat'`. This means it will look for all rows where the value in column D is the word "cat," and if it is it will output the values from columns A, D.

Let's take a step back. All of these queries will begin with SELECT. Whatever comes after SELECT will be the output of your query. Usually that is column names, but it can also be functions as we'll see later. You can also use an asterisk (\*) as a wildcard that will stand in for every column in the data.

After you decide what to select, you have a lot of different options. One of the simplest is WHERE, which lets you input some kind of condition. This is very similar to using conditions in the COUNTIF() functions above, but in this version the condition doesn't have to be directly related to the output. You can get the SUM() of one column if another column meets a condition, for example.

You can also chain conditions by using AND and OR operators. Maybe you want all instances where the value of column D is either cat or dog (`... WHERE D = 'cat' OR D = 'dog'`). Or you only want instances where column D is 'cat' and column E is 'asleep': (`... WHERE D ='cat' AND E = 'asleep'`). 

Let's keep imagining this hypothetical table of pet information. If there were a column for age, you might want to know the average age of all the cats in the table. We know that column D is the type of pet, let's say that column C is the pets' ages. Here's what your query would like:

```
=QUERY(A2:E20, "SELECT AVERAGE(C) WHERE D = 'cat'")
```

In the function above, we're using exactly the same range as before, and we've eliminated the third argument (the number 1) because it's safe to assume our data has a single header row. We've asked the query to return the average of column C (the age) when column D (the type of pet) is 'cat'. It's that simple! And you can see how functions like AVERAGE() can be built into queries.
