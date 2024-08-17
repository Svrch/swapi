import axios from 'axios'

export const defaultAxios = axios.create({
  baseURL: 'https://swapi.dev/api/people/',
})

defaultAxios.interceptors.response.use(
  (response) => response.data,
  async (error) => error,
)
export default defaultAxios
