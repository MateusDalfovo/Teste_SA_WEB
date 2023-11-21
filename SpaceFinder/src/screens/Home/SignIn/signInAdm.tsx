import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'
import { useNavigate } from 'react-router-dom';


function signInAdm() {

  // ------------------------------------------- // 

  const navigate = useNavigate();
  const handleOnClickSalas = () => navigate('/classroom');

  const [usuarios, setUsuarios] = useState([]);

  const [nomeInput, setNomeInput] = useState('');
  const [sobrenomeInput, setSobrenomeInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [cpfInput, setCpfInput] = useState('');
  const [senhaInput, setSenhaInput] = useState('');
  const [senhaConfirmadaInput, setSenhaConfirmadaInput] = useState('');
  // ------------------------------------------- // 

  useEffect(() => {
    fetchUsuarios();
  }, []);

  // ------------------------------------------- // 

  const fetchUsuarios = async () => {

    try {
      const response = await axios.get('http://localhost:3000/usuarios');
      setUsuarios(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
    }
  };

  // ------------------------------------------- // 

  //Submit
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      let novoUsuario = {
        nome: nomeInput,
        sobrenome: sobrenomeInput,
        email: emailInput,
        cpf: cpfInput,
        senha: senhaInput,
        senhaConfirmada: senhaConfirmadaInput,
      }

      if (senhaInput != senhaConfirmadaInput) {
        alert("As senhas devem ser iguais!")
        return
      }

      await axios.post('http://localhost:3000/usuarios', novoUsuario);
      fetchUsuarios();
      setNomeInput('');
      setSobrenomeInput('');
      setEmailInput('');
      setCpfInput('');
      setSenhaInput('');
      setSenhaConfirmadaInput('');
     
      handleOnClickSalas();
    }

    catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  return (
    <>
      <header>
        <div className="titulo">
          <h1>Cadastro</h1>
        </div>
      </header>

      <div className="card">
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={nomeInput}
            onChange={(event) => setNomeInput(event.target.value)}
            style={{ textAlign: 'center', borderRadius: 7, width: 600, height: 65, backgroundColor: '#E7E7E7', marginTop: 30, color: '#939393', border: 'none', fontSize: 17 }} />

          <br></br>

          <input
            type="text"
            name="sobrenome"
            placeholder="Sobrenome"
            value={sobrenomeInput}
            onChange={(event) => setSobrenomeInput(event.target.value)}
            style={{ textAlign: 'center', borderRadius: 7, width: 600, height: 65, backgroundColor: '#E7E7E7', marginTop: 30, color: '#939393', border: 'none', fontSize: 17 }} />
          <br></br>

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={emailInput}
            onChange={(event) => setEmailInput(event.target.value)}
            style={{ textAlign: 'center', borderRadius: 7, width: 600, height: 65, backgroundColor: '#E7E7E7', marginTop: 30, color: '#939393', border: 'none', fontSize: 17 }} />
          <br></br>

          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={cpfInput}
            onChange={(event) => setCpfInput(event.target.value)}
            style={{ textAlign: 'center', borderRadius: 7, width: 600, height: 65, backgroundColor: '#E7E7E7', marginTop: 30, color: '#939393', border: 'none', fontSize: 17 }} />
          <br></br>

          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={senhaInput}
            onChange={(event) => setSenhaInput(event.target.value)}
            style={{ textAlign: 'center', borderRadius: 7, width: 600, height: 65, backgroundColor: '#E7E7E7', marginTop: 30, color: '#939393', border: 'none', fontSize: 17 }} />
          <br></br>

          <input
            type="password"
            name="senhaConfirmada"
            placeholder="Confirmar senha"
            value={senhaConfirmadaInput}
            onChange={(event) => setSenhaConfirmadaInput(event.target.value)}
            style={{ textAlign: 'center', borderRadius: 7, width: 600, height: 65, backgroundColor: '#E7E7E7', marginTop: 30, color: '#939393', border: 'none', fontSize: 17 }} />
          <br></br>

          <button
            type="submit"
            className="botaoMenor"
            onClick={handleSubmit}
          >Enviar</button>
        </form>
      </div>
    </>
  )
}
export default signInAdm;
