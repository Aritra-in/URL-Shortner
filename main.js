window.alert("Welcome to URL Shortner \nPress OK to continue");

const btn = document.getElementById("btn");
btn.addEventListener('click',getData);

async function getData(){
    const url = document.getElementById("url").value;
    console.log(url);
    try {
            const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
            const data = await res.json();
            console.log(data.result.full_short_link2);
            //alert(`${url}`+"\n\n"+`${data.result.short_link}`);

            const newURL = document.getElementById("newURL");
            newURL.innerHTML= newURL.value= `${data.result.full_short_link2}`;

        } catch (error) {
                console.log(error);
            }
}

