<template id="stop-watch">
	<v-ons-page>
		<div class="stop-watch">
			<span id="stop-watch">00:00</span><br>
			<v-ons-icon :icon="toggleButtonIcon" @click="toggleStopWatch" class="stop-watch__icon"></v-ons-icon>
		</div>
		<v-ons-action-sheet :visible.sync="actionSheetVisible" :title="actionSheetTitle" cancelable>
			<v-ons-list>
				<v-ons-list-item tappable>
					<div class="left">
						<v-ons-icon icon="md-home" size="24px"></v-ons-icon>
					</div>
					<div class="center">
						Running
					</div>
					<div class="right">
						<v-ons-checkbox :input-id="checkbox"></v-ons-checkbox>
					</div>
				</v-ons-list-item>
				
			</v-ons-list>
		</v-ons-action-sheet>
	</v-ons-page>
</template>

<script>

	import CATEGORY from './Category.vue';
	
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
				
				$('.addCatIcon').click(function(){
					self.$emit('add-cat-btn-clicked', CATEGORY);
					self.actionSheetVisible = false;
				})
			})
		},
		data: function(){
			return {
				actionSheetTitle: 'Categories<span class="addCatIcon" style="font-size:30px;float:right;padding-right:15px">+</span>',
				actionSheetVisible: false,
				checkbox: 'checkbox',
				toggleButtonIcon: 'md-play-circle',
				categories: {}
			}
		},
		methods: {
			toggleStopWatch: function(){
				$('#stop-watch').runner('toggle');
			}
		}
	};
</script>

<style scoped>
	
</style>