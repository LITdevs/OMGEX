window.OMGEX = function (options) {
    let version = '1.5.1';
    if(!options || Object.keys(options).length == 0) return console.error('OMGEX: No options provided');
    if(options.zodiac) {
        let pronouns = document.querySelector("#pronouns");
      	if(pronouns !== null){
        	pronouns.innerHTML = pronouns.innerHTML + ` · <span id="zodiac">${options.zodiac}</span>`;
        } else {
          	let details = document.querySelector("#details");
          	details.innerHTML = details.innerHTML + `<span id="zodiac">${options.zodiac}</span>`;
        }
    }
    if(options.karma) {
        if(options.karma.endsWith(".omg.lol")) options.karma = options.karma.split(".omg.lol")[0]
        fetch(`https://irc.social.lol/api/karma.php?address=${options.karma}`)
            .then(res => res.json())
            .then(res => {
                let karma = res.karma;
                details.innerHTML = details.innerHTML + `<div id="karma"><i class="fas fa-star"></i> ${karma} <small>(<a href="#" onclick="alert('This is my current karma on the OMG.LOL chat service. Karma points are given to me by other people when I do nice things.')">huh?</a>)</small></div>`;
            });
    }
    if(options.birthday) {
        let details = document.querySelector("#details");
        details.innerHTML = details.innerHTML + `<div id="birthday"><i class="fas fa-birthday-cake"></i> ${options.birthday}</div>`;
    }
    if(options.timezone) {
        let delay = 60000;
        let timeDisplayOptions = { hour:"2-digit", minute:"2-digit"};
        if(options.displaySeconds) {
            delay = 500;
            timeDisplayOptions.second="2-digit";
        }
        if(options.force24h) timeDisplayOptions.hourCycle = "h23";
        let details = document.querySelector("#details");
        details.innerHTML = details.innerHTML + `<div id="localtime"><i class="fas fa-clock"></i> ${new Date().toLocaleTimeString([], {timeZone: options.timezone, ...timeDisplayOptions})}</div>`;
        setInterval(() => {
            document.querySelector("#localtime").innerHTML = `<i class="fas fa-clock"></i> ${new Date().toLocaleTimeString([], {timeZone: options.timezone, ...timeDisplayOptions})}`
        }, delay);
    }
    if(options.promoteOMGEX != false) {
        let footer = document.querySelector("#footer");
        footer.innerHTML = footer.innerHTML + `<br><a href="https://github.com/LITdevs/OMGEX#readme"><i class="omg-icon omg-vukky" style="color: #00a8f3"></i> Extended by OMGEX ${version}</a>`;
    }
}
