import './globalStyles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/navigation/header/header'
import Home from './pages/home/home'
import Footer from './components/navigation/footer/footer'

function routes() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				{/* <Footer /> */}
			</Router>
		</>
	)
}

export default routes;