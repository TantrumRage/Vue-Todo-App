<template>
  <div class="home m-auto">
    <todo-container></todo-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoContainer from "@/components/TodoContainer.vue";
export default {
  name: "home",
  components: {
    TodoContainer
  }
};
</script>
