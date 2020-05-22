import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '@stores';
const Home = () => {
	const { state, loadShop } = useShop();
	const { SHOP_DETAIL } = state;
	console.log(state);
	return (
		<Fragment>
			<p>Hello Home Screen</p>
			<Link to={'/tai-khoan'}>Tài Khoản</Link>
			<button onClick={loadShop}>Load Shop Đi Nè</button>
			{SHOP_DETAIL && <p>{JSON.stringify(SHOP_DETAIL)}</p>}
		</Fragment>
	);
};

export default Home;
