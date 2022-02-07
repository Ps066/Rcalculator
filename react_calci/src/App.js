import './App.css';
import Calculator  from './components/calculator'
import { Credit , Avtar, Githublink} from './components/calculator/styled';
function App() {

  const githublink= () => {

    window.location.href = "https://github.com/Ps066";

  }
  return (
    <div>
   
    <Calculator></Calculator>
    <Credit>Copyright ©2022- Web calculator(React) by Prashant Shukla</Credit>

    
    <Avtar src="https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png" alt="about the developer" onClick={githublink} />
    
    </div>
   
    
  )
    
}

export default App;
