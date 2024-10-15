import { useState, useEffect } from "react";
import { Box, Typography, Modal, TextField, Button } from "@mui/material";
import fondo from "../assets/fondoCard2.jpg";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "80%",
	maxWidth: "700px",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
	display: "flex",
	flexDirection: "column",
	gap: "10px",
	borderRadius: "20px",
	backgroundImage: `url(${fondo})`,
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center",
};

export const ModalEditarTarea = ({
	open,
	setOpen,
	tarea,
	setTareas,
	tareas,
}) => {
	const [nuevaTarea, setNuevaTarea] = useState({
		tarea: "",
		descripcion: "",
		completada: "",
		id: "",
	});

	const [error, setError] = useState(false);

	useEffect(() => {
		if (tarea) {
			setNuevaTarea({ ...tarea });
		}
	}, [tarea]);

	const handleClose = () => {
		setOpen(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!nuevaTarea.tarea.trim() || !nuevaTarea.descripcion.trim()) {
			setError(true);
			return;
		}

		const tareaEditada = {
			...nuevaTarea,
			tarea: e.target.tarea.value,
			descripcion: e.target.descripcion.value,
		};
		const tareasNuevasEditadas = tareas.map((tarea) =>
			tarea.id === tareaEditada.id ? tareaEditada : tarea
		);
		setTareas(tareasNuevasEditadas);
		localStorage.setItem("tareas", JSON.stringify(tareasNuevasEditadas));
		setOpen(false);
	};

	return (
		<Modal open={open} onClose={handleClose}>
			<Box sx={style}>
				<Typography
					sx={{ textAlign: "center", fontSize: "1.6rem", fontWeight: 600 }}
				>
					Editar Tarea
				</Typography>
				<form onSubmit={handleSubmit}>
					<TextField
						label="Nombre de la tarea"
						name="tarea"
						value={nuevaTarea.tarea}
						onChange={(e) =>
							setNuevaTarea({ ...nuevaTarea, tarea: e.target.value })
						}
						fullWidth
						margin="normal"
						error={error && !nuevaTarea.tarea.trim()}
						helperText={
							error && !nuevaTarea.tarea.trim()
								? "El nombre de la tarea es requerido"
								: ""
						}
					/>
					<TextField
						label="descripción"
						name="descripcion"
						value={nuevaTarea.descripcion}
						onChange={(e) =>
							setNuevaTarea({ ...nuevaTarea, descripcion: e.target.value })
						}
						fullWidth
						margin="normal"
						error={error && !nuevaTarea.descripcion.trim()}
						helperText={
							error && !nuevaTarea.descripcion.trim()
								? "La descripción es requerida"
								: ""
						}
					/>
					<Box sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
						<Button
							type="submit"
							variant="contained"
							style={{
								backgroundImage: "linear-gradient(to right, #c167de, #feb47b)",
								backgroundSize: "cover",
								color: "#fff",
								fontWeight: 700,
							}}
						>
							Guardar
						</Button>
						<Button
							onClick={handleClose}
							variant="outlined"
							color="error"
							style={{ borderRadius: "10px" }}
						>
							Cancelar
						</Button>
					</Box>
				</form>
			</Box>
		</Modal>
	);
};
