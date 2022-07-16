import React from 'react'
import homebg1 from './../assets/homebg-1.jpg';
import homebg2 from './../assets/homebg-2.jpg';
import homebg3 from './../assets/homebg-3.jpg';
import homebg4 from './../assets/homebg-4.jpg';
import homebg5 from './../assets/homebg-5.jpg';
import homebg6 from './../assets/homebg-6.jpg';
import homebg7 from './../assets/homebg-7.jpg';
import './css/Header.css'

export default function Home() {
    return (
        <div className="home bg-neutral-300">
            <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full h-[90vh]">
                        <div className="w-full h-[90vh] absolute top-0 left-0 z-[1000] bg-gradient-to-b from-transparent via-transparent to-neutral-300 opacity-100"></div>
                        <img
                            src={homebg1}
                            className="block w-full h-[90vh]"
                            alt=""
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                    <div className="w-full h-[90vh] absolute top-0 left-0 z-[1000] bg-gradient-to-b from-transparent via-transparent to-neutral-300 opacity-100"></div>
                        <img
                            src={homebg2}
                            className="block w-full h-[90vh]"
                            alt=""
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                    <div className="w-full h-[90vh] absolute top-0 left-0 z-[1000] bg-gradient-to-b from-transparent via-transparent to-neutral-300 opacity-100"></div>
                        <img
                            src={homebg3}
                            className="block w-full h-[90vh]"
                            alt=""
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                    <div className="w-full h-[90vh] absolute top-0 left-0 z-[1000] bg-gradient-to-b from-transparent via-transparent to-neutral-300 opacity-100"></div>
                        <img
                            src={homebg4}
                            className="block w-full h-[90vh]"
                            alt=""
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                    <div className="w-full h-[90vh] absolute top-0 left-0 z-[1000] bg-gradient-to-b from-transparent via-transparent to-neutral-300 opacity-100"></div>
                        <img
                            src={homebg5}
                            className="block w-full h-[90vh]"
                            alt=""
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                    <div className="w-full h-[90vh] absolute top-0 left-0 z-[1000] bg-gradient-to-b from-transparent via-transparent to-neutral-300 opacity-100"></div>
                        <img
                            src={homebg6}
                            className="block w-full h-[90vh]"
                            alt=""
                        />
                    </div>
                    <div className="carousel-item relative float-left w-full">
                    <div className="w-full h-[90vh] absolute top-0 left-0 z-[1000] bg-gradient-to-b from-transparent via-transparent to-neutral-300 opacity-100"></div>
                        <img
                            src={homebg7}
                            className="block w-full h-[90vh]"
                            alt=""
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute h-[50%] top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 z-[2000]"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute h-[50%] top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 z-[2000]"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className=""></div>
        </div>
    )
}
