<template>
  <tr>
    <td>{{1}}</td>
    <td>{{order.order_voucherno}}</td>
    <td>{{order.order_user.user_name}}</td>
    <td>{{order.order_total}} MMK</td>
    <td><router-link class="btn btn-primary" :to="{name: 'order-show', params: { id: order.order_id }}">Detail</router-link></td>
  </tr>
</template>

<script type="text/javascript">
  export default{
    props:{
      order: Object
    },
    methods: {
      
    }
  }
</script>

<style type="text/css">
  
</style>