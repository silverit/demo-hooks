const { alias, configPaths } = require('react-app-rewire-alias');

module.exports = function override(config) {
	alias(configPaths())(config);
	alias({
		...configPaths('jsconfig.json'),
	})(config);

	return config;
};
