<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          <div class="columns is-vcentered">
            <div class="column is-3">
              <h1 class="title is-1">cards</h1>
            </div>
            <div class="column has-text-right">
              <b-button @click="create">Add New</b-button>
            </div>
          </div>
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th><abbr title="Name">Name</abbr></th>
                <th class="has-text-centered"><abbr title="Attack">Attack</abbr></th>
                <th class="has-text-centered"><abbr title="Defense">Defense</abbr></th>
                <th class="has-text-centered"><abbr title="Life">Life</abbr></th>
                <th class="has-text-right">Options</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th><abbr title="Name">Name</abbr></th>
                <th class="has-text-centered"><abbr title="Attack">Attack</abbr></th>
                <th class="has-text-centered"><abbr title="Defense">Defense</abbr></th>
                <th class="has-text-centered"><abbr title="Life">Life</abbr></th>
                <th class="has-text-right">Options</th>
              </tr>
            </tfoot>
            <tbody>
              <tr v-for="card in cards" v-bind:key="card.id">
                <td>{{ card.name }}</td>
                <td class="has-text-centered">{{ card.attack }}</td>
                <td class="has-text-centered">{{ card.defense }}</td>
                <td class="has-text-centered">{{ card.life }}</td>
                <td class="has-text-right">
                  <nuxt-link :to="'/cards/'+card.id">
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
  middleware: 'auth',
  data() {
    return {
      cards: null
    }
  },
  mounted () {
    this.$axios
      .get('card')
      .then(response => (this.cards = response.data))
  },
  methods: {
    create() {
      this.$router.push('/cards/create')
    }
  }
}
</script>
