
const addItem =[];

const handleCart=(state=addItem ,action)=>{
    switch(action.type){
        case "ADDITEM": return [
            ...state,
            action.payload
        ]
        case "DELITEM":
            return state =state.filter((x)=>{
                return x.id !==action.payload.id
            })

        default : return state;
    }
}
export default handleCart;






















// const cart = {};

// const handleCart = (state = cart, action) => {
//   const product = action.payload;
//   switch (action.type) {
//     case "ADDITEM":
     
//     { 
//         const cloneCart={...state} 
//         if(cloneCart[product.id]){
//             cloneCart[product.id] = cloneCart[product.id]+1;
//         }
//         else{
//            cloneCart[product.id]=1;
//         }
//         return cloneCart
//     }
     
//       //check if product is already Exist
//     //   const exist = state.find((x) => x.id === product.id);
//     //   if (exist) {
//     //     //increase the qty
//     //     return state.map((x) =>
//     //       x.id === product.id ? { ...x, qty: x.qty + 1 } : x
//     //     );
//     //   } else {
//     //     const product = action.payload;
//     //     return [
//     //       ...state,
//     //       {
//     //         ...product,
//     //         qty: 1,
//     //       },
//     //     ];
//     case "DELITEM":
//      {
//         const cloneCart ={...state}
//         if(cloneCart[product.id]){
//             if(cloneCart[product.id]>1){
//                 cloneCart[product.id]--;
//             }
//             else{
//                 delete cloneCart[product.id];
//             }
//         }
//         return cloneCart;
//      }
     
//     default:
//         return state;
//   }
// };
// export default handleCart;
