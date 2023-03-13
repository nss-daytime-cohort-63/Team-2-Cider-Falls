const database = {
    parkAreas: [{
        id: 1,
        name: "Chamfort River",
    },
    {
        id: 2,
        name: "Lost Wolf Hiking Trail",
    },
    {
        id: 3,
        name: "Lodge",
    },
    {
        id: 4,
        name: "Gander River",
    },
    {
        id: 5,
        name: "Campground",
    },
    {
        id: 6,
        name: "Pine Bluffs Trails",
    }
    ],
    parkServices: [{
        id: 1,
        parkAreaId: 1,
        serviceId: 1,
    },
    {
        id: 2,
        parkAreaId: 1,
        serviceId: 2,
    },
    {
        id: 3,
        parkAreaId: 1,
        serviceId: 3,
    },
    {
        id: 4,
        parkAreaId: 2,
        serviceId: 4,
    },
    {
        id: 5,
        parkAreaId: 2,
        serviceId: 5,
    },
    {
        id: 6,
        parkAreaId: 2,
        serviceId: 10,
    },
    {
        id: 7,
        parkAreaId: 3,
        serviceId: 6,
    },
    {
        id: 8,
        parkAreaId: 3,
        serviceId: 7,
    },
    {
        id: 9,
        parkAreaId: 3,
        serviceId: 8,
    },
    {
        id: 10,
        parkAreaId: 3,
        serviceId: 4,
    },
    {
        id: 11,
        parkAreaId: 4,
        serviceId: 3,
    },
    {
        id: 12,
        parkAreaId: 4,
        serviceId: 10,
    },
    {
        id: 13,
        parkAreaId: 5,
        serviceId: 6,
    },
    {
        id: 14,
        parkAreaId: 5,
        serviceId: 7,
    },
    {
        id: 15,
        parkAreaId: 5,
        serviceId: 8,
    },
    {
        id: 16,
        parkAreaId: 6,
        serviceId: 4,
    },
    {
        id: 17,
        parkAreaId: 6,
        serviceId: 10,
    },
    {
        id: 18,
        parkAreaId: 6,
        serviceId: 9,
    }
    ],
    services: [{
        id: 1,
        name: "Rafting",
    },
    {
        id: 2,
        name: "Canoeing",
    },
    {
        id: 3,
        name: "Fishing",
    },
    {
        id: 4,
        name: "Picknicking",
    },
    {
        id: 5,
        name: "Rock climbing",
    },
    {
        id: 6,
        name: "Lodging",
    },
    {
        id: 7,
        name: "Parking",
    },
    {
        id: 8,
        name: "Information",
    },
    {
        id: 9,
        name: "Zip Lines",
    },
    {
        id: 10,
        name: "Hiking",
    },
    ],
    guests: [{
        id: 1,
        name: "Faith Ivalee",
        parkAreaId: 1,
    },
    {
        id: 2,
        name: "Frank Cyril",
        parkAreaId: 2,
    },
    {
        id: 3,
        name: "Corbin Burton",
        parkAreaId: 3,
    },
    {
        id: 4,
        name: "Margeret Youngstrom",
        parkAreaId: 4,
    },
    {
        id: 5,
        name: "Dawn Renee",
        parkAreaId: 5,
    },
    {
        id: 6,
        name: "Jon Boes",
        parkAreaId: 6,
    },
    {
        id: 7,
        name: "Gwendolyn Mehan",
        parkAreaId: 5,
    },
    {
        id: 8,
        name: "Parker Hall",
        parkAreaId: 4,
    },
    {
        id: 9,
        name: "Ann Taylor",
        parkAreaId: 3,
    },
    {
        id: 10,
        name: "Courtney Gall",
        parkAreaId: 2,
    },
    {
        id: 11,
        name: "Bailey Jones",
        parkAreaId: 1,
    },
    {
        id: 12,
        name: "Kelsey Roberson",
        parkAreaId: 2,
    },
    {
        id: 13,
        name: "Lacey Maul",
        parkAreaId: 3,
    },
    {
        id: 14,
        name: "Lee Ayer",
        parkAreaId: 4,
    },
    {
        id: 15,
        name: "Richard Allen",
        parkAreaId: 5,
    },
    {
        id: 16,
        name: "Ruby Burgess",
        parkAreaId: 6,
    },
    ]
}
export const getParkAreas = () => {
    return database.parkAreas.map(parkAreas => ({ ...parkAreas }))
}
export const getparkServices = () => {
    return database.parkServices.map(parkServices => ({ ...parkServices }))
}
export const getParkServices = () => {
    return database.parkServices.map(parkServices => ({ ...parkServices }))
}
export const getGuests = () => {
    return database.guests.map(guests => ({ ...guests }))
}