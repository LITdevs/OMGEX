<image src=".github/OMGEX.png" width="50" align="left">

# OMGEX

Extended profile features for OMG.LOL

## Installation

Add the following to your OMG.LOL page `<head>`:

```js
<script src="https://cdn.jsdelivr.net/gh/litdevs/omgex/OMGEX.js"></script>
<script>
window.addEventListener('load', function() {
    OMGEX({zodiac: "♓", birthday: "March 5", timezone: "CET", terminalKonami: true});
});
</script>
```

## Configuration

OMGEX has a few settings you can use to customize what it displays. You'll need at least one, or else it'll throw an error.

### A new option isn't working properly!

This may either be caching issues, or because the feature is broken. You can try going [here](https://purge.jsdelivr.net/gh/litdevs/omgex/OMGEX.js) to clear the jsDelivr cache - if it says it's throttled, wait until the `throttlingReset` (in seconds) has passed and try clearing the jsDelivr cache again.

If it does not say it's throttled, go to your OMG.LOL page and see if it works now - note that you may have to clear your own cache as well. If it's still broken, [submit a bug report](https://github.com/LITdevs/OMGEX/issues/new).

### zodiac

This displays your zodiac sign next to your pronouns.

### birthday

This displays your birthday next to your occupation and location.

### timezone

This displays your current time next to your occupation and location. Note that this is experimental, and output may vary across browsers and machines.

### terminalKonami

Setting this to `true` will redirect the user to [terminal.land](https://terminal.land/) when the Konami code is entered.

### promoteOMGEX

OMGEX adds a link to its GitHub repo in the footer, but this can be disabled if you prefer - just set this option to `false`. You won't really have to do this if you're already hiding the footer, since it won't display.
