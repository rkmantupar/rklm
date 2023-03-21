/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zbpt/day5exercise1_mantupar/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
