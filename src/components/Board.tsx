import React from 'react';
import './Board.css';
import { BoardState, getCoords } from '../logic/Sudoku'
import { Typography } from '@material-ui/core';

type BoardProps = {
    state: BoardState,
  }
  
  export const Board = ({ state }: BoardProps) => {
    let fields = state.fields.map((f, i) => {
      let {x,y} = getCoords(i);
      return <div className="field" style={{gridRowStart: y+1, gridRowEnd: "span 1", gridColumnStart: x+1, gridColumnEnd: "span 1"}}>
          <Typography variant="h4">
            {f.value}
          </Typography>
        </div>
    });


    return <div className="fieldContainer">
      {fields}
    </div>

  }
    
    