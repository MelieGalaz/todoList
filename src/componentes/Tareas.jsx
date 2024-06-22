import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Popover,
  Button,
  Collapse,
} from "@mui/material";
import { FaCheck, FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { MdOutlineExpandMore } from "react-icons/md";
import fondo from "../assets/fondoCard2.jpg";
import { ModalEliminarTarea } from "./ModalEliminarTarea";

export const Tareas = ({ tareas, handleOpenEdit, setTareas }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverId, setPopoverId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const handlePopoverOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setPopoverId(id);
  };
  const handleExpandClick = (id) => {
    setExpanded(expanded === id ? null : id);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverId(null);
  };

  const isOpen = (id) => popoverId === id;

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

  return (
    <>
      <ModalEliminarTarea
        open={modalOpen}
        handleClose={handleCloseEli}
        tareaSeleccionada={tareaSeleccionada}
        eliminarTarea={eliminarTarea}
      />

      {tareas.map((tareaObj) => {
        if (!tareaObj) return null;

        const { tarea, Descripcion, id } = tareaObj;

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
                {tarea}
              </Typography>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <span
                  aria-owns={
                    isOpen(id + "check") ? "mouse-over-popover" : undefined
                  }
                  aria-haspopup="true"
                  onMouseEnter={(e) => handlePopoverOpen(e, id + "check")}
                  onMouseLeave={handlePopoverClose}
                >
                  <FaCheck style={{ color: "green", fontSize: "20px" }} />
                </span>
                <Popover
                  id="mouse-over-popover"
                  sx={{
                    pointerEvents: "none",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                  open={isOpen(id + "check")}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                  PaperProps={{
                    style: { backgroundColor: "#5da55d8a", boxShadow: "none" },
                  }}
                >
                  <Typography
                    sx={{
                      p: 1,
                      color: "white",
                      backgroundColor: "transparent",
                      fontWeight: "600",
                      textShadow:
                        "1px 1px 2px rgba(0, 0, 0, 0.5), -1px -1px 2px rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    Tarea Completada
                  </Typography>
                </Popover>

                <span
                  aria-owns={
                    isOpen(id + "trash") ? "mouse-over-popover" : undefined
                  }
                  aria-haspopup="true"
                  onMouseEnter={(e) => handlePopoverOpen(e, id + "trash")}
                  onMouseLeave={handlePopoverClose}
                  onClick={() => handleOpenEli(tareaObj)}
                >
                  <FaTrashCan style={{ color: "red", fontSize: "20px" }} />
                </span>
                <Popover
                  id="mouse-over-popover"
                  sx={{
                    pointerEvents: "none",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                  open={isOpen(id + "trash")}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                  PaperProps={{
                    style: { backgroundColor: "#db2b2b6b", boxShadow: "none" },
                  }}
                >
                  <Typography
                    sx={{
                      p: 1,
                      color: "white",
                      backgroundColor: "transparent",
                      fontWeight: "600",
                      textShadow:
                        "1px 1px 2px rgba(0, 0, 0, 0.5), -1px -1px 2px rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    Eliminar Tarea
                  </Typography>
                </Popover>
                <span
                  aria-owns={
                    isOpen(id + "edit") ? "mouse-over-popover" : undefined
                  }
                  aria-haspopup="true"
                  onMouseEnter={(e) => handlePopoverOpen(e, id + "edit")}
                  onMouseLeave={handlePopoverClose}
                  onClick={() => handleOpenEdit({ tarea, Descripcion, id })}
                >
                  <FaEdit style={{ color: "blue", fontSize: "20px" }} />
                </span>
                <Popover
                  id="mouse-over-popover"
                  sx={{
                    pointerEvents: "none",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                  open={isOpen(id + "edit")}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                  PaperProps={{
                    style: { backgroundColor: "#2b8adb6b", boxShadow: "none" },
                  }}
                >
                  <Typography
                    sx={{
                      p: 1,
                      color: "white",
                      backgroundColor: "transparent",
                      fontWeight: "600",
                      textShadow:
                        "1px 1px 2px rgba(0, 0, 0, 0.5), -1px -1px 2px rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    Editar Tarea
                  </Typography>
                </Popover>
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
                <Typography>{Descripcion}</Typography>
              </Box>
            </Collapse>
          </Card>
        );
      })}
    </>
  );
};
