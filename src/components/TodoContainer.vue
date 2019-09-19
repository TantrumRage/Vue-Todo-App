<template>
  <div id="todo-container" class="row w-100 h-100 bg-light m-0">
    <div id="todo-header" class="col-12">
      <h1 class="text-center border-bottom">Todo</h1>
    </div>
    <div id="todo-content" class="col-12 text-center pt-2">
      <div class="row" v-for="todo in todos">
        <div class="col-2">
          <span>
            <input type="checkbox" class="pointer" />
          </span>
        </div>
        <div class="col-7 text-left pl-0">
          {{todo.text}}
        </div>
        <div class="col-3">
          <span class="pointer mr-2">
            <i class="fas fa-edit"></i>
          </span>
          <span class="pointer">
            <i class="fas fa-trash-alt"></i>
          </span>
        </div>
      </div>
    </div>
    <div id="todo-footer" class="col-12 bg-light text-center p-2 pb-4">
      <button
        class="btn btn-sm btn-outline-success"
        v-show="submitBtnVisible"
        @click="submitBtnVisible = !submitBtnVisible"
      >
        Add New
      </button>
      <div v-show="!submitBtnVisible">
        <input type="text" class="form-control" v-model="addTodoItemText" />
        <button class="btn btn-sm btn-success mt-2" @click="addTodoItem()">
          Done
        </button>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "Test",
  data: function() {
    return {
      todos: [],
      submitBtnVisible: true,
      addTodoItemText: ""
    };
  },
  methods: {
    addTodoItem() {
      this.todos.push({ text: this.addTodoItemText, done: false });
      this.addTodoItemText = "";
      this.submitBtnVisible = !this.submitBtnVisible;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
