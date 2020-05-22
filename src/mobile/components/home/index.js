import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const HomeComp = ({ SHOP_DETAIL, loadShop }) => {
	return (
		<Fragment>
			<p>Hello Home Screen</p>
			<Link to={'/tai-khoan'}>Tài Khoản</Link>
			<button onClick={loadShop}>Load Shop Đi Nè</button>
			{SHOP_DETAIL && <p>{JSON.stringify(SHOP_DETAIL)}</p>}
		</Fragment>
	);
};
export default HomeComp;
