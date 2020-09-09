"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5000,
    username: 'postgres',
    password: '123ajiboy',
    database: 'taskmanagement',
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map