const Sequelize = require('sequelize');
const dbConnection = require('../../connection');

const Model = Sequelize.Model;
class DebitModel extends Model {};

DebitModel.init({
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
  },
  from: {
    type: Sequelize.STRING,
  },
  sum: {
    type: Sequelize.DECIMAL(8, 2),
  },
}, {
  sequelize: dbConnection,
  modelName: 'DebitModel',
  schema: 'public',
  tableName: 'debit_note',
});

// console.log(model);

module.exports = DebitModel;
