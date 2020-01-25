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
        this.formProps = data.card;
        this.error = data.message;
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
