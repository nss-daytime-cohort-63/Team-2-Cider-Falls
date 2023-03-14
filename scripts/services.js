import { getServices } from "./database"

const services = getServices()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("service")) {
            const [, serviceId] = itemClicked.id.split("--")
            for (const service of services) {
                if (service.id === parseInt(serviceId)) {


                    window.alert(``)
                }
            }
        }
    }
)

// const findParkServices = (parkArea) => {
//     let servicesPerPark = []
//     for (let parkService of parkServices) {
//         if (parkArea.id === parkService.parkAreaId) {
//             for (let service of services) {
//                 if (service.id === parkService.serviceId) {
//                     servicesPerPark.push(service.name)
//                 }
//             }
//         }
//     }
//     let allServices = servicesPerPark.join(" and ")
//     return allServices
// }