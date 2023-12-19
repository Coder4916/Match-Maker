# **Match-Maker**

![Am I Responsive Image](/assets/images/amIResponsive.png)

## **Table of Contents**

- [**Match-Maker**](#match-maker)
  - [**Table of Contents**](#table-of-contents)
  - [**Introduction**](#introduction)
  - [**UX Development**](#ux-development)
    - [**1. Strategy Plane**](#1-strategy-plane)
    - [**User Stories**](#user-stories)
      - [**First Time User Goals**](#first-time-user-goals)
      - [**Returning User Goals**](#returning-user-goals)
      - [**Frequent User Goal**](#frequent-user-goal)
    - [**Research**](#research)
    - [**Project Goals**](#project-goals)
    - [**User Goals**](#user-goals)
    - [**Other Considerations**](#other-considerations)
    - [**Strategy Table**](#strategy-table)
    - [2. **Scope Plane**](#2-scope-plane)
    - [3. **Structure Plane**](#3-structure-plane)
    - [4. **Skeleton Plane**](#4-skeleton-plane)
    - [5. **Surface Plane**](#5-surface-plane)
      - [**Color Scheme**](#color-scheme)
      - [**Typography**](#typography)
      - [**Imagery**](#imagery)
  - [**Features**](#features)
    - [**Current Features**](#current-features)
      - [1. **Header**](#1-header)
      - [2. **Introduction page**](#2-introduction-page)
      - [3. **Play Game page**](#3-play-game-page)
      - [4. **How to play page**](#4-how-to-play-page)
      - [5. **Footer**](#5-footer)
    - [**Features to be added in the future**](#features-to-be-added-in-the-future)
  - [**Technologies Used**](#technologies-used)
    - [**Main Languages used**](#main-languages-used)
    - [**Frameworks, Libraries and Programs Used**](#frameworks-libraries-and-programs-used)
  - [**Issues and Bugs**](#issues-and-bugs)
  - [**Deployment**](#deployment)
    - [**Deployment to GitHub Pages**](#deployment-to-github-pages)
    - [**Forking the Github Repository**](#forking-the-github-repository)
    - [**Making a Local Clone**](#making-a-local-clone)
  - [**Testing**](#testing)
    - [**User Stories Testing**](#user-stories-testing)
      - [**First Time User Goal**](#first-time-user-goal)
      - [**Returning User Goal**](#returning-user-goal)
      - [**Frequent Visitor Goal**](#frequent-visitor-goal)
  - [**Manual Testing**](#manual-testing)
    - [**Responsiveness**](#responsiveness)
    - [**Links Testing**](#links-testing)
  - [**Autoprefixer CSS**](#autoprefixer-css)
  - [**W3C Validator Testing**](#w3c-validator-testing)
  - [**Lighthouse Testing**](#lighthouse-testing)
  - [**Further Testing**](#further-testing)
  - [**Credits**](#credits)
    - [**Code**](#code)
    - [**Images**](#images)
  - [**Acknowledgements**](#acknowledgements)

## **Introduction**

Match-Maker is a card memory game, where the aim of the game is to match pairs of cards in a grid. For each pair found, the player gains a point. The amount of moves made are recorded and each game is timed, adding an extra challenge element to the game.

The main requirement of this project is to build a responsive, front end gaming site, with the primary objective of making Match-Maker easy to play.

## **UX Development**

### **1. Strategy Plane**

UX research was carried out through discussion with:

- Friends and family, specifically my 5 year old daughter.
- Work colleagues

### **User Stories**

#### **First Time User Goals**

1. As a first-time user, I want to be able to play the game I'm looking for quickly and easily and be able to navigate the website with ease.
1. As a first-time user, I want access to instructions on how to play Match-Maker.
1. As a first-time user, I want to be able to locate the game's developer's social media links to get in contact or find information on any other game developments.
1. As a first-time user, I want to be engaged in the game and it's function.

#### **Returning User Goals**

1. As a returning user, I want to be able to access the game quickly and easily.
2. As a returning user, I want to be engaged in the game and it's function.
3. As a returning user, I want access instructions if I need a refresher on how to play the game.
4. As a returning user, I want to be able to locate the game creator's social media links for information on any other developments or updates.

#### **Frequent User Goal**

1. As a frequent user, I want to be engaged in the game and it's function.
2. As a frequent user, I want to access game instructions easily.
3. As a frequent user, I want to be able to contact the owner of the site if required.

### **Research**

A lot of research was carried out online, where I played different games in order to identify something which could be educational and entertaining and understand the capability of a javascript platform. Also being actively aware of my daughter's reaction to these games, for example she became particulary interested in the Math game built during the CI module phase. I also considered offline research through general play with my daughter; she enjoys games that are easy to understand and quick to win, such as Snap and Memory.

- Sector Research

I researched sites that focused on memory games, which helped to guide me on the best approaches, themes and layout for my game.

Examples of sites I reviewed to bolster my research:

[Memozor, free memory games](https://www.memozor.com/memory-games)

[Help my kid learn](https://www.helpmykidlearn.ie/activities/5-7/detail/memory-card-game)

### **Project Goals**

The project goal is to provide an educational and entertaining gaming website 'Match-Maker'. The target audience will primarily be for ages 5+, and will be pitched at the capabilty of that age group.

### **User Goals**

The target audience for this website is age 5+. The key thing for this gaming site is that it should be entertaining and educational.

Specifically targeted towards:

- Anybody interested in memory games
- Those looking for an entertaining and educational gaming experience
- People who are looking to improve their memory
- The game's theme targets younger users, giving the chance to learn more about different shapes

### **Other Considerations**

Match-Maker has further considerations as below:

- Calming and family friendly presence
- Minimal, to the point content
- Simple to operate

[Back to top](#match-maker)

### **Strategy Table**

Based on the research, goals, and the considerations above, I considered what should be implemented on the website. I mapped the ideas based on their importance, user needs, and viability (given limited time and resources), to determine which ideas were going to be included and which were not:

| Features/Ideas          | Importance | Viability |
| ----------------------- | :--------: | :-------: |
| A. Game instructions    |     5      |     5     |
| B. Choice of difficulty |     3      |     3     |
| C. Player vs player     |     3      |     3     |
| D. Game reviews         |     3      |     2     |
| E. Game timer           |     4      |     5     |
| F. Game move counter    |     4      |     5     |
| G. Game score counter   |     4      |     5     |
| H. Social Media links   |     1      |     4     |
| I. Different themes     |     3      |     3     |
| J. Gaming links         |     3      |     3     |
| K. Feedback Form        |     3      |     4     |

### 2. **Scope Plane**

Based on the mapping in Strategy Plane, I decided to include these contents below in the website:

- Introduction page with logo; Introduces the user to the game site.
- How to play/gaming Instructions; A guide on how to play Match-Maker.
- Game score/move counters; Records a users game progress, and adds a further challenge element to the game.
- Game timer; Again, adds a further challenge element to the game.

### 3. **Structure Plane**

The game must have a simple structure with a user friendly navigation element which appeals to all ages, to reach each page of information. Each page will have a consistent predictable template to help with usability and accessibility.

### 4. **Skeleton Plane**

The initial layout and interface of the Website has been created using Balsamiq Wireframes. The design/layout and feel of the site was created with UI in mind, which allows immediate interaction in first-time learning, and meets the needs of the intended audience.

![Balsamiq-wireframes](/assets/images/balsamiq-ms2.png)

### 5. **Surface Plane**

#### **Color Scheme**

The color pallette for this site was sourced from [Coolers](https://coolors.co/) to create a cohesive color scheme. Based on the choice of color, I was influenced by other card/tile games such as Solitaire and Mahjong.

#### **Typography**

The fonts I used for the website were sourced from [Google Fonts](https://fonts.google.com/). [Roboto](https://fonts.google.com/specimen/Roboto?query=roboto) is used for the navbar and paragraphs/general text. This font is recommended for use for people with dysleia [(Tink 'n' Stink)](https://www.tinknstink.co.uk/blogs/news/why-we-use-the-dyslexia-friendly-font-lexend). After researching [commonly used fallback fonts](https://www.w3schools.com/css/css_font_fallbacks.asp), I decided to use serif, sans serif and monospace as Match-Maker's fallbacks.

#### **Imagery**

I have utilised free to use images sourced online. A fallback color is included if the main body image doesn't load.

[Back to top](#match-maker)

## **Features**

### **Current Features**

#### 1. **Header**

- The header consists of a [Bootstrap](https://getbootstrap.com/) navigation bar. The nav-bar includes three nav-links and occupies 100% width of the site.

- The navigation bar is fully responsive on all device sizes. On desktop view, the user can see all nav-links, while on a smaller device, these collapse to a [Bootstrap Hamburger](https://getbootstrap.com/docs/5.3/components/navbar/#toggler) menu.

- The Game's logo is not displayed on a small device to create more space for content and features. This is done using a CSS Media Query.

- The Nav-links have a subtle hover state when the user hovers over each link, and includes a [Bootstrap](https://getbootstrap.com/docs/5.3/components/list-group/#active-items) .active class to show which page the user is on.

#### 2. **Introduction page**

- The Introduction page displays Match-Maker's logo and a 'Play Now' link to the game;

#### 3. **Play Game page**

- The Play Game page contains Match-Maker, consisting of a grid of cards created using CSS and Javascript, which can be flipped to reveal different shapes. There are 10 pairs of shapes to find. A Bootstrap Modal which loads on startup gives the user an option to play Match-Maker. During game-play a timer, score and move counter are displayed in a readout box, left of the game grid. A reset button is also available to the user, which when clicked, reloads the document/game, revealing the Modal to play game again.

#### 4. **How to play page**

- The How to play Page includes a game guide to assist new players.

#### 5. **Footer**

- The Footer uses a darker color than the Navigational Menu and includes the copyright text for the site.

### **Features to be added in the future**

These features will be added where possible during further development phases:

- An option to add additional players.
- Different difficulty settings, with grids displaying fewer or greater numbers of cards.
- Different themes, such as an animal theme, Xmas theme etc.

[Back to top](#match-maker)

## **Technologies Used**

### **Main Languages used**

[HTML5](https://en.wikipedia.org/wiki/HTML5) was used to create the front end framework of the website.

[CSS3](https://en.wikipedia.org/wiki/CSS) was used to design the layout and aesthetics of the website, including using effective typography and complimentary colors that would improve UX.

[Javascript](https://en.wikipedia.org/wiki/JavaScript) was used to implement the Game and it's readout functions, and allowed the Hamburger menu toggler in the Navigation Menu.

### **Frameworks, Libraries and Programs Used**

1. [Bootstrap 5.3](https://getbootstrap.com/) was used to assist with the responsiveness and styling of the website, as well as adding components.

2. The [Jquery](https://jquery.com/) library was linked to sh3w the Modal when the main Document loads, and to prevent a user from removing the Modal by clicking outside of the box.
3. [Google Fonts](https://fonts.google.com/) was used to import the “Roboto” and “Lexend” fonts into the html file, and were used on all parts of t5e site.

4. [Font Awesome](https://fontawesome.com/) was used to add icons for aesthetic and UX purposes.

5. [Codeanywhere](https://app.codeanywhere.com/) IDE was used for creating the website and using the built in terminal to push the site to GitHub.

6. [GitHub](https://github.com/) 7as used to store the project's code after being pushed from Codeanywhere.

7. [Balsamiq Wireframes](https://balsamiq.com/wireframes/) were used to desi8n the general layout and feel of the website and the high fidelity mock up during the design process.

8. [Autoprefixer CSS](https://autoprefixer.github.io/) was used to add vendor prefixes to the CSS 9ules, to ensure that they work across all browsers.

9. [Am I Responsive](https://ui.dev/amiresponsive?url=https://8002-coder4916-ci-milestone-ylxy4w9e48.us2.codeanyapp.com/inde10.html) was used to preview the website across a variety of popular devices.

10. [Squoosh](https1:/squoosh.app/) was used to reduce the file size of the images, and change from .jpg to .AVIF. This helped to improve the overall performance of the webst2e.

11. [Coolors](https://coolors.co/) was used to create a cohesive color scheme for the website.

12. Javascript tutorials found on [YouTube](https://www.youtube.com/watch?v=ZniVgo8U7ek&t=1112s) were used to help build Match-Maker and it's functions.

12.3[Stackoverflow](https://stackoverflow.com/questions/16152073/prevent-bootstrap-modal-from-disappearing-when-clicking-outside-or-pressing-esca) was used when advice was needed when building different blocks of code, and when any issues were encountered.

[Back to top](#match-maker)

## **Issues and Bugs**

-Issue: 'Modal is not a function' was highlighted in the dev tools console window.

Solution

- Issue: When using JsHint, it was found that a ternary expression required fixing 

- Issue: The Modal on the playgame page did not work correctly initially when writing JQuery into the Document to reveal the Modal load on startup.

Solution - After carrying out some debugging using Chrome developer tools and some tutoring, it was noticed that the JQuery link/bundle had not been added in the game script.js/html pages.

- Issue: CodeAnywhere load issues, and save/autosave function not working correctly:

Solution - Copied code back to CodeAnywhere from Github. Some code had to be re-written on a few occasions.

- Issue: Bootstrap color automatically added when using it's active class for the navigation bar. The CodeAnywhere terminal highlighted the fact that using !Important was not a foolproof way of writing code, and should not be used if possible.

Solution - After debugging using Chrome developer tools, I found there was a Bootstrap color added to the navigation bar, which could be overidden using the .navbar-nav .nav-link.active class. CSS !Important attribute was removed from code and color of navigation bar text was changed.

- Issue: Ports not working/updating several times on Codeanywhere IDE.

Solution - I regularly had to change the Terminal Port or reset to make the updates to the site work, so I could see the Website's progress. This was sometimes an issue, as I would doubt the reliability of the code I had written, which sidetracked my progress a few times.

## **Deployment**

The Website was developed using Codeanywhere as the IDE, commited to Git as a local repository and finally pushed/stored to GitHub.

### **Deployment to GitHub Pages**

The website was deployed to Github pages using the following steps:

1. Log in to GitHub.
2. Navigate to the main page of GitHub Repository that will be deployed.
3. At the top of the Repository, locate the "Settings" button on the menu and click it.
4. Inside the Settings, on the left side of the page, there’s a list of tab menu. Locate the “Pages” tab, and click it.
5. Under "Source", click the dropdown called "None", select "Master", and then click the “Save” button.
6. The page will automatically refresh.
7. Click on Actions and then 'Deploy Static Content to Pages'
8. There’s a notification message, your site is live at [https://coder4916.github.io/Match-Maker/], that provides the now published website on the pages tab in Github settings.

### **Forking the Github Repository**

By forking the GitHub repository you can make a copy of the original repository on your GitHub account to view and/or make changes without affecting the original repository, by using the following steps:

1. Log in to GitHub.
2. Navigate to the main page of the GitHub Repository that you want to fork.
3. At the top right of the Repository just below your profile picture, locate the "Fork" Button.
4. You should now have a copy of the original repository in your GitHub account.

Changes made to the forked repository can be merged with the original repository via a pull request.

### **Making a Local Clone**

By cloning a GitHub Repository you can create a local copy on your computer of the remote repository. This allows you to make all of your edits locally rather than directly in the source files of the origin repository, by using the following steps:

1. Log in to GitHub.
2. Navigate to the main page of the GitHub Repository that you want to clone.
3. Above the list of files, click the dropdown called "Code".
4. To clone the repository using HTTPS, under "HTTPS", copy the link.
5. Open Git Bash.
6. Change the current working directory to the location where you want the cloned directory to be made.
7. Type git clone, and then paste the URL you copied in Step 4.
8. Press Enter. Your local clone will be created.

[Back to top](#match-maker)

## **Testing**

### **User Stories Testing**

#### **First Time User Goal**

1. As a first-time user, I want to be able to play the game I'm looking for quickly and easily and be able to navigate the website with ease.

- The navigation bar is clearly defined, with an .active attribute to display to the user which page they are on. A subtle hover function when the user moves the cursor over the menu items increases user friendliness, and icons are attached to each option to assist the user with their choice.

![Navigation Bar screenshot]()

2. As a first-time user, I want access to instructions on how to play Match-Maker.

- The How to play Page includes a game guide to assist new players.

![How to play screenshot]()

3. As a first-time user, I want to be able to locate the game's developer's social media links to get in contact or find information on any other game developments.

![Social Media screenshot]()

4. As a first-time user, I want to be engaged in the game and it's function.

- A score and moves counter are included, as well as a timer to create further engagement.

![Counters and Timer screenshot]()

#### **Returning User Goal**

1. As a returning user, I want to be able to access the game quickly and easily.
2. As a returning user, I want to be engaged in the game and it's function.
3. As a returning user, I want access instructions if I need a refresher on how to play the game.
4. As a returning user, I want to be able to locate the game creator's social media links for information on any other developments or updates.

![Returning User Screenshot]()

#### **Frequent Visitor Goal**

1. As a frequent user, I want to be engaged in the game and it's function.
2. As a frequent user, I want to access game instructions easily.
3. As a frequent user, I want to be able to contact the owner of the site if required.

![Frequent User Screenshot]()

## **Manual Testing**

### **Responsiveness**

I used web developer tools extensively throughout the project to update and correct code, adjust website aesthetics, and check/improve and confirm responsiveness accross all devices, using a Bootstrap 'Mobile First' approach.

Below are some examples of sections that I have tested and checked for full responsiveness on all devices. These images show the sections at each [Breakpoint](https://getbootstrap.com/docs/5.3/layout/breakpoints/#core-concepts).

![Header]()

![Game]()

![Play now link]()

![Footer]()

### **Links Testing**

Once deployed, the website links were tested to ensure that:

All navigation external/internal links are working correctly and set to a relative filepath where required.
The game, it's functions and counters are working correctly.
Hovering and Active states are working.

## **Autoprefixer CSS**

Autoprefixer CSS was used to add CSS vendor prefixes to the CSS rules after the developing process was done and the CSS was validated, to ensure that they work across all browsers.

## **W3C Validator Testing**

The [W3C Markup Validator](https://validator.w3.org/) and [JSHint](https://jshint.com/) Validator Services were used to validate the website to ensure there were no syntax errors in the project.

The images below are snapshots of each page of the website after the code has been put through the Validator.

![Welcome page Validated](/assets/images/homeHtmlValidator.png)

![Play Game page Validated](/assets/images/playGameValidator.png)

![How to play page Validated](/assets/images/howToPlayHtmlValidator.png)

![Style.css Validated](/assets/images/styleCssValidator.png)

![Script.js file validated](/assets/images/jsLintImage.png)

## **Lighthouse Testing**

Chrome Lighthouse testing was used to check the performance, accessibility, best practices, and SEO. After applying some changes to make the performance faster, including resizing all of the images and compressing images/ reducing their size, the results below were achieved:

- Desktop:

![Match-Maker Lighthouse testing]()

- Mobile:

![Match-Maker Lighthouse testing]()

## **Further Testing**

The Website was tested on Google Chrome, Microsoft Edge and Mozilla Firefox. Microsoft Edge required extensions to run the site images correctly.

The website was viewed on a variety of devices such as:

Windows Laptop
Mobile: Samsung Galaxy S12
Web developer tools devices

Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

## **Credits**

### **Code**

1. [Bootstrap 5.3](https://getbootstrap.com/): Bootstrap was used throughout the project, including the following components:

- [A collapsible and expandable navigation bar](https://getbootstrap.com/docs/5.3/components/navbar/#toggler)
- 
- [A Javascript Modal](https://getbootstrap.com/docs/5.3/components/modal/)

2. [stackoverflow](https://stackoverflow.com/questions/29971898/how-to-create-an-accurate-timer-in-javascript): was used to find solutions to problems/issues during development and when building the game timer.

3. [Youtube](https://www.youtube.com/watch?v=ZniVgo8U7ek&t=1112s) game build tutorials by [Marina Ferreira](https://marina-ferreira.github.io/memory-game/) were used to help guide me on the construction of Match-Maker using Javascript.

3. [Autoprefixer CSS](https://autoprefixer.github.io/):
   Was used to add different vendor prefixer to CSS.

### **Images**

- [The background image](https://www.pexels.com/photo/close-up-photo-of-green-background-3117225/) was sourced from [Pexels](https://www.pexels.com/) and was created by [Eriks Abzinovs](https://www.pexels.com/@pixworthmedia/).

- The card pattern was sourced from[Freepik](https://www.freepik.com/free-vector/watercolor-geometric-background_23849498.htm).

The game's logo was created using [Canva](https://www.canva.com/).

## **Acknowledgements**

- My mentor, Oluwaseun Owonikoko, for her guidance and helpful feedback on all aspects of the Website.
- The Code Institute tutors who helped me with several of the issues I had when building the game site.
- My Daughter Evelyn, for testing the game (several times) and helping to make sure the game worked properly!
- My wife Beth for her constant support throughout the second module, and for proof reading my Readme and testing my game material.
- Peer Code Review

[Back to top](#match-maker)
