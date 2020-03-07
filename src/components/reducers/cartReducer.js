
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from '../actions/action-types/cart-actions'
// import axios from 'axios';


// const items = [
//     {
//         "name": "Jeyyam Besan 25 Kgs HDPE",
//         "skucode": "SFLOSBMBES000000007",
//         "MRP": "INR 2500",
//         "Selling Price": "INR 2200",
//         "imgURL": "https://s3.ap-south-1.amazonaws.com/prod.mandee/admin/10118833.jpg"
//     },
//     {
//         "name": "Jeyyam Besan 25 Kgs HDPE",
//         "skucode": "SFLOSBMBES000000007",
//         "MRP": "INR 2500",
//         "Selling Price": "INR 2200",
//         "imgURL": "https://s3.ap-south-1.amazonaws.com/prod.mandee/admin/10118833.jpg"
//     },
//     {
//         "name": "Jeyyam Besan 25 Kgs HDPE",
//         "skucode": "SFLOSBMBES000000007",
//         "MRP": "INR 2500",
//         "Selling Price": "INR 2200",
//         "imgURL": "https://s3.ap-south-1.amazonaws.com/prod.mandee/admin/10118833.jpg"
//     },
// ]

// const result = JSON.parse(data);
// console.log("result", result);

const initState = {
    items: [
        {
            id: 1, name: 'Jeyyam Besan 25 Kgs HDPE', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110,
            "imgURL": "https://5.imimg.com/data5/BH/VU/MY-8301095/sarvottam-gold-besan-500x500.jpg",
            "MRP": "INR 2500"
        },
        {
            id: 2, name: 'Jeyyam Besan 25 Kgs HDPE', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80,
            "imgURL": "https://5.imimg.com/data5/BH/VU/MY-8301095/sarvottam-gold-besan-500x500.jpg",
            "MRP": "INR 2500"
        },
        {
            id: 3, name: 'Jeyyam Besan 25 Kgs HDPE', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120,
            "imgURL": "https://5.imimg.com/data5/BH/VU/MY-8301095/sarvottam-gold-besan-500x500.jpg",
            "MRP": "INR 2500"
        },
        {
            id: 4, name: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260,
            imgURL: "https://5.imimg.com/data5/BH/VU/MY-8301095/sarvottam-gold-besan-500x500.jpg",
            "MRP": "INR 2500"
        },
        {
            id: 5, name: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160,
            imgURL: "https://5.imimg.com/data5/BH/VU/MY-8301095/sarvottam-gold-besan-500x500.jpg",
            "MRP": "INR 2500"
        },
        {
            id: 6, name: 'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90,
            imgURL: "https://5.imimg.com/data5/BH/VU/MY-8301095/sarvottam-gold-besan-500x500.jpg",
            "MRP": "INR 2500"
        },
        {
            id: 7, name: 'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90,
            imgURL: "https://5.imimg.com/data5/BH/VU/MY-8301095/sarvottam-gold-besan-500x500.jpg",
            "MRP": "INR 2500"
        },
        {
            id: 8, name: 'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90,
            imgURL: "https://5.imimg.com/data5/BH/VU/MY-8301095/sarvottam-gold-besan-500x500.jpg",
            "MRP": "INR 2500"
        }

    ],
    addedItems: [],
    total: 0

}
const cartReducer = (state = initState, action) => {

    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 0;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal - addedItem.price
            }

        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }

    }

    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 6
        }
    }

    if (action.type === 'SUB_SHIPPING') {
        return {
            ...state,
            total: state.total - 6
        }
    }

    else {
        return state
    }

}

export default cartReducer
