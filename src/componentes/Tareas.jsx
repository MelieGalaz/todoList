import { useState } from "react";
import { Box, Typography, Card, Button, Collapse } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { MdOutlineExpandMore } from "react-icons/md";
import fondo from "../assets/fondoCard2.jpg";
import { ModalEliminarTarea } from "./ModalEliminarTarea";
import { MarcarTareaCompletada } from "./MarcarTareaCompletada";
import { Filtros } from "./Filtros";

export const Tareas = ({ tareas, handleOpenEdit, setTareas }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [tareaSeleccionada, setTareaSeleccionada] = useState(null);
	const [expanded, setExpanded] = useState(null);
	const [filtroTareas, setFiltroTareas] = useState("todas");

	const handleExpandClick = (id) => {
		setExpanded(expanded === id ? null : id);
	};

	const handleOpenEli = (tarea) => {
		setTareaSeleccionada(tarea);
		setModalOpen(true);
	};

	const handleCloseEli = () => {
		setModalOpen(false);
		setTareaSeleccionada(null);
	};

	const eliminarTarea = (id) => {
		const nuevasTareas = tareas.filter((t) => t.id !== id);
		setTareas(nuevasTareas);
		localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
		handleCloseEli();
	};

	const toggleCompletada = (id, completada) => {
		const nuevasTareas = tareas.map((t) =>
			t.id === id ? { ...t, completada: !completada } : t
		);
		setTareas(nuevasTareas);
		localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
	};

	const filtrarTareas = () => {
		const filtros = {
			completadas: (tareas) => tareas.filter((t) => t.completada),
			noCompletadas: (tareas) => tareas.filter((t) => !t.completada),
			default: (tareas) => tareas,
		};
		const filtroSeleccionado = filtros[filtroTareas] || filtros.default;

		return filtroSeleccionado(tareas);
	};

	return (
		<>
			<ModalEliminarTarea
				open={modalOpen}
				handleClose={handleCloseEli}
				tareaSeleccionada={tareaSeleccionada}
				eliminarTarea={eliminarTarea}
			/>
			<Filtros filtroTareas={filtroTareas} setFiltroTareas={setFiltroTareas} />
			{filtrarTareas().length === 0 ? (
				<Typography
					variant="h6"
					sx={{
						textAlign: "center",
						marginTop: "100px",
						color: "white",
						textShadow: "2px 2px 4px black",
					}}
				>
					No hay tareas para mostrar
				</Typography>
			) : (
				filtrarTareas().map((tareaObj) => {
					if (!tareaObj) return null;

					const { tarea, descripcion, id, completada } = tareaObj;

					return (
						<Card
							key={id}
							sx={{
								display: "flex",
								flexDirection: "column",
								width: "90%",
								margin: "auto",
								backgroundImage: `url(${fondo})`,
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								marginTop: "20px",
								padding: "10px",
								maxWidth: "700px",
								gap: "10px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<Typography sx={{ fontSize: "1rem", fontWeight: "600" }}>
									<MarcarTareaCompletada
										tarea={tarea}
										completada={completada}
									/>
								</Typography>
								<Box sx={{ display: "flex", gap: "10px" }}>
									<span onClick={() => toggleCompletada(id, completada)}>
										<FaCheck
											style={{
												color: completada ? "gray" : "green",
												fontSize: "20px",
											}}
										/>
									</span>

									<span onClick={() => handleOpenEli(tareaObj)}>
										<FaTrashCan style={{ color: "red", fontSize: "20px" }} />
									</span>

									<span
										onClick={() => handleOpenEdit({ tarea, descripcion, id })}
									>
										<FaEdit style={{ color: "blue", fontSize: "20px" }} />
									</span>
								</Box>
							</Box>

							<Box
								sx={{
									display: "flex",
									gap: "10px",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Typography variant="subtitle2" sx={{ textAlign: "center" }}>
									Descripción de la tarea
								</Typography>
								<Button
									onClick={() => handleExpandClick(id)}
									aria-expanded={expanded === id}
									aria-label="show more"
									sx={{
										color: "black",
										display: "flex",
										alignItems: "center",
										padding: "0px",
										"&:hover": { backgroundColor: "transparent" },
									}}
								>
									<MdOutlineExpandMore
										sx={{
											transform:
												expanded === id ? "rotate(180deg)" : "rotate(0deg)",
											transition: "transform 0.3s ease",
											fontSize: "30px",
										}}
									/>
								</Button>
							</Box>

							<Collapse in={expanded === id} timeout="auto" unmountOnExit>
								<Box
									sx={{
										margin: "20px 0px",
										wordWrap: "break-word",
										textAlign: "center",
										backgroundColor: "white",
										padding: "10px",
									}}
								>
									<Typography>{descripcion}</Typography>
								</Box>
							</Collapse>
						</Card>
					);
				})
			)}
		</>
	);
};
