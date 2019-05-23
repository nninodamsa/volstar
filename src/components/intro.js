import React from "react"
import "./styles.css"

const Intro = (props) => {
    const { title, slogan } = props
    return (
        <section className="container intro"  style={{background: 'url(img/bg.jpg)'}}>
            <div className="banner-slogan item">
                <h1>{title}</h1>
                <h2>{slogan}</h2>
            </div>
            
        </section>
    )
}


export default Intro
