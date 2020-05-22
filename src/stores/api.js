const api = {
	async loadShop(handle) {
		const res = await fetch(`https://api.lookme.vn/v3.2/shop/get-by-handle/ty-ty-makeup`);
		return await res.json();
	},
};

export default api;
