<template>
  <section>
    <div v-if="$route.query.message" class="alert alert-danger mb-3">
      Need login first
    </div>
    <form @submit.prevent="onSubmit">
      <h1>Login page </h1>
      <div class="form-group">
        <input type="text" class="form-control" v-model="login" placeholder="Please, enter your name">
      </div>
      <button class="btn btn-primary" type="submit">Login</button>
    </form>
  </section>
</template>

<script>
export default {
  layout: 'empty',

  data() {
    return{login: ''}
  },
  methods: {
    onSubmit() {
      console.log('login', this.login);
      this.$store.dispatch('login', this.login);
      this.$router.push('/');
    }
  }
}
</script>


<style scoped>
form {
  width: 500px;
  margin: 0 auto;
}
</style>
