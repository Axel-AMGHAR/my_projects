var http = require('http');
var url = require('url');
var querystring = require('querystring');
//on inclut les bibiliothéques

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    //donne l'url de la page sans les params get
    console.log(page);
    var params = querystring.parse(url.parse(req.url).query);
    //met les params get dans un tableau
    res.writeHead(200, {"Content-Type": "text/plain"});
    //mettre text/html permet de write du html
    if ('prenom' in params && 'nom' in params) {
        res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
        //res.write écrit sur la page
    }
    else {
        res.write('Vous devez bien avoir un prénom et un nom, non ?');
    }
    res.end();
});

server.on('close', function() { // On écoute l'évènement close
    console.log('Bye bye !');
})

server.listen(8080); // Démarre le serveur

server.close(); // Arrête le serveur. Déclenche l'évènement close


//Créer son propre événement
var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('gameover', function(message){
    console.log(message);
});

jeu.emit('gameover', 'Vous avez perdu !');
//emit permet d'emmetre un événement dans le code

//on peut ajouter plusieurs paramétre dans la fonction d'événements :

jeu.on('nouveaujoueur', function(nom, age){
    console.log(`Nouveau joueur ${nom}, il a ${age} ans`);
});

jeu.emit('nouveaujoueur', 'Mario', 35); // Envoie le nom d'un nouveau joueur qui arrive et son âge