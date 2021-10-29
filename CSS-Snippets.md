<image src=".github/OMGEX.png" width="50" align="left">

# OMGEX-CSS ("OMG Extended CSS")

Extended profile features for OMG.LOL, your favorite pigeon community.

Issues and pull requests are welcome, so fire away!

## Installation

Copy any CSS snippet below into your page's `Style` settings.
  
  
## CSS Snippets
 

### Change font (Easy)
  
Change the font to any [Google webfont](https://fonts.google.com/). *Please keep in mind, you can change 'Montserrat' to any [Google webfont](https://fonts.google.com/).*
```css
/** Change font (Easy) **/
@import url('https://fonts.googleapis.com/css2?family=Montserrat');
* {
  font-family: 'Montserrat', sans-serif;
}  
```
  
### Change font (Advanced)
  
Change the font to any web supported font. ***You will have to host your own font files for this to work.***
```css
/** Change font (Advanced) **/
@font-face {
  font-family: 'Monsterrat';
  src: url('uploading files first');
  font-display: swap;
}
body {
  font-family: 'Montserrat', sans-serif;
}  
```
  
### Verification badge animation
  
This makes your Verification badge (if you have one), pop-out and wiggle every couple seconds.
```css
/** Verification badge animation **/
@keyframes wiggle {
    0% { transform: rotate(0deg); }
   60% { transform: rotate(0deg); }
   65% { transform: scale(120%) rotate(5deg); }
   85% { transform: scale(125%) rotate(-5deg);}
   100% { transform: rotate(0deg); }
} 
.fa-badge-check {
  animation: wiggle 2.5s ease infinite;
  transition: 0.5s;
}
```
  
  
### Link hover, icon animation (Pop-out)

This makes the icons next to your links, pop-out when being hovered-over.
```css
/** Link hover, icon animation (Pop-out) **/
li .fa-li {
  transition: 0.2s ease;
}
li:hover .fa-li {
  transform: scale(1.3)
}
li .omg-icon {
  transition: 0.2s ease;
}
li:hover .omg-icon {
  transform: scale(1.3)
}
```

  
### Link hover, icon animation (Pop-out and rotate)
  
This makes the icons next to your links, pop-out and rotate when being hovered-over.  
```css
/** Link hover, icon animation (Pop-out and rotate) **/  
li .fa-li {
  transition: 0.1s ease-out;
}
li:hover .fa-li {
  transform: scale(120%) rotate(-10deg);
  transition: all 0.1s;
  transition-timing-function: ease(1, 0.8, 0.5, 1);
}
li .omg-icon {
  transition: 0.1s ease-out;
}
li:hover .omg-icon {
  transform: scale(120%) rotate(-10deg);
  transition: all 0.1s;
  transition-timing-function: ease(1, 0.8, 0.5, 1);
}
```
