import React from 'react';

import { useShop } from '@stores';
import { HomeComp } from '@mobile/components';
const Home = () => {
	const { state, loadShop } = useShop();
	const { SHOP_DETAIL } = state;
	console.log(state);
	return <HomeComp {...{ loadShop, SHOP_DETAIL }} />;
};

export default Home;
