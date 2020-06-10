import axios from 'axios'

 const clienteAxios = axios.create({
     baseURL : 'https://sleepy-scrubland-41306.herokuapp.com/'
 })

 export default clienteAxios