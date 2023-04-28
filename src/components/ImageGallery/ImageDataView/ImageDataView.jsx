import React from "react";
import PropTypes, { func } from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";
import InfiniteScrl from "./InfiniteScroll/InfiniteScroll";
import s from "./ImageDataView.module.css";

export default function ImageDataView({ imagesArray, openModal, loadMore }) {
  return (
    <div className={s.box}>
      <ul className={s.gallery}>
        {imagesArray.map(({ id, webfomatURL, largeImageURL, tags }) => (
          <li key={id} className={s.galleryItem}>
            <ImageGalleryItem
              smallImg={webfomatURL}
              largeImg={largeImageURL}
              alt={tags}
              openModal={openModal}
            />
          </li>
        ))}
      </ul>
      <InfiniteScrl imagesArray={imagesArray} loadMore={loadMore} />
    </div>
  );
}

ImageDataView.propTypes = {
  imagesArray: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
};
