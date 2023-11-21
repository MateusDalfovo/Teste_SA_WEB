import './styles.css'
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
const handleOnClickRecPassword = () => navigate('/recPassword');

function Login() {
  return (
    <>
    <header>
      <div className="titulo">
      <h1>Login</h1>
      </div>
      </header>
      <div className="card">
        <div className="texto">Seja bem-vindo de volta!</div>
        <form>
      <label>
        <input type="text" placeholder="Email" style={{textAlign: 'center', borderRadius: 7, width: 600,  height: 65, backgroundColor: '#E7E7E7', marginTop: 50, color: '#939393', border: 'none', fontSize: 17}}/>
        <br></br>
        <input type="password" placeholder="Senha" style={{textAlign: 'center', borderRadius: 7, width: 600,  height: 65, backgroundColor: '#E7E7E7', marginTop: 50, color: '#939393', border: 'none', fontSize: 17 }}/>
      </label>
    </form>
       
</div>
        <button className="botaoMenor">Entrar</button>
        <br></br>
        <button className="botaoEsqueciSenha" onClick={handleOnClickRecPassword}>Esqueci minha senha</button>

    </>
  )
}

export default Login;