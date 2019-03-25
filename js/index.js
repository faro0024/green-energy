//creating resources

const resources = [
    
{
"heading": "Wave Power Could Supply Half the Bangladesh With Cheap Electricity",
"img":"https://e2c4a8m6.stackpathcdn.com/wp-content/uploads/2013/01/wave-foam-spray-sea-water-nature.jpg",
"body":"Think of a constant force in nature (gravity doesn’t count)—does the ocean come to mind? The unrelenting sea, with its perpetual ebb and flow, remains one of the world’s largest untapped sources of renewable energy. " +
"How large? The Electric Power Research Institute estimates the potential wave energy resource along the United States’ coastline at 1,170 terawatt-hours per year. That sounds like a lot, and it is—enough to supply half the United States’ annual electricity demand. " +
"A new study has found what scientist already thought. Wave energy production, once the infrastructure is in place, would be a reliable, steady, and dependable source of electricity—even cheaper than wind power, said Ted Brekken, a renewable energy expert at Oregon State University and coauthor of the study."
},
    
{
"heading":"How to make solar power more efficient and affordable",
"img": "https://www.renishaw.com/media/img/gen/ed2db95d071f4272afed55983d343473.jpg",
"body":"Maximizing the efficiency of converting sunlight to electricity was the primary goal for much of the history of solar power industry. Because solar cells were so expensive to make, they were used only in special applications, such as on spacecraft, where performance was more important than cost. That game changed a couple decades ago with the advent of thin-film solar cells that forced the industry to focus on lower costs rather than high performance."

},
    
{
"heading":"Wind Energy Is One of the Cheapest Sources of Electricity, and It's Getting Cheaper",
"img":"https://climateprotection.org/wp-content/uploads/2017/07/AmazonWindFarm.jpg",
"body":"While the all-in price of wind energy directly depends on the wind speeds at a particular site, examining national trends in the installed cost of wind energy definitively shows that wind energy has become an extremely inexpensive source of electricity."
}
];

/* GETTING REFERENCES TO ACTIVE ELEMENTS */

const btns = document.querySelectorAll(".selection");
const currentContent = document.querySelector(".current-content");

//first content is loaded on the page load


currentContent.innerHTML = `<article>
                            <h1>${resources[0].heading}</h1>
                            <div class="row">
                            <img class="col-md-4 img-flu" src="${resources[0].img}">
                            <p class="col-md-8">${resources[0].body}</p>
                            </div>
                            </article>`;


 /*  Start your handleSelection function here. Create event - handler */

function contentLoader(ev){
 /*console.log("content loader works");*/
    let eventTarget = ev.currentTarget.textContent;
//console.log(eventTarget.textXontent)   
if(eventTarget === "Wave Power"){
   currentContent.innerHTML = `<article>
                            <h1>${resources[0].heading}</h1>
                            <div class="row">
                            <img class="col-md-4 img-flu" src="${resources[0].img}">
                            <p class="col-md-8">${resources[0].body}</p>
                            </div>
                            </article>`; 
}else if (eventTarget === "Solar Power"){
    currentContent.innerHTML = `<article>
                            <div class="row">
                            <h1>${resources[1].heading}</h1>
                            <img class="col-md-4 img-flu" src="${resources[1].img}">
                            <p class="col-md-8">${resources[1].body}</p>
                            </div>
                            </article>`;    
}else if(eventTarget === "Wind Power"){
   currentContent.innerHTML = `<article>
                            <h1>${resources[2].heading}</h1>
                            <div class="row">
                            <img class="col-md-4 img-flu" src="${resources[2].img}">
                            <p class="col-md-8">${resources[2].body}</p>
                            </div>
                            </article>`;
}
    
 /*move id to the current button*/
    
    // removing id from the element that previously had it
    for (let btn of btns) {
        
        /*resource: https://developer.mozilla.org/en-US/docs/Web/API/Element/id*/
        if (btn.id) {
            
            /*resource: https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute*/
            btn.removeAttribute("id");
        }
    }
    
    // adding th ID to the current element
    ev.currentTarget.id = "active";
    

}

 /* Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen.Registering the event content */ 
//console.log(btns[2]);
btns[0].addEventListener("click",contentLoader);
btns[1].addEventListener("click",contentLoader);
btns[2].addEventListener("click",contentLoader);
