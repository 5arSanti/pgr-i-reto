/* eslint-disable react/prop-types */
import { TaskCard } from "../TaskCard";
import "./styles.css";

const TasksContainer = ({subtitle, type}) => {
	const tasks = [
		{Nombre: "Tarea 1", Descripcion: "Descripcion de la tarea 1"},
		{Nombre: "Tarea 2", Descripcion: "Descripcion de la tarea 2"},
		{Nombre: "Tarea 3", Descripcion: "Descripcion de la tarea 3"}
	];

	return (
		<div className="main-tasks-container">
			<p className="task-subtitle">{subtitle}</p>
			<div className={`${type} tasks-wrapper`}>
				{tasks?.map((task, index) => (
					<TaskCard
						key={index}
						task={task}
						type={type}
					/>
				))}
			</div>
		</div>
	)
}

export { TasksContainer };
