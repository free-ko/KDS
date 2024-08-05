import * as styles from './styles.css';

function App() {
  return (
    <main>
      <h1 className={styles.headline3xl}>KDS Head Line 3</h1>
      <h2 className={styles.headline3xl}>KDS Head Line 2</h2>
      <p className={styles.bodyBlue60Text}>KDS Text</p>
      <div className={styles.radius100} />
      <div className={styles.radius100AndElevationXl} />
    </main>
  );
}

export default App;
