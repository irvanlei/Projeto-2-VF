import axios from "axios";

const api = axios.create({
    baseURL: 'api'
})
const saveMessage = async (formData) => {
    return await api.post('/message', {...formData});
  }
  
  const getMessages = async (filter= '') => {
    return await api.get(`/messages${filter}`);
  }
  
  const getChannels = async () => {
    return await api.get('/channels');
  }
  
  const getTriggers = async () => {
    return await api.get('/triggers');
  }
  
  export {
    getChannels,
    getMessages,
    getTriggers,
    saveMessage
  }
export default api