const FileStorage = require('./file.storage');
const utils = require('../utils');
const fs = require('fs');
// const path = require('path');

const storagePath = process.env.STORAGE_PATH;

class FilesService {
  constructor() {
    this.dbStorage = new FileStorage();
  }

  async createFile({file, documentId}) {
    console.log({file, documentId});

    const storagedToFs = await this.storageFileToFs(file);
    await this.storageFileToBase({storagedToFs, documentId});
    return storagedToFs;
  }

  async storageFileToFs(file) {
    try {
      const fileId = utils.createUUID();
      const reader = fs.createReadStream(file.path);
      const folderPath = `${storagePath}${utils.createFilePath(fileId)}`;
      await fs.promises.mkdir(folderPath, {recursive: true});
      const ext = utils.getFileExt(file.type);
      const stream = fs.createWriteStream(`${folderPath}${fileId}.${ext}`);
      reader.pipe(stream);
      return {
        id: fileId,
        name: file.name,
        ext,
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  storageFileToBase({storagedToFs, documentId}) {
    return this.dbStorage.createFile({...storagedToFs, documentId});
  }
}

module.exports = FilesService;
