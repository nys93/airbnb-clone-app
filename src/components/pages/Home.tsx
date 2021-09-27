import React from "react";
import HomeImage from "../../assets/home-image.jpg";
import "./Home.css";

const Home: React.FC = (): JSX.Element => {
	return (
		<div className="home-wrapper">
			<div className="home-top-wrapper">
				<div className="home-top-header">
					<div className="home-top-menu"></div>
					<div className="home-top-search"></div>
					{/*<img src={HomeImage} className="home-image" alt="Home-img" />*/}
				</div>
			</div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Home;
