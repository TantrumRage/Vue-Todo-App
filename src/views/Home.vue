<template>
  <div class="h-100 w-100">
  	<prompt-box 
  	:prompt="prompt"
  	v-show="popupBoxVisible" 
  	v-on:togglePopupBox="togglePopupBox"></prompt-box>
  	<div class="d-flex h-100 w-100">
  	  <div class="home m-auto border">
  	    <todo-container 
  	    v-on:togglePopupBox="togglePopupBox"></todo-container>
  	  </div>	
  	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoContainer from "@/components/TodoContainer.vue";
import PromptBox from "@/components/PromptBox.vue";
export default {
  name: "home",
  components: {
    TodoContainer,
    PromptBox
  },
  data: function() {
  	return {
  		popupBoxVisible: false,
  		prompt: {head: '', body: ''},
  	}
  },
  methods: {
  	togglePopupBox: function(todo, action, prompt) {
  	  if(prompt != undefined){
  	  	this.prompt = prompt;
  	  }
  	  this.$root.$emit('passDataTo' + action, todo);	
  	  this.popupBoxVisible = !this.popupBoxVisible;
  	}
  },
  mounted() {
  	this.$root.$on('deleteTodoItem', todo => {
  	  this.popupBoxVisible = !this.popupBoxVisible;
  	});
  }
};
</script>
