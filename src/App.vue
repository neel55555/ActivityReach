<template>
	<v-ons-navigator @push-page="pageStack.push($event)" :page-stack="pageStack"></v-ons-navigator>
</template>

<script>
	
	import SPLITTER from './Splitter';
	import EDIT_ACTIVITY from './EditActivity';
	
	export default {
		
		data: function() {
			return {
				activeIndex: 0,
				isMenuOpen: false,
				openSide: false,
				pageStack: [EDIT_ACTIVITY, SPLITTER]
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
