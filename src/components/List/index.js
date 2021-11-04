import React from 'react';

import Card from '../Card';

import { Container } from './styles';

export default function List({ data, index: listIndex }) {
  return (
    <Container>
      <header>
        <h2>{data.title}</h2>
      </header>  
      { data.cards.map((card, index) => (
        <Card 
          listIndex={listIndex}
          index={index} 
          data={card}
        />
      )) }
    </Container>
  );
}
