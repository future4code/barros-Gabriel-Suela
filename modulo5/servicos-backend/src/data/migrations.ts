import { connection } from "./connection";
import users from './users.json'

const printError = (error: any) => {
	console.log(error.sqlMessage || error.message);
};

const createTables = () =>
	connection
		.raw(
			`
      CREATE TABLE IF NOT EXISTS aula_webservices_users (
         id VARCHAR(255) PRIMARY KEY,
		 cep VARCHAR(255) NOT NULL,
		 logradouro VARCHAR(255) NOT NULL,
		 numero INT NOT NULL,
		 bairro VARCHAR(255) NOT NULL,
		 cidade VARCHAR(255) NOT NULL,
		 estado VARCHAR(255) NOT NULL,
		 complemento VARCHAR(255),
         name VARCHAR(255) NOT NULL,
         nickname VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL
      );
   `
		)
		.then(() => {
			console.log("Tabelas criadas");
		})
		.catch(printError);

const insertUsers = () =>
	connection("aula_webservices_users")
		.insert(users)
		.then(() => {
			console.log("Usuários criados");
		})
		.catch(printError);

const closeConnection = () => {
	connection.destroy();
};

createTables().then(insertUsers).finally(closeConnection);