sap.ui.define([
    'sap/m/MessageToast',
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (MessageToast,Controller) {
        "use strict";

        return Controller.extend("zbpt.day5exercise1mantupar.controller.Home", {
            onSendBtn: function(oEvent) {
                var oView = this.getView();
                var sName = oView.byId("NameInput").getValue();
                var sSurname = oView.byId("SurnameInput").getValue();
                var sAge = oView.byId("AgeInput").getValue();
                var oTech = oView.byId("TechInput");
                
                console.log(oView);
                console.log(sName);
                console.log(sSurname);
                console.log(sAge);
                console.log(oTech);
                MessageToast.show("Your name is " + sName + ", your surname is " + sSurname + ", your age is " + sAge);

            }
        });
    });
