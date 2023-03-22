import axios from 'axios';
import {API_KEY, BASE_URL, MAX_RESULTS} from '../api/api';


export const googleBooksApi = {

    async getBooks({searchTerm, category = '', page = 0, sort = 'relevance'}) {
        const startIndex = MAX_RESULTS * page;

        const response = await axios.get(
            `${BASE_URL}${searchTerm}${category}&maxResults=${MAX_RESULTS}&startIndex=${startIndex}&orderBy=${sort}&key=${API_KEY}`,
        );

        return response.data;
    },
};
