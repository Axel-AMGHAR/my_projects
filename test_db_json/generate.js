module.exports = function(){
    let faker = require('faker');
    let _ = require('lodash');
    return {
        people: _.times(100, function(i){
            return {
                id: i,
                name: faker.name.findName(),
                avatar: faker.internet.avatar(),
            }
        })
    }
}