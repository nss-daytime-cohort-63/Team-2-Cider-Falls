import { getParkAreas, getServices } from "./database.js"
import { getParkServices } from "./database.js"


const services = getServices()
const parkServices = getParkServices()
const parkAreas = getParkAreas()

const findParkAreas = (service) => {
    let areasForService = []
    for (let parkService of parkServices) {
        if (service.id === parkService.serviceId) {
            for (let parkArea of parkAreas) {
                if (parkArea.id === parkService.parkAreaId) {
                    areasForService.push(parkArea.name)
                }
            }
        }
    }
    let allAreas = areasForService.join(" and ")
    return allAreas
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("service")) {
            const [, serviceId] = itemClicked.id.split("--")


            for (const service of services) {
                if (service.id === parseInt(serviceId)) {
                    let serviceAreas = findParkAreas(service)
                    window.alert(`${service.name} is available in ${serviceAreas}`)

                }
            }

        }
    }
)


export const serviceList = () => {
    let servicesHTML = `<ul id="topservice">`

    for (const service of services) {
        servicesHTML += `<li class="topservice" id="service--${service.id}">${service.name}</li>`
    }

    servicesHTML += "</ul>"

    return servicesHTML
}