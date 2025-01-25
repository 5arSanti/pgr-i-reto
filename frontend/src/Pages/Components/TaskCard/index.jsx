/* eslint-disable react/prop-types */
import { FaAngleDown } from "react-icons/fa";
import "./styles.css";

const TaskCard = ({task, className}) => {

	return(
		<div className={`task-card-container ${className}`}>
			<div className="task-info">
				<p>{task?.Nombre}</p>
				<p>{task?.Descripcion}</p>
			</div>

			<button className={`${className}-button`}>
				<FaAngleDown/>
			</button>
		</div>
	);
}

export { TaskCard }