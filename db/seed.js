const { max } = require('../models')
const Songs = require('../models')
const db = require('./db')
const apikey = 'Y2Q2MGQ4ODgtNmVhOS00NjE5LWEzY2EtZmI5OGQzZTJkMzE2'


async function seed(){
    await db.sync()
   let newArray =[]

    const response = await fetch('https://api.napster.com/v2.2/tracks/top?apikey=Y2Q2MGQ4ODgtNmVhOS00NjE5LWEzY2EtZmI5OGQzZTJkMzE2&limit=5')
     const data = await response.json()
        console.log(data)
        newArray = data.tracks.map((obj)=>{
         return {
            title: obj.name,
            artist:obj.artistName,
            rating:Math.round(Math.random() * (10-5)+5),
            album: obj.albumName,
            img: `https://api.napster.com/imageserver/v2/albums/${obj.albumId}/images/500x500.jpg`,
            link: obj.previewURL
         }
     })
     
    await Songs.bulkCreate(
      newArray
      
    )

}



module.exports = seed