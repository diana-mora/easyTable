'use strict';
const models = require('../models');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('reserva', {

    }, {
        classMethods: {
            associate: (models) => {
                reserva.belongsTo(models.user);
                reserva.belongsTo(models.mesa);
            }
        },
        //paranoid: true,
    });
};
