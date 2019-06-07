const DebitModel = require('./models/debit.model');
const utils = require('../utils');

class DocumentStorage {
  constructor() {
    this.debitModel = DebitModel;
  }

  async getDocumentsByType(type) {
    return await this.debitModel.findAll();
  }

  getDocumentById(id) {
    // this.debitModel.
    // const document = this.documents.find((item) => (item.id === id));
    // return document;
  }

  async createDocument(payload) {
    if (payload.type === 'debit') {
      const document = {
        id: utils.createUUID(),
        title: payload.title,
        from: payload.from,
        sum: payload.sum,
      };
      await this.debitModel.create(document);
      return document;
    }
  }

  async deleteDocument(id) {
    const res = await this.debitModel.destroy({where: {id}});
    if (res === 1) {
      return true;
    } else {
      return false;
    }
  }

  async updateDocument(params, payload) {
    const res = await this.debitModel.update(payload, {where: params});
    return res;
  }
}

module.exports = DocumentStorage;
