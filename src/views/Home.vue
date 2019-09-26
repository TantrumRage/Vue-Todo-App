<template>
  <div class="h-100 w-100">
    <prompt-box-delete-todo
      v-show="deleteTodoVisible"
      v-on:toggleDeleteTodo="toggleDeleteTodo"
    ></prompt-box-delete-todo>
    <div class="d-flex h-100 w-100">
      <div class="home m-auto border">
        <todo-container
          v-on:toggleDeleteTodo="toggleDeleteTodo"
        ></todo-container>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoContainer from "@/components/TodoContainer.vue";
import PromptBoxDeleteTodo from "@/components/PromptBoxDeleteTodo.vue";
export default {
  name: "home",
  components: {
    TodoContainer,
    PromptBoxDeleteTodo
  },
  data: function() {
    return {
      deleteTodoVisible: false
    };
  },
  methods: {
    toggleDeleteTodo: function(todo) {
      this.$root.$emit("passDataToDelete", todo);
      this.deleteTodoVisible = !this.deleteTodoVisible;
    }
  },
  mounted() {
    this.$root.$on("deleteTodoItem", () => {
      this.deleteTodoVisible = !this.deleteTodoVisible;
    });
  }
};
</script>
