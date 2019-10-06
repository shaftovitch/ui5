sap.ui.define([
	"sap/ui/model/json/JSONModel"
	
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModelProducts = new JSONModel();
			oModelProducts.loadData("products.json");
			return oModelProducts;
		}

	};

});