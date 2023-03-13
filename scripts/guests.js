import { getGuests } from "./database.js";

const guests = getGuests()

export const GuestList = () => {
    let guestsHTML = "<ul>"

    for (const guest of guests) {
        guestsHTML += `<li>${guest.name}</li>`
    }

    guestsHTML += "</ul>"

    return guestsHTML
}