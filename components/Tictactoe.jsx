import React, { useEffect } from 'react'
import '../Style/style.css'
import { useState } from 'react';


const Tictactoe = () => {

    //it is used to create a array of  9 elements and fill it with empty
    const [board, setboard] = useState(Array(9).fill(""));
    const [move , setmove ] = useState('x');
    const [won, setwon] = useState(false);

    //this is winnig combination
    //logic horixontal vertical and diagonal 
    const winningLogic = [
        [0,1,2],//row1 
        [3,4,5],
        [6,7,8],//row3
        [0,3,6],//column11
        [1,4,7],
        [2,5,8],//column3
        [0,4,8],//diagonal 1
        [2,4,6]//diagonal 2 
    ];

    

    const checkwinner = ()=>{
        
        for(let combination of winningLogic)
        {
            const[a, b, c] = combination;

            if(board[a] && board[a] === board[b] &&  board[b] === board[c] && board[c] === board[a]){
                console.log(" winner found")
                setwon(true);
                return;
            }
        }
    }



    useEffect(() => {
      //when the board state changes then it runs checkwinner 
      checkwinner();
    }, [board])
    


    const boardClick = (ind)=>{

        //condition if the array is not empty or when it is won then it returns
        if(board[ind] !== "" || won){
           return; 
        }
 

        //used to append the x or o into the array 
        setboard((prevstate)=>{
            const newArray = [...prevstate]
            newArray[ind] = move;
            return newArray
        })

        //used to pick o or x 
        //if prevstate is o then pic x else o 
        setmove((prevstate)=>{
            if(prevstate === 'o'){ return 'x'; }
            else{ return 'o';}
        }) 

        
    }

    const resetFunction =()=>{
        setboard(Array(9).fill(""));
        setmove('x')
        setwon(false) 
    }



    //just a logic  to store data inside array 
        // setboard((prevstate)=>{
        //     const newArrayofSameAsBoard = [...prevstate];//this is another copy of board array 
        //     newArrayofSameAsBoard[ind] = "X"
        //     return newArrayofSameAsBoard;
        // })
       

  return (
    <>
        <div className="main">
            <div className="title">Tic Tac Toe Game</div>
            <div className="about">This game is developed using simple Reactjs and Styling using simple Css </div>
        </div>

        <div className="winnerflex">
            {won && <span className='winner'>Congratulations  {move == 'x'? 'o':'x'} won</span>}
        </div>
        
        <div className="board">
            <div className='mainboard'>
                <div className='row1 rows'>
                    <div className='rowdiv' onClick={()=>{boardClick(0)}}>{board[0]}</div>
                    <div className='rowdiv' onClick={()=>{boardClick(1)}}>{board[1]}</div>
                    <div className='rowdiv' onClick={()=>{boardClick(2)}}>{board[2]}</div>
                </div>
                <div className='row2 rows'>
                    <div className='rowdiv' onClick={()=>{boardClick(3)}}>{board[3]}</div>
                    <div className='rowdiv' onClick={()=>{boardClick(4)}}>{board[4]}</div>
                    <div className='rowdiv' onClick={()=>{boardClick(5)}}>{board[5]}</div>
                </div>
                <div className='row3 rows'>
                    <div className='rowdiv' onClick={()=>{boardClick(6)}}>{board[6]}</div>
                    <div className='rowdiv' onClick={()=>{boardClick(7)}}>{board[7]}</div>
                    <div className='rowdiv' onClick={()=>{boardClick(8)}}>{board[8]}</div>
                </div>
            </div>
        </div>
        <div className="button">
            <button onClick={()=>{resetFunction()}}>Reset</button>
            {/* <button onClick={()=>{playagainfun()}}>Play again</button> */}
        </div>
    </>
  )
}

export default Tictactoe
