import React from 'react';

export const Store = React.createContext();

const initialState = {
  activeTeam:"Einstein's Team",
  showSidebar:false,
  teams:{
    "Einstein's Team":[
      {
        name:'Albert Einstein',
        description:'guy n 1'
      },
      {
        name:'Hendrik Lorentz',
        description:'a Dutch physicist'
      },
      {
        name:'Max Planck',
        description:'a German theoretical physicist'
      }
    ],
    "Bohr's team":[
      {
        name:'Niels Bohr',
        description:'a Danish physicist'
      },
      {
        name:'Werner Heisenberg',
        description:'a German theoretical physicist'
      },
      {
        name:'Paul Dirac',
        description:'an English theoretical physicist'
      },
    ]
  },
};


function reducer(state, action) {
  switch (action.type) {

    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        showSidebar: !state.showSidebar
      };

    case 'SELECT_TEAM':
      return {
        ...state,
        activeTeam: action.payload,
        showSidebar: false
      };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
}
