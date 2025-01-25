/* eslint-disable react/prop-types */
import React from "react";
import { getData } from "../Utils/HandleData/getData";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [createTaskModal, setCreateTaskModal] = React.useState(false);

	React.useEffect(() => {
		const handleGetData = async () => {
			const data = await getData("tasks");
			console.log(data)
		}

		handleGetData()
	}, [])


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