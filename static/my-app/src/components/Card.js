import React from "react"
import mountFuji from "../image/mount_fuji.png"
import locationPin from "../image/location_pin.png"

export default function Card(props) {
    // "https://source.unsplash.com/WLxQvbMyfas"
    return (
        <main className="card">
            <section className="tour">
                <div className="tour-geo">
                    <img src={props.item.imageUrl} alt="geo-graphical area" className="tour-img"/>
                </div>
                <div className="tour-info">
                    <p className="tour-location">
                        <img src={locationPin} alt="location pin" className="pin-icon"/>
                        <span className="tour-country">{props.item.location}</span>
                        <a href={props.item.googleMapsUrl} className="tour-map">View on Google Maps</a>
                    </p>
                    <h1 className="heading-primary">
                        {props.item.title}
                    </h1>
                    <h3 className="tour-date">{props.item.startDate} - {props.item.endDate}</h3>
                    <p className="tour-description">
                        {props.item.description}
                    </p>
                </div>
            </section>
        </main>
    )
}