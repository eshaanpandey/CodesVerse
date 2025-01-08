const initialState = {
    darkMode: localStorage.getItem("darkMode") === "true" || 
      (!localStorage.getItem("darkMode") && window.matchMedia("(prefers-color-scheme: dark)").matches),
  };
  
  const darkModeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "TOGGLE_DARK_MODE":
        const updatedDarkMode = !state.darkMode;
        localStorage.setItem("darkMode", updatedDarkMode);
        return { ...state, darkMode: updatedDarkMode };
      default:
        return state;
    }
  };
  
  export default darkModeReducer;
  