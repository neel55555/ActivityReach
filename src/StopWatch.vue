<template id="stop-watch">
	<v-ons-page>
		<div class="stop-watch">
			<span style="">50:15</span><br>
			<v-ons-icon icon="md-play-circle" class="stop-watch__icon"></v-ons-icon>
		</div>
		<v-ons-action-sheet :visible="actionSheetVisible" :title="actionSheetTitle" cancelable>
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
	export default {
		data: function(){
			return {
				actionSheetTitle: 'Categories',
				actionSheetVisible: true,
				checkbox: 'checkbox'
			}
		}
	};
</script>