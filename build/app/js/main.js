define(['exports', 'babel-polyfill', 'fetch', 'js/config', 'app/app', 'react'], function (exports, _babelPolyfill, _fetch, _jsConfig, _appApp, _react) {
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

	var _fetch2 = _interopRequireDefault(_fetch);

	var _React = _interopRequireDefault(_react);

	if (!_babelPolyfill2['default']) {
		alert('Error: babel-polyfill could not be detected');
	}
	var root = document.createElement('div');
	root.className = _jsConfig.app.rootClassName;
	document.body.appendChild(root);
	_React['default'].render(_React['default'].createElement(_appApp.App, null), root);
});
//# sourceMappingURL=main.js.map