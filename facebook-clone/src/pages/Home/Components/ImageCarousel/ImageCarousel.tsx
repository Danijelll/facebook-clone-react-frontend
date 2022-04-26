import './ImageCarousel.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageData } from '../../../../interfaces/IImage'
import { RootStore } from '../../../../features/store';
import { useSelector } from 'react-redux';

interface ImageCarouselProps {
    images: ImageData[],
    captions: string,
    createdOn: Date,
}

function ImageCarousel(props: ImageCarouselProps) {
    const userData = useSelector((state: RootStore) => state.user.currentUser);
    const { images,captions,createdOn } = props;
    
    
    const loadImages = () =>{
        return images?.map(image => <img height="450px" width="960px" key={image.imageUrl} src={image.imageUrl} alt={image.imageUrl} />)
    }
    
    const settings = {
        dots: true,
        infinite: false,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div id='image-slider-body' >
            <div id='image-slider-header'>
            <img id='image-slider-user-image' src={userData?.profileImage} alt="" />
            <p id='image-slider-username'>{userData?.username}</p>
            </div>
            {captions &&
            <div id='image-slider-caption-wrapper'>
                <p id='image-slider-caption-username'>
                    {userData?.username}
                </p>
                <p>
                    {captions}
                </p>
            </div>
            }
            <div id='image-slider-created-on'>
                {createdOn.toString().slice(0,10)}
            </div>
        <Slider className='image-slider' {...settings}>
            {loadImages()}
        </Slider>
        </div>

    )
}

export default ImageCarousel