import Card from "@/app/components/Card"
import Navbar from "@/app/components/Navbar"
import Review from "@/app/components/Review"

const Reviews = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen pt-36">
                <div className="flex justify-center items-center w-screen mt-10 p-12 py-16 border-b-2 border-black">
                    <div>
                        <span className="text-2xl font-semibold text-black">Add a Review</span>
                    </div>
                    <input type="text" placeholder="Review..." className="input input-bordered bg-white text-black border-black border-2 w-[70%] ml-6 focus:border-black" />
                    <button className="btn ml-8 text-white hover:border-2 hover:bg-white hover:text-black">Submit</button>
                </div>

                <div className="flex flex-wrap">
                    <Review name={"Gosal"} review={"lovelovelovelovelovelovelovelovelovelovelovelovelovelovelovelovelovelovelove"} />
                    <Review name={"Gosal"} review={"love"} />
                    <Review name={"Gosal"} review={"love"} />
                    <Review name={"Gosal"} review={"love"} />
                    <Review name={"Gosal"} review={"love"} />
                    <Review name={"Gosal"} review={"love"} />
                    <Review name={"Gosal"} review={"love"} />
                    <Review name={"Gosal"} review={"love"} />
                </div>
            </div>
        </div>
    )
}

export default Reviews