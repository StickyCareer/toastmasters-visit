import AppButton from "@/components/app-button";
import styles from "./styles.module.scss";
import IconFavorite from '/public/favorite_border.svg';
import IconX from '/public/icon_x.svg';
import IconButton from "@/components/icon-button";

export default function Home() {
  return (
    <main className={styles.main}>
      <AppButton icon={<IconFavorite />} />
      <IconButton icon={<IconX/>}/>
    </main>
    
  );
}
