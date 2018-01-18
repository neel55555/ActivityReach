<template>
	<v-ons-page>
		<v-ons-toolbar>
			<div class="left"><v-ons-back-button></v-ons-back-button></div>
			<div class="center">Category</div>
		</v-ons-toolbar>
		
		<v-ons-row>
			<v-ons-col>
				<v-ons-card v-for="category in categories" :key="category.id">
					<div>
						<v-ons-icon :icon="category['icon']" size="45px"></v-ons-icon>
					</div>
					<div>{{category['name']}}</div>
					<v-ons-ripple></v-ons-ripple>
				</v-ons-card>
			</v-ons-col>
		</v-ons-row>
		
	</v-ons-page>
</template>


<script>
	
	export default {
		mounted: function(){
			var self = this;
			self.$nextTick(function(){
				
				var SB = lf.schema.create('ActivityReach', 1);
				
				SB.connect().then(function(db){
					var C = db.getSchema().table('category');
					db.select(C.id, C.name, C.icon).from(C).exec().then(function(result){
						result.forEach(function(row){
							console.log(row);
							self.categories.push(row);
						});
					});
				});
			});
		},
		data: function(){
			return {
				categories: []
			}
		},
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