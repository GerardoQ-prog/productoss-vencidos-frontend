import axios from 'axios'

 const clienteAxios = axios.create({
     baseURL : 'https://sleepy-scrubland-41306.herokuapp.com/'
 })

 export default clienteAxios

//  https://sleepy-scrubland-41306.herokuapp.com/
// localhost:5000