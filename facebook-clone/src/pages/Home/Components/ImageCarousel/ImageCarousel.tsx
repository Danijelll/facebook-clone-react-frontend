import './ImageCarousel.scss'
import { Carousel } from 'react-responsive-carousel'
import { useEffect } from 'react'
import { ImageData } from '../../../../interfaces/IImage'

interface ImageCarouselProps {
    images: ImageData[]
}

function ImageCarousel(props: ImageCarouselProps) {

    const { images } = props;

    useEffect(() => {
        console.log(images);

    }, [])


    return (
        <Carousel showArrows={true}>
            <img src={images[0].imageUrl} alt="" />
            <p></p>
        </Carousel>
    )
}

export default ImageCarousel