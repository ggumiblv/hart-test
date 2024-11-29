import React, { useState } from "react";
import img1 from "../../shared/assets/images/1gallery.webp";
import img2 from "../../shared/assets/images/2gallery.webp";
import img3 from "../../shared/assets/images/3gallery.webp";
import img4 from "../../shared/assets/images/4gallery.webp";
import img5 from "../../shared/assets/images/5gallery.webp";
import img6 from "../../shared/assets/images/6gallery.webp";

import styles from "./index.module.scss";
import LogoIcon from "../../shared/assets/icons/logo-icon";
import ArrowRightIcon from "../../shared/assets/icons/arrow-right-icon";

const GalleryWidget: React.FC = () => {
  const images = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
  ];

  const [activeImage, setActiveImage] = useState(images[0].src);

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
        <img src={activeImage} alt="Large" />
      </div>

      <div className={styles.thumbnails_container}>
        <div className={styles.thumbnails}>
          {images.map((image) => (
            <div
              key={image.id}
              className={`${styles.thumbnail} ${
                activeImage === image.src ? styles.active : ""
              }`}
              onClick={() => setActiveImage(image.src)}
            >
              <img src={image.src} alt={`Thumbnail ${image.id}`} />
            </div>
          ))}
        </div>

        <div className={styles.logo_container}> 
            <div className={styles.logo_container_arrow}> 
            <ArrowRightIcon />
            </div>
            <div className={styles.logo_container_logo}> 
            <LogoIcon />
            </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryWidget;
