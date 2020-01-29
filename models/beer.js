module.exports = function( sequelize, DataTypes){
    const Model = sequelize.define('Beer', {
        beer_name: DataTypes.STRING,
        beer_style: DataTypes.STRING,
        beer_cost: DataTypes.INTEGER,
        beer_ranking: DataTypes.INTEGER
    });

    return Model;
}