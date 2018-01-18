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
		
		<v-ons-action-sheet :visible.sync="actionSheet2Visible" cancelable>
			<div class="action-sheet-title">
				Sub Category
			</div>
			<v-ons-list>
				<v-ons-list-item v-for="subCat in subCategories" :key="subCat.id" tappable>
					<label class="left" :for="'sub-cat-' + subCat.id">
						<v-ons-icon icon="ion-ios-snowy"></v-ons-icon>
					</label>
					<label class="center" :for="'sub-cat-' + subCat.id">{{subCat['name']}}</label>
					<label class="right">
						<v-ons-radio :value="subCat.id" v-model="subCatRadioValue" :input-id="'sub-cat-' + subCat.id"></v-ons-radio>
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
				//CHANGE BUTTON OF STOPWATCH
				$('#stop-watch').on('runnerStart', function(){
					self.toggleButtonIcon = 'md-pause-circle';
				});
				//CHANGE BUTTON OF STOPWATCH AND VISIBLE ACTION SHEET
				$('#stop-watch').on('runnerStop', function(){
					self.actionSheetVisible = true;
					self.toggleButtonIcon = 'md-play-circle';
				});
				
				// FETCHING CATEGORIES FROM DATABASE
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
			});
		},
		data: function(){
			return {
				actionSheetTitle: '',
				actionSheetVisible: false,
				actionSheet2Visible: false,
				checkbox: 'checkbox',
				toggleButtonIcon: 'md-play-circle',
				categories: [],
				subCategories: [],
				catRadioValue: '',
				subCatRadioValue: ''
			}
		},
		watch:{
			actionSheetVisible: function(value){
				var self = this;
				if(!value){
					self.catRadioValue = '';
				};
			},
			actionSheet2Visible: function(value){
				var self = this;
				if(!value){
					self.subCatRadioValue = '';
				};
			},
			catRadioValue: function(value){
				var self = this;
				if(value !== ''){
					console.log('Selected category:');
					console.log(value);
					var SB = lf.schema.create('ActivityReach', 1);
					
					SB.connect().then(function(db){
						var SC = db.getSchema().table('sub_category');
						db.select(SC.id, SC.name).from(SC).where(SC.category_id.eq(value))
						.exec()
						.then(function(row){
							console.log('Corresponding sub-categories:');
							console.log(row);
							self.subCategories = row;
						});
					});
					//self.actionSheetVisible = false;
					self.actionSheet2Visible = true;
				};
			},
			subCatRadioValue: function(value){
				var self = this;
				if(value !== ''){
					console.log('Selected sub-category');
					console.log(value);
					var saveConfirm = self.$ons.notification.confirm('Want to save?');
					saveConfirm.then(function(value){
						if(value === 1){
							var info = $('#stop-watch').runner('info');
							console.log(info);
							
							//INSERT INTO DATABASE
							var SB = lf.schema.create('ActivityReach', 1);
							SB.connect().then(function(db){
								
								var A = db.getSchema().table('activity');
								var row = A.createRow({
									"id": self.uniqueId(),
									"description": '',
									"start_time": new Date(info.startTime),
									"total_time": info.time,
									"formatted_time": info.formattedTime,
									"created_at": new Date(),
									"sync_status": false,
									"sub_category_id": self.subCatRadioValue
								});
								db.insertOrReplace().into(A).values([row]).exec()
								.then(function(data){
									if(data){
										console.log('inserted data:');
										console.log(data);
										
										self.actionSheet2Visible = false;
										self.actionSheetVisible = false;
										
										$('#stop-watch').runner('reset');
										self.$ons.notification.toast('Activity has been saved', {timeout: 2000})
									};
								});
							});
							
						}else{
							self.actionSheetVisible = false;
							self.actionSheet2Visible = false;
						};
					})
				}
			}
		},
		methods: {
			toggleStopWatch: function(){
				$('#stop-watch').runner('toggle');
			},
			addCatIconClicked: function(){
				this.$emit('add-cat-btn-clicked', CATEGORY);
				this.actionSheetVisible = false;
			},
			uniqueId: function(){
				var d = new Date().valueOf();
				var n = d.toString();

				var result = '';
				var length = 32;
				var p = 0;
				var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

				// bold for illustration  

				for (var i = length; i > 0; --i){
					result += ((i & 1) && n.charAt(p) ? '' + n.charAt(p) + '' : chars[Math.floor(Math.random() * chars.length)]);
					if(i & 1) p++;
				};
				
				return result;
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