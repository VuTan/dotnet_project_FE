import React, {useEffect, useRef, useState} from "react";
import {Box, Container, Grid} from "@mui/material";
import '../content.scss';
// @ts-ignore
import img from "../../../../Component/images/images";
import {Link} from "react-router-dom";

interface Slider {
    id: number;
    image: string;
}

const slider: Slider[] = [
    {id: 1, image: img.content4Slider1},
    {id: 2, image: img.content4Slider2},
    {id: 3, image: img.content4Slider3},
    {id: 4, image: img.content4Slider4},
    {id: 5, image: img.content4Slider5},
];

function Content4(): JSX.Element {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [showMap, setShowMap] = useState<boolean>(false);
    const slideInterval = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        startSlideShow();
        return () => {
            if (slideInterval.current) {
                clearInterval(slideInterval.current);
            }
        };
    }, []);

    const startSlideShow = () => {
        slideInterval.current = setInterval(() => {
            setCurrentSlide((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
        }, 3000);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        if (slideInterval.current) {
            clearInterval(slideInterval.current);
        }
        startSlideShow();
    };

    const toggleMap = () => {
        setShowMap(!showMap);
    };
    return (
        <Box>
            <Container className="content4">
                <Grid container spacing={3}>
                    <Grid item xs={6} className={'left1'}>
                        <h3>
                            SIGNATURE
                            <br></br>
                            By The Coffee House
                        </h3>
                        <p>Nơi cuộc hẹn tròn đầy
                            với Cà phê đặc sản, Món ăn đa bản sắc và Không gian cảm hứng.</p>
                        <button
                            onClick={() => window.location.href = 'https://www.google.com/maps/place/SIGNATURE+By+The+Coffee+House/@10.729519,106.718835,19z/data=!4m6!3m5!1s0x31752f43c6bc27a1:0xcf4129681fbda044!8m2!3d10.7295194!4d106.7188349!16s%2Fg%2F11tp69twg_?hl=vi&entry=ttu'}>
                            Tìm hiểu thêm
                        </button>
                    </Grid>
                    <Grid item xs={6} className={'right1'}>
                        <div className="slider">
                            <div className="slides" style={{transform: `translateX(-${currentSlide * 100}%)`}}>
                                {slider.map((slider, index) => (
                                    <div
                                        key={slider.id}
                                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                                    >
                                        <img src={slider.image} alt={`Banner ${slider.id}`} className="image"/>
                                    </div>
                                ))}
                            </div>

                            <div className="dots">
                                {slider.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                                        onClick={() => goToSlide(index)}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    </Grid>
                </Grid>


            </Container>
        </Box>
    );
}

export default Content4;
