sap.ui.define([
    "sap/ui/unified/CalendarLegend",
    "sap/ui/unified/CalendarLegendItem",
    "sap/ui/unified/CalendarLegendRenderer"

], function(CalendarLegend, CalendarLegendItem, CalendarLegendRenderer) {
    "use strict";

    return CalendarLegend.extend("control.enh.webapp.control.myCalendarLegend", {
        metadata: {
            properties: {
                specialDays: {
                    type: "object[]",
                    defaultValue: []
                }
            }
        },

        init: function() {
            CalendarLegend.prototype.init.call(this);
            this.setSpecialDays(this.getSpecialDays());
        },

        setSpecialDays: function(aSpecialDays) {
            this.setProperty("specialDays", aSpecialDays, true);
            this._updateSpecialDays();
            return this;
        },

        _updateSpecialDays: function() {
            // Remove previously added special day items
            // var aItems = this.getItems();
            // for (var i = aItems.length - 1; i >= 0; i--) {
            //     if (aItems[i].getCustomType() === "SpecialDay") {
            //         this.removeItem(aItems[i]);
            //     }
            // }

            // Add new special day items
            var aSpecialDays = this.getSpecialDays() || [];
            aSpecialDays.forEach(function(oDay) {
                var oItem = new CalendarLegendItem({
                    text: oDay.description,
                    color: oDay.color
                });
                
                this.addItem(oItem);
            }.bind(this));
        },

        renderer: CalendarLegendRenderer,

        

        // Override setItems to ensure specialDays are always updated
        setItems: function(aItems) {
            CalendarLegend.prototype.setItems.apply(this, arguments);
            this._updateSpecialDays();
            return this;
        }
    });
});