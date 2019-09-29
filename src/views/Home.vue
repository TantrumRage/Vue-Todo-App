<template>
  <div class="h-100 w-100">
    <prompt-box-delete-todo
      v-show="deleteTodoVisible"
      v-on:toggleDeleteTodo="toggleDeleteTodo"
    ></prompt-box-delete-todo>

    <prompt-box-edit-todo
      v-show="editTodoVisible"
      v-on:toggleEditTodo="toggleEditTodo"
    ></prompt-box-edit-todo>

    <div class="d-flex h-100 w-100">
      <div class="home m-auto border">
        <todo-container
          v-on:toggleDeleteTodo="toggleDeleteTodo"
          v-on:toggleEditTodo="toggleEditTodo"
        ></todo-container>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoContainer from "@/components/TodoContainer.vue";
import PromptBoxDeleteTodo from "@/components/PromptBoxDeleteTodo.vue";
import PromptBoxEditTodo from "@/components/PromptBoxEditTodo.vue";
import validateInputMixin from '@/mixins/validateInputMixin';

export default {
  name: "home",
  components: {
    TodoContainer,
    PromptBoxDeleteTodo,
    PromptBoxEditTodo
  },
  data: function() {
    return {
      deleteTodoVisible: false,
      editTodoVisible: false
    };
  },
  methods: {
    toggleDeleteTodo: function(todo) {
      this.$root.$emit("passDataToDelete", todo);
      this.deleteTodoVisible = !this.deleteTodoVisible;
    },
    toggleEditTodo(todo) {
      if(todo !== undefined){
        if(this.validateInput(todo.editTodoText) !== false) {
      	  this.$root.$emit("passDataToEdit", todo);
          this.editTodoVisible = !this.editTodoVisible;
        }else {
      	  alert("Empty value is not allowed!");
        }	
      }else {
      	this.editTodoVisible = !this.editTodoVisible;
      }
      
      
    }
  },
  mounted() {
    this.$root.$on("deleteTodoItem", () => {
      this.deleteTodoVisible = !this.deleteTodoVisible;
    });
    this.$root.$on("editTodoItem", () => {
      this.editTodoVisible = !this.editTodoVisible;
    });
  },
  mixins: [validateInputMixin]
};
</script>
