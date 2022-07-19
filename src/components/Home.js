import React from 'react'
import homebg1 from './../assets/slider/homebg-1.jpg';
import homebg2 from './../assets/slider/homebg-2.jpg';
import homebg3 from './../assets/slider/homebg-3.jpg';
import homebg4 from './../assets/slider/homebg-4.jpg';
import homebg5 from './../assets/slider/homebg-5.jpg';
import homebg6 from './../assets/slider/homebg-6.jpg';
import homebg7 from './../assets/slider/homebg-7.jpg';
import productimg1 from './../assets/product/product-img1.jpg';
import productimg2 from './../assets/product/product-img2.jpg';
import productimg3 from './../assets/product/product-img3.jpg';
import productimg4 from './../assets/product/product-img4.jpg';
import Product from './Product';
import Selection from './Selection';

export default function Home() {
    return (
        <>
            <div className="carousel bg-neutral-300">
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
                        className="carousel-control-prev absolute h-[55%] top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 z-[2000]"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute h-[55%] top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 z-[2000]"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="container absolute inset-x-0 top-96 z-[3000]">
                    <div className="flex flex-wrap">
                        <Selection />
                        <Selection />
                    </div>
                    <div className='flex flex-wrap'>
                        <Product heading="Keep shopping for" img={productimg1} description="Colorbar Waterproof Liquid Eyeliner, Black, 2.5ml" finalPrice="297" price="425" />
                        <Product heading="Explore more items" img={productimg2} description="Hp 15S-Ryzen 3 5300U 8Gb Sdram/256Gb Ssd 15.6 Inches Fhd, Micro-Edge, Anti-Glare Display/AMD Radeon Graphics/Dual Speakers/Windows 11 Home/Alexa/Ms Office/Fast Charge/Silver/1.69Kg, 15S-Ey2000Au" finalPrice="34990" price="47843" />
                        <Product heading="More items to explore" img={productimg3} description="boAt Airdopes 621 Bluetooth Truly Wireless in Ear Earbuds with Upto 150 Hours Playback, ASAP Charge,Case Indicator,boAt Signature Sound,IWP Tech, IPX7 & Smooth Touch Controls with mic (Active Black)" finalPrice="2999" price="7999" />
                        <Product heading="Continue shopping for" img={productimg4} description="Fossil Grant Sport Analog Blue Dial Men's Watch-FS5237" finalPrice="7145" price="10995" />
                    </div>
                </div>
            </div>
        </>
    )
}
