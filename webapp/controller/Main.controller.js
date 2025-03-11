sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
    "use strict";

    return Controller.extend("sync.c22.salesreport.controller.Main", {
        onInit() {},
        // item 클릭 되었을 때
        onPressItemClick(oEvent) {
            // 클릭한 행 정보
            var oItem = oEvent.getSource();

            // sales 모델 가져오기
            var oContext = oItem.getBindingContext("sales");

            // Main.view.xml
            var oView = this.getView();

            // SalesDetail.view.xml
            var oDetailView = oView.byId("idDetailView");

            // Detail 에다가 현재의 상품 경로를 sales 모델과 연결해준다.
            var sPath = oContext.getPath();
            oDetailView.bindElement({
                path: sPath,
                model: "sales",
            });
        },
    });
});
