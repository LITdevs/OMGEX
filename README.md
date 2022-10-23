<image src=".github/OMGEX.png" width="50" align="left">

# OMGEX ("OMG Extended") [![Discord](https://img.shields.io/discord/868937321402204220?color=5865f2&label=chat&logo=discord&logoColor=7289da)](https://discord.gg/z5tmTWU7Qw)

Extended profile features for OMG.LOL, your favorite pigeon community. OMGEX supports all default OMG.LOL themes. 
    
If you have any bugs or feature requests, feel free to [report them](https://github.com/LITdevs/OMGEX/issues/new/choose) or contribute!

## Installation

Add the following to your OMG.LOL page's `<head>` (you can find this in your profile settings):

```js
<script src="https://cdn.jsdelivr.net/gh/litdevs/omgex@latest/OMGEX.js"></script>
<script>
window.addEventListener('load', function() {
    OMGEX({karma: "vukky", zodiac: "♓", birthday: "March 5", timezone: "Europe/Oslo");
});
</script>
```

## Configuration

OMGEX has a few settings you can use to customize what it displays. You'll need at least one, or else it'll throw an error.

### karma

This displays your current karma on the OMG.LOL IRC server. The value is the address people give your karma to (usually the same as your OMG.LOL address).

### zodiac

This displays your zodiac sign next to your pronouns.

### birthday

This displays your birthday underneath your occupation and location.

### timezone

This displays your current time underneath your birthday (if enabled) or else, occupation and location. You can find a list of acceptable strings [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) (the TZ database name). 

You may notice that you can also just specify for example CET, but BE WARNED! Some timezones have conflicting names, so it's recommended to just use the TZ database name.

#### displaySeconds

Set this to `true` to display seconds in the current time (HH:MM:SS).
    
### promoteOMGEX

OMGEX adds a link to its GitHub repo in the footer, but this can be disabled if you prefer - just set this option to `false`. You won't really have to do this if you're already hiding the footer, since it won't display.
