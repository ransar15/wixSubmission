import axios from "axios"

export const fetchTestApi = async () => {
	const { data } = await axios<string>('http://localhost:5000/test/')
	return data;
}