import React from "react"
import pic from "../image/logo.png"

export default function Header() {
    return (
        <header className="header">
            <img src={pic} alt="globe" className="globe-logo"/>
            <h2 className="heading">my traveljournal.</h2>
        </header>
    )
}