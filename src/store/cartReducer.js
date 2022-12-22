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
            const updatedAmount = state.totalAmount + action.item.value * action.item.amount;
            console.log(action.item.value)
            console.log(action.item.amount)
            return {
                items: updatedItems,
                totalAmount: updatedAmount
            }
        } else {

            const updatedAmount = state.totalAmount + action.item.value * action.item.amount;
            const updatedItems = state.items;
            console.log(updatedItems)
            updatedItems.forEach(item => {
                if (item.name === action.item.name) {
                    item.amount += action.item.amount;
                    console.log(item.amount)
                }
            })
            return {
                items: updatedItems,
                totalAmount: updatedAmount
            }
        }
    }
    return {
        items: [],
        totalAmount: 0
    }
}

export default cartReducer