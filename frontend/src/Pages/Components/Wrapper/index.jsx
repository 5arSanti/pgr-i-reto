import { TasksContainer } from "../TasksContainer";

import "./styles.css";

const Wrapper = () => {
	return (
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
	);
}

export { Wrapper }
