<template>
	<v-ons-page>
		<v-ons-toolbar>
			
			<div class="left"><v-ons-back-button></v-ons-back-button></div>
			<div class="center">Category</div>
			
		</v-ons-toolbar>
		<v-ons-card tappable>
			<div><v-ons-icon icon="md-home" size="45px"></v-ons-icon></div>
			<div>HOME</div>
		</v-ons-card>
		<v-ons-card>
			<div><v-ons-icon icon="md-home" size="45px"></v-ons-icon></div>
			<div>HOME</div>
		</v-ons-card>
		<v-ons-card>
			<div><v-ons-icon icon="md-home" size="45px"></v-ons-icon></div>
			<div>HOME</div>
		</v-ons-card>
		<v-ons-card>
			<div><v-ons-icon icon="md-home" size="45px"></v-ons-icon></div>
			<div>HOME</div>
		</v-ons-card>
		<v-ons-card>
			<div><v-ons-icon icon="md-home" size="45px"></v-ons-icon></div>
			<div>HOME</div>
		</v-ons-card>
		<v-ons-card>
			<div><v-ons-icon icon="md-home" size="45px"></v-ons-icon></div>
			<div>HOME</div>
		</v-ons-card>
	</v-ons-page>
</template>


<script>
	
	export default {
		methods: {
			editButtonClick: function(){
				//this.$emit('edit-button-click', EDIT_ACTIVITY);
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

<style scoped>
	.card{
		width: 45%;
		float: left;
		background-color: #009688;
		color: #FFFFFF;
		text-align: center;
	}
</style>