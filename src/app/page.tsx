import styles from "./styles.module.scss";
import EventCard from "@/components/event-card";

export default function Home() {
  return (
    <main className={styles.main}>
      <EventCard />
    </main>
  );
}
