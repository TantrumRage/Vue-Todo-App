<template>
  <div class="overlay" v-if="visible">
    <div id="pop-up-box" class="m-auto">
      <div class="card">
        <div class="card-header text-center">
          <div class="row">
            <div class="col-8 text-left">
              Delete {{todolist.text}}?
            </div>
            <div class="col-4 text-right pointer p-0">
              <span class="p-2" @click="visible = !visible">
                <i class="fas fa-times-circle"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="card-body">
          Are you sure you want to delete {{todolist.text}}?
        </div>
        <div class="card-footer">
          <div class="col-12 d-block text-right">
            <button
              class="btn btn-primary btn-sm mr-2"
              @click="thisComponent.$root.$emit('deleteTodoList', todolist)"
            >
              Delete
            </button>
            <button
              class="btn btn-primary btn-sm"
              @click="visible = !visible"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromptBoxDeleteTodoList",
  data: function() {
    return {
      todolist: {},
      thisComponent: this,
      visible: false,
    };
  },
  mounted() {
    this.$root.$on("passDataToDelete", todolist => {
      this.todolist = todolist;
    });
    this.$root.$on("promptDeleteTodoList", todolist => {
      this.todolist = todolist;
      this.visible = !this.visible;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#pop-up-box {
  height: 150px;
  width: 300px;
  border: 1px solid #dee2e6;
}
</style>
