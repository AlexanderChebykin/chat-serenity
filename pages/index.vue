<template>
    <div>
    <main>
      <div class="container">
        <SendMessageForm />
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
    import SendMessageForm from '@/components/SendMessageForm'
    export default {
        components: {
            SendMessageForm
        },
        middleware: ['auth']
    }
</script>