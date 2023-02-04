"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const path_1 = __importDefault(require("path"));
const typeorm_1 = require("typeorm");
const setDataSourceConfig = () => {
    const entitiesPath = path_1.default.join(__dirname, "./entities/**.{js,ts}");
    const migrationsPath = path_1.default.join(__dirname, "./migrations/**.{js,ts}");
    const nodeEnv = process.env.NODE_ENV;
    if (nodeEnv === "production") {
        return {
            type: "postgres",
            url: process.env.DATABASE_URL,
            entities: [entitiesPath],
            migrations: [migrationsPath],
        };
    }
    if (nodeEnv === "test") {
        return {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: [entitiesPath],
        };
    }
    return {
        type: "postgres",
        host: process.env.HOST,
        port: 5432,
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        logging: true,
        synchronize: false,
        entities: [entitiesPath],
        migrations: [migrationsPath],
    };
};
const dataSourceConfig = setDataSourceConfig();
exports.default = new typeorm_1.DataSource(dataSourceConfig);
