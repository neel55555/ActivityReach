import SPLITTER from './Splitter';

export default {
	state: {
		categories: [],
		sub_categories: [],
		activities: [],
		pageStack: [SPLITTER]
	},
	
	getters: {
		categories: function(state){
			return state.categories;
		},
		activities: function(state){
			return state.activities;
		},
		sub_categories: function(state){
			return state.sub_categories;
		},
		pageStack: function(state){
			return state.pageStack;
		}
	}
}