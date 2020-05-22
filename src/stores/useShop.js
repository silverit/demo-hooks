import { useReducer } from 'react';
import useFecth from 'use-http';
import api from './api';
// action type
const actionType = {
	LOAD_SHOP: 'lookme/shop/LOAD_SHOP',
};

// reducer
const initialState = {
	SHOP_DETAIL: {
		loading: null,
		error: null,
		data: null,
	},
};
function reducer(state, action) {
	switch (action.type) {
		case actionType.LOAD_SHOP:
			return { ...state, SHOP_DETAIL: action.data };
		default:
			throw new Error();
	}
}

// action

export default function UseShop() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const loadShop = async handle => {
		return dispatch({
			type: actionType.LOAD_SHOP,
			data: await api.loadShop(handle),
		});
	};
	return { state, loadShop };
}

// export {
// 	store: shop detail, shop reward,
// 	actions: getShopDetail, getShopReward
// }
