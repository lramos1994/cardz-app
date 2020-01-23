<template>
  <section class="section">
    <div class="container">
      <form method="post" @submit.prevent="save">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input type="text" class="input" name="email" v-model="name">
          </div>
        </div>
        <div class="control">
          <button type="submit" class="button is-dark is-fullwidth">Save</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification';

export default {
  components: {
    Notification,
  },
  data() {
    return {
      name: null,
    }
  },
  mounted () {
    this.$axios
      .get(`deck/${+this.$route.params.id}`)
      .then(response => (
        this.name = response.data.name
      ))
  },
  methods: {
    async save() {
      try {
        await this.$axios.put(`deck/${+this.$route.params.id}`, {
          name: this.name,
        }).then(response => (
          console.log(response)
        ))

        this.$router.push('/decks')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>
