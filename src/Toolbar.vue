<template id="toolbar">
	<v-ons-toolbar>
		<div class="left">
			<v-ons-toolbar-button @click="menuButtonClick">
				<v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
			</v-ons-toolbar-button>
		</div>
		<div class="center">ActivityReach</div>
	</v-ons-toolbar>
</template>

<script>
	export default {
		
		methods: {
			menuButtonClick: function(e){
				this.$emit('menu-button-click')
			}
		}
		
	}
</script>