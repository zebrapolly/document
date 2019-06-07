const Sequelize = require('sequelize');
const dbConnection = require('../connection');

const Model = Sequelize.Model;
class FileModel extends Model {};

FileModel.init({
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  documentId: {
    type: Sequelize.UUID,
  },
  ext: {
    type: Sequelize.STRING,
  },
}, {
  sequelize: dbConnection,
  modelName: 'FileModel',
  schema: 'public',
  tableName: 'files',
});

// console.log(model);

module.exports = FileModel;
