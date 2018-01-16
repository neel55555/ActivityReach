<template id="stop-watch">
	<v-ons-page>
		<div class="stop-watch">
			<span id="stop-watch">00:00:00:00</span><br>
			<v-ons-icon :icon="toggleButtonIcon" @click="toggleStopWatch" class="stop-watch__icon"></v-ons-icon>
		</div>
		<v-ons-action-sheet :visible.sync="actionSheetVisible" cancelable>
			<div class="action-sheet-title">
				Categories<span @click="addCatIconClicked" class="addCatIcon">+</span>
			</div>
			<v-ons-list>
				<v-ons-list-item v-for="category in categories" :key="category.id" tappable>
					<label class="left" :for="'catradio-' + category.id">
						<v-ons-icon :icon="category['icon']" size="24px"></v-ons-icon>
					</label>
					<label class="center" :for="'catradio-' + category.id">
						{{category['name']}}
					</label>
					<label class="right">
						<v-ons-radio :value="category.id" v-model="catRadioValue" :input-id="'catradio-' + category.id"></v-ons-radio>
					</label>
				</v-ons-list-item>
			</v-ons-list>
		</v-ons-action-sheet>
	</v-ons-page>
</template>

<script>

	import CATEGORY from './Category.vue';
	import Database from './database/database.js';
	
	export default {
		
		mounted: function(){
			var self = this;
			
			self.$nextTick(function(){
				$('#stop-watch').runner();
				
				$('#stop-watch').on('runnerStart', function(){
					self.toggleButtonIcon = 'md-pause-circle';
				});
				
				$('#stop-watch').on('runnerStop', function(){
					self.actionSheetVisible = true;
					self.toggleButtonIcon = 'md-play-circle';
				});
				
				var SB = lf.schema.create('ActivityReach', 1);
				Database.createTable(SB);
				SB.connect().then(function(db){
					Database.populate(db);
					var C = db.getSchema().table('category');
					var SC = db.getSchema().table('sub_category');
					db.select(C.name,C.id,C.icon).from(C).exec().then(function(result){
						result.forEach(function(row){
							self.categories.push(row);
						});
					});
				});
			})
		},
		data: function(){
			return {
				actionSheetTitle: '',
				actionSheetVisible: false,
				checkbox: 'checkbox',
				toggleButtonIcon: 'md-play-circle',
				categories: [],
				catRadioValue: ''
			}
		},
		watch:{
			actionSheetVisible: function(value){
				var self = this;
				if(!value){
					self.catRadioValue = '';
				};
			},
			catRadioValue: function(value){
				var self = this;
				if(value !== ''){
					var confirmSave = self.$ons.notification.confirm('Want to save?');
					confirmSave.then(function(value){
						self.actionSheetVisible = false;
					});
				};
			}
		},
		methods: {
			toggleStopWatch: function(){
				$('#stop-watch').runner('toggle');
			},
			addCatIconClicked: function(){
				this.$emit('add-cat-btn-clicked', CATEGORY);
				this.actionSheetVisible = false;
			}
		}
	};
</script>

<style scoped>
	.addCatIcon{
		font-size:30px;
		float:right;
		padding-right:15px
	}
</style>