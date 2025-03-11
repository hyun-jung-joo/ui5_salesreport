sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
    "use strict";

    return Controller.extend("sync.c22.salesreport.controller.SalesList", {
        onInit() {},

        // item 클릭 되었을 때
        onPressItemClick(oEvent) {
            // 클릭한 행 정보
            var oItem = oEvent.getSource();

            // sales 모델 가져오기
            var oContext = oItem.getBindingContext("sales");

            // SalesList.view.xml
            var oSalesListView = this.getView();

            // SalesDetail.view.xml
            var oDetailView = oSalesListView.byId("idDetailView");

            var sPath = oContext.getPath();
            oDetailView.bindElement({
                path: sPath,
                model: "sales",
            });
        },
    });
});
