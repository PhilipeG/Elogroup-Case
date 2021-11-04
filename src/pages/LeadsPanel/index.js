// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import React, { useState } from 'react'
// import Logo from '../../components/Logo';
// import Button from '../../components/Button';
// import './styles.css'


// const finalSpaceCharacters = [

//   {
//     id: 'org',
//     name: 'Org. Internacional'
//   },
//   {
//     id: 'farm',
//     name: 'Ind. Farm. LTDA'
//   },
//   {
//     id: 'music',
//     name: 'Music. Sound Live Cmp'
//   }
// ]

// function App() {
//   const [characters, updateCharacters] = useState(finalSpaceCharacters);

//   function handleOnDragEnd(result) {
//     if (!result.destination) return;

//     const items = Array.from(characters);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);

//     updateCharacters(items);
//   }

  

//   return (
    
//     <div className="DnD">
//       <div className="grid-container">
//         <div className="container-logo-leads">
//           <Logo />
//         </div>
//         <div className="container-logo-leads">
//           <h1>Painel Leads</h1>
//         </div>
//       </div>
//       <header className="DnD-header">
//         <DragDropContext onDragEnd={handleOnDragEnd}>
//           <Droppable droppableId="characters">
//             {(provided) => (
//               <table className="characters" {...provided.droppableProps} ref={provided.innerRef}>
//                 <div>
//                 <th className="table-header-leadsPainel">Cliente em potêncial</th>
//                 </div>
//                 {characters.map(({id, name}, index) => {
//                   return (
//                     <Draggable key={id} draggableId={id} index={index}>
//                       {(provided) => (
//                         <div className="table-leads">
//                         <tr ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                           <td>
//                             { name }
//                           </td>
//                         </tr>
//                         </div>
//                       )}
//                     </Draggable>
//                   );
//                 })}
//                 {provided.placeholder}
//               </table>
//             )}
//           </Droppable>
//         </DragDropContext>

//       </header>
//     </div>    
//   );
// }

// export default App;




import React from 'react'
import Button from '../../components/Button'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Board from '../../components/Board';
import Logo from '../../components/Logo';
import './styles.css'

function App() {
  return (
    <div>
      <div className="header-leads">
        <Logo />
        <h1 style={{marginLeft: '200px'}}>Painel de Leads</h1>
      </div>
      <div className="button-leads">
        <Button name="novo Lead"/>
      </div>
      <div className="table-painel-lead">
        <DndProvider backend={HTML5Backend}>
          <Board />
        </DndProvider>
      </div>
    </div>    
  );
}

export default App;
