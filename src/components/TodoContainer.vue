<template>
  <div id="todo-container" class="row w-100 h-100 bg-light m-0">
    <div id="todo-header" class="col-12">
      <h1 class="text-center border-bottom">Todo</h1>
    </div>
    <div id="todo-content" class="col-12 text-center pt-4">
      <div class="row pl-3 pr-3" v-for="todo in todos">
      	<div class="col-12 p-0 pt-2 pb-2 d-flex border-bottom">
        <div class="col-2" v-if="!todo.editTodo">
          <span class="pointer" @click="todo.done = !todo.done">
            <i class="far fa-check-square" v-show="todo.done"></i>
            <i class="far fa-square" v-show="!todo.done"></i>
          </span>
        </div>
        <div class="col-7 text-left pl-0" v-if="!todo.editTodo">
          <div class="done" v-if="todo.done">
            {{ todo.text }}
          </div>
          <div v-else>
            {{ todo.text }}
          </div>
        </div>
        <div class="col-9 text-left p-0 pl-3" v-else>
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-10 pr-0">
                  <input type="text" class="form-control textbox-with-cleartext" 
                  v-model="todo.editTodoText" />
                </div>
                <div class="col-2 pl-0">
                  <div class="clear-text" @click="todo.editTodoText = ''">
                    <span class="m-auto">
                      <i class="fas fa-times"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div v-if="todo.editTodo == false">
            <span class="pointer mr-2" @click="todo.editTodo = true">
              <i class="fas fa-edit"></i>
            </span>
            <span class="pointer" @click="$emit('toggleDeleteTodo', todo)">
              <i class="fas fa-trash-alt"></i>
            </span>
          </div>
          <div v-else>
            <span class="pointer mr-2" @click="$emit('toggleEditTodo', todo)">
              <i class="fas fa-check"></i>
            </span>
            <span class="pointer" @click="cancelEditTodo(todo)">
              <i class="fas fa-times"></i>
            </span>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div id="todo-footer" class="col-12 bg-light text-center p-2 pb-4">
      <button
        class="btn btn-sm btn-outline-success font-weight-bold"
        v-show="submitBtnVisible"
        @click="submitBtnVisible = !submitBtnVisible"
      >
        Add New
      </button>
      <div class="text-right" v-show="!submitBtnVisible">
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-10 pr-0">
                <input type="text" class="form-control mb-2 textbox-with-cleartext" v-model="addTodoItemText" />
              </div>
              <div class="col-2 pl-0">
                <div class="clear-text" @click="addTodoItemText = ''">
                  <span class="m-auto">
                    <i class="fas fa-times"></i>
                  </span>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        
        <button class="btn btn-sm btn-success mt-2 mr-2 font-weight-bold" 
        @click="addTodoItem()">
          Done
        </button>
        <button class="btn btn-sm btn-outline-none mt-2 font-weight-bold" 
        @click="submitBtnVisible = ! submitBtnVisible">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script scoped>
import validateInputMixin from '@/mixins/validateInputMixin';

export default {
  name: "TodoContainer",
  components: {},
  mounted() {
    this.$root.$on("deleteTodoItem", todo => {
      this.deleteTodoItem(todo);
    });
    this.$root.$on("editTodoItem", todo => {
      this.editTodoItem(todo);
    });
  },
  data: function() {
    return {
      todos: [],
      submitBtnVisible: true,
      addTodoItemText: "",
    };
  },
  methods: {
    addTodoItem() {
      let newTodoItem = this.validateInput(this.addTodoItemText);
      if(newTodoItem !== false) {
      	this.todos.push({
          text: newTodoItem,
          done: false,
          editTodo: false,
          editTodoText: newTodoItem
        });
      }else {
      	alert("Empty values is not allowed.");
      }
      this.addTodoItemText = "";
      this.submitBtnVisible = !this.submitBtnVisible;
    },
    deleteTodoItem(todo) {
      let itemIndex = this.todos.indexOf(todo);
      this.todos.splice(itemIndex, 1);
    },
    editTodoItem(todo) {
      todo.text = todo.editTodoText;
      todo.editTodo = false;
    },
    cancelEditTodo(todo) {
      todo.editTodoText = todo.text;
      todo.editTodo = false;
    },
  },
  mixins: [validateInputMixin]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
