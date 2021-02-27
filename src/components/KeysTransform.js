import React from 'react'
import {toSnakeKeys, toUpperKeys} from 'keys-transform';

function KeysTransform() {
    const myObject = {
        helloMe: "world",
        age: 25,
        cars: {
            tesla: {
                modelOfCar: 'A1',
                speed: '180KMPH'
            },
            bmw: {
                modelOfCar: 'A1',
                speed: '180KMPH'
            },
            rolceRoyce: {
                modelOfCar: 'A1',
                speed: '180KMPH'
            }
        }
    }
    return (
        <div>
            <pre>
                {JSON.stringify(toUpperKeys(myObject),null, 4)}
            </pre>
        </div>
    )
}

export default KeysTransform
