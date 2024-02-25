"use client"
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialCard = ({ src, name, desc, align, fade }) => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

    return (
        <div data-aos={`fade-${fade}`} className={`card card-compact w-96 bg-base-100 shadow-xl self-${align}`}>
            <figure><img src={src} alt="pics" /></figure>
            <div className="card-body bg-white opacity-55">
                <h2 className="card-title">{name}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default TestimonialCard