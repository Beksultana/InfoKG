const path = require('path');

const rootPath = __dirname;

module.exports = {
    rootPath,
    uploadPath: path.join(rootPath, 'public/uploads'),
    infoDb: 'mongodb://localhost/info',
    mongoOptions: {
        useNewUrlParser: true,
        useCreateIndex: true,
    }
};