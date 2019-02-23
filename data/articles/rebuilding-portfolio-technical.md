---
title: "Rebuilding my portfolio — Getting Technical"
date: "2019-02-22"
tags: ['Gatsby', 'Tailwind CSS', 'React']
---

<start>Recently I redesigned my portfolio </start> website to fix things I didn't like about my current one.
You can learn about the problems in my [previous post](/articles/rebuilding-portfolio).

This post will focus on the technical aspects and how I created this site.

Creating a portfolio site is hard, but one advantage that made it easy was that 
I already experience with my previous portfolio. My old portfolio used Gatsby, a React static site generator.

### Using Tailwind CSS
My old portfolio used a CSS framework called [IotaCSS](https://www.iotacss.com/). Traditional frameworks like Bootstrap 
and MaterialUI have `pre-built` designs . What I loved about IotaCSS was that it made developing custom designs easy, providing
helper classes instead. 

```scss

$iota-grids: 6 12;

.u-1/12 { width: 10% }
.u-2/12 { width: 10% }
.u-3/12 { width: 10% }
...

```
