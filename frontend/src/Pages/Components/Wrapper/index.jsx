import React from "react";
import { TasksContainer } from "../TasksContainer";

import "./styles.css";
import { AppContext } from "../../../Context";
import { filterTasks } from "../../../Utils/filterTasks";

const Wrapper = () => {
	const context = React.useContext(AppContext);
	const { tasks } = context.responseData;

	const { toDoTasks, processTasks, doneTasks } = filterTasks(tasks)

	return (
		<div className="tasks-container-wrapper">
			<TasksContainer
				subtitle={"Tareas Pendientes"}
				type={"to-do"}
				tasks={toDoTasks}
			/>
			<TasksContainer
				subtitle={"Tareas en Proceso"}
				type={"process"}
				tasks={processTasks}
			/>
			<TasksContainer
				subtitle={"Tareas Completadas"}
				type={"done"}
				tasks={doneTasks}
			/>
		</div>
	);
}

export { Wrapper }
