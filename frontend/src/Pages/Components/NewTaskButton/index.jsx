import "./styles.css";

const NewTaskButton = () => {
	return (
		<button className="new-task-button" title="Crear nueva tarea">
			<p>¿Algo nuevo por hacer?</p>
			<span>Cree una nueva tarea</span>
		</button>
	)
}

export { NewTaskButton };