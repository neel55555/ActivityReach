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
	</v-ons-page>
</template>

<script>
	export default {
		
		data: function(){
			return {
				key: 'Category',
				name: ''
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
		border: 2px solid #009688;
		width: 100%;
		height: 120px;
		font-size: 16px;
		padding: 15px;
	}
</style>


