// import React from 'react';
import resume from '../assets/Miriam_Kim_Resume_SWE.pdf';
import '../App.css'

export default function Resume(){
    return (
        <section id = "resume">
            <div id = "resume-photo">
                <iframe src={resume} width="600" height="400"></iframe>
            </div>
        </section>
    )
    
}