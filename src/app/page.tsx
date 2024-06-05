import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`flex-1 ${styles.content}`}>
      <div className="h-[1000px]">main</div>
    </main>
  );
}
