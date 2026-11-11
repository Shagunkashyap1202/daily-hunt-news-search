
const newsList=document.getElementById("newsList");
const message=document.getElementById("msg");
const searchForm=document.getElementById("searchForm");
const searchInput=document.getElementById("searchInput");
const buttons=document.querySelectorAll("#categories button");

async function getNews(url){
    message.textContent="Loading...";
    newsList.innerHTML="";

    try{
        const response= await fetch(url);
        const data=await response.json();

        if(data.status === "error"){
            message.textContent = data.message;
            return;
        }

        message.textContent="Showing resultss";
        showNews(data.results);

    }catch(error){

        message.textContent="Some Error Occured";
    }
}


function showNews(arr){
    arr=arr.filter(function(a){
        return(a.title && a.image_url && a.description && a.link);
    }).slice(0,10);


    if(arr.length===0){
        message.textContent="No Article Was Found";
        return;
    }


    
for (const i of arr) {
    newsList.innerHTML += `
        <a class="news-card" href="${i.link}" target="_blank" rel="noopener noreferrer">
            <img src="${i.image_url}" alt="${i.title}">
            <div class="news-content">
                <h2>${i.title}</h2>
                <p>${i.description}</p>
                <span>Read Full Story ↗</span>
            </div>
        </a>
    `;
}

}

for(const btn of buttons){
    btn.addEventListener("click",function(){
        for(const b of buttons){
            b.classList.remove("active");
        }
        btn.classList.add("active");
        getNews(
            "https://newsdata.io/api/1/latest?apikey=" + API_KEY +
         "&country=in&language=en&category=" + btn.dataset.category
     );
    })
}


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const query = searchInput.value.trim();

    if (query === "") {
        message.textContent = "Please enter something to search.";
        return;
    }

    getNews(
        "https://newsdata.io/api/1/latest?apikey=" + API_KEY +
        "&country=in&language=en&q=" + encodeURIComponent(query)
    );

    for (const btn of buttons) {
        btn.classList.remove("active");
    }
});


getNews(
    "https://newsdata.io/api/1/latest?apikey=" + API_KEY +
    "&country=in&language=en&category=top"
);