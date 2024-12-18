import Sequelize  from "sequelize";
import databaseConfig from '../config/database';
import Task from "@/models/Task";

const models =  [Task];

const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
