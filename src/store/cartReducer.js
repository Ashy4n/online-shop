const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        let isNew = true;
        state.items.forEach(item => {
            if (item.name === action.item.name) {
                isNew = false
            }
        })
        if (isNew) {
            const updatedItems = state.items.concat(action.item)
            const updatedAmount = parseFloat(state.totalAmount) + parseFloat(action.item.price) * parseFloat(action.item.amount);
            console.log(parseFloat(state.totalAmount))
            console.log(parseFloat(action.item.price))
            console.log(parseFloat(action.item.amount))
            return {
                items: updatedItems,
                totalAmount: updatedAmount
            }
        } else {

            const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
            const updatedItems = state.items;
            console.log(updatedItems)
            updatedItems.forEach(item => {
                if (item.name === action.item.name) {
                    item.amount += parseInt(action.item.amount);
                    console.log(item.amount)
                }
            })
            return {
                items: updatedItems,
                totalAmount: updatedAmount
            }
        }


    }
    if (action.type === "REMOVE") {
        const updatedItems = []
        let updatedAmount = 0
        state.items.forEach(item => {
            if (item.name !== action.name) {
                updatedItems.push(item)
                updatedAmount += item.price * item.amount
            }
        });
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }
    if (action.type === "REMOVE_AMOUNT") {
        const updatedItems = []
        let updatedAmount = 0
        state.items.forEach(item => {
            if (item.name !== action.name) {
                updatedItems.push(item)
                updatedAmount += item.price * item.amount
            } else {
                item.amount -= action.amount;
                updatedItems.push(item);
                updatedAmount += item.price * item.amount;
            }
        });
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }
    return {
        items: [],
        totalAmount: 0
    }
}

export default cartReducer