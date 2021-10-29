<image src=".github/OMGEX.png" width="50" align="left">

# OMGEX-CSS ("OMG Extended CSS")

Extended profile features for OMG.LOL, your favorite pigeon community.

OMGEX supports all default OMG.LOL themes. Issues and pull requests are welcome, so fire away!

## Installation

Copy any CSS Snipet into your page's `Style` settings.
  
  
## CSS Snippets
  
### Verification badge animation
  
This makes your Verification badge (if you have one), pop-out and wiggle every couple seconds.
```css
/** Verification badge animation **/
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
