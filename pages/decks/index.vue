<template>
  <section class="section">
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th><abbr title="Position">Name</abbr></th>
            <th>Options</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th><abbr title="Position">Name</abbr></th>
            <th>Options</th>
          </tr>
        </tfoot>
        <tbody>
          <tr v-for="deck in decks" v-bind:key="deck.id">
            <td>{{ deck.name }}</td>
            <td class="has-text-centered">
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
  }
}
</script>
