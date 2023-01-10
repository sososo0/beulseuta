var authBtn = document.querySelector("#authBtn");
var findIDBtn = document.querySelector("#findIDBtn");

authBtn.addEventListener("click", sendAuthNo);
findIDBtn.addEventListener("click", findID);

const constAuthNo = "123456";

function findID(){
    var name = document.querySelector("#InputName").value;
    var email = document.querySelector("#InputEmail").value;
    var authNo = document.querySelector("#authNo").value;

    if(name != "" && email != ""){
        if(authNo == ""){
            alert("인증번호를 입력하지 않았습니다.");
        }
        else if(authNo != constAuthNo){
            alert("인증번호가 일치하지 않습니다.");
        }
        else{
            //name, email로 id 찾기
            alert("아이디는 ..");
        }
        document.querySelector("#InputName").value = "";
        document.querySelector("#InputEmail").value = "";
        document.querySelector("#authNo").value = "";
    }
    else if(name == ""){
        alert("이름을 입력하세요.");
    }
    else{
        alert("이메일 주소를 입력하세요.");
    }
}

function sendAuthNo(){
    //send mail
}