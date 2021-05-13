import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000 // throw error if API call takes longer than 10 seconds
})

export default {
  getMembers() {
    return apiClient.get('/members')
  }
}
