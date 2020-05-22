import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '@stores';
const Home = () => {
	const { state, loadShop } = useShop();
	console.log('state', state);
	return (
		<Fragment>
			<p>Hello Home Screen</p>
			<Link to={'/tai-khoan'}>Tài Khoản</Link>
			<button onClick={loadShop}>Load Shop Đi Nè</button>
		</Fragment>
	);
};

export default Home;
