<template>
	<v-ons-navigator :options="{callback: transitionCallback}" @push-page="pageStack.push($event[0])" :page-stack="pageStack"></v-ons-navigator>
</template>

<script>
	
	import EDIT_ACTIVITY from './EditActivity';
	
	export default {
		
		data: function() {
			return {
				activeIndex: 0,
				isMenuOpen: false,
				openSide: false,
				pageStack: this.$store.getters.pageStack
			};
		},
		
		methods: {
			md: function() {
				return this.$ons.platform.isAndroid();
			},
			menuOpen: function(){
				this.isMenuOpen = true;
			},
			pushPage: function(e){
				//this.pageStack.push(e);
				alert('hello');
			},
			transitionCallback: function(e){
				//this.$ons.notification.confirm('HELLO');
				
			}
		},
		
		computed: {
			title: function() {
				return this.tabs[this.activeIndex].label;
			}
		}
	}
</script>

<style>

</style>
