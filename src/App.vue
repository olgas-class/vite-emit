<script>
import AppButton from "./components/AppButton.vue";
import TodosList from "./components/TodosList.vue";

export default {
  components: { AppButton, TodosList },
  methods: {
    handleChiSiamo() {
      alert("Ecco chi siamo!");
    },
    handleContattaci() {
      alert("Il tuo messaggio è sato inviato");
    },
  },
};
</script>

<template>
  <main>
    <!-- <section>
      <h2>About us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis rerum
        porro molestiae recusandae fuga labore iure dolorem aspernatur quam
        architecto id, nesciunt libero, nisi, vel culpa ut ex. Quam, tempora.
      </p>
      <AppButton text="Scopri di più" @buttonClicked="handleChiSiamo" />
    </section>

    <section>
      <h2>Contattaci</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
        consequuntur hic qui nam voluptatem harum numquam ex velit error
        deserunt ratione corporis sint amet, nemo id vitae recusandae
        consectetur repellat.
      </p>
      <AppButton
        text="Invia il tuo messaggio"
        @buttonClicked="handleContattaci"
      />
    </section> -->

    <TodosList />
  </main>
</template>

<style></style>
