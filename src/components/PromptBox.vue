<template>
  <div class="overlay">
  	<div id="pop-up-box" class="m-auto">
  	  <div class="card">
  	  	<div class="card-header text-center">
  	  	  <div class="row">
  	  	  	<div class="col-8 text-left">
  	  	  	  {{prompt.head}}
  	  	    </div>
  	  	    <div class="col-4 text-right pointer p-0">
  	  	      <span class="p-2"  @click="$emit('togglePopupBox')">
  	  	      	<i class="fas fa-times-circle"></i>
  	  	      </span>
  	  	    </div>
  	  	  </div>
  	  	</div>
  	  	<div class="card-body">
  	  	  {{prompt.body}}
  	  	</div>
  	  	<div class="card-footer">
  	  	  <div class="col-12 d-block text-right">
  	  	  	<button class="btn btn-primary btn-sm mr-2"
  	  	  	@click="child.$root.$emit('deleteTodoItem', todo)">
  	  	  	  YES
  	  	  	</button>
  	  	  	<button class="btn btn-primary btn-sm"@click="$emit('togglePopupBox')">
  	  	  	  NO
  	  	  	</button>
  	  	  </div>
  	  	</div>
  	  </div>
  	</div>

  </div>
</template>

<script>
export default {
  name: "PromptBox",
  props: {
    prompt: Object,
  },
  data: function() {
  	return {
  	  todo: {},
  	  child: this,
  	}
  },
  mounted() {
  	this.$root.$on('passDataTodelete', todo => {
  	  this.todo = todo;
  	});
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#pop-up-box{
	height: 150px;
	width: 	300px;
	border: 1px solid #dee2e6;
}
</style>