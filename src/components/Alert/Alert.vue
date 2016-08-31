<template>
	<div>
	    <button @click="isShow = true">弹窗</button>
	    
	    <alert :show.sync="isShow">
	        <div>
	            这里是弹窗的内容
	        </div>
	    </alert>
    </div>
</template>

<script>
    import Alert from '../Common/Alert';
    
    export default {
        data() {
            return {
                isShow: false
            }
        },
        
        components: {
            Alert
        }
    }
</script>