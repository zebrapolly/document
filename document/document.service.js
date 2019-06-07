const DocumentStorage = require('./document.storage');
const FileService = require('../file/file.service');

class DocumentService {
  constructor() {
    this.documentStorage = new DocumentStorage();
    this.fileService = new FileService();
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

  async recognizeDocuments({files, documentId}) {
    console.log('recognizeDocuments', files, documentId)
    const storagedFiles = await Promise.all(files.map((file) => this.fileService.createFile({file, documentId})));
    console.log(storagedFiles);

    // const file = await
  }
}

module.exports = DocumentService;
