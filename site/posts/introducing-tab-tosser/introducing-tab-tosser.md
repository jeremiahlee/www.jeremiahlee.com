---
date: 2019-02-03T23:45:00+01:00
excerpt: "Tab Tosser is a Firefox extension that automatically closes tabs you have ignored for too long. I created Tab Tosser to help free myself of digital clutter."
excerptImage: 2019-02-03-tab-tosser-preview-rectangle.png
original-permalink: /blog/2019/02/03/tab-tosser/
title: "Introducing Tab Tosser"
updated: 2019-03-03T13:30:00+01:00
tags:
  - "posts"
  - "side project"
---

<p><img src="2019-02-03-tab-tosser-icon.svg" alt="Tab Tosser logo: a circular smiling face with eyes covered by a hat in the shape of a Web browser tab UI" width="256" height="256"></p>

[Tab Tosser](/tab-tosser/) is a Firefox extension that automatically closes tabs you have ignored for too long. I created Tab Tosser to help free myself of digital clutter.

We open tabs with full intention to take action. But life happens. Tabs build up. They become yet another task on our ever growing to-do list.

A while ago, I accidentally reset the browser on my phone. I lost over 100 open tabs and my browsing history. I panicked. After a moment, I realized I had not really lost anything. I could search and find any website I had open. And if I couldn’t remember enough about the page to search for, I didn’t really lose anything.

Tab Tosser creates an intentional constraint that helps free yourself of digital clutter with no effort.

**You can learn more about Tab Tosser’s features and install it [here](/tab-tosser/).**

#### Share it

- [Product Hunt](https://www.producthunt.com/posts/tab-tosser )
- [Twitter](https://twitter.com/JeremiahLee/status/1092392324166868992)
- [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:6498121076126679040)
- [Instagram](https://www.instagram.com/p/BtdJGDkHOyg/?utm_source=ig_share_sheet&igshid=olxy5finj18e)

## Beta testers made it better

14 supportive beta testers reported bugs and provided insightful feedback. Specifically, thank you to Arnold Chitwa, Christopher Lastrapes, Graham Sleight, Luke Carrier, [Mark Adamcin](http://adamcin.net/), [Pierre Bongen](http://tap-it.info/), and [Tom Elliot](http://tomelliot.net/).


## What I learned along the way

Tab Tosser is my second Firefox extension. I learned much in its creation. Here are a few things:

- I tried John-David Dalton’s incredible [`esm`](https://github.com/standard-things/esm) package to use ECMAScript modules in Node.js for the first time. It mostly just worked, except for [one minor issue with QUnit](https://github.com/qunitjs/qunit/issues/1372) he helped me figure out.
- I used [Tailwind CSS framework](https://tailwindcss.com/) and its highly composable, low-level utility class approach to styling for the first time. I loved how quickly and easily I was able to style the marketing site and onboarding flow in the extension. The extractor and tooling with [PostCSS](https://postcss.org/) resulted in a tiny (3 KB) stylesheet.
- I designed the logo and pages in [InVision Studio](https://www.invisionapp.com/studio) instead of Sketch. This was my second design project with InVision Studio, but used many more of the features. I intend to use InVision Studio for my next projects.
- I found an excellent [helper library for testing the WebExtensions API](https://github.com/webexts/webextensions-api-fake#readme) and for [testing DOM in Node.js](https://github.com/jsdom/jsdom#readme).

## Firefox only

Tab Tosser is exclusively available for Firefox. I currently have no intention of making Tab Tosser available for Chrome because [Google’s predominant business model is unethical](https://2018.ar.al/notes/spyware-2.0/ "Spyware 2.0"). I do not want Tab Tosser to be made available for Chromium-powered browsers (e.g. Edge, Opera) because [the Web as a platform is harmed by a browser monoculture](https://blog.mozilla.org/blog/2018/12/06/goodbye-edge/ "Goodbye, EdgeHTML"). For good reasons, no [OSI-approved license](https://opensource.org/licenses) permits me to have this soapbox.

Tab Tosser is freeware and the source code is viewable, but it is not free (as in speech) software. People may _privately_ fork the project in order to modify it for personal use, but may not redistribute their modifications alongside my original source without my permission. Due to not being able to use an open source license, I cannot accept pull requests. I researched contributor assignment agreements, but was dissuaded by the complexity.

I accept the possibility of someone copying my ideas and making a Tab Tosser-like extension for another browser. I cannot prevent that, but they will at least have to write their own code to do it. My intent is to make Firefox the best browser in order to help increase the competitiveness of Firefox, which ultimately helps protect our digital privacy by strengthening at least one organization capable of challenging Google’s influence on the Web.

## What’s next

I started work on Tab Tosser in December while traveling for the holidays. I tweaked it throughout January as private beta testers gave me feedback. When I read Yunzhe Zhou’s [“12 Side Projects in 12 Months: A More Effective New Year’s Resolution”](https://onemonthprojects.com/2018/12/19/12-side-projects-in-12-months/), I decided to try releasing one side project a month. Tab Tosser is my first project for January. (It’s a few days late, but those extra bug fixes were worth it.)

I do not yet have a full list of side projects for the year, but I do know what I am going to work on in February. I am excited to work on it, but will wait to share until closer to completion. Check back later this month or [follow me on Twitter](https://twitter.com/jeremiahlee) to keep in touch.
