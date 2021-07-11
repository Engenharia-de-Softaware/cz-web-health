import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

import logo from "../public/logo.svg";
import Input from "../components/Input";
import { useState } from "react";
import Button from "../components/button";

import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [cpf, setCpf] = useState(String);
  const [password, setPassword] = useState(String);

  const handleLogin = async () => {
    // if (!cpf || !password) {
    //   return;
    // }

    const { data } = await axios.post("http://localhost:8080/auth", {
      cpf,
      password,
    });

    console.log(data);

    router.push({ pathname: "/Dashboard", query: { token: data.accessToken } });
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerLogo}>
        <Image src={logo} alt="logo" />
        <div className={styles.title}>
          <div>
            <strong>COVID</strong>
          </div>
          ZONE
        </div>
      </div>

      <div className={styles.containerForm}>
        <h1>Health</h1>
        <Input label="Digite seu CNPJ" onChange={setCpf} />
        <Input label="Digite sua senha" onChange={setPassword} />
        <Button route="/Dashboard" label="Login" onClick={handleLogin} />
      </div>
    </div>
  );
}
