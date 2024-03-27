import axios from 'axios';

axios.defaults.baseURL = 'https://6603892e2393662c31cf23b1.mockapi.io/api/';

class Api {
  async getAllAdverts() {
    const { data } = await axios.get('adverts');
    return data;
  }
}

const api = new Api();
export default api;
