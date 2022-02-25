import { useState } from 'react';
import Image from 'next/image'

import clinic from '../../public/clinic.jpg'
import map1 from '../../public/map-aflitos.png'
import map2 from '../../public/map-pina.png'

import styles from './AboutLocation.module.css'

export default function AboutLocation() {
  const addresses = [
    {
      street: 'Avenida Rosa e Silva 428',
      neighborhood: 'Aflitos',
      cityState: 'Recife - PE',
      map: map1,
    },
    {
      street: 'Avenida Conselheiro Aguiar 726',
      neighborhood: 'Boa Viagem',
      cityState: 'Recife - PE',
      map: map2,
    },
  ]
  
  const [selectedAddress, setSelectedAddress] = useState(addresses[0])

  const checkIsActive = (address) => {
    return selectedAddress.street === address.street ? styles.locationActive : ''
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
        <Image className={styles.photo} src={clinic} alt="Medical Clinic"/>
      </div>
    </section>
  )
}