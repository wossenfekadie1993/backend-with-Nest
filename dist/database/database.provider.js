"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseProvider = void 0;
const mongoose = require("mongoose");
exports.mongooseProvider = [
    {
        provider: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect('mongodb://localhost/nest'),
    }
];
//# sourceMappingURL=database.provider.js.map