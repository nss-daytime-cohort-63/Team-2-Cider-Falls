import { getParkServices } from "./database.js"
import { GuestList } from "./guests.js"
import { ParkAreas } from "./parkAreas.js"
import { serviceList } from "./services.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>🌲 Cider Falls</h1>
<section class = "serviceList">
<h2>Services</h2>
${serviceList()}
</section>
<div class="mainInfo">
    <article class="parkAreas">
    <h2>Park Areas</h2>
        <section class="areaCard">
                ${ParkAreas()}
        </section>
        </article>
        <aside class = "guestList">
            <h2>Guest List</h2>
            ${GuestList()}
        </aside>
        
   </div>

   <footer>
    <p>615-555-1234  ciderfalls@parkservices.com<p>
    <p>9876 Cider Falls Road, Unsure Wyoming</p>
   </footer>
`


mainContainer.innerHTML = applicationHTML