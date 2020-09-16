<template>
  <section class="board">
    <div class="columns is-gapless">
      <div class="column">
        <div class="left-field">
          <div class="field">

          </div>
        </div>
      </div>
      <div class="column is-three-fifths">
        <div class="right-field">
          <div class="columns is-gapless">
            <div class="column is-four-fifths">
              <div class="field pt-5">
                <div class="level">
                  <div class="level-item">
                    <figure class="image">
                      <img class="is-rounded" src="https://via.placeholder.com/150" alt="">
                    </figure>
                  </div>
                  <div class="level-item">
                    <figure class="image">
                      <img class="is-rounded" src="https://via.placeholder.com/150" alt="">
                    </figure>
                  </div>
                  <div class="level-item">
                    <figure class="image">
                      <img class="is-rounded" src="https://via.placeholder.com/150" alt="">
                    </figure>
                  </div>
                  <div class="level-item">
                    <figure class="image">
                      <img class="is-rounded" src="https://via.placeholder.com/150" alt="">
                    </figure>
                  </div>
                </div>
                <div class="level">
                  <div class="level-item">
                    <figure class="image">
                      <img class="is-rounded" src="https://via.placeholder.com/150" alt="">
                    </figure>
                  </div>
                  <div class="level-item">
                    <figure class="image">
                      <img class="is-rounded" src="https://via.placeholder.com/150" alt="">
                    </figure>
                  </div>
                  <div class="level-item">
                    <figure class="image">
                      <img class="is-rounded" src="https://via.placeholder.com/150" alt="">
                    </figure>
                  </div>
                  <div class="level-item">
                    <figure class="image">
                      <img class="is-rounded" src="https://via.placeholder.com/150" alt="">
                    </figure>
                  </div>
                </div>
                <div class="level">
                  <div class="level-item">
                    <figure class="image">
                      <img class="is-rounded" src="https://via.placeholder.com/150" alt="">
                    </figure>
                  </div>
                  <div class="level-item">
                    <figure class="image">
                      <img class="is-rounded" src="https://via.placeholder.com/150" alt="">
                    </figure>
                  </div>
                  <div class="level-item">
                    <figure class="image">
                      <img class="is-rounded" src="https://via.placeholder.com/150" alt="">
                    </figure>
                  </div>
                  <div class="level-item">
                    <figure class="image">
                      <img class="is-rounded" src="https://via.placeholder.com/150" alt="">
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification'

export default {
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
