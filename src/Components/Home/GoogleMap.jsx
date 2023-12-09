import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMap() {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <>
            <h1 className="text-center text-3xl font-semibold my-4">Our Head Office Location </h1> <hr />
    {/* // Important! Always set the container height explicitly */}
            <div style={{ height: '80vh', width: '95%' }} className="mx-auto my-12">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={23.8041}
                        lng={90.4152}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        </>

    );
}