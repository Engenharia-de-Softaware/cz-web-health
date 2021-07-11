import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

import logo from "../../public/logo2.svg";
import Input from "../../components/Input";
import { useState } from "react";

import axios from "axios";

export default function Dashboard(context: any) {
  const router = useRouter();
  const [cpf, setCPF] = useState(String);

  const handleConfirm = async () => {
    if (!cpf) {
      return;
    }

    const { token } = router.query;

    const response = await axios.post(
      "http://localhost:8080/health",
      { cpf },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    setCPF("");
    cpf;
  };

  return (
    <div className={styles.container}>
      <header>
        <Image src={logo} alt={"logo"} />
        <div className={styles.title}>
          <div>
            <strong>COVID</strong>
          </div>
          ZONE
        </div>
      </header>

      <div className={styles.containerForm}>
        <h2>Atualizar status do paciente</h2>
        <Input label="Digite o CPF" onChange={setCPF} value={cpf} />
        <button onClick={handleConfirm}>Confirmar</button>
      </div>
    </div>
  );
}
