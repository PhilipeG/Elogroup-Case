import React, { useState } from 'react';
import produce from 'immer';
import './styles.css'

import { loadLists } from '../../services/api';

import BoardContext from './context';

import List from '../List';


const data = loadLists();


export default function Board() {  
  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to) {
    setLists(
      produce(lists, draft => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      })
    )
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <div className="Board">
        {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
      </div>
    </BoardContext.Provider>
  );
}