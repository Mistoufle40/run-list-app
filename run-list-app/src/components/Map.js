import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({list, center}) => {
    const defaultCenter = [Math.round(parseFloat(center.lat) * 10) / 10, Math.round(parseFloat(center.lon) * 10) / 10];

    return(
        <div style={{ height: "60vh", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                defaultCenter={[43.6, 1.44]}
                defaultZoom={13}
            />
        </div>
    )
}

export default Map;