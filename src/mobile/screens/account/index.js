import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const Account = () => {
	return (
		<Fragment>
			<p>Hello Account Screen</p>
			<Link to={'/'}>Trang Chủ</Link>
		</Fragment>
	);
};
export default Account;
