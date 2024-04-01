import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'; // Import Link from react-router-dom
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import Datascience from './Datascience'
import Cybersecurity from './Cybersecurity'
import Fullstackdev from './Fullstackdev'
import Career from './Career'

function App() {
	let Input = [
		{ id: 1, title: "Best Full-Stack Development Project Ideas in 2024", image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp", name: "FSD" },
		{ id: 2, title: "How Long Would It Take to Be a Full Stack Developer?", image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp", name: "FSD" },
		{ id: 3, title: "How does Apache work? A detailed introduction to Apache", image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp", name: "FSD" },
		{ id: 4, title: "6 Essential Prerequisites For Learning ReactJS", image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp", name: "FSD" },
		{ id: 5, title: "12 Real-World Data Science Examples: Power Of Data Science", image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-768x402.webp", name: "DS" },
		{ id: 6, title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024", image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science-768x480.webp", name: "DS" },
		{ id: 7, title: "Can A Commerce Student Do Data Science?", image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-768x402.webp", name: "DS" },
		{ id: 8, title: "Roles and Responsibilities of a Data Scientist", image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-768x402.webp", name: "DS" },
		{ id: 9, title: "Cybersecurity vs Artificial Intelligence | Better Career", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*0-yTmT550d7IlPqvFtFJOg.png", name: "CS" },
		{ id: 10, title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences", image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More-768x480.webp", name: "CS" },
		{ id: 11, title: "What Is Hacking? Types of Hacking & More", image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More-768x480.webp", name: "CS" },
		{ id: 12, title: "Top 7 Cyber Security Attacks in Real Life", image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More-768x480.webp", name: "CS" },
		{ id: 13, title: "How to Render an Array of Objects in React?", image: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-Image-Top-Digital-Marketing-Trends-1-768x286.webp", name: "CAR" },
		{ id: 14, title: "6 Reasons Business Analytics Makes Digital Marketing Powerful", image: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-Image-Top-Digital-Marketing-Trends-1-768x286.webp", name: "CAR" },
		{ id: 15, title: "Top Digital Marketing Trends for 2024", image: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-Image-Top-Digital-Marketing-Trends-1-768x286.webp", name: "CAR" },
		{ id: 16, title: "Best Websites to Learn Digital Marketing in 2024", image: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-Image-Top-Digital-Marketing-Trends-1-768x286.webp", name: "CAR" }
	];

	return (
		<BrowserRouter>
			<div>
				<nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
					<Link to="/" className="navbar-brand">&#x2003;All</Link>
					<div className="collapse navbar-collapse" id="navbarText">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item"><Link to={"/Fullstackdev"} className="nav-link">FULL STACK DEVELOPMENT</Link></li>
							<li className="nav-item"><Link to={"/Datascience"} className="nav-link">DATA SCIENCE</Link></li>
							<li className="nav-item"><Link to={"/Cybersecurity"} className="nav-link">CYBER SECURITY</Link></li>
							<li className="nav-item"><Link to={"/Career"} className="nav-link">CAREER</Link></li>
						</ul>
					</div>
				</nav>
				<Outlet />
				<div className="app">

					<Routes>
						<Route path='/' element={<Home Input={Input} />} />
						<Route path='/Datascience' element={<Datascience Input={Input} />} />
						<Route path='/Cybersecurity' element={<Cybersecurity Input={Input} />} />
						<Route path='/Fullstackdev' element={<Fullstackdev Input={Input} />} />
						<Route path='/Career' element={<Career Input={Input} />} />
					</Routes>

				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
