import axios from "axios";

const api = {
  getVillage: async function({id}) {
    try {
      const res = await axios.get(`https://ilmiovillaggio.travio.it/details-search/${id}`);
      return res.data.service;
    } catch (error) {
      return null;
    }
  }
}

export default api
