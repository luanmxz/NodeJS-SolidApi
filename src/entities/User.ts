import { uuid } from 'uuidv4';

export class User {
	public readonly id: string = '';

	public name: string = '';
	public email: string = '';
	public password: string = '';

	constructor(props: Omit<User, 'id'>, id?: string) {
		Object.assign(this, props);

		if (!id) this.id = uuid();
		//Não deixa a responsabilidade de criação de ID para o banco de dados,
		//isso evita erros ao trocar de banco de dados, atualizações, versões, etc.
	}
}
