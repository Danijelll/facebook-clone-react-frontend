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
    
    const loadImages = () =>{
        return images?.map(image => <img src={image.imageUrl} alt={image.imageUrl} />)
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (

        <Slider {...settings}>
            {loadImages()}
        </Slider>

    )
}

export default ImageCarousel