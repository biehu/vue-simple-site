<template>
	<div>
		<add v-on:add-item="addTodo"></add>
	    <ul>
	        <li v-for="todo in todos">
	            <span>{{todo.text | deleteMark}}</span>
	            <button v-on:click="removeTodo($index)">
	                X
	            </button>
	        </li>
	    </ul>
		<p>{{isShowClone}}</p>
		<alert :show.sync="isShow">
	        <div>
	            {{infoText}}
	        </div>
	    </alert>
	</div>
</template>

<script>
	import Add from './Add';
	import Alert from '../Common/Alert';
	
	import handleTodo from '../../store/store';
	
	import {deleteMark} from '../../filters';
	
	export default {
		data() {
			return {
				todos: [],
				infoText: '',
				isShow: false
			};
		},
		computed: {
           isShowClone: function () {
		   	  return String(this.isShow) + 2222;
		   } 
        },
		ready() {
			this.todos = handleTodo.fetch();
		},
		methods: {
			addTodo: function (text) {
				this.todos.push({text: text});
				handleTodo.save(this.todos);
				if (!this.infoText) this.infoText = '添加成功！';
				this.isShow = true;
			},
			removeTodo: function(index){
				this.todos.splice(index, 1);
				handleTodo.save(this.todos);
			}
		},
		filters: {
			deleteMark
		},
		components: {
			Add,
			Alert
		}
	}
</script>