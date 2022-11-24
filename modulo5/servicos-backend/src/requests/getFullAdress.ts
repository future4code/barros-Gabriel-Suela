import axios from "axios";
import { BASE_URL } from "../data/connection";

export const getFullAddress = async (cep: string) => {
	try {
		const result = await axios.get(`${BASE_URL}/${cep}/json/`);
		return result.data;
	} catch (error: any) {
		console.log("Ocorreu um erro!");
	}
};