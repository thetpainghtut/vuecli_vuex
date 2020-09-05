<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-12">
        <h2>Your Shopping Cart</h2>
      </div>

      <div class="col-md-8">
        <table class="table table-bordered">
          <thead class="thead-dark">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in cart" :key="index">
              <td>{{++index}}</td>
              <td>{{item.name}}</td>
              <td>{{item.price}}</td>
              <td>
                {{item.qty}}
                <button
                  @click="removeFromCart(item.id)"
                  class="btn btn-sm btn-danger">
                  Remove
                </button>
              </td>
              <td>{{item.price*item.qty}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-4">
        <div >
          <span>{{ cartItemsCount }} items</span>
          <span>{{ itemsSubtotal }}</span>
        </div>
        <div>
          <span class="d-inline-block mr-2">Shipping:</span>
          <select v-model="selectedShippingOption">
            <option disabled value="">Please select an option</option>
            <option
              v-for="option in shippingOptionsArray"
              :key="option.text"
              :value="option.rate">
              {{ option.text }} (${{ option.rate }})
            </option>
          </select>
        </div>
        <div>
          <span class="d-inline-block mr-3">Subtotal</span>
          <span>{{subtotal}}</span>
        </div>
        <div>
          <span class="d-inline-block mr-3">
              Tax ({{ salesTax * 100 }}%)
          </span>
          <span>{{ salesTaxApplied }}</span>
        </div>
        <div>
          <span class="d-inline-block mr-3">Total</span>
          <span>{{ total }}</span>
        </div>

        <button
          :disabled="!this.selectedShippingOption"
          class="btn btn-lg btn-success">
            Check out
        </button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    data(){
      return{
        selectedShippingOption: '',
        shippingOptionsArray: [
          {
            text: 'One day',
            rate: 20,
          },
          {
            text: 'Two days',
            rate: 15,
          },
          {
            text: 'Three to five days',
            rate: 10,
          },
          {
            text: 'One week or more',
            rate: 5,
          },
        ],
        salesTax: 0.05,
      }
    },
    computed:{
      cart(){
        // this.$store.dispatch('getData')
        return this.$store.state.cart;
      },
      cartItemsCount() {
        return this.cart.length;
      },
      itemsSubtotal() {
        return this.cart.reduce((total, item) => total + item.price, 0);
      },
      subtotal() {
        if (this.selectedShippingOption) {
          return Number(this.itemsSubtotal) + Number(this.selectedShippingOption);
        }
        return '---';
      },
      salesTaxPercentage() {
        return `${this.salesTax * 100}%`;
      },
      salesTaxApplied() {
        if (this.selectedShippingOption) {
          return (this.subtotal * this.salesTax).toFixed(2);
        }
        return '---';
      },
      total() {
        if (this.selectedShippingOption) {
          return Number(this.subtotal)
                 + Number(this.salesTaxApplied);
        }
        return '---';
      },
    },
    methods: {
      removeFromCart(itemId) {
        this.$store.dispatch('removeFromCart', itemId)
      }
    }
  }
</script>

<style type="text/css">
  
</style>