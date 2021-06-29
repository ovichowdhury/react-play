import React from 'react'
import spec from './openapi.yaml'
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

export default function CustomSwaggerUI() {
    return (
        <div>
            <SwaggerUI url={spec}></SwaggerUI>
        </div>
    )
}
