const DocumentStorage = require('./document.storage');

class DocumentService {
  constructor() {
    this.documentStorage = new DocumentStorage();
  }

  getDocuments() {
    try {
      return this.documentStorage.getDocumentsByType();
    } catch (err) {
      console.log(err);
    }
  }

  getDocumentById(id) {
    return this.documentStorage.getDocumentById(id);
  }

  createDocument(payload) {
    return this.documentStorage.createDocument(payload);
  }

  deleteDocument(id) {
    return this.documentStorage.deleteDocument(id);
  }

  updateDocument(params, payload) {
    return this.documentStorage.updateDocument(params, payload);
  }
}

module.exports = DocumentService;
