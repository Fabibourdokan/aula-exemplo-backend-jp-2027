import { Sequelize } from 'sequelize'

class Database {
    constructor() {
        this.init()
    }       

    init() {
        this.db = new Sequelize({
            dialect: 'postgres',
            database: 'exemplo_g3qs',
            username: 'exemplo_g3qs_user',
            password: 'wo9K8IJuFTE0rKzoiHY944pqipAHvRcX',
            host: 'dpg-dbh7if7f3r2c73bt0m1g-a.oregon-postgres.render.com',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        }

        )
    }
}
export default new Database()