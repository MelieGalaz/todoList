import { useState, useEffect } from "react";
import { Box, Typography, Modal, TextField, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "700px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
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
    Descripcion: "",
    id: "",
  });

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
    const tareaEditada = {
      ...nuevaTarea,
      tarea: e.target.tarea.value,
      Descripcion: e.target.Descripcion.value,
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
        <Typography variant="h6" component="h2" sx={{ textAlign: "center" }}>
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
          />
          <TextField
            label="Descripción"
            name="Descripcion"
            value={nuevaTarea.Descripcion}
            onChange={(e) =>
              setNuevaTarea({ ...nuevaTarea, Descripcion: e.target.value })
            }
            fullWidth
            margin="normal"
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
