import { useState } from "react";
import { Box, Typography, Modal, TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import fondo from "../assets/fondoCard2.jpg";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "700px",
  bgcolor: "background.paper",
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

export const ModalNuevaTarea = ({ open, handleClose, agregarTarea }) => {
  const [nuevaTarea, setNuevaTarea] = useState({
    tarea: "",
    Descripcion: "",
    id: "",
  });
  const [tituloError, setTituloError] = useState(false);

  const handleChange = (e) => {
    setNuevaTarea({
      ...nuevaTarea,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevaTarea.tarea.trim()) {
      setTituloError(true);
      return;
    }
    agregarTarea({ ...nuevaTarea, id: uuidv4() });
    setNuevaTarea({ tarea: "", Descripcion: "", id: "" });
    handleClose();
  };
  const handleCancelar = () => {
    setNuevaTarea({ tarea: "", Descripcion: "", id: "" });
    setTituloError(false);
    handleClose();
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography
          sx={{ textAlign: "center", fontSize: "1.6rem", fontWeight: 600 }}
        >
          Nueva Tarea
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre de la tarea"
            name="tarea"
            value={nuevaTarea.tarea}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={tituloError}
            helperText={tituloError ? "Este campo es obligatorio" : ""}
          />
          <TextField
            label="Descripción"
            name="Descripcion"
            value={nuevaTarea.Descripcion}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Box sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
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
              onClick={handleCancelar}
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
