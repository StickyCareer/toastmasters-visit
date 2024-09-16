import AppButton from "@/components/app-button";
import styles from "./styles.module.scss";
import IconFavorite from '/public/favorite_border.svg';

export default function Home() {
  return (
    <main className={styles.main}>
      <AppButton icon={<IconFavorite />} />
    </main>
  );
}
