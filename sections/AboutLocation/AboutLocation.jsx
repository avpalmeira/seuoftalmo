import { useState } from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import clinic1 from '../../public/clinic.jpg'
import clinic2 from '../../public/clinic2.jpeg'
import map1 from '../../public/map-aflitos.png'
import map2 from '../../public/map-pina.png'

import styles from './AboutLocation.module.css'

export default function AboutLocation() {
  const addresses = [
    {
      street: 'Av. Rosa e Silva 528',
      neighborhood: 'Aflitos',
      cityState: 'Recife - PE',
      map: map1,
    },
    {
      street: 'Av. Conselheiro Aguiar 726',
      neighborhood: 'Boa Viagem',
      cityState: 'Recife - PE',
      map: map2,
    },
  ]

  const locationImages = [ clinic1, clinic2]
  
  const [selectedAddress, setSelectedAddress] = useState(addresses[0])
  const [currentLocationOnGalery, setCurrentLocationOnGalery] = useState(0)

  const checkIsActive = (address) => {
    return selectedAddress.street === address.street ? styles.locationActive : ''
  }

  const goToPreviousOnGalery = () => {
    if (currentLocationOnGalery > 0) {
      setCurrentLocationOnGalery(currentLocationOnGalery - 1)
    } else {
      setCurrentLocationOnGalery(locationImages.length - 1)
    }
  }

  const goToNextOnGalery = () => {
    if (currentLocationOnGalery === locationImages.length - 1) {
      setCurrentLocationOnGalery(0)
    } else {
      setCurrentLocationOnGalery(currentLocationOnGalery + 1)
    }
  }

  return (
    <section id="aboutLocation" className={styles.aboutLocation}>
      <h2>Clínicas Parceiras</h2>
      <div className={styles.locationMapContainer}>
        <div className={styles.locationMap}>
          <Image className={styles.photo} src={selectedAddress.map} alt="Location"/>
        </div>
        <div className={styles.locationAddresses}>
          <p className={checkIsActive(addresses[0])} onClick={() => setSelectedAddress(addresses[0])}>
            {addresses[0].street}<br/>{addresses[0].neighborhood}, {addresses[0].cityState}
          </p>
          <p className={checkIsActive(addresses[1])} onClick={() => setSelectedAddress(addresses[1])}>
            {addresses[1].street}<br/>{addresses[1].neighborhood}, {addresses[1].cityState}
          </p>
        </div>
      </div>
      <div className={styles.locationImagesGalery}>
        <div className={styles.locationImageContainer}>
          <Image className={styles.photo} layout="fill" src={locationImages[currentLocationOnGalery]} alt="Medical Clinic"/>
        </div>
        <div className={styles.galeryArrows}>
          <span onClick={goToPreviousOnGalery}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
          <span onClick={goToNextOnGalery}>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </div>
      </div>
    </section>
  )
}