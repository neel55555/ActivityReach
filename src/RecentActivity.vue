<template>
	<v-ons-page>
		<v-ons-list>
			
			<v-ons-list-item v-for="(activity, index) in activities" :key="index" :class="'rec-'+index">
				<div class="left">
					<v-ons-icon :icon="activity.category.icon"></v-ons-icon>
				</div>
				<div class="center">
					<span class="list-item__title">{{activity.sub_category.name}}</span>
					<span class="list-item__subtitle">{{activity.activity.formatted_time}} {{activity.activity.start_time | formatDate}}</span>
				</div>
				<div class="right">
					<v-ons-icon icon="md-edit" @click="editActivity(activity.activity.id)"></v-ons-icon>
					<v-ons-icon icon="md-delete" @click="deleteActivity(activity.activity.id, index)"></v-ons-icon>
				</div>
			</v-ons-list-item>
			
		</v-ons-list>
	</v-ons-page>
</template>


<script>
	
	import EDIT_ACTIVITY from './EditActivity.vue';
	import WATCH from './StopWatch.vue';
	
	export default {
		
		computed: {
			activities: function(){
				return this.$store.getters.activities;
			}
		},
		methods: {
			editActivity: function(activityId){
				this.$store.state.pageStack.push(EDIT_ACTIVITY);
			},
			
			deleteActivity: function(activityId, index){
				var self = this;
				var isConfirm = this.$ons.notification.confirm('Want to delete it?');
				
				//VARIABLE resolve RETURNS 0 FOR REJECT AND 1 FOR CONFIRM
				isConfirm.then(function(resolve){
					if(resolve === 1){
						
						var SB = lf.schema.create('ActivityReach', 1);
						SB.connect().then( db => {
							var A = db.getSchema().table('activity');
							db.delete().from(A).where(A.id.eq(activityId)).exec().then(()=>{
								
								self.$store.state.activities.splice(index, 1);
								
							});
						});
					}
				});
				
			}
		},
		filters: {
			formatDate: function(date){
				var format = new Date(date);
				return format.toLocaleString();
			}
		}
	};
</script>

<style>
	.list-a-item {
	  display: inline-block;
	  margin-right: 10px;
	}
	.list-a-enter-active, .list-a-leave-active {
	  transition: all 1s;
	}
	.list-a-enter, .list-a-leave-to {
	  opacity: 0;
	  transform: translateY(30px);
	}
</style>