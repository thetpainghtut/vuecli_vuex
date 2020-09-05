<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.png" width="30" height="30" alt="Vue logo" loading="lazy">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link :to="{name:'item-list'}" class="nav-link mr-2">Item List</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'item-create'}" class="nav-link mr-2">Item Create</router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{name:'cart'}" class="nav-link mr-2">Cart
              <span v-if="cartCount > 0" class="badge badge-pill badge-danger">
                {{ cartCount }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script type="text/javascript">
  export default{
    computed: {
      cartCount() {
        this.$store.dispatch('getData')
        return this.$store.state.cart.length
      }
    }
  }
</script>
<style type="text/css">
  
</style>