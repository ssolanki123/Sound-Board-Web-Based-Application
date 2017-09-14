Sunny Solanki
Yosua

Assignment #1 Summary:

   In assignment 1, we learned how to create a basic HTML page with images and audio clips. Given that this was
   a two part assignment, the first part took some time to design. Since we were not allowed to use any CSS to 
   format our page, we relied on using html elements including deprecated ones to create a 3 by 4 table to 
   display the images and audio clips. We learned that w3c validator for html threw error messages because 
   we were using outdated tags like "center" to format the images in the middle of each cell of the table. We also
   ran into problems where some of the audio clips were not playing on some browsers and that they some were taking
   too long too load. Our page was also net veyr elegant because of the lack of CSS. Styling a page without CSS is very
   difficult to do with just HTML.
   
Assignment #2 Summary:
   In assignment 2, we learned how to format our webpage nicely using CSS.  The second part of the assignment 
   was where we were allowed to apply what we learned from part 1 of assignment 2 to design a nice page.
   We did part 2 using two different approaches: first using only boostrap and then using only our own CSS
   styling. We learned that importing the boostrap library into our html page increased the load time 
   significantly. We only ended up using a very small portion of the library (5%) to design our page, but
   the extra overhead to import boostrap during execution affected performance. We then used designed our own
   CSS style that mimic our original CSS page and with less overhead. THis increased our performance significantly.
   
Assignment #3 Summary:
   In assignment 3, we learned how to use Javascript to create a dynammic webpage to load the images 
   and audio clips. Javascript was used to manipulate the DOM tree by assigning id's to most tags
   and using either document.getElementById() or document.querySelector() to add images and 
   the audio files. We did the assignment using vanilla JavaaScript and Jwuery. It was quite easy to
   make our webpage using vanilla Javascript as my partner and I were familiar with Javascript. The AJAX
   part was a little troubling at first because we did not know at first that it needed to be hosted
   on a server instead of running it locally on our machine. Another problem we encountered was that
   we kept getting a 404 error because the pathway to fetch each playlist was wrong. It took some time 
   to resolve, but it was worth it in the end. Jquery was very difficult for my partner and I to code
   in because we had very little experience it. We had to code in Jquery by following tutorials and 
   modifying code that found in the tutorial to make our website work. It was very frustrating to learn
   JQuery in such a short time span (1.5 days) and to use it on our homework. We took a performance hit 
   with our files because it took too long to load the audio files. 
   
Assignment #4 Summary:
   In assignment 4, we took our vanilla JS file from assignment 3 and polished it using java objects
   to prevent polluting the global scope. Our load time has improved quite a bit since we refactored 
   a significant portion of our code. Using the ServiceWorker API was very interesting to both of us because
   we learned how to have our webpage working when the network is offline by storing all the important
   things in the cache. Since the professor kept reiterating in lecture that to use ServiceWorker
   requires an SSL and HTTPS connection, we did not run into any major problems along the way. We did encounter
   some problems with using LightHouse to analyze the performance of our PWA application. When analyzing the
   intial load of the webpage, the performance index was really bad. However, when analyzing it on the second
   page load (with all the images and sound loaded), the performance index was a lot more acceptable. After
   talking with the instructor about how the reporting of LightHouse can fluctuate quite drastically on 
   intial page load, we learned to only run it after everything on the webpage is loaded.
