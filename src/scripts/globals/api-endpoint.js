import CONFIG from './config';
 
const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
};
 
export default API_ENDPOINT;