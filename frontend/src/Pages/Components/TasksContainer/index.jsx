/* eslint-disable react/prop-types */
import { TaskCard } from "../TaskCard";
import "./styles.css";

const TasksContainer = ({subtitle, className}) => {
	return (
		<div className="main-tasks-container">
			<p className="task-subtitle">{subtitle}</p>
			<div className={`${className} tasks-wrapper`}>
				<TaskCard
					task={{Nombre: "Tarea 1", Descripcion: "Descripcion de la tarea 1"}}
					className={className}
				/>
				<TaskCard
					task={{Nombre: "Tarea 2", Descripcion: "Descripcion de la tarea 2"}}
					className={className}
				/>
				<TaskCard
					task={{Nombre: "Tarea 3", Descripcion: "Descripcion de la tarea 3"}}
					className={className}
				/>
			</div>
		</div>
	)
}

export { TasksContainer };
