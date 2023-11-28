<script>
export default {
  props: {
    text: String,
  },
};
</script>

<template>
  <button @click="$emit('buttonClicked')">{{ text }}</button>
</template>

<style scoped>
button {
  padding: 0.5rem 1rem;
  background-image: linear-gradient(to right, green, yellow);
}
</style>
