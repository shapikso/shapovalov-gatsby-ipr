import React, {useState} from 'react';
import * as styles from"../ProductsDetailsData.module.scss";
import PropTypes from "prop-types";
import {IMAGES_IN_GALLERY} from "../../../constants/products";

interface GalleryProps {
    image: string,
}

const Gallery = ({image}: GalleryProps) => {
    const [activeCard, setActiveCard] = useState(0);
    return (
        <div className={styles.smallPhotos}>
            {new Array(IMAGES_IN_GALLERY).fill(image).map((item, index) => (
                <img alt='ups'
                    className={ activeCard === index ? styles.activeImage : ''}
                    src={image || ''}
                    key={index}
                    onClick={() => setActiveCard(index)}
                />
            ))}
        </div>
    );
};
Gallery.propTypes = {
    image: PropTypes.object,
};
export default Gallery;