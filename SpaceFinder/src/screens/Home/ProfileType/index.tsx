import './styles.css'
import {useNavigate} from 'react-router-dom';

function ProfileType() {

  const navigate = useNavigate();
  const handleOnClickAdm = () => navigate('/signInAdm');
  const handleOnClickTeacher = () => navigate('/signInTeacher');
  const handleOnClickStudent = () => navigate('/signInStudent');
  const handleOnClickLogin = () => navigate('/login')


  return (
    <>
    <header>
      <div className="titulo">
      <h1>Seja bem-vindo!</h1>
      </div>
      </header>
      <div className="card">
        <div className="texto">Com qual finalidade você está utilizando nosso app?</div>
        
        <button className="botao2" onClick={handleOnClickAdm}>Secretaria</button>
        <button className="botao2" onClick={handleOnClickTeacher}>Professor</button>
        <button className="botao2" onClick={handleOnClickStudent}>Aluno</button>
        <br></br>

       
        <button className="botaoLogin1" onClick={handleOnClickLogin}>Já possui cadastro? Entre aqui.</button>
      </div>
    </>
  )
}

export default ProfileType;