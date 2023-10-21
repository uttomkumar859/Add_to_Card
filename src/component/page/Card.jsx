import { CustomHooks } from "../cardContext/CardProvider"
 
const Card = () => { 
  const {state} = CustomHooks();
  return (
    <>
      <div>
        <div className="container">
            {state.cart.length}
        </div>
      </div>
    </>
  )
}

export default Card;