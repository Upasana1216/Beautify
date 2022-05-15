import axios from 'axios';

const url = 'http://localhost:8000/route';

export const fetchServices = () => axios.get(url);
export const createSeller = (newSeller) => axios.post(url, newSeller);
export const getSellers = (service) => axios.get(`${url}/${service}/getSellers`);
export const getSeller = (id) => axios.get(`${url}/${id}/getSeller`);