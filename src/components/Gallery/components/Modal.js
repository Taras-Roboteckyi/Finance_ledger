import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import myGif from '../../../images/gallery/loading.gif';
import nextArrow from '../../../images/gallery/next.png';
import prevArrow from '../../../images/gallery/prev.png';
import close from '../../../images/gallery/close.png';

import {
  ArrowsLeftContainer,
  ArrowsRightContainer,
  ImgArrow,
  ImgClose,
  ImgContainer,
  ImgItem,
  Overlay,
} from './Modal.styled';

const Modal = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft,
  currentIndex,
  totalImgLength,
  onClose,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isArrowLeft, setIsArrowLeft] = useState(null);
  const [isArrowRight, setIsArrowRight] = useState(true);

  useEffect(() => {
    /////Show-hidden left arrow/////////
    currentIndex === 0 ? setIsArrowLeft(null) : setIsArrowLeft(true);

    /////Show-hidden right arrow/////////

    currentIndex === totalImgLength - 1 ? setIsArrowRight(null) : setIsArrowRight(true);

    ////Show-hidden Esc keyboard///////////
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [clickedImg, currentIndex, onClose, totalImgLength]);

  const handleClick = e => {
    if (e.target.classList.contains('dismiss')) {
      setClickedImg(null);
    }
  };

  const loader = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Overlay className="dismiss" onClick={handleClick} clickedImg={clickedImg}>
        {isLoading ? (
          <img src={myGif} className="dismiss" alt="Spinner" />
        ) : (
          <>
            <ImgContainer aria-describedby="gallery image">
              <ImgItem src={clickedImg} alt="bigger pic" />

              {clickedImg && (
                <ImgClose
                  src={close}
                  className="dismiss"
                  alt="close button"
                  onClick={handleClick}
                />
              )}
            </ImgContainer>
            {isArrowLeft && (
              <ArrowsLeftContainer onClick={handelRotationLeft}>
                <ImgArrow src={prevArrow} alt="left white arrow" onClick={loader} />
              </ArrowsLeftContainer>
            )}
            {isArrowRight && (
              <ArrowsRightContainer onClick={handelRotationRight}>
                <ImgArrow src={nextArrow} alt="right white arrow" onClick={loader} />
              </ArrowsRightContainer>
            )}
          </>
        )}
      </Overlay>
    </>
  );
};

export default Modal;

Modal.propTypes = {
  clickedImg: PropTypes.string,
  setClickedImg: PropTypes.func,
  handelRotationRight: PropTypes.func,
  handelRotationLeft: PropTypes.func,
  currentIndex: PropTypes.number,
  totalImgLength: PropTypes.number,
  onClose: PropTypes.func,
};
