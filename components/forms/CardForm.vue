<template>
  <div class="box">
    <Notification :message="error" v-if="error"/>
    <form method="post" @submit.prevent="submit">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input type="text" class="input" name="name" :value="name" required>
        </div>
      </div>
      <div class="field">
        <label class="label">Attack</label>
        <div class="control">
          <input type="number" class="input" name="attack" :value="attack" required>
        </div>
      </div>
      <div class="field">
        <label class="label">Life</label>
        <div class="control">
          <input type="number" class="input" name="life" :value="life" required>
        </div>
      </div>
      <div class="field">
        <label class="label">Defense</label>
        <div class="control">
          <input type="number" class="input" name="defense" :value="defense" required>
        </div>
      </div>
      <div class="control">
        <button type="submit" class="button is-dark is-fullwidth">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import Notification from '~/components/Notification';

export default {
  components: {
    Notification
  },
  props: {
    name: {
      type: String,
    },
    attack: {
      type: Number,
    },
    life: {
      type: Number,
    },
    defense: {
      type: Number,
    }
  },
  data() {
    return {
      error: null,
    };
  },
  methods: {
    save(card) {
      try {
        this.$axios.post(`card`, [
         card
        ]).then((response) => {
          this.$emit('change', {
            cards: response.data.cards,
            created: response.status == 201,
            message: 'Carta Adicionada com sucesso!',
          });
        });
      } catch (e) {
        //TODO tratar retorno de erro da api
        console.log(e);
      }
    },
    submit(e) {
      this.save({
        name: e.target.elements.name.value,
        attack: e.target.elements.attack.value,
        life: e.target.elements.life.value,
        defense: e.target.elements.defense.value
      })
    },
  },
}
</script>
