import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Game({myChoice,score,setScore}) {

    const [house, setHouse] = useState('');
    const [isWin, setIsWin] = useState('');

    const housePick=()=>{
    const choices=['rock','paper','scissors'];
    setHouse(choices[Math.floor(Math.random()*3)]);
    }

    useEffect(()=>
    {
        housePick();
    },[])

    const Result=()=>
    {
        if(myChoice==='rock'&& house==='scissors')
        {
            setIsWin('win');
            setScore(score + 1);
        }
        else if(myChoice==='scissors'&& house==='paper')
        {
            setIsWin('win');
            setScore(score + 1);
        }
        else if(myChoice==='paper'&& house==='rock')
        {
            setIsWin('win');
            setScore(score + 1);
        }
        else if(myChoice==='scissors'&& house==='rock')
        {
            setIsWin('lose');
            setScore(score - 1);
        }
        else if(myChoice==='paper'&& house==='scissors')
        {
            setIsWin('lose');
            setScore(score - 1);
        }
        else if(myChoice==='rock'&& house==='paper')
        {
            setIsWin('lose');
            setScore(score - 1);
        }
        else
        {
            setIsWin('draw');
            setScore(score);
        }
    };
    useEffect(()=>
    {
        Result();
    }, [house]);


  return( 
    <div className='game'>

{/* you picked */}

        <div className='game__you'>
            <span className='text'>You Picked</span>
            <div className={`icon icon--${myChoice}`}></div>
        </div>
{/* result */}
        {isWin==='win'&& <div className='game__play'>
            <span className='text'>You Win</span>
            <Link to='/' className='play-again'>
              Play Again
            </Link>
        </div>}

        {isWin==='lose'&& <div className='game__play'>
            <span className='text'>You Lose</span>
            <Link to='/' className='play-again'>
              Play Again
            </Link>
        </div>}

        {isWin==='draw'&& <div className='game__play'>
            <span className='text'>Draw</span>
            <Link to='/' className='play-again'>
              Play Again
            </Link>
        </div>}
{/* house picked */}
        <div className='game__house'>
            <span className='text'>The House Picked</span>
            <div className={`icon icon--${house}`}></div>
        </div>

 
    </div>);
}

export default Game;


