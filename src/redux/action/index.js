//for Adding Item to cart 


export const addItem=(product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}

//for Deleting Item from cart

export const delItem=(product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}