/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from "react";
import { getData } from "../Utils/HandleData/getData";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [createTaskModal, setCreateTaskModal] = React.useState(false);

	const [responseData, setResponseData] = React.useState([]);

	const handleGetData = async () => {
		const { tasks } = await getData("tasks");
		setResponseData({tasks, ...responseData });
	}

	React.useEffect(() => {
		handleGetData()
	}, []);


	return (
		<AppContext.Provider value={{
			createTaskModal,
			setCreateTaskModal,

			responseData,
			setResponseData
		}}>
			{children}
		</AppContext.Provider>
	);
}

export { AppProvider, AppContext };