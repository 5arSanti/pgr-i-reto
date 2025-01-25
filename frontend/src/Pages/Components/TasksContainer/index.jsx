/* eslint-disable react/prop-types */
import "./styles.css";

const TasksContainer = ({subtitle, className}) => {
	return (
		<div className="main-tasks-container">
			<p className="task-subtitle">{subtitle}</p>
			<div className={`${className} tasks-wrapper`}>

			</div>
		</div>
	)
}

export { TasksContainer };
