import React from 'react';
import ReactDOM from 'react-dom';
import {AppBoard} from './AppBoard';

export function BingoApp(props) {
    return (
        <div className="AppBoard">
          <AppBoard data={props.boardNumbers} />
        </div>
    );
}
