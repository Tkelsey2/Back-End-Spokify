const Songs = require('../models')
const db = require('./db')


async function seed(){
    await db.sync()

    fetch('https://api.napster.com/v2.2/tracks/top?apikey=Y2Q2MGQ4ODgtNmVhOS00NjE5LWEzY2EtZmI5OGQzZTJkMzE2&limit=5')
     .then(response=> {
        return response.json();
     })
     .then(data =>{
        console.log(data)
     })

    await Songs.bulkCreate([

   
    ])

}



module.exports = seed