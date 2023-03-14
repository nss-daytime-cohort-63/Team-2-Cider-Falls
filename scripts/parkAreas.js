import { getParkAreas, getParkServices, getServices } from "./database.js"

const parkServices = getParkServices()
const services = getServices()
const parkAreas = getParkAreas()
// 1. Display parkAreas.name
// 2. Display park areas services...

// const findServices = (parkServices, services) => {
//     let matchingServices = null
//     for (const service of services) {
//         if (service.id === parkServices.serviceId) {
//             matchingServices = service

//         }
//     }
//     return matchingServices
// }

// const findAreas = (parkServices, parkAreas) => {
//     let matchingAreas = null
//     for (const area of parkAreas) {
//         if (area.id === parkServices.parkAreaId) {
//             matchingAreas = area
//         }

//     }
//     return matchingAreas
// }

// export const ParkServices = () => {
//     let html = `<div>`
//     for (let parkService of parkServices) {
//         let area = findAreas(parkService, parkAreas)
//         let service = findServices(parkService,services)
//         html =+ `${area.name} has the following services: ${service.name}`
//     }
//     html + `</div>`
//     return html
// }

const findParkServices = (areas) => {
    let servicesPerPark = []
        for (let parkService of parkServices) {
            if (areas.id === parkService.parkAreaId) {
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
    for (let areas of parkAreas) {
        let findParks = findParkServices(areas)
        html += `<div class="parkAreas">${areas.name} has the following services ${findParks}`
    }
    html += `</div>`
    return html
}
