import axios from 'axios'

let token = localStorage.getItem('token')

const apiClient = axios.create({
  baseURL: 'http://osapi.thetpainghtut.com/api/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`
  }
})

export default{
  getItems(){
    return apiClient.get('/items')
  },
  getItem(id){
    return apiClient.get('/items/'+id)
  },
  createOrder(data){
    return apiClient.post('/orders',data)
  },
  getOrders(){
    return apiClient.get('/orders')
  },
  getOrder(id){
    return apiClient.get('/orders/'+id)
  },
  login(user){
    return axios.post('http://osapi.thetpainghtut.com/oauth/token',user)
  }
}