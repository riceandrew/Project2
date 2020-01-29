module.exports = function( sequelize, DataTypes){
    const Model = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        beer_one: DataTypes.STRING,
        beer_two: DataTypes.STRING,
        beer_three: DataTypes.STRING,
        beer_four: DataTypes.STRING,
        beer_five: DataTypes.STRING,
        favorite_brewery: DataTypes.STRING,
        breweries_visited: DataTypes.STRING
    });

    return Model;
}