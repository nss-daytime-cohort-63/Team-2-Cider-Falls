import { getParkServices } from "./database.js"
import { GuestList } from "./guests.js"
import { ParkAreas } from "./parkAreas.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls</h1>
<div class="mainInfo">
    <article class="parkAreas">
        <section class = "areaBox">
            <h2>Park Areas</h2>
                ${ParkAreas()}
        </section>
        </article>
        <section class = "guestList">
            <h2>Guest List</h2>
            ${GuestList()}
        </section>
        
   </div>

   <footer>Info</footer>
`


mainContainer.innerHTML = applicationHTML