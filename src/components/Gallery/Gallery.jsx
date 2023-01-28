import React, { useState, useEffect } from 'react';

import { galleryImages } from './data/gallery';
import Modal from './components/Modal';

export function Gallery() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  /////////Prohibits scrolling of the body when the modal is open////////////
  useEffect(() => {
    if (clickedImg) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [clickedImg]);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.small);
  };
  const totalLength = galleryImages.length;

  const handelRotationRight = () => {
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = galleryImages[0].small;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = galleryImages.filter(item => {
      return galleryImages.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].small;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = galleryImages[totalLength - 1].small;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = galleryImages.filter(item => {
      return galleryImages.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].small;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const toggleModal = () => {
    setClickedImg(prevValue => !prevValue);
  };

  return (
    <div className="wrapper">
      {galleryImages.map((item, index) => (
        //<div key={index} className="wrapper-images">
        <picture key={index} className="wrapper-images">
          <source srcSet={(item.smallWebp, item.largeWebp)} type="image/webp" />
          <source srcSet={(item.small, item.large)} type="image/jpg" />
          <img src={item.small} alt={item.alt} onClick={() => handleClick(item, index)} />
        </picture>
        //</div>
      ))}
      <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
            currentIndex={currentIndex}
            totalImgLength={totalLength}
            onClose={toggleModal}
          />
        )}
      </div>
    </div>
  );
}
