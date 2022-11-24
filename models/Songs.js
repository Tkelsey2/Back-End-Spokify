const {DataTypes, Model} = require('sequelize')
const db = require ('../db/db')

class Songs extends Model {}

Songs.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
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
    }
},
{
        sequelize: db
    
})




module.exports = Songs