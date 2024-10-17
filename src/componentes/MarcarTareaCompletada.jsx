export const MarcarTareaCompletada = ({ tarea, completada }) => {
	return (
		<span style={{ display: "flex", alignItems: "center" }}>
			{completada ? (
				<span
					style={{
						color: "grey",
						backgroundColor: "#bfe1d5",
						paddingInline: "10px",
					}}
				>
					{tarea}
				</span>
			) : (
				<span
					style={{
						color: "#3f07f3",
						paddingInline: "10px",
					}}
				>
					{tarea}
				</span>
			)}
		</span>
	);
};
