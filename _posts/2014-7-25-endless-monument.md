---
layout: post
title: " @endlessmonument, A Twitter Bot for Spenser's Epithalamion"
---

This piece is cross-posted from the [HDW deformance blog][hdw].

In the Epithalamion, a wedding ode written to commemorate Spenser’s marriage to Elizabeth Boyle in 1595, the poet implies that he has created a talismanic protection for himself and his new bride. This protection is derived from the synchronicity with time that Spenser built into the poem. With 24 stanzas and 365 long lines, the Epithalamion’s surface-level organization by the length of both the day and the year is obvious, but it wasn’t until A. Kent Hieatt’s 1960 book Short Time’s Endless Monument that the complexities of Spenser’s temporal arrangement were made visible to modern readers. Hieatt shows that Spenser accounts for the specific conditions of time at the location of his wedding, including the exact moment of sunrise and sunset on the day of the wedding, St. Barnabas’ Day, the slight difference between diurnal and sidereal measurements of time, and divisions in the day (quarter-hours) and the year (seasons). These and other elements of Spenser’s fine tuning, which went undetected for nearly 400 years, reveal a poet deeply committed to encoding the marriage ode to a specific place and time.

Recognizing that current social networking platforms also have a professed interest in “real-time streams” and in pinpointing a particular piece of text or information to an exact time and location, we’ve created a deformance project that takes advantage of Twitter’s real-time structure to reorganize Spenser’s poem according to his time-scheme. The [Twitter bot][bot], written in Python, automatically tweets lines of the Epithalamion in two ways: according to the current date and time for the HDW in St. Louis, MO, and in response to requests from users in other locations.

##Tweeting the Whole Poem

Spenser’s poem measures time both in terms of a day (the 24 stanzas) and a year (the 365 long lines). To honor both these measurements, our bot tweets one long line of the poem per day, but the time of day that it tweets changes based on where that line falls in the poem. The bot determines which line to tweet on a particular day based on the first line of the poem falling on March 1st. According to Hieatt, this is the starting point of the year since the line Spenser uses to represent his marriage day, “But let this day let this one day be myne,” is the 103rd long line. For example, the line for today, July 25th, is the 147th line of the poem since we are 147 days from March 1st. Additionally, this line was tweeted at 9:33am, a little more than a third of the way into the day, since the line falls a little more than a third of the way into the poem.

The short lines represent division rather than a fixed time. To express this, every short line is tweeted 15 minutes before the line that it normally precedes in the poem, since the short lines generally represent quarter-hour divisions.

This would be sufficient if Spenser only used one measurement for time in his poem, but he doesn’t make things that simple. Without counting the final stanza of the poem, there are 359 long lines, which Hieatt suggests represent one [sidereal day][sidereal] (instead of the diurnal day). For sidereal time, our bot tweets an additional set of lines throughout the year for which the interval is dependent not on a regular 24-hour period, but on the 23-hour, 56-minute, 4.1-second sidereal day. The sidereal lines will not include the final six long lines of the poem that are present in the final stanza, leaving a six-day gap and the sidereal portion of the poem “unfinished,” as Spenser does in the original text. To differentiate between these two tweet-schemes taking place throughout the year, we’ve added the hashtags #diurnal and #sidereal to make clear why each line appears twice every day.

##Replying to Twitter Users

Since Twitter allows interactivity, we devised a way for users to participate in the deformance of the poem. If a user sends an @ reply to the bot with the name of a location, the bot will respond with a line of the poem that corresponds to the line that matches that time of day in the location the user named. The bot determines the correct line by finding out the time for sunrise and sunset on that day in that location. Since the poem was originally written to correspond to the summer solstice, the “longest day in all the yeare” (line 271), the time of sunrise and sunset will change the interval between the lines. This means that the line that the bot finds for the exact time in a location could be different the next day, and would change significantly throughout the year as the times for sunrise and sunset change.

The format for submitting a query to the bot is tweeting @endlessmonument followed by a city name and a two-letter state or country code. Here are two examples: “@endlessmonument San Francisco, CA” and “@endlessmonument Dublin, IR”. If the bot can’t find your location or time information for that place, it will apologize and instead send back the appropriate line for Saint Louis, MO. The bot searches for new mentions to respond to every minute.

---

By allowing user interaction as well as two ways to organize the poem according to Spenser’s original time-scheme, the poem’s “real-time stream,” its [Twitter][bot] page, winds up being a significant reordering of the poem’s lines, allowing for repetition and three different modes of sequencing. We hope that being made to view the poem’s lines at specific times for specific locations will allow readers to develop a different critical understanding of how the poem interacts with time and a new appreciation for Spenser’s complex time arrangement.

[bot]: http://twitter.com/endlessmonument
[sidereal]: http://en.wikipedia.org/Sidereal_time
[hdw]: http://hdwspenser.tumblr.com
