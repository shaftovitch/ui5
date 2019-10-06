sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (jQuery,Controller,MessageToast,JSONModel) {
	"use strict";

	return Controller.extend("zapp.controller.Master", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf zapp.view.Page2
		 */
		onInit: function (evt) {
			var oModel = new JSONModel("model/products.json");
			this.getView().setModel(oModel);
		},
		
		onListItemPress : function (oEvent) {
			//MessageToast.show("onListItemPress in / Pag3");
			//var oList = oEvent.getParameters(),
			//	bSelected = oEvent.getParameter("selected");

			// skip navigation when deselecting an item in multi selection mode
			
				// get the list item, either from the listItem parameter or from the event's source itself (will depend on the device-dependent mode).
			//this._showDetail(oEvent.getParameter("listItem"));
			//oEvent.getParameters("Id").getValue();
			var oItem = oEvent.getSource();
			var oContext = oItem.getProperty();
			
			//alert(sMessage);
			
},
			select : function (oEvent) {
					var sMessage = oEvent.getSource().getSelectedItem();
					MessageToast.show( sMessage );
		},
		_showDetail : function (oItem) {
			//var bReplace = !Device.system.phone;
			// set the layout property of FCL control to show two columns
			//this.getModel("appView").setProperty("/layout", "TwoColumnsMidExpanded");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
			oRouter.navTo("Page3", {
				objectId : oItem.getBindingContext().getProperty("ProductId")
			});
		}
		
		
		// onPressPage2: function (evt) {
		// 	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		// 	oRouter.navTo("Page2");
		// },
				
		// onPressHome: function (evt) {
		// 	MessageToast.show("Pressed : HOME ");
		// 	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		// 	oRouter.navTo("Home");
		// },
		
		// handleSearch : function (evt) {
		// 	// create model filter
		// 	var filters = [];
		// 	var query = evt.getParameter("query");
		// 	if (query && query.length > 0) {
		// 		var filter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.Contains, query);
		// 		filters.push(filter);
		// 	}

		// 	// update list binding
		// 	var list = this.getView().byId("ProductList");
		// 	var binding = list.getBinding("items");
		// 	binding.filter(filters);
		// },
		
		
		
		// getSplitAppObj : function() {
		// 	var result = this.byId("SplitAppDemo");
		// 	if (!result) {
		// 		MessageToast.show("erreur fct getSplitAppObj !!!", {duration: 5000});
		// 	}
		// 	return result;
		// }
		
		

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf zapp.view.Page2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf zapp.view.Page2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf zapp.view.Page2
		 */
		//	onExit: function() {
		//
		//	}

	});

});