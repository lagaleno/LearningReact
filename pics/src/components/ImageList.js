import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.images.map((image) => { //abrindo props de image
        return <ImageCard key={image.id} image={image} />
    })
    
    return <div className="image-list"> {images} </div>;
    
}

export default ImageList;