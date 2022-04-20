import './ImageCarousel.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageData } from '../../../../interfaces/IImage'
import { RootStore } from '../../../../features/store';
import { useSelector } from 'react-redux';

interface ImageCarouselProps {
    images: ImageData[]
}

function ImageCarousel(props: ImageCarouselProps) {
    const userData = useSelector((state: RootStore) => state.user.currentUser);
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
        <div id='image-slider-header' >
            <img id='image-slider-user-image' src={userData?.profileImage} alt="" />
        <Slider className='image-slider' {...settings}>
            {loadImages()}
        </Slider>
        </div>

    )
}

export default ImageCarousel