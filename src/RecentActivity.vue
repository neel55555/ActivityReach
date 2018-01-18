<template>
	<v-ons-page>
		<v-ons-list>
			<v-ons-list-item>
				<div class="left">
					<v-ons-icon icon="md-email"></v-ons-icon>
				</div>
				<div class="center">
					<span class="list-item__title">Cutest kitty</span><span class="list-item__subtitle">On the Internet</span>
				</div>
				<div class="right">
					<v-ons-icon icon="md-edit" @click="editButtonClick"></v-ons-icon>
					<v-ons-icon icon="md-delete" @click="showConfirm"></v-ons-icon>
				</div>
			</v-ons-list-item>
		</v-ons-list>
	</v-ons-page>
</template>


<script>
	
	import EDIT_ACTIVITY from './EditActivity.vue';
	
	export default {
		mounted: function(){
			var SB = lf.schema.create('ActivityReach', 1);
			
		},
		methods: {
			editButtonClick: function(){
				this.$emit('edit-button-click', EDIT_ACTIVITY);
			},
			
			showConfirm: function(){
				var isConfirm = this.$ons.notification.confirm('Want to delete it?');
				
				//VARIABLE resolve RETURNS 0 FOR REJECT AND 1 FOR CONFIRM
				isConfirm.then(function(resolve){
					console.log(resolve)
				})
				
			}
		}
	};
</script>