import React from "react";
import "./Home.css";

const Home: React.FC = (): JSX.Element => {
	return (
		<div className="home-wrapper">
			<div className="home-top-wrapper">
				<div className="home-top-text">
					<h1>에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.</h1>
				</div>
				<div className="home-top-header">
					<div className="home-top-menu"></div>
					<div className="home-top-search"></div>
					<div className="home-image-main"></div>
				</div>
			</div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div className="home-botttom-menu"></div>
			<div className="home-bottom-footer"></div>
		</div>
	);
};

export default Home;
