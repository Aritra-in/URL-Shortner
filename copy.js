//copy button function

const selectText = document.getElementById("newURL");
const copyBtn = document.getElementById("copy");
copyBtn.onclick = ()=>{

    selectText.select();
    //document.execCommand("copy");
    // alert("copied");
    // console.log("Copied to clipboard");
    navigator.clipboard.writeText(selectText.value);

};