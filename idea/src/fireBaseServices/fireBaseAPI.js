import axios from 'axios';

const baseUrl = 'https://ideasbase-8080c.firebaseio.com/ideas';

export const sendFormData = (data) => axios.post(`${baseUrl}.json`, data);
export const getAllIdeas = () => axios.get(`${baseUrl}.json`);
export const deleteIdea = (key) => axios.delete(`${baseUrl}/${key}.json`);
export const updateIdea = (data) => axios.put(`${baseUrl}/${data.key}.json`, data);






