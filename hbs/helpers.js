const hbs = require('hbs');
//Helpers
hbs.registerHelper('getDate', () => {
    return new Date().getFullYear()
});
hbs.registerHelper('capitalizar', (text = '') => {
    let words = text.split(' ');
    words.forEach((word, id) => {
        words[id] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return words.join(' ');
});