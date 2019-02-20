import axios from 'axios';

const createConnection = () => {
	const connection = axios.create({
		baseURL: process.env.SERVER_ADDR,
		timeout: 10000,
	});

	connection.interceptors.response.use((response) => response.data);
	return connection;
};

export default createConnection;
