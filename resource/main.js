function validateFormComment(){
    let errorMsg="";
    let email = document.forms["formCmt"]["email"];
    let title = document.forms["formCmt"]["title"];
    let content = document.forms["formCmt"]["content"];

    errorMsg += validateRequired(email, errorMsg, "Email");
    errorMsg += validateRequired(title,errorMsg,"Title");
    errorMsg += validateRequired(content,errorMsg,"Content");
    
    if(errorMsg != ""){
        document.getElementById("form-error").innerHTML = errorMsg;
    }
    return errorMsg;
function validateRequired(value, errorMsg, objectError){
    if(value.value="") return "";
    if(errorMsg="") value.focus();
    value.style.border = "2px solid red";
    return `<p>*${objectError} khong duoc de trong</p>`;
}
}