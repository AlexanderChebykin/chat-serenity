<template>
  <section>
    <b-form @submit.prevent="onSubmit">
      <div>
        <b-form-textarea
          id="textarea"
          v-model="message"
          placeholder="Enter your message..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </div>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button @click="logout"  variant="danger">Logout</b-button>
    </b-form>

    <div  v-bind:key="index" 
          v-for="(message, index) in messages">
      <b-card class="mt-3" v-bind:header="message.t +'   ' + message.login + ' send:'">
        <pre class="m-0" >{{ message.text }}</pre>
      </b-card>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    data() {
      return {
        message: '',
        messages:[],
        loading: false
      }
    },
     async mounted(){
        this.loading = true;
        setInterval(async() => { this.messages = await request('http://localhost:3004/messages','GET')}, 100);
        console.log(this.messages);
        this.loading = false;
    },

    computed:{
      ...mapState(['login'])
    },

    methods: {
      async onSubmit(evt) {
      const now = new Date;
      const month = +now.getMonth()+1;
      const time = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()+' '+
                   now.getDate()+'.'+ month +'.'+now.getFullYear();
       console.log('объект', time);
       this.messages.push({text: this.message, login:  this.login, t: time});

       console.log('messages', this.messages);
       await request('http://localhost:3004/messages','POST', {text: this.message, login:  this.login, t: time});
        this.message = '';
      },

      logout(){
        this.$store.dispatch('logout')
        this.$router.push('/login')
      }
    }
  }

   async function request(url, method='GET', data=null){
        try{
            const headers = {};
            let body;
            
            if(data){
                headers['Content-Type']='application/json';
                body = JSON.stringify({"text": data.text, "login": data.login, "t": data.t});
            }
            const response = await fetch(url, {
                method,
                headers,
                body
            })
            return await response.json();
        } catch(e){
            console.warn('Error:', e.message)
        }
    }
</script>

<style scoped>
  #textarea{
    margin-top:50px;
    margin-bottom:20px;
  }
</style>