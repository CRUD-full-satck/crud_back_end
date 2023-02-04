import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";
import "dotenv/config";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/*.{js,ts}");
  const migrationsPath: string = path.join(__dirname, "./migrations/*.{js,ts}");

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

const AppDataSource = new DataSource(dataSourceConfig());
export default AppDataSource;
