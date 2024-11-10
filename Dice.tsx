import React, { useEffect, useState } from "react";

const Dice = () => {


    // Here first generate random numbers and use them instead of generating and at the same time check if it is already used.. 
    // This will waste the time in waiting... .
    const [time, setTime] = useState(0);
    const [random, setRandom] = useState(0);
    const [openedNumbers, setOpenedNumbers] = useState<number[]>([]);
    const[gameOver, setGameOver] = useState(false);

    const getRandomNumber = (min: number, max: number) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        let x: number = Math.floor(Math.random() * (max - min + 1) + min)
        return x;
    }

    const assignValueRandom = (num: number) => {
        setRandom(num);
    }

    useEffect(() => {
        
        const timer = setInterval(() => setTime(time + 1), 100);
        let x = getRandomNumber(1, 90);
        if(openedNumbers.length===89){
            setGameOver(true);
            return function(){
                clearInterval(timer);
            }
        }
        
        if(openedNumbers.indexOf(x)===-1){
            setOpenedNumbers(f => [...openedNumbers, x]);
            assignValueRandom(x);
            console.log(openedNumbers.sort());
        }else{
            console.log("Number is already opened: "+ x);
        }
    }, [time])
    return (
        <div>
        <div className="dice-styles disabled">{random}</div>
        {
            gameOver? <div>Game is Over!!</div> : null
        }
        </div>
       
    )
}

export default Dice;