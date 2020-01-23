<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          <div class="columns is-vcentered">
            <div class="column is-3">
              <h1 class="title is-1 ">Decks</h1>
            </div>
            <div class="column has-text-right">
              <b-button @click="create">Add New</b-button>
            </div>
          </div>
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th><abbr title="Position">Name</abbr></th>
                <th class="has-text-right">Options</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th><abbr title="Position">Name</abbr></th>
                <th class="has-text-right">Options</th>
              </tr>
            </tfoot>
            <tbody>
              <tr v-for="deck in decks" v-bind:key="deck.id">
                <td>{{ deck.name }}</td>
                <td class="has-text-right">
                  <nuxt-link :to="'/decks/'+deck.id">
                    <span class="icon has-text-success">
                      <i class="fas fa-check-square"></i>
                    </span>
                  </nuxt-link>

                  <nuxt-link to="/">
                    <span class="icon has-text-success">
                      <b-icon pack="fas" icon="ban" size="is-small"></b-icon>
                    </span>
                  </nuxt-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      decks: null
    }
  },
  mounted () {
    this.$axios
      .get('deck')
      .then(response => (this.decks = response.data))
  },
  methods: {
    create() {
      this.$router.push('/decks/create')
    }
  }
}
</script>
