import room1 from "./images/room1.jpg";
import room2 from "./images/room2.jpg";

export default [
    {
        sys: {
            id: '1'
        },
        fields: {
            name: 'standard room',
            type: 'standard',
            price: 50,
            capacity: 2,
            qty: 10,
            image: room1
        }
    },
    {
        sys: {
            id: '2'
        },
        fields: {
            name: 'suite deluxe',
            type: 'deluxe',
            price: 100,
            capacity: 3,
            qty: 4,
            image: room2
        }
    },
]