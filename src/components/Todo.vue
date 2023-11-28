<script>
import { store } from "../store";
export default {
  props: {
    todo: String,
    todoIndex: Number,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    deleteClick() {
      this.store.clickedTodo = this.todoIndex;
      this.$emit("delete");
    },
  },
};
</script>

<template>
  <div>
    <p>
      <span>{{ todo }}</span>
      <span @click="deleteClick" class="delete">x</span>
    </p>
  </div>
</template>

<style scoped>
p {
  display: flex;
  justify-content: space-between;
}

.delete {
  color: green;
}
</style>
