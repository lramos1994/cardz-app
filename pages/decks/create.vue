<template>
  <section class="section">
    <div class="container">
      <Notification :message="error" v-if="error"/>
      <div class="columns">
        <div class="column is-two-fifths">
          <h2 class="title">Informações</h2>
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
        <div class="column">
          <div class="columns">
            <div class="column is-3">
              <h2 class="title">Cards:</h2>
            </div>
            <div class="column has-text-right">
              <b-button @click="isComponentModalActive = true" >Add New</b-button>
            </div>
          </div>
          <ul >
            <li class="box" v-for="card in cards" v-bind:key="card.id">
              <article class="media">
                <figure class="media-left">
                  <p class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png">
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{ card.name }}</strong>
                    </p>
                  </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item">
                        {{ card.attack }}
                        <span class="icon"><i class="fas fa-fist-raised"></i></span>
                      </a>
                      <a class="level-item">
                        {{ card.defense }}
                        <span class="icon"><i class="fas fa-shield-alt"></i></span>
                      </a>
                      <a class="level-item">
                        {{ card.life }}
                        <span class="icon"><i class="fas fa-heart"></i></span>
                      </a>
                    </div>
                  </nav>
                </div>
                <div class="media-right">
                  <button class="delete"></button>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <b-modal :active.sync="isComponentModalActive"
        has-modal-card :can-cancel="true">
        <CardForm v-bind="formProps" @change="cardFormChange"></CardForm>
    </b-modal>
  </section>
</template>

<script>
import Notification from '~/components/Notification';
import CardForm from '~/components/forms/CardForm';

export default {
  components: {
    Notification,
    CardForm
  },
  data() {
    return {
      name: null,
      isComponentModalActive: false,
      formProps: {
        name: null,
        attack: null,
        life: null,
        defense: null,
      },
      cards: [],
      error: null
    }
  },
  methods: {
    async save() {
      try {
        await this.$axios.post(`deck`, {
          name: this.name,
          cards: this.cards,
        }).then(response => (
          console.log(response)
        ));

        this.$router.push('/decks')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    cardFormChange(data) {
      if(data.created) {
        this.isComponentModalActive = false;
        this.cards = [...this.cards, ...data.cards];
        console.log(this.cards);
      } else {
        this.error = 'Erro ao Criar Carta.';
      }
    },
    saveCard() {
      console.log(this.formProps);
    }
  }
}
</script>
