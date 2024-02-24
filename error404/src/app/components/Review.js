"use client"

import { useEffect, useState } from "react"

const Review = ({ name, review }) => {
    const [halfComment, setHalfComment] = useState("");

    useEffect(() => {
        if (review.length > 15) {
            let temp = review.slice(0, 15) + "...";
            setHalfComment(temp);
        }
    }, [])


    return (
        <>
            <div className="card w-96 bg-white border-2 border-black text-black ml-[4%] my-8 hover:cursor-pointer hover:w-[25%] hover:bg-gray-100 transition-all ease-in-out duration-200 relative" onClick={() => document.getElementById('my_modal_2').showModal()}>
                <div className="avatar absolute top-4 right-2">
                    <div className=" w-8 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{halfComment.length > 0 ? halfComment : review}</p>
                </div>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-white">{name}</h3>
                    <p className="py-4 text-white">{review}</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default Review