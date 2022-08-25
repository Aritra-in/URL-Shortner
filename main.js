//window.alert("Welcome to URL Shortner \nPress OK to continue");

const btn = document.getElementById("btn");
btn.addEventListener('click',getData);

async function getData(){
    const url = document.getElementById("url").value;
    console.log(url);
    try {
            const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
            const data = await res.json();
            console.log(data.result.full_short_link);
            //alert(`${url}`+"\n\n"+`${data.result.short_link}`);

            const newURL = document.getElementById("newURL");
            newURL.innerHTML= newURL.value= `${data.result.full_short_link}`;

            const copyBtn = document.getElementById("copy");
            copyBtn.addEventListener('click', ()=>{

                alert("copied");
                console.log("Copied to clipboard");
                navigator.clipboard.writeText(`${data.result.full_short_link}`);

            });
        } catch (error) {
                console.log(error);
            }
}


        
        
        
        
        
        
// let a=document.getElementById("btn");
// a.addEventListener('click', func1);
// let b=document.getElementById("copy");
// b.addEventListener('click',func2);



// function func1(){
//     console.log(url);
// }

// function func2(){
//     alert("Copy workng");
// }
