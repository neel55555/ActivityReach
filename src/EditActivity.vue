<template>
	<v-ons-page>
		<v-ons-toolbar>
			<div class="left">
				<v-ons-back-button>Page 1</v-ons-back-button>
			</div>
			<div class="center">Page 1</div>
		</v-ons-toolbar>
		<v-ons-list>
			<v-ons-list-header>
				<div class="header-list">Text input</div>
			</v-ons-list-header>
			<v-ons-list-item>
				<div class="left"><v-ons-icon icon="md-home"></v-ons-icon></div>
				<div class="center category-name" @click="actionSheetVisible=true">Headwork</div>
			</v-ons-list-item>
			<v-ons-list-item>
				<div class="left">
				</div>
				<div class="center category-name">
					<textarea class="description" placeholder="Description"></textarea>
				</div>
			</v-ons-list-item>
		</v-ons-list>
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
						<v-ons-radio :input-id="checkbox"></v-ons-radio>
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
				key: 'Edit Activity',
				name: '',
				actionSheetTitle: 'Categories',
				actionSheetVisible: false,
				checkbox: 'checkbox'
			}
		}
	}
</script>

<style scoped>
	.list-header{
		font-size: 16px;
		color: #009688;
	}
	.category-name{
		font-size: 16px;
	}
	.description{
		border: 2px solid #f2f2f2;
		width: 100%;
		height: 120px;
		font-size: 16px;
		padding: 10px 15px;
	}
</style>


