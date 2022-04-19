import './ImageCarousel.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageData } from '../../../../interfaces/IImage'

interface ImageCarouselProps {
    images: ImageData[]
}

function ImageCarousel(props: ImageCarouselProps) {
    const { images } = props;

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <img src={images[0].imageUrl} alt="" />
            <p></p>

        </Slider>

    )
}

export default ImageCarousel