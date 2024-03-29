sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (jQuery,Controller,MessageToast,JSONModel) {
	"use strict";

	return Controller.extend("zapp.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf zapp.view.Page2
		 */
		onInit: function (evt) {
			var oModel = new JSONModel("model/products.json");
			this.getView().setModel(oModel);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Detail").attachMatched(this._onRouteMatched, this);
			
			
		},
		_onRouteMatched : function (oEvent) {
			var oArgs, oView;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();
			oView.bindElement({
    			path : "/ProductCollection/" + oArgs.ProductId + "/",
    			events : {
    			dataRequested: function () {
        			oView.setBusy(true);
    			 	},
    	
    			 	dataReceived: function () {
       			oView.setBusy(false);
    			 	}	
    			 }
			});
		MessageToast.show("/ProductCollection/" + oArgs.ProductId, {duration: 10000});	
		},
		
		onPressPage2: function (evt) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Page2");
		},
				
		onPressHome: function (evt) {
			MessageToast.show("Pressed : HOME ");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Home");
		},
		

		handleNavButtonPress : function(evt) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Page3");
		}
		
		
		

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