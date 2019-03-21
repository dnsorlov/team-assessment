
export const selectTeam = (team, dispatch) => {
  dispatch({type:'SELECT_TEAM', payload:team});
};

export const toggleSidebar = dispatch =>
    dispatch({type:'TOGGLE_SIDEBAR'});