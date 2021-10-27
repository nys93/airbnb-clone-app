import React from "react";
import "./Home.css";
import Globe from "../../assets/globe.png";
import Logo from "../../assets/airbnb-logo.png";

const Home: React.FC = (): JSX.Element => {
	return (
		<div className="home-wrapper">
			<div className="home-top-wrapper">
				<div className="home-top-text">
					<span>에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.</span>
				</div>
				<div className="home-top-header">
					<div className="home-top-menu">
						<div className="home-top-menu-left">
							<a href="/">
								<img src={Logo} className="airbnb-logo" />
							</a>
						</div>
						<div className="home-top-menu-right">
							<div>
								<span>호스트 되기</span>
							</div>
							<div>
								<a href="/">
									<img src={Globe} className="globe-logo" />
								</a>
							</div>
							<div></div>
						</div>
					</div>
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
