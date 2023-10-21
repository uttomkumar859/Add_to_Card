import { Link } from 'react-router-dom'
import { CustomHooks } from '../cardContext/CardProvider';
import './header.css'


const Header = () => {
  const {state} = CustomHooks();
  return (
    <div className="header">
        <div className="container">
        <div className="col_flex">
            <div className="logo">LogoU</div>
            <div className="navbar">
                <ul>
                    <li> <Link to={'/'}>Home</Link></li>
                    <li> <Link to={'/product'}>Product</Link></li>
                    <li> <Link to={'/card'} className='Card_count'>card <span>{state.cart.length}</span></Link></li>
                    <li> <Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header
