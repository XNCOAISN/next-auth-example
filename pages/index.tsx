import styles from "../styles/Home.module.css";
import LoginButton from "../components/login-button";

export default function Home() {
  return (
    <div className={styles.container}>
      <LoginButton />
    </div>
  );
}
