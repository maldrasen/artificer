So here's the thing. I don't really write javascript (or anything at all really) like a normal person. The engine code is terribly nonstandard and mixes a bunch of old javascript techniques like self-evaluating function expressions added to the global scope with a lot of newer ES6 features. I dislike using external libraries and try to keep my dependencies as lean as possible, but I also like using jQuery even though it's probably completely unnecessary here.



I really don't like ES6 modules, and I prefer to just include everything at once when the application is loaded. I really don't see any advantage in using modules when everything in the application will eventually be used within the application. Breaking things out into modules doesn't really buy you anything in an app like this.



My coding style is arbitrary and capricious, and can't really be codified into anything like a code formatter. I format my code in whatever way appeals to me, and that includes doing annoying things like lining things up in columns. And yes, I know that's bad because it breaks diffs. I don't care it's easier for me to read. I'll break ternaries across three lines and I might not add line breaks where people might expect me to. Examples of bad code formatting that I will be doing:



  [examples]



This is essentially an art project for me though, so doing things in my preferred nonstandard style takes precedence for me over making it easy for other people to contribute to.



Contributing



I would, however, like for people to contribute content to the project. I've organized the application into essentially three sections. There's the engine, which is everything running on the node side of things. There's the client, which is the javascript running in the browser window. And then there's the data directory, which has all of the data objects that are used by the app. What I am envisioning is that contributions to the project will mostly happen in the data directory, which contains all of the events, and descriptions, and everything else that can be considered content. This is a text-based game and requires a lot of text to be written. I've done what I can to make that easy, on myself mostly, but with an eye towards making things in such a way that another person could conceivably also write events and such if they like.



Of course, I don't yet have anyone else contributing to the project, and I fully expect 99% of human beings to recoil in horror from what it is I'm actually trying to create here. I've never really worked on open source software before either, so all of this is just baseless speculation. This will be updated at some point when and if other people want to join in.
