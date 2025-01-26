/* eslint-disable react/prop-types */
import { TaskCard } from "../TaskCard";
import "./styles.css";

const TasksContainer = ({subtitle, type, tasks}) => {
	return (
		<div className="main-tasks-container">
			<p className="task-subtitle">{subtitle}</p>
			<div className={`${type} tasks-wrapper`}>
				{tasks && tasks?.map((task, index) => (
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
