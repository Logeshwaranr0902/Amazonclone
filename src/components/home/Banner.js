import React, { useState } from 'react'
import Slider from "react-slick";
import { bannerImgFive, bannerImgFour, bannerImgThree, bannerImgTwo, bannerImgOne } from '../../assets/index';

const Banner = () => {
    const [dotActive, setDotActive] = useState(0)
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (prev, next) => {
            setDotActive(next);
        },
        appendDots: (dots) => (
            <div
                style={{
                    position: 'absolute',
                    top: "70%",
                    left: "45%",
                    transform: "translate(-50% -50%)",
                    width: "210px"
                }}
            >
                <ul style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}> {dots} </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={
                    i === dotActive
                        ? {
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            background: "#131921",
                            padding: "8px 0",
                            cursor: "pointer",
                            border: "1px solid #f3a847",
                        } : {
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            background: "#232F3E",
                            padding: "8px 0",
                            cursor: "pointer",
                            border: "1px solid white",
                        }
                }
            >
                {i + 1}
            </div>
        ),
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    dots: true,
                    appendDots: (dots) => (
                        <div
                            style={{
                                position: "absolute",
                                top: "60%",
                                left: "50%",
                                transform: "translate(-50%, 0)",
                                width: "150px",
                            }}
                        >
                            <ul
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    fontSize: "12px",
                                }}
                            >
                                {" "}
                                {dots}{" "}
                            </ul>
                        </div>
                    ),
                    customPaging: (i) => (
                        <div
                            style={
                                i === dotActive
                                    ? {
                                        width: "25px",
                                        height: "25px",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "white",
                                        background: "#131921",
                                        padding: "8px 0",
                                        cursor: "pointer",
                                        border: "1px solid #f3a847",
                                    }
                                    : {
                                        width: "25px",
                                        height: "25px",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background: "#232F3E",
                                        color: "white",
                                        padding: "8px 0",
                                        cursor: "pointer",
                                        border: "1px solid white",
                                    }
                            }
                        >
                            0{i + 1}
                        </div>
                    ),
                },
            },
        ],
    };
    return (
        <div className='w-full'>
            <div className='w-full h-full relative'>
                <Slider {...settings}>
                    <div>
                        <img src={bannerImgOne} alt="bannerimgone" />
                    </div>
                    <div>
                        <img src={bannerImgTwo} alt="bannerimgtwo" />
                    </div>
                    <div>
                        <img src={bannerImgThree} alt="bannerimgthree" />
                    </div>
                    <div>
                        <img src={bannerImgFour} alt="bannerimgfour" />
                    </div>
                    <div>
                        <img src={bannerImgFive} alt="bannerimgfive" />
                    </div>
                </Slider>
            </div>
        </div>

    );
}

export default Banner