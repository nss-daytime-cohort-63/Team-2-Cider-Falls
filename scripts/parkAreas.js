import { getParkAreas, getParkServices, getServices, getGuests } from "./database.js"

const parkServices = getParkServices()
const services = getServices()
const parkAreas = getParkAreas()
const guests = getGuests()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("parkArea")) {
            const [, parkAreaId] = itemClicked.id.split("--")
            for (const parkArea of parkAreas) {
                if (parkArea.id === parseInt(parkAreaId)) {

                    const guestTotal = guestsInAreas(parkArea)

                    window.alert(`There are ${guestTotal} guests in this area`)
                }
            }
        }
    }
)

const guestsInAreas = (parkAreas) => {
    let registeredGuests = 0
    for (const guest of guests) {
        if (guest.parkAreaId === parkAreas.id) {
            registeredGuests += 1
        }
    }
    return registeredGuests
}



const findParkServices = (parkArea) => {
    let servicesPerPark = []
    for (let parkService of parkServices) {
        if (parkArea.id === parkService.parkAreaId) {
            for (let service of services) {
                if (service.id === parkService.serviceId) {
                    servicesPerPark.push(service.name)
                }
            }
        }
    }
    let allServices = servicesPerPark.join(" and ")
    return allServices
}


export const ParkAreas = () => {
    let html = ``
    for (let parkArea of parkAreas) {
        let findParks = findParkServices(parkArea)
        html += 
        `<div id="parkArea--${parkArea.id}">
            ${parkArea.name} has the following services ${findParks}
        </div>`
    }

    return html
}