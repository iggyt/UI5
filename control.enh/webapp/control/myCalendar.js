sap.ui.define(
  ["sap/ui/core/Control", "sap/ui/unified/Calendar"],
  function (Control, Calendar) {
    "use strict";

    return Calendar.extend("control.enh.webapp.control.myCalendar", {
      metadata: {
        properties: {
          finalizeDay: { type: "string", defaultValue: "" },
          specialDays: { type: "object[]", defaultValue: [] },
        },
        events: {
          customEvent: {},
        },
      },

      renderer: {},

      onAfterRendering: function () {
        // Call the base class's onAfterRendering
        if (Calendar.prototype.onAfterRendering) {
          Calendar.prototype.onAfterRendering.apply(this, arguments);
        }

        // Custom logic after rendering
        console.log("Custom Calendar rendered");

        // Change the background color of the specified day
        var customDay = this.getFinalizeDay();
        if (customDay) {
          var $days = this.$().find(".sapUiCalItem");
          $days.each(function () {
            var $day = $(this);
            if ($day.attr("data-sap-day") === customDay) {
              $day.css("background-color", "yellow");
            }
          });
        }

        var specialDays = this.getSpecialDays();
        if (specialDays && specialDays.length > 0) {
          var $days = this.$().find(".sapUiCalItem");
          $days.each(function () {
            var $day = $(this);
            var matchingDays = specialDays.filter(function (specialDay) {
              return $day.attr("data-sap-day") === specialDay.date;
            });

            if (matchingDays.length > 0) {
              var gradientColors = matchingDays.map(function (day) {
                return day.color;
              }).join(", ");
              $day.css("background", `linear-gradient(${gradientColors})`);
            }
          });
        }
      },

      fireCustomEvent: function () {
        this.fireEvent("customEvent");
      },
    });
  }
);
