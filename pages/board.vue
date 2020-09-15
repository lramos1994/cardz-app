<template>
  <section class="board">

  </section>
</template>

<script>
import Notification from '~/components/Notification'

export default {
  css: [
    './assets/styles/board.scss'
  ],
  layout: 'board',
  middleware: 'guest',
  components: {
    Notification,
  },

  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>
