sap.ui.define([
    "sap/ui/unified/CalendarLegendRenderer"
], function(CalendarLegendRenderer) {
    "use strict";

    var MyCalendarLegendRenderer = Object.create(CalendarLegendRenderer);

    // Example: Override render method
    MyCalendarLegendRenderer.render = function(oRm, oLegend) {
        // Custom rendering logic before
        oRm.write("<div class='myCalendarLegend'>");
        // Call base renderer
        CalendarLegendRenderer.render.apply(this, arguments);
        // Custom rendering logic after
        oRm.write("</div>");
    };

    return MyCalendarLegendRenderer;
});