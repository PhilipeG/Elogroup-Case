export function loadLists() {

    if(localStorage.hasOwnProperty("leads")){
      const leads = JSON.parse(localStorage.getItem("leads"));
      const cards = []
      leads.forEach((lead, index) =>{
        cards.push({
          id: index,
          content: lead.name
        })
      })

      return [
        { 
          title: 'Cliente em Potencial', 
          creatable: false,
          cards: cards
        },
        { 
          title: 'Dados Confirmados', 
          creatable: false,
          cards: [
            {
              id: 6,
              content: 'Teste',
              labels: [],
            }
          ]
        },
        { 
          title: 'Reunião Agendada', 
          creatable: false,
          cards: [
            {
              id: 7,
              content: 'Lead 3',
            },
            {
              id: 8,
              content: 'Lead 4',
            },
            {
              id: 9,
              content: 'Lead 5',
            }
          ]
        }
      ];
    }
  }