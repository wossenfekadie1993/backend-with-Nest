"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersProvider = void 0;
const user_schema_1 = require("../schemas/user.schema");
const constants_1 = require("../constants");
exports.UsersProvider = [
    {
        provide: constants_1.USER_MODEL,
        useFactory: (connection) => connection.model('User', user_schema_1.UserSchema),
        inject: [constants_1.DATABASE_CONNECTION],
    }
];
//# sourceMappingURL=user.provider.js.map