import '../../../globalStyles.css';

import samarLogo from '../../../assets/logo/favicon.png';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<header className='fixed w-screen h-[110px] px-28 bg-black bg-opacity-50 backdrop-blur-lg transition-all duration-300 flex flex-row justify-between items-center border-b border-white border-opacity-20 z-50'>
			<div className='flex flex-row justify-start items-center gap-6'>
				<img src={samarLogo} alt="Samar Logo" width="60px" height="60px"/>
				<h1 className='text-lg text-white'>|</h1>
				<NavLink className='font-vermin text-3xl text-white cursor-pointer' to="/">SAMAR</NavLink>
			</div>

			<div className=''>
				<NavLink to="/"
					className={({ isActive }) =>
						`px-8 py-3 hover:text-rose-400 font-crossFly text-xs tracking-widest transition-all ease-in-out ${
						isActive ? 'text-rose-200' : 'text-white'
						}`
					}
					>
					HOME
				</NavLink>
			
				<NavLink
					to="/about"
					className={({ isActive }) =>
						`px-8 py-3 hover:text-rose-400 font-crossFly text-xs tracking-widest transition-all ease-in-out ${
						isActive ? 'text-rose-200' : 'text-white'
						}`
					}
					>
					ABOUT
				</NavLink>
				
				<NavLink
					to="/merchandise"
					className={({ isActive }) =>
						`px-8 py-3 hover:text-rose-400 font-crossFly text-xs tracking-widest transition-all ease-in-out ${
						isActive ? 'text-rose-200' : 'text-white'
						}`
					}
					>
					MERCHANDISE
				</NavLink>
				
				<NavLink
					to="/contact"
					className={({ isActive }) =>
						`px-8 py-3 hover:text-rose-400 font-crossFly text-xs tracking-widest transition-all ease-in-out ${
						isActive ? 'text-rose-200' : 'text-white'
						}`
					}
					>
					CONTACT US
				</NavLink>
			</div>

			<button className='border-2 px-8 py-3 border-rose-200 bg-rose-500 text-white italic font-crossFly rounded-tl-3xl rounded-br-3xl hover:rounded-lg hover:text-white hover:scale-[.97] transition-all ease-in-out'>PLAY</button>
		</header>
	);
}

export default Header;