import styled from 'styled-components'

export const Container = styled.div`
    display:grid;
    justify-content: center;
    align-content: center;
    width:400px;
    margin :40px auto;
    grid-template-columns:repeat(4,100px);
    grid-template-rows:minmax(100px,auto) repeat(5,100px);
    box-shadow:2px 2px 10px #333;
    border-radius: 10px;
   /*#b3ffd9*/
   /*#006666*/
   /*rgb(117, 163, 163,0.75)*/
`
export const Screen = styled.div`
    grid-column: 1/-1;
    background-color: #006666 ;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    word-wrap:break-word;
    word-break: break-all;
    text-align: right;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
export const Previoustext = styled.div`
    color : #ccffff;
    font-size:1.5rem;
`
export const Maintext = styled.div`
    color : white;
    font-size:2.5rem;
`
export const Buttons = styled.button`
    cursor: Pointer;     /*changing cursor design*/
    font-size: 2rem;
    border: 1px outset white;
    outline: none;
    background-color:rgb(204, 255, 204,0.75);
    &:hover {
        background-color:rgb(204, 255, 204,0.9);
    }

    ${ function({gridSpan}){
        if(gridSpan){
            return `grid-column: span ${gridSpan};`
        }
    }}



    ${({arithmatic}) => arithmatic && `background-color:rgb(0, 179, 179,0.75);` }
    ${({control}) => control && `background-color:rgb(117, 163, 163,0.75);` }
    ${({equal}) => equal && `background-color:rgb(0, 179, 179,0.75); border-bottom-right-radius: 10px ;` }
    ${({dot}) => dot && ` border-bottom-left-radius: 10px ;` }



`
export const Credit = styled.h5`
    
    &:hover {
        font-size:1.2rem;
    } 
    
    color : black;
    font-weight: 900;
    cursor: pointer;
    
`
export const Licencetxt = styled.p`
    color : black;
    width:800px;
`

export const Footer = styled.div`
    background-color: /*#00ffcc*/ #00d8ff;
    border-radius:7px;
    margin:50px;
    padding-left: 20px;
    padding-top:20px;
    padding-bottom:20px;

`
export const Head = styled.h1`
    /*font-family: 'Staatliches', cursive;*/
    /*font-family: 'Caveat', cursive;*/
    font-family: 'Neucha', cursive;
    font-weight: 900;
    cursor: pointer;
    grid-column:1/span 11 ;

`
export const Icontray = styled.div`
    display: grid;
    grid-template-columns:repeat(3,70px);

`
export const Gh = styled.div`
    /*grid-colu: 1/1;*/
    cursor: pointer;

`
export const Li = styled.div`
    /*grid-rows:2/2;*/
    cursor: pointer;

`
export const Tw = styled.div`
    /*grid-rows:2/2;*/
    cursor: pointer;

`
export const Deck = styled.div`
    display: grid;
    grid-template-columns:repeat(15,75px);

`
export const Text = styled.p`
    font-family: 'Caveat', cursive;
    font-weight:800;
    font-size:20px;
    
`
export const Cicon = styled.img`
    margin:10px;
    animation : heart;
`
export const Rlogo = styled.img`
    
    
`