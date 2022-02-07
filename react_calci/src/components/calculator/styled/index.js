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
        font-size:1.5rem;
    } 
    
    color : #ccffff;
    font-weight: 900;
    text-align:center;
`
export const Avtar = styled.img`
    width:250px;
`
export const Githublink = styled.a`

`