import styles from "../../styles/BestSeller.module.css";

export default function BestSeller() {
  return (
    <div className={styles.bestSeller}>
      <div >
        <img src="/img/kfc.jpg" alt="kfc" />
        <div className={ styles.bestSellerDesc}>
        <h1 className="font-extrabold uppercase mb-2.5">KFC</h1>
        <p className="text-justify text-xs">
          The bestseller in food category Its popular and presentable in all.
          Wanna buy them?, Learn more
        </p>
        </div>
      </div>
      <div >
        <img src="/img/makeup.png" alt="makeup" />
        <div  className={ styles.bestSellerDesc}>
        <h1 className="font-extrabold uppercase mb-2.5">Romantic Party</h1>
        <p className="text-justify text-xs">
          The bestseller in parfum category Its marvelous fragrance is lit
          really. Learn more
        </p>
        </div>
      </div>
      <div>
        <img src="/img/watch.png" alt="watch" />
        <div  className={ styles.bestSellerDesc}>
        <h1 className="font-extrabold uppercase mb-2.5">Apple Watch</h1>
        <p className="text-justify text-xs">
          The bestseller in watch category Its intelligent technology is legit.
          If you want it, Learn more
        </p>
        </div>
      </div>
      <div >
        <img src="/img/sneakers.png" alt="" />
        <div className={ styles.bestSellerDesc}>
        <h1 className="font-extrabold uppercase mb-2.5">Converse</h1>
        <p className="text-justify text-xs">
          The bestseller in shoes category Its popular and presentable in all.
          Wanna buy them?, Learn more
        </p>
        </div>
      </div>
    </div>
  );
}

