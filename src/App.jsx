import "../src/globals.css";
import {useState} from "react"

export default function App() {
     const [nome, setNome] = useState("Professor");
      const mudarNome = () => {
        setNome("Joao");
      }
      const[numero, setNumero] = useState("455");
      const mudarNumero = () => {
        setNumero("467");
    }
    const[cpf, setCpf] = useState("68472894637");
        
    const mudarCpf = () => {
        setCpf("648988989");
    }
    return (
       <div>
           {nome}
            {numero}
            {cpf}
            <button onClick = {mudarNome}>Mudar</button>
            <button onClick = {mudarNumero}>Mudar</button>
            <button onClick = {mudarCpf}>Mudar</button>
       </div>
    );
}