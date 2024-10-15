export const MarcarTareaCompletada = ({ tarea, completada }) => {
	return (
		<span style={{ display: "flex", alignItems: "center" }}>
			{completada ? (
				<span
					style={{
						color: "grey",
						textDecoration: "line-through",
					}}
				>
					{tarea}
				</span>
			) : (
				<span
					style={{
						color: "#3f07f3",
						textDecoration: "none",
					}}
				>
					{tarea}
				</span>
			)}
		</span>
	);
};
