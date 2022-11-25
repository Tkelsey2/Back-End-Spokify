const {DataTypes, Model} = require('sequelize')
const db = require ('../db/db')

class Songs extends Model {}

Songs.init({
    title:{ 
        type: DataTypes.STRING,
        allowNull:false
    },
    artist:{
        type: DataTypes.STRING,
        allowNull: false

    },
    rating:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    album: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img:{
        type: DataTypes.STRING,
        allowNull: true
    },

    link:{
        type: DataTypes.STRING,
        allowNull:false
    }
},
{
        sequelize: db
    
})




module.exports = Songs