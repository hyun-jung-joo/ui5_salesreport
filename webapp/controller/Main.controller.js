sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
    (Controller, JSONModel) => {
        "use strict";

        return Controller.extend("sync.c22.salesreport.controller.Main", {
            onInit() {
                var oModel = new JSONModel({
                    Unit: "EA",
                });
                // view에 "view"라는 이름으로 모델 정의
                // view>/Unit
                this.getView().setModel(oModel, "view");
            },

            // item 클릭 되었을 때
            // 1. detail view 에 정보 binding
            // 2. 정보 fragment 띄우기
            async onPressItemClick(oEvent) {
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

                // fragment load (비동기)
                this.oDialog ??= await this.loadFragment({
                    name: "sync.c22.salesreport.view.Detail",
                });

                // load 해온 fragment 에 bindElement
                this.oDialog.bindElement({
                    path: sPath,
                    model: "sales",
                });
                this.oDialog.open(); // fragment open
            },

            // dialog 닫기 구현
            onCloseDialog() {
                var oDialog = this.byId("idDialog");
                if (oDialog) {
                    oDialog.close();
                }
            },
        });
    }
);
