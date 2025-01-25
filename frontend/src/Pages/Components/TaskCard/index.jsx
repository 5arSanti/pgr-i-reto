/* eslint-disable react/prop-types */
import React from "react";

import { FaAngleDown } from "react-icons/fa";
import "./styles.css";
import { ActionButton } from "../ActionButton";

const TaskCard = ({ task, type }) => {

	const [modal, setModal] = React.useState(false);

	return (
		<div className={`task-card-container ${type}`}>
			<div className="task-info">
				<p>{task?.Nombre}</p>
				<p>{task?.Descripcion}</p>
			</div>

			<button className={`task-card-button ${type}-button`} onClick={() => setModal(!modal)}>
				<FaAngleDown />
			</button>

			{modal && <div className="actions-modal">
				{ type !== "to-do" && <ActionButton type={"to-do"} /> }
				{ type !== "process" && <ActionButton type={"process"} />}
				{ type !== "done" && <ActionButton type={"done"} /> }

				<ActionButton type={"delete"} />
				<ActionButton type={"close"} onClick={() => setModal(false)}/>
			</div>}
		</div>
	);
}

export { TaskCard }
