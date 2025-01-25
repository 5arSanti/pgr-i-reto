/* eslint-disable react/prop-types */
import React from "react";

import { FaAngleDown } from "react-icons/fa";
import "./styles.css";
import { ActionButton } from "../ActionButton";
import { deleteData } from "../../../Utils/HandleData/deleteData";
import { putData } from "../../../Utils/HandleData/putData";

const TaskCard = ({ task, type }) => {

	const [modal, setModal] = React.useState(false);

	const handleDelete = async () => {
		const data = await deleteData(`tasks/${task?.id}`);

		if (!data) return alert('Error eliminando tarea');

		if (data.Status === 'Error') return alert(data.message);

		alert(data.message);
		window.location.reload();
	}

	const handleUpdate = async (typeID) => {
		if (!typeID) return alert('No se especifico el tipo de tarea');

		const data = await putData(`tasks`, {
			id: task.id,
			ID_Estado_Tarea: typeID
		});

		if (!data) return alert('Error eliminando tarea');

		if (data.Status === 'Error') return alert(data.message);

		alert(data.message);
		window.location.reload();
	}

	return (
		<div className={`task-card-container ${type}`}>
			<div className="task-info">
				<p>{task?.Titulo}</p>
				<p>{task?.Descripcion}</p>
			</div>

			<button className={`task-card-button ${type}-button`} onClick={() => setModal(!modal)}>
				<FaAngleDown />
			</button>

			{modal &&
				<div className="actions-modal">
					{type !== "to-do" &&
						<ActionButton type={"to-do"} onClick={() => handleUpdate(1)} />
					}
					{type !== "process" &&
						<ActionButton type={"process"} onClick={() => handleUpdate(2)} />
					}
					{type !== "done" &&
						<ActionButton type={"done"} onClick={() => handleUpdate(3)} />
					}

					<ActionButton type={"delete"} onClick={handleDelete} />
					<ActionButton type={"close"} onClick={() => setModal(false)} />
				</div>
			}
		</div>
	);
}

export { TaskCard }
