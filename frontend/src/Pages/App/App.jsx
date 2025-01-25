import { AppProvider } from "../../Context";
import { Header } from "../Components/Header";
import { TasksContainer } from "../Components/TasksContainer";
import { TitleButtonContainer } from "../Components/TitleButtonContainer";

import "./App.css"

const App = () => {

    return (
        <AppProvider>
			<Header/>

			<TitleButtonContainer/>

			<div className="tasks-container-wrapper">
				<TasksContainer
					subtitle={"Tareas Pendientes"}
					type={"to-do"}
				/>
				<TasksContainer
					subtitle={"Tareas en Proceso"}
					type={"process"}
				/>
				<TasksContainer
					subtitle={"Tareas Completadas"}
					type={"done"}
				/>
			</div>
		</AppProvider>
    );
}

export default App
