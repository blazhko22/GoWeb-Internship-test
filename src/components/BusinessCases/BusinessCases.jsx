import React, {useState} from "react";
import  Container from "../Container";
import s from './BusinessCases.module.scss';
import cases1 from '../../images/cases/cases1.jpg';
import cases2 from '../../images/cases/cases2.jpg';
import cases3 from '../../images/cases/cases3.jpg';
import cases4 from '../../images/cases/cases4.jpg';
import cases5 from '../../images/cases/cases5.jpg';
import cases6 from '../../images/cases/cases6.jpg';
import next from '../../images/gallery/next.png';
import prev from '../../images/gallery/prev.png';
// import close from '../../images/gallery/close.png';
import Lightbox from 'react-spring-lightbox';

const images = [
  {
      src: cases1,
      loading: 'lazy',
  },
  {
      src: cases2,
      loading: 'lazy',
  },
  {
      src: cases3,
      loading: 'lazy',
  },
  {
    src: cases4,
    loading: 'lazy',
  },
  {
    src: cases5,
    loading: 'lazy',
  },
  {
    src: cases6,
    loading: 'lazy',
  },
];



function BusinessCases() {

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [currentImageIndex, setCurrentIndex] = useState(0);

    const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

    const gotoNext = () =>
        currentImageIndex + 1 < images.length &&
        setCurrentIndex(currentImageIndex + 1);
    const handleClose = () => setIsGalleryOpen(false);
        

    return <div id="cases" className={s.business_cases}>
        <Container> 
            <div className={s.box}>
                <h6 className={s.question}>This is what we do</h6>
                <h4 className={s.title}>Business Cases</h4>
                <p className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
                <ul className={s.list}>
                  {images.map((image) => {
                    return (<li key={image.src} className={s.item} onClick={() => setIsGalleryOpen(true)}>
                      <img className={s.img} src={image.src} alt="" />
                    </li>)
                  })}
                </ul>
                {isGalleryOpen && <div className={s.lightboxContainer}>
                  {/* <img className={s.close} src={close} alt="" /> */}
                  <Lightbox
                    isOpen={isGalleryOpen}
                    onPrev={gotoPrevious}
                    onNext={gotoNext}
                    images={images}
                    currentIndex={currentImageIndex}
                 
                    renderPrevButton={() => (<div className={s.boxBtn}><img className={s.arrowBtn} src={prev} alt="" onClick={gotoPrevious}/></div>)}
                    renderNextButton={() => (<div className={s.boxBtn}><img className={s.arrowBtn} src={next} alt="" onClick={gotoNext}/></div>)}
                    // renderImageOverlay={() => (<ImageOverlayComponent >)}

                    /* Add styling */
                    // className="cool-class"
                    style={{ background: "grey" }}
                    className="close"
                    /* Handle closing */
                    onClose={handleClose}

                    /* Use single or double click to zoom */
                    // singleClickToZoom

                    /* react-spring config for open/close animation */
                    // pageTransitionConfig={{
                    //   from: { transform: "scale(0.75)", opacity: 0 },
                    //   enter: { transform: "scale(1)", opacity: 1 },
                    //   leave: { transform: "scale(0.75)", opacity: 0 },
                    //   config: { mass: 1, tension: 320, friction: 32 }
                    // }}
                  >
                    {/* <img className={s.close} src={close} alt="" /> */}
                  </Lightbox>
                </div>              
}
                     
            </div>
        </Container>
    </div>
}

export default BusinessCases;