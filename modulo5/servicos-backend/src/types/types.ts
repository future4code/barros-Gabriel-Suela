export type User = {
	id: string,
	name: string,
	nickname: string,
	email: string,
	cep: string,
	logradouro: string,
	numero: number,
	complemento?: string,
	bairro: string,
	cidade: string,
	estado: string,
};

export type FilterAddress = {
	logradouro: string,
	bairro: string,
	cidade: string,
	estado: string,
};