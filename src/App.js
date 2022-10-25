import React from 'react';
import Header from './Header';
import Main from './Main';

export default function App()
{
    
    const [temperature,setTemperature] = React.useState(15);

    function handleTemperature(count)
    {
        setTemperature((prevTemp) => {
            return (prevTemp === 10 && count === -1 || prevTemp === 30 && count === 1) ? prevTemp : prevTemp + count;
        })
    }



    return (
        <div>
            <Header details = {temperature}/>
            <Main details = {temperature} handleClick = {handleTemperature}/>
        </div>
    )
}