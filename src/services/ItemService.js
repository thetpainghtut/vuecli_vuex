import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://osapi.thetpainghtut.com/api/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
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
  }
}