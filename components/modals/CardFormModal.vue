<template>
  <div v-if="" class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create a Card</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <CardForm />
      </section>
    </div>
  </div>
</template>

<script>


export default {
  components: {
    ModalForm
  },
  methods: {
    open() {
      this.modal = true
    },
    close() {
      this.modal = false
    },
  },
  data() {
    return {
      modal: false,

    }
  },
}
</script>
