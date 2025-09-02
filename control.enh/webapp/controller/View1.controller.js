sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("com.iggit.control.enh.controller.View1", {
        onInit() {
            var oData = { "data": [
                { "date": "20250910", "color": "lightgreen" },
                { "date": "20250915", "color": "lightpink" },
                { "date": "20250915", "color": "green" },
                { "date": "20250915", "color": "yellow" }
            ] };
            this.getView().setModel(new JSONModel(oData), "specialDays");
        }
    });
});