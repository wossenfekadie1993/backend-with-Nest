"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
const constants_1 = require("../constants");
exports.databaseProviders = [
    {
        provide: constants_1.DATABASE_CONNECTION,
        useFactory: () => mongoose.connect('mongodb://127.0.0.1/users'),
    }
];
//# sourceMappingURL=database.providers.js.map