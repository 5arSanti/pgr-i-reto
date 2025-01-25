/* eslint-disable react/prop-types */
import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [createTaskModal, setCreateTaskModal] = React.useState(false);


	return (
		<AppContext.Provider value={{
			createTaskModal,
			setCreateTaskModal
		}}>
			{children}
		</AppContext.Provider>
	);
}

export { AppProvider, AppContext };