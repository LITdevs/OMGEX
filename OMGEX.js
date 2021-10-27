window.OMGEX = function (options) {
    if(!options) return console.error('OMGEX: No options provided');
    if(options.zodiac) {
        let pronouns = document.querySelector("#pronouns");
        pronouns.innerHTML = pronouns.innerHTML + ` • <span id="zodiac">${options.zodiac}</span>`;
    }
    if(options.birthday) {
        let details = document.querySelector("#details");
        details.innerHTML = details.innerHTML + `<div id="birthday"><i class="fas fa-birthday-cake"></i> ${options.birthday}</div>`;
    }
    if(options.promoteOMGEX != false) {
        let footer = document.querySelector("#footer");
        footer.innerHTML = footer.innerHTML + `<br><a href="https://github.com/LITdevs/OMGEX"><i class="fas fa-plug"></i> Extended by OMGEX</a>`;
    }
}