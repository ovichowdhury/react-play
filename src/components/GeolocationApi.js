import React, { useState, useEffect } from 'react'


/**
 * Formula
 * d = 2r*sin^-1(sqrt(sin^2( (lat2 - lat1)/2 ) + sin^2( (lon2 - lon1)/2 * cos(lat1) * cos(lat2) )))
 * r = 6371 # radius of world
 */
function haversineDistance(lat1, lon1, lat2, lon2) {
    // distance between latitudes
    // and longitudes
    let dLat = (lat2 - lat1) * Math.PI / 180.0;
    let dLon = (lon2 - lon1) * Math.PI / 180.0;

    // convert to radian
    lat1 = (lat1) * Math.PI / 180.0;
    lat2 = (lat2) * Math.PI / 180.0;

    // apply formula
    let a = Math.pow(Math.sin(dLat / 2), 2) +
        Math.pow(Math.sin(dLon / 2), 2) *
        Math.cos(lat1) *
        Math.cos(lat2);
    let rad = 6371;
    let c = 2 * Math.asin(Math.sqrt(a));

    // distance in KM
    return rad * c;
}

export default function GeolocationApi() {

    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [msg, setMsg] = useState("");

    const [lat1, setLat1] = useState(0);
    const [lng1, setLng1] = useState(0);

    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPos, showErr, {
                enableHighAccuracy: true
            });
        }
        else {
            setMsg("Geolocation api is not supported !");
        }

    }, []);


    const showPos = (pos) => {
        console.log(pos)
        setLat(pos.coords.latitude);
        setLng(pos.coords.longitude);
    }

    const showErr = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                setMsg("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                setMsg("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                setMsg("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                setMsg("An unknown error occurred.");
                break;
        }
    }


    return (
        <div>
            <ul>
                <li>{"Latitude: " + lat}</li>
                <li>{"Longtitude: " + lng}</li>
                <li>{"Message: ", msg}</li>
            </ul>
            <div>
                <label>Latitude</label>
                <input type="text" value={lat1} onChange={(e) => setLat1(e.target.value)} />
                <br />
                <input type="text" value={lng1} onChange={(e) => setLng1(e.target.value)} />
                <br />
                <button onClick={() => setMsg(haversineDistance(lat, lng, lat1, lng1))}>Calc</button>
            </div>
        </div>
    )
}
