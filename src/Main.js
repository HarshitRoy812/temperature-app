import React from 'react';

export default function Main(props)
{
    const styleHeader = {
        color : (props.details < 25) ? "#468faf" : "#ff7b00",
        fontFamily : "SF Pro Display Regular",
        fontSize : "50px",
        letterSpacing : "-1px",
        transition : "0.3s"
    }

    const styleUI = {
        display : 'flex',
        height :  '62%',
        width : '37%',
        border : props.details < 25 ? "2px solid #468faf" : "2px solid #ff7b00",
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        transition : '0.3s'
    }

    return (
        <div className = 'main'>
            <div style = {styleUI}>
                <h1 style = {styleHeader}> {props.details} ° C </h1>
            </div>
            <div className = 'counter'>
                <button className = 'btn' onClick = {() => {props.handleClick(1)}}> + </button>
                <button className = 'btn' onClick = {() => {props.handleClick(-1)}}> - </button>
            </div>
        </div>
    )
}