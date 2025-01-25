/* eslint-disable react/prop-types */
import "./styles.css";

const ActionButton = ({ type, onClick }) => {
	return (
		<button
			className={`action-button ${type}-action`}
			onClick={onClick}
		>
			{type === "to-do" && "Mover a Pendientes"}
			{type === "process" && "Mover a En Proceso"}
			{type === "done" && "Mover a Completadas"}
			{type === "delete" && "Eliminar"}
			{type === "close" && "Cerrar"}
		</button>
	);
}

export { ActionButton };
