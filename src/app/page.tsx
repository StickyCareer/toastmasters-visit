import AppButton from "@/components/app-button";
import styles from "./styles.module.scss";
import IconButton from "@/components/icon-button";

export default function Home() {
  return (
    <main className={styles.main}>
      <AppButton />
      <IconButton/>
    </main>
  );
}
