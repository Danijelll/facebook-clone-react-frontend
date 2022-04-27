import './ImageCarousel.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageData } from '../../interfaces/IImage'
import { RootStore } from '../../features/store';
import { useDispatch, useSelector } from 'react-redux';
import { showCommentModal } from '../../features/Ui/UiSlice';
import { getAllAlbumComments } from '../../features/Albums/AlbumSlice';

interface ImageCarouselProps {
    albumId: number,
    images: ImageData[],
    captions: string,
    createdOn: Date,
}

function ImageCarousel(props: ImageCarouselProps) {
    const userData = useSelector((state: RootStore) => state.user.currentUser);
    const { albumId,images, captions, createdOn } = props;
    const dispatch = useDispatch();

    const loadImages = () => {
        return images?.map(image => <img height="450px" width="960px" key={image.imageUrl} src={image.imageUrl} alt={image.imageUrl} />)
    }

    const settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div id='image-carousel-wrapper'>
            <div id='image-slider-body' >
                <div id='image-slider-header'>

                    <img id='image-slider-user-image'
                     src={userData?.profileImage} alt=""
                    />

                    <p id='image-slider-username'>
                        {userData?.username}
                    </p>

                    <div 
                        onClick={() => {
                                dispatch(showCommentModal());
                                dispatch(getAllAlbumComments(albumId))
                            } 
                        }
                        id='image-slider-add-comment-button'
                    >

                    <img id='image-slider-add-comment-button-svg'
                        src="comment.svg" alt="commentSvg" 
                    />

                    </div>
                </div>

                <div id='image-slider-created-on'>
                    {createdOn.toString().slice(0, 10)}
                </div>

                <Slider className='image-slider' {...settings}>
                    {loadImages()}
                </Slider>

                <div id='image-slider-comments'>
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
                </div>
            </div>

        </div>
    )
}

export default ImageCarousel