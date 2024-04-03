"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
const mongoose_1 = require("mongoose");
const bcrypt_1 = require("bcrypt");
let UserService = class UserService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    async create(createUserDto) {
        try {
            const hashedPassword = (0, bcrypt_1.hashSync)(createUserDto.password, 10);
            const userWithHashedPassword = {
                ...createUserDto,
                password: hashedPassword,
            };
            const createdUser = new this.UserModel(userWithHashedPassword);
            return createdUser.save();
        }
        catch (err) {
            if (err.code === 11000) {
                throw new common_1.ConflictException('Email already exists');
            }
            throw new Error('Failed to create user');
        }
    }
    async findAll() {
        try {
            const Users = await this.UserModel.find().exec();
            if (!Users || Users.length === 0) {
                throw new common_1.NotFoundException('No users found');
            }
            return Users;
        }
        catch (err) {
            throw err;
        }
    }
    async findOne(identifier) {
        try {
            const isObjectId = mongoose_1.default.Types.ObjectId.isValid(identifier);
            const user = await (isObjectId
                ? this.UserModel.findById(identifier).exec()
                : this.UserModel.findOne({ email: identifier }).exec());
            if (!user) {
                throw new common_1.NotFoundException(`User with ID or email "${identifier}" not found.`);
            }
            return user;
        }
        catch (err) {
            throw err;
        }
    }
    async update(id, updateUserDto) {
        try {
            const updatedUser = await this.UserModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
            if (!updatedUser) {
                throw new common_1.NotFoundException(`User with ID ${id} not found`);
            }
            return updatedUser;
        }
        catch (err) {
            throw err;
        }
    }
    async remove(id) {
        try {
            const result = await this.UserModel.deleteOne({ _id: id }).exec();
            if (result.deletedCount === 0) {
                throw new common_1.NotFoundException(`User with ID ${id} not found`);
            }
            return `User with ID ${id} deleted successfully`;
        }
        catch (err) {
            throw err;
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.USER_MODEL)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserService);
//# sourceMappingURL=user.service.js.map