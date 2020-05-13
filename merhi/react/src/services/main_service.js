
import axios from 'axios'
const baseUrl = 'http://127.0.0.1:8000/api/item/'

const getAll = () => {
  return axios.get(baseUrl)
}

/* const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
} */

export default { 
  getAll: getAll, 

}