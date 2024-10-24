"use client"

import styles from './home.module.css';
import { Utensils, Beef, Coffee, AlarmClock, Star } from 'lucide-react';

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.containerCenter}>
        <div className={styles.containerContent}>
          <div className={styles.iconLogo}> <Utensils size={90}/> </div>
          <h1 className={styles.title}>Bienvenido a</h1>
          <p className={styles.description}>Restaurante Gourmet</p>
          <p className={styles.text}>Una experiencia culinaria inolvidable</p>
          <div className={styles.cards}>
            <div className={styles.Menu}>
              <Beef size={35} color='#CA8A04'/>
              <p>Menú de Primera</p>
              <small>Descubre nuestras delicias culinarias</small>
            </div>
            <div className={styles.Cafeteria}>
              <Coffee color='#16A34A' className={styles.iconCoffee}/>
              <p>Cafetería de Primera</p>
              <small>Disfruta de un café de alta calidad</small>
            </div>
          </div>
          <button type='button'>Empezar a comer</button>
          <div className={styles.divisor}></div>
          <div className={styles.details}>
            <div className={styles.time}>
              <AlarmClock size={29} color='#CA8A04'/>
              <p>Abierto: 8am - 12pm</p>
            </div>
            <div className={styles.qualification}>
              <Star size={25} color='#CA8A04'/>
              <p>Calificación: 4.7/5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
