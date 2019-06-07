const DocumentService = require('./document.service');
const router = require('./../router');

class DocumentController {
  constructor() {
    this.router = router;
    this.service = new DocumentService();

    this.router.post('/documents/recognize', (ctx, next) => this.recognizeDocument(ctx, next));

    this.router.get('/documents/:id', this.getDocumentById);

    this.router.get('/documents', async (ctx, next) => {
      const documents = await this.service.getDocuments();
      ctx.body = documents;
    });

    this.router.post('/documents', async (ctx, next) => {
      console.log(ctx.request.body);
      const document = await this.service.createDocument(ctx.request.body);
      if (document) {
        ctx.body = document;
      }
    });

    this.router.delete('/documents/:id', (ctx, next) => this.deleteDocument(ctx, next));

    this.router.put('/documents/:id', (ctx, next) => this.updateDocument(ctx, next));
  }

  async getDocumentById(ctx, next) {
    const document = await this.service.getDocumentById(ctx.params.id);

    if (document) {
      ctx.body = document;
    } else {
      ctx.response.status = 404;
    }
  }

  async deleteDocument(ctx, next) {
    const res = await this.service.deleteDocument(ctx.params.id);
    if (res) {
      ctx.response.status = 200;
    } else {
      ctx.response.status = 404;
    }
  }

  async updateDocument(ctx, next) {
    const res = await this.service.updateDocument({id: ctx.params.id}, ctx.request.body);
    if (res) {
      ctx.response.status = 200;
      ctx.body = `Updated ${res} values`;
    } else {
      ctx.response.status = 404;
    }
  }

  async recognizeDocument(ctx, next) {
    // const {files, fields} = ctx.request.body;
    console.log(JSON.stringify(ctx.request.files));

    const res = await this.service.recognizeDocuments({
      documentId: ctx.request.body.documentId,
      files: ctx.request.files.files,
    });
    ctx.body = {res};
    // const res = await
  }
}

module.exports = new DocumentController();
