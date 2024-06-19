import { useState } from "react";

import { FaCheck } from "react-icons/fa";
import { MdOutlineExpandMore } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import fondo from "../assets/fondoCard2.jpg";
import {
  Box,
  Typography,
  Card,
  Popover,
  Collapse,
  Button,
} from "@mui/material";

export const Tareas = ({ tareas }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverId, setPopoverId] = useState(null);
  const [expanded, setExpanded] = useState(null);

  const handlePopoverOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setPopoverId(id);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverId(null);
  };

  const isOpen = (id) => popoverId === id;
  const handleExpandClick = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <>
      {tareas.map(({ tarea, Descripcion, id }) => (
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
                  style: { backgroundColor: "#4848ea73", boxShadow: "none" },
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
          <Button
            onClick={() => handleExpandClick(id)}
            sx={{
              mt: 1,
              display: "flex",
              alignItems: "center",
              fontSize: "0.7rem",
              fontWeight: "600",
            }}
          >
            {expanded === id
              ? "Ocultar Detalle de la tarea"
              : "Mostrar Detalle de la tarea"}
            <MdOutlineExpandMore
              style={{
                marginLeft: "5px",
                transform: expanded === id ? "rotate(180deg)" : "rotate(0)",
              }}
            />
          </Button>
          <Collapse in={expanded === id} timeout="auto" unmountOnExit>
            <Box
              sx={{
                mt: 2,
                p: 2,
                backgroundColor: "#f5f5f5",
                borderRadius: "4px",
                fontSize: "0.8",
              }}
            >
              <Typography
                sx={{
                  p: 1,
                  color: "black",
                  fontWeight: "600",
                  fontSize: "0.7em",
                  textAlign: "center",
                }}
              >
                {Descripcion}
              </Typography>
            </Box>
          </Collapse>
        </Card>
      ))}
    </>
  );
};
