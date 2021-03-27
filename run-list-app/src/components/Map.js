import React from 'react';
import GoogleMapReact from 'google-map-react';
import { LocationOn } from '@material-ui/icons';

const LocationPin = (props) => (
    <div>
        <LocationOn style={{color: '#F97E3C'}}/>
    </div>
)

const Map = ({list, center}) => {

    return(
        <div style={{ height: "60vh", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                defaultCenter={[43.6, 1.44]}
                defaultZoom={14}
            >
                {list.map(({point}, index) => {
                    let lat = parseFloat(point.point.lat);
                    let lng = parseFloat(point.point.lon);

                    return(

                            <LocationPin
                                key={index}
                                lat={lat}
                                lng={lng}
                            />

                    )
                })}
            </GoogleMapReact>
        </div>
    )
}

export default Map;