const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls</h1>
<div class="mainInfo">
    <article class="parkAreas">
        <section class = "areaBox">
            <h2>Park Areas</h2>
            <div>Lodge</div>
            <div>Lost Wolf</div>
            <div>Chamfort River</div>
            <div>Pine Bluff</div>
            <div>Campgrounds</div>
            <div>Grand River</div>
        </section>
        </article>
        <section class = "guestList">
            <h2>Guest List</h2>
            <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
        </section>
        
   </div>

   <footer>Info</footer>
`


mainContainer.innerHTML = applicationHTML