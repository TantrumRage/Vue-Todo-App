<template>
  <div class="col-12">
  	<div class="mb-2">
	  <div class="row">
	  	<div class="col-12 p-0 text-right">
	  	  <button class="btn btn-success btn-sm" 
	      v-show="!createNewList"
	      @click="createNewList = !createNewList">
	  	    Create new list
	      </button>	
	  	</div>
	    
	  </div>
	  <div class="row" v-show="createNewList">
	    <div class="col-9 pl-0">
	  	  <input id="create-new-list-textbox" type="text" class="form-control"
	  	  v-model="newTodoList">
	    </div>
	    <div class="col-3 p-0">
	  	  <button id="create-new-list-done" class="btn btn-success btn-sm mr-2"
	  	  @click="createNewTodoList()">
	  	    <i class="fas fa-check"></i>
	  	  </button>
	  	  <button id="create-new-list-cancel" class="btn btn-danger btn-sm"
	  	  @click="createNewList = !createNewList">
	  	    <i class="fas fa-times"></i>
	  	  </button>
	    </div>
	  </div>
  	</div>
  	
  	<div class="row text-left border-top pt-2" v-for="todolist in todoLists">
  	  <div class="col-9 pointer"
  	  @click="thisComponent.$root.$emit('selectTodoList', todolist.text, todolist.todos)">
  	  	{{todolist.text}}
  	  </div>
  	  <div class="col-3 p-0 d-flex">
  	  	<span class="m-auto pointer"
  	  	@click="thisComponent.$root.$emit('promptDeleteTodoList', todolist)">
  	  	  <i class="fas fa-trash-alt"></i>
  	  	</span>
  	  </div>
  	</div>
  </div>
</template>

<script>
import validateInputMixin from '@/mixins/validateInputMixin';
export default {
  name: "TodoLists",
  data: function() {
  	return {
  	  thisComponent: this,
  	  createNewList: false,
  	  newTodoList: '',
  	  todoLists: [],
  	}
  },
  mounted() {
  	this.$root.$on('deleteTodoList', (todolist) => {
  	  this.deleteTodoList(todolist);

  	  this.$root.$emit('promptDeleteTodoList');
  	});
  },
  methods: {
  	createNewTodoList() {
  	  let newTodoList = this.validateInput(this.newTodoList);

  	  if(newTodoList !== false) {
		this.todoLists.push({
  	  	  text: this.newTodoList, 
  	  	  todos: [],
  	    });
  	    this.newTodoList = '';
  	    this.createNewList = !this.createNewList;
  	  }else{
  	  	alert('Empty values is not allowed!');
  	  }	  
  	},
  	deleteTodoList(todolist) {
  	  let listIndex = this.todoLists.indexOf(todolist);
  	  this.todoLists.splice(listIndex, 1);
  	}
  },
  mixins: [validateInputMixin],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#create-new-list-done, #create-new-list-cancel {
  width: calc(1.5em + .75rem + 2px);
}

#create-new-list-textbox {
  height: calc(1.2em + .75rem + 2px);
}
</style>