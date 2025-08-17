// import { useState, useEffect, useRef } from "react";
import '../App.css'

export default function Blog(title, body){
    return(
        <section id = "card">
            <div id = "title">
                {title}
            </div>
            <div id = "body-text">
                {body}
            </div>
        </section>
    )
}