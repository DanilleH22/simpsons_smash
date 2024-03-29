# Smash The Simpsons

![Smash The Simpson](./assets/images/amiresponsive.png)

Smash the Simpsons is an interactive web-based game where players aim to hit a moving image of the Simpson's face as it randomly appears in different positions on the screen. This engaging and fast-paced game tests players' reflexes and timing, offering a fun and humorous way to enjoy the beloved characters of the Simpsons series. The game makes for a great choice for quick entertainment and a lighthearted challenge for fans of the show and casual gamers alike.

Currently the game only lets you smash Bart Simpson in the face. The reason we have used Bart is of the is because he is the naughtiest Simpson. So we use Bart back as a way of getting back the 'naughty' Simpson. We know he gets on peoples nerves, so why not get him back for it. The age of the game would be for anyone from 13 to 55, but anyone of any age could pay as its quite easy to understand how to play and actually play. With its addictive gameplay and ever-changing challenges, players will want to come back to play more, as they try to beat their scores and improve their reaction times in this amusing and engaging game.

## Features

### Game title and game functions

Game functions include:

1. Start game button: which allows players to begin the game.
2. Instructions button - opens up the instructions pop up
3. Score - shows the player how many hits they have so far.
4. Timer - the timer shows how long the player has in the game.

![WebsiteHead](./assets/images/WebsiteHead.png)

### Target

The face of the character the player must click, to get a point. The target currently for the game is Bart's face.
![Target](./assets/images/Target.png)

### Background

This is the background of the whole game, which uses the image of the cloud from the Simspsons theme song.
![GameScreen](./assets/images/GameScreen.png)

### Instructions pop up

The instructon pop up box, explains how to play the game and the amount of time the player has.
![Instuctions](./assets/images/Instructions.png)

### Future Implementations 

Currently the game has one level and you can only use one simpson character. In the future I am to add more levels, where level 2 there are more Simpsons characters but you only get a point for clicking Bart. Level two would be a kind of wheres Waldo level. In the future I would also allow players to choose the target they would like to hit.

## Testing

### Responstivity

Testing on different devices has been done to test the responsitivity of the game. On smaller screen sizes the game functions have been shrunk to fit in the screen and still leave enough space for the game area for the target. This can be noted as the gameplay will be seen on the Am I responsive webiste below. The screen sizes were also tested throughout production by using Chrome development and chosing different screen sizes to check on.

![Smash The Simpson](./assets/images/amiresponsive.png)

### Bugs 

A bug that had been recurring in the game was the score incrementing. The score would increment by 1 for the first round and 2 for the second and so on. The player was also able to still get points after the timer had finished. To fix this a score incrementing function was created, and a if statement was used in it. Along with adding and removing an event listener for the function incrementing score and then creating a new incrementing score.

Another bug that had been faced was creating level two.

Lastly a bug that had to be fixed was the timer, the timer would continue decreasing past 0. So to fix this a new function was created outside the game and linked to in the intervalID.

### Unfixed bugs
To the best of my knowledge there are no known bugs or any left unfixed.

#### CSS validator
* No errors were returned when passing through the official W3C validator CSS
![W3C Validator](./assets/images/css-validator.png)

### HTML Validator
* No errors were found when passing through the official Html validator
![HTML Validator](./assets/images/w3c-html.png)

* No errors were found when validating website via the link 
![Validator HTML & CSS](./assets/images/cssvalidator.png)

* JSHint has not shown no problems with the Javascript code. JSHint had warned of two unused variables, however they were called in the index.html file. The codes it has been used in from the HTML file are referenced below:
  - '< button id="ok" onclick="hide()">Ok< /button>'
  - '< button id="instructions" onclick="instructions()">Instructions< /button>'
![JSHint](./assets/images/JSHint.png)

## Deployment

When setting up to do deployment these are the necessary steps taken:
1. Create a Github repository
2. Open on GitPod
3. Create game with Javascript, Html & CSS
4. Ran code on website by typing 'python3 -m http.server' in the Command Line
5. Any bugs were fixed and noted and commited to GitHub
6. Validated code had no errors with JSHint for JavaScript and W3C Validator for HTML and CSS 
7. All commits was pushed to GitHub
8. Open Smash the Simpsons repository
9. Click settings tab in repository
10. Click Pages on the side bar
11. Under section called Branch click main from the drop down menu
12. Save the page and then a live link is generated

The live link to the website can be found here: [Smash the Simpson](https://danilleh22.github.io/simpsons_smash/)

## Credits

### Content

The structure for styling the instructions pop up was from a youtuber linked here: [Instructions Popup](https://www.youtube.com/watch?v=-XwrQsHxtZs)

Part of the game set up had been used from the video linked below, however it was used as a starting reference, video link: [Target Game](https://www.youtube.com/watch?v=KJ-wHLczee0&t=1297s)

### Media

The image for the background of the game was found and downloaded on Pinterest.
The image for Bart, the target, was found and downloaded from Pinterest
