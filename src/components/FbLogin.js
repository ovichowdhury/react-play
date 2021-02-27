import React from 'react'

function FbLogin() {


    const onFbClick = (e) => {
        console.log("Clicked..");
        window.FB.getLoginStatus(function (response) {
            if (response.authResponse) {
                console.log(response);
            }
            else {

                window.FB.login(function (response) {
                    if (response.authResponse) {
                        console.log('Welcome!  Fetching your information.... ');
                        window.FB.api('/me', function (response) {
                            console.log('Good to see you, ' + response.name + '.');
                        });
                    } else {
                        console.log('User cancelled login or did not fully authorize.');
                    }
                });
            }
        });
    }

    return (
        <>
            <div>
                <button onClick={(e) => onFbClick(e)}>Facebook Login</button>
            </div>
        </>
    )
}

export default FbLogin
