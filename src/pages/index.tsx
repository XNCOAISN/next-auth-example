import styles from "../styles/Home.module.css";
import LoginButton from "../components/login-button";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session } = useSession();

  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        ...(session && { Authorization: `Beader ${session.token}` }),
      };
      const res = await fetch("http://127.0.0.1:4000", { headers });
      const data = await res.json();
      setMessage(data.message);
    };
    fetchData();
  }, [session]);

  return (
    <div className={styles.container}>
      <div>{message}</div>
      <LoginButton />
    </div>
  );
}
