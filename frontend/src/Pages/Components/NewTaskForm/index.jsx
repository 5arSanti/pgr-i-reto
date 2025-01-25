import React from "react";
import { AppContext } from "../../../Context";
import { Title } from "../Title";

import { IoMdCloseCircle } from "react-icons/io";

import "./styles.css"

const NewTaskForm = () => {
	const { createTaskModal, setCreateTaskModal } = React.useContext(AppContext);

	if (!createTaskModal) return <></>;

	return (
		<div className="new-task-form-wrapper">
			<form className="new-task-form">
				<Title>
					Informacion de la Tarea
				</Title>

				<button className="close-button" onClick={() => setCreateTaskModal(false)}>
					<IoMdCloseCircle />
				</button>

				<input
					className="new-task-input"
					placeholder="Titulo de la tarea"
				/>
				<input
					className="new-task-input"
					placeholder="Descripcion de la tarea"
				/>
				<button
					className="new-task-button"
					type="submit"
				>
					Crear nueva tarea
				</button>
			</form>
		</div>
	);
}

export { NewTaskForm };