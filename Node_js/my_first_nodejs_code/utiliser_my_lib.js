var test = require('test');
test.direBonjour();

//test de npm install pour le markdown
var markdown = require('markdown').markdown;

console.log(markdown.toHTML('Un paragraphe en **markdown** !'));