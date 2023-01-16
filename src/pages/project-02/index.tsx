import { useState } from 'react'
import Icon360 from './assets/icon_360.svg'
import IconX from './assets/icon_X.svg'
import GifSofa from './assets/sofa.gif'
import ImgSofa from './assets/sofa.png'
import styles from './styles.module.scss'
export function Project02() {

  const [is360View, setIs360View] = useState(false)

  function handleToggleView() {
    setIs360View(!is360View)
  }

  return (
    <div className={styles.container}>
      <div className={styles.productView}>
        <button onClick={handleToggleView} className={styles.btnIcon}>
          {is360View ? <img className={styles.icon} src={IconX} alt="" /> : <img className={styles.icon} src={Icon360} alt="" />}
        </button>
        {is360View ? <img src={GifSofa} alt="" className={styles.ImgProduct} /> : <img src={ImgSofa} alt="" className={styles.ImgProduct} />}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.productInfo}>
          <p className={styles.productCode}>CÓDIGO: 42404</p>
          <p className={styles.productName}>Sofá Margot II - Rosé</p>
          <span className={styles.productPrice}>R$ 4.000 </span>
        </div>
        <button className={styles.btnAddToCart}>ADICIONAR À CESTA</button>
      </div>
    </div>
  )
}