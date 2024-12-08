import './globalStyles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/navigation/header/header';
import Home from './pages/home/home';
import About from './pages/about/about';
import Merchandise from './pages/merchandise/merchandise';
import Contact from './pages/contact/contact';
import Footer from './components/navigation/footer/footer';

function routes() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/merchandise" element={<Merchandise />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				{/* <Footer /> */}
			</Router>
		</>
	)
}

export default routes;