import React from "react";
import "./styles.css";
import { AppContext } from "../../../Context";

const NewTaskButton = () => {
	const { setCreateTaskModal } = React.useContext(AppContext);

	return (
		<button className="new-task-button" title="Crear nueva tarea" onClick={() => setCreateTaskModal(true)}>
			<p>¿Algo nuevo por hacer?</p>
			<span>Cree una nueva tarea</span>
		</button>
	)
}

export { NewTaskButton };