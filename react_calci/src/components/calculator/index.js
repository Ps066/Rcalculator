import React ,{useState} from 'react' 
import { Container ,Screen,Previoustext,Maintext, Buttons, Avtar} from './styled'

export default function Calculator(){

    const [ currvalue ,setvalue] =useState('')
    const [ previous ,setprevious] =useState('')
    const [ operation ,setoperation] =useState('')

    const append =(el) => {
        const value = el.target.getAttribute('data')


        if(value === '.' && currvalue.includes('.')) return
        setvalue(currvalue + value )
        
    }

    const handeldelete = () => {
        setvalue(String(currvalue).slice(0, -1))

    }

    const allclear = () => {
        setvalue('')
        setprevious('')
        setoperation('')
    }

    const chooseoperation = (el) => {
        if(currvalue === '') return
        if(previous !== ''){
            let val = compute();
            setprevious(val)
        }else {
            setprevious(currvalue)
        }

        setvalue('')
        setoperation(el.target.getAttribute('data'))


    }

    const equals = () => {
        let val = compute();
        if( val == undefined || val== null) return

        setvalue(val)
        setprevious('')
        setoperation('')
    }

    const compute = () => {
        let result 
        let previousnumber = parseFloat(previous)
        let currentnumber = parseFloat(currvalue)

        if(isNaN(previousnumber || isNaN(currentnumber))) return 

        switch(operation){
            case '÷':
                result = previousnumber / currentnumber;
                break;
            case '×':
                result = previousnumber * currentnumber;
                break;
            case '+':
                result = previousnumber + currentnumber;   
                break;     
            case '-':
                result = previousnumber - currentnumber;   
                break;
            default:
                return     
        }

        return result;



    }

    return (
        <Container>
            <Screen>
            <Previoustext>{previous} {operation}</Previoustext>
            <Maintext>{currvalue}</Maintext>

            </Screen>
            <Buttons gridSpan={2} control onClick={allclear}>AC</Buttons>
            <Buttons control onClick={handeldelete}>Del</Buttons>
            <Buttons data={"+"} onClick={chooseoperation} arithmatic>+</Buttons>
            <Buttons data={"7"} onClick={append}>7</Buttons>
            <Buttons data={"8"} onClick={append}>8</Buttons>
            <Buttons data={"9"} onClick={append}>9</Buttons>
            <Buttons data={"-"} onClick={chooseoperation} arithmatic>-</Buttons>
            <Buttons data={"4"} onClick={append}>4</Buttons>
            <Buttons data={"5"} onClick={append}>5</Buttons>
            <Buttons data={"6"} onClick={append}>6</Buttons>
            <Buttons data={"×"} onClick={chooseoperation} arithmatic>×</Buttons>
            <Buttons data={"1"} onClick={append}>1</Buttons>
            <Buttons data={"2"} onClick={append}>2</Buttons>
            <Buttons data={"3"} onClick={append}>3</Buttons>
            <Buttons data={"÷"} onClick={chooseoperation} arithmatic>÷</Buttons>
            <Buttons data={"."} control dot onClick={append}>.</Buttons>
            <Buttons data={"0"} onClick={append}>0</Buttons>
            <Buttons gridSpan={2} control equal onClick={equals}>=</Buttons>
            
            
        </Container>

    )
}