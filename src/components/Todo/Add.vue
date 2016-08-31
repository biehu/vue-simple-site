<template>
    <input v-model="newTodo" v-on:keyup.enter="addTodo">
</template>
<script>
	export default {
		data() {
			return {
				newTodo: ''
			}
		},
		methods: {
			addTodo: function(){
				var text = this.newTodo.trim();
				if (text) {
					this.$dispatch('add-item', text);
					this.newTodo = '';
				}
			}
		}
	}
</script>