sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("com.iggit.control.enh.controller.View1", {
        onInit() {
            var oData = { "data": [
                { "date": "20250910", "color": "lightgreen", "description": "period start" },
                { "date": "20250915", "color": "lightpink", "description": "pizza time" },
                { "date": "20250915", "color": "green", "description": "no report day" },
                { "date": "20250915", "color": "yellow", "description": "finalize day" }
            ] };
            this.getView().setModel(new JSONModel(oData), "specialDays");
        }
    });
});