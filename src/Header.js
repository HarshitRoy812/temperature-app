import React from 'react';

export default function Header(props)
{

    const spanStyles = {
        fontSize : '46px',
        marginLeft : '5px',
        letterSpacing : '-1px',
        color : props.details < 25 ? "#468faf" : "#ff7b00",
        transition : '0.3s'
    }

    const logo = {
        color : props.details < 25 ? "#468faf" : "#ff7b00",
        transition : '0.3s'
    }

    return (
        <div className = 'header'>
            {props.details < 25 ? <i style = {logo} class = 'fa-solid fa-snowflake' /> : <i style = {logo} class = 'fa-solid fa-sun' />}
            <h1> It's <span style = {spanStyles}> {props.details < 25 ? 'Cold' : 'Hot'} </span> </h1>
        </div>
    )
}