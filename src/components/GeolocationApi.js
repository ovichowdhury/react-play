import React, {useState, useEffect} from 'react'

export default function GeolocationApi() {

    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [msg, setMsg] = useState("");

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
        </div>
    )
}
