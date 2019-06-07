const FileModel = require('./file.model');

class FileStorage {
  constructor() {
    this.fileModel = FileModel;
  }

  async createFile(payload) {
    await this.fileModel.create(payload);
    // return file;
  }
}

module.exports = FileStorage;
