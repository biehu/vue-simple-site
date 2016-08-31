<template>
	<div class="wrap">
		<img class="logo" src="./assets/logo.png">
		
		<ul class="nav nav-tabs nav-justified">
	      <li role="presentation" class="active" v-link="{path: '/hello', activeClass: 'active'}"><a >Hello</a></li>
	      <li role="presentation" v-link="{path: '/alert', activeClass: 'active'}"><a >Alert</a></li>
	      <li role="presentation" v-link="{path: '/todo', activeClass: 'active'}"><a href="#">Todo</a></li>
	    </ul>
		
		<div class="content">
			<router-view
			     transition="fade"
				 transition-mode="out-in"
			
			></router-view>
		</div>
	</div>
</template>
<style>
	@import './assets/bootstrap.min.css';
	
	.fade-transition {
	  transition: opacity .3s ease;
	}
	.fade-enter, .fade-leave {
	  opacity: 0;
	}
	
	.content {
		margin: 20px;
	}
	.wrap {
		margin: 20px;
	}
	.logo {
		display: block;
		width: 50px;
		height: 50px;
		margin: 10px auto;
	}
</style>



