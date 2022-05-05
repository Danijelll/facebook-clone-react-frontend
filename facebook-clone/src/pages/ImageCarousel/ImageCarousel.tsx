import './ImageCarousel.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageData } from '../../interfaces/IImage'
import { RootStore } from '../../features/store';
import { useDispatch, useSelector } from 'react-redux';
import { showCommentModal, showDeleteImageModal, showEditImageModal } from '../../features/Ui/UiSlice';
import { getCurrentOpenAlbum } from '../../features/Albums/AlbumSlice';
import ImageMenuModal from '../EditImageModal/EditImageModal';

interface ImageCarouselProps {
    albumId: number,
    userId: number,
    images: ImageData[],
    captions: string,
    createdOn: Date,
}

function ImageCarousel(props: ImageCarouselProps) {
    const userData = useSelector((state: RootStore) => state.user.currentUser);
    const { albumId, userId, images, captions, createdOn } = props;
    const dispatch = useDispatch();

    const loadImages = () => {
        return images?.map(image =>
            <img height="450px"
                width="960px"
                key={image.imageUrl}
                src={image.imageUrl}
                alt={image.imageUrl}
            />)
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

                    <div id='image-slider-add-comment-button'
                        onClick={() => {
                            dispatch(showCommentModal());
                            dispatch(getCurrentOpenAlbum(albumId))
                        }}>

                        <img id='image-slider-add-comment-button-svg'
                            src="comment.svg"
                            alt="commentSvg"
                        />

                    </div>

                    {userData?.id == userId &&
                        <div style={{display:"flex"}}>
                            <div onClick={() => {
                                dispatch(showEditImageModal());
                                dispatch(getCurrentOpenAlbum(albumId))
                            }}
                                id='image-slider-menu-button'>

                                <img id='image-slider-menu-button-svg'
                                    src="edit.svg"
                                    alt="editSvg"
                                />
                            </div>

                            <div onClick={() => {
                                dispatch(showDeleteImageModal());
                                dispatch(getCurrentOpenAlbum(albumId))
                            }}
                                id='image-slider-menu-button'>

                                <img id='image-slider-menu-button-svg'
                                    src="trash.svg"
                                    alt="trashSvg"
                                />
                            </div>
                        </div>
                    }
                </div>

                <div id='image-slider-created-on'>
                    {createdOn?.toString().slice(0, 10)}
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