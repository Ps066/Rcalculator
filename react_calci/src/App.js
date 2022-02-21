import './App.css';
import Calculator  from './components/calculator'
import { Credit , Licencetxt, Footer,Head, Icontray, Gh,Li,Tw,Deck,Text,Cicon,Rlogo} from './components/calculator/styled';
function App() {

  const licencelink= () => {
    window.open( 
      "https://github.com/Ps066/Rcalculator/blob/master/LICENSE", "_blank");

    //window.location.href = "https://github.com/Ps066/Rcalculator/blob/master/LICENSE";
    //https://github.com/Ps066

  }
  const Repolink = () => {
    //window.location.href ="https://github.com/Ps066/Rcalculator";
    window.open( 
      "https://github.com/Ps066/Rcalculator", "_blank");
  }
  const github = () => {
    window.open( 
      "https://github.com/Ps066/", "_blank");
  }
  const twitter = () => {
    window.open( 
      "https://twitter.com/Ps_066", "_blank");
  }
  const linkedin = () => {
    window.open( 
      "https://www.linkedin.com/in/ps066/", "_blank");
  }
  return (
    <div>
   
    <Calculator></Calculator>
    
    <Footer>
    <Deck>
    <Head onClick={Repolink} >RCALCULATOR</Head>
    <Text>Made with</Text>
    
    <Cicon src="https://img.icons8.com/material-sharp/48/000000/like--v2.png"/>
    <Text>using</Text>
    <Rlogo src="https://img.icons8.com/ios-glyphs/60/000000/react.png"/>
    </Deck>
    

    <Icontray>
      <Gh onClick={github}><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/></Gh>
      <Tw onClick={twitter}><img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"/></Tw>
      <Li onClick={linkedin}><img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"/></Li>
      
    </Icontray>

    <Licencetxt onClick={licencelink} ><Credit>RCALCULATOR  Copyright (C) 2022  Prashant Shukla</Credit></Licencetxt>
    </Footer>

    
    
    
    </div>
   
    
  )
    
}

export default App;
