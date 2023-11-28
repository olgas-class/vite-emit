import { reactive } from "vue";

export const store = reactive({
  todos: ["Fare compiti", "Lavare piatti", "Dare da mangiare al gatto"],
  clickedTodo: ""
});
