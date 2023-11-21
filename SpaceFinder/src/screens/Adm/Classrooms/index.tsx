import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'



function classroom(this: any) {

    // ------------------------------------------- // 

    const [salas, setSalas] = useState([]);

    const [id_SalaInput, setId_salaInput] = useState('');
    const [nomeInput, setNomeInput] = useState('');
    const [especificacaoInput, setEspecificacaoInput] = useState('');

    // ------------------------------------------- // 

    useEffect(() => {
        fetchSalas();
    }, []);

    // ------------------------------------------- // 

    const fetchSalas = async () => {

        try {
            const response = await axios.get('http://localhost:3000/salas');
            setSalas(response.data);
        } catch (error) {
            console.error('Erro ao buscar sala:', error);
        }
    };

    // ------------------------------------------- // 

    //Submit
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        try {
            let novoSala = {
                nome: nomeInput,
                especificacao: especificacaoInput,
                id_Sala: id_SalaInput,
            }
            await axios.post('http://localhost:3000/salas', novoSala);
            fetchSalas();
            setNomeInput('');
            setEspecificacaoInput('');
            setId_salaInput('');
        }

        catch (error) {
            console.error('Erro ao criar sala:', error);
        }
    };


    return (
        <>
            <header>
                <div className="titulo">
                    <h1>Cadastro Sala</h1>
                </div>
            </header>

            <div className="card">
                <form onSubmit={handleSubmit}>

                   11
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome Sala"
                        value={nomeInput}
                        onChange={(event) => setNomeInput(event.target.value)}
                        style={{ textAlign: 'center', borderRadius: 7, width: 300, height: 65, backgroundColor: '#E7E7E7', marginTop: 30, color: '#939393', border: 'none', fontSize: 17, marginRight: 10 }} />


                    <input
                        type="text"
                        name="especificacao"
                        placeholder="Especificação"
                        value={especificacaoInput}
                        onChange={(event) => setEspecificacaoInput(event.target.value)}
                        style={{ textAlign: 'center', borderRadius: 7, width: 300, height: 65, backgroundColor: '#E7E7E7', marginTop: 30, color: '#939393', border: 'none', fontSize: 17, marginRight: 10 }} />


                    <button
                        type="submit"
                        className="botaoMenor"
                        onClick={handleSubmit}
                    >Cadastrar</button>

                </form>

                {/* Lista de veículos */}
      <ul>
        {/* Mapeamento dos veículos */}
        {salas.map((sala) => (
          <li
          style={{color: '#000', border: 5, borderRadius: 7, textAlign: 'left', fontSize: 20, backgroundColor: '#E7E7E7', margin: 5}}
           key={sala.id_Sala}>

            {/* Exibição dos detalhes do veículo */}
            {sala.id_Sala} {("  ----------------------  ")}  
             {sala.nome} {("  ----------------------  ")}  
              {sala.especificacao} 
          </li>
        ))}
      </ul>

            </div>
        </>
    )
}
export default classroom;