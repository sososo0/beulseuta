var findBtn = document.querySelector("#findBtn");
findBtn.addEventListener("click", findPassword);

function findPassword(){
    var id = document.querySelector("#InputId").value;
    if(id != ""){
        //아이디가 있는지 찾아보기
        //있으면 비밀번호 재설정 페이지로 넘어가기

        document.querySelector("#InputId").value = "";
    }
    else{
        alert("아이디를 입력하세요.");
    }
}

