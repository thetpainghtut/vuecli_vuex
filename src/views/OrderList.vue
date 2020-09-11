<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-12">
        <h2>Order List</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12" >
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Voucherno</th>
              <th>Customer</th>
              <th>Notes</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <OrderRow v-for="(order,index) in orders" :key="index" :order="order"></OrderRow>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import OrderRow from '@/components/OrderRow.vue'
  import ItemService from '@/services/ItemService.js'

  export default{
    components:{
      OrderRow
    },
    data(){
      return{
        orders : []
      }
    },
    created(){
      ItemService.getOrders()
        .then(response => {
          this.orders = response.data.orders
        })
        .catch(error => {
          console.log('There was an error:',error.response)
        })
    }
  }
</script>

<style type="text/css">
  
</style>