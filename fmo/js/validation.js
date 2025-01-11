MktoForms2.whenReady(function(form) {
    
    // エラーメッセージをカスタマイズ
    form.onValidate(function(native) { 
        if (!native){
            formEl = form.getFormElem()[0];
            var valiedObjList = formEl.querySelectorAll(".mktoValid");

            for (var i = 0; i < valiedObjList.length; ++i) {
                var valiedElmParent = valiedObjList[i].parentNode;
                var customErrors = valiedElmParent.querySelectorAll(".customError");
                if (customErrors.length > 0){   
                    for (var k = 0; k < customErrors.length; ++k) {
                        valiedElmParent.removeChild(customErrors[k]);
                    }
                }
            }

            var invalidObjList = formEl.querySelectorAll(".mktoInvalid");
            var email = formEl.querySelector(".mktoEmailField.mktoInvalid");
            var tel = formEl.querySelector(".mktoTelField.mktoInvalid");
            for (var j = 0; j < invalidObjList.length; ++j) {
                var invalidElmParent = invalidObjList[j].parentNode;
                var invaliedCustomErrors = invalidElmParent.querySelectorAll(".customError");
                if (invaliedCustomErrors.length < 1){   
                    if (invalidObjList[j] == tel) {
                        invalidObjList[j].insertAdjacentHTML('afterend','<div class="customError"><div class="customErrorArrowWrap"><div class="customErrorArrow"></div></div><div class="customErrorMsg">有効な電話番号(半角数字)を入力してください</div></div>');
                        if(window.innerWidth < 768){
                            invalidObjList[j].style.marginBottom = "47px"; 
                        }
                    } else if (invalidObjList[j] == email){
                        invalidObjList[j].insertAdjacentHTML('afterend','<div class="customError"><div class="customErrorArrowWrap"><div class="customErrorArrow"></div></div><div class="customErrorMsg">有効なメールアドレス(半角英数)を入力してください</div></div>');
                        if(window.innerWidth < 768){
                            invalidObjList[j].style.marginBottom = "47px";
                        }
                    } else {
                        invalidObjList[j].insertAdjacentHTML('afterend','<div class="customError"><div class="customErrorArrowWrap"><div class="customErrorArrow"></div></div><div class="customErrorMsg">必須項目です</div></div>');
                    }
                }
            }

            $("#cv").animate({ scrollTop: 0 }, 500);
            return false;       
        }
    });    

});
  