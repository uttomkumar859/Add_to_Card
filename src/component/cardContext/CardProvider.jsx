import { createContext, useContext, useReducer } from "react";
export const CardContext = createContext();

const initial = {
  cart : []
}
const reducer = (state ,action) =>{
  switch(action.type){
    case 'Add_to_Cart':
      return{
        ...state,
        cart: [...state.cart,{...action.payload}]
      }
  }
}

// eslint-disable-next-line react/prop-types
const CardProvider = ({children}) => {
  const [state , dispatch] = useReducer(reducer , initial)
  return (
    <div>
      <CardContext.Provider value={{state,dispatch}}>{children}</CardContext.Provider>
    </div>
  )
}

export default CardProvider;

export const CustomHooks = () => {
    const context = useContext(CardContext) 
    return context
}
