module.exports = function( sequelize, DataTypes){
    const Model = sequelize.define('Brewery', {
        brewery_name: DataTypes.STRING,
        address: DataTypes.STRING,
        website: DataTypes.STRING
    });

    return Model;
}