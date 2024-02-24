import React from 'react'
import Image from 'next/image'
const Card = ({src,title,desc}) => {
    return (
        <div className="card w-64 bg-base-100 shadow-xl mt-10 hover:w-[27%] hover:cursor-pointer ml-[12%] max-h-46 transition-all ease-in-out duration-300">
            <figure><Image src={src} width={600} height={421} alt="Shoes" /></figure>
            <div className="card-body bg-white">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white">Explore</button>
                </div>
            </div>
        </div>
    )
}

export default Card