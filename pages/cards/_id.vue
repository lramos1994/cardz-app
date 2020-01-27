<template>
  <section class="section">
    <div class="container">
      <Notification :message="error" v-if="error"/>
      <div class="columns is-centered">
        <div class="column is-half">
          <CardForm v-bind="formProps" @change="cardFormChange"></CardForm>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification';
import CardForm from '~/components/forms/CardForm';

export default {
  middleware: 'auth',
  components: {
    Notification,
    CardForm
  },
  data() {
    return {
      formProps: {
        name: null,
        attack: null,
        life: null,
        defense: null,
      },
      error: null
    }
  },
  mounted () {
    this.$axios
      .get(`card/${+this.$route.params.id}`)
      .then(response => (
        this.formProps = response.data
      ))
  },
  methods: {
    cardFormChange(data) {
      if(data.created) {
        this.$router.push('/cards');
      } else {
        this.error = 'Erro ao Criar Carta.';
      }
    },
  }
}
</script>
