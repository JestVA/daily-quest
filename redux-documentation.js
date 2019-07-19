
/* 
* Actions 
*/

const ADD_TODO = 'ADD_TODO'


// this is an action, plain {}
// must always have type
{
	type: ADD_TODO,
	text: 'Discover Redux'
}

import { ADD_TODO, REMOVE_TODO } from '../actionTypes'

{
	type: TOGGLE_TODO,
	index: 5
}

{
	type: SET_VISIBILITY_FILTER,
	filter: SHOW_COMPLETED
}


// action creator - they return actions
function addTodo(text) {
	return {
		type: ADD_TODO,
		text: 'Discover Redux'
	}
}

dispatch(addTodo(text))

const boundAddTodo = text => dispatch(addTodo(text))

boundAddTodo(text)

/*
** Reducers
*/

import { visibilityFilters } from './actions'

const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: []
}

function todoApp(state, action) {
	if (typeof state === 'undefined') {
		return initialState
	}

	return state
}

function todoApp(state = initialState, action) {
	return state
}


// 

function todoApp(state = initialState, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return Object.assign({}, state, {
				visibilityFilter: action.filter
			})
		default;
			return state 
	}
}

const todoApp = (state = initialState, action) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return { ...state, visibilityFilter: action.filter }
		default;
			return state
	}
} 

// The Redux reducer API is (state, action) => newState, but how you create those reducers is up to you.























