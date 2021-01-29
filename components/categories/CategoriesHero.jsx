import styles from "../../styles/Categories.module.css";

export default function CategoriesHero() {
  return (
    <div
      className={
        styles.home +
        " h-screen w-full py-24 pl-20 flex flex-col justify-center"
      }
    >
      <h1 className="font-black text-4xl">PRODUCT CATEGORIES</h1>
      <p className="breadboard text-white mt-4">
        <span>Home &gt; </span>
        <span>Categories &gt; </span>
        <span>Men &gt; </span>
        <span className={styles.spanActive}>Gadgets </span>
      </p>
    </div>
  );
}
