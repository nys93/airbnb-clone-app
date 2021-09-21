import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

const Map: React.FC = (): JSX.Element => {
	return (
		<div>
			<LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}>
				<GoogleMap
					mapContainerStyle={{
						width: "100%",
						height: "100vh",
					}}
					center={{ lat: 35.65821015454645, lng: 139.70154806473707 }}
					zoom={17}
				/>
			</LoadScript>
		</div>
	);
};

export default Map;
