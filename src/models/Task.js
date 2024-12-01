
import Sequelize, { Model } from "sequelize";

export default class Task extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.INTEGER,
                cost: Sequelize.FLOAT,
                deadline_date: Sequelize.DATE,
                presentation_order: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );
        return this;
    }
}