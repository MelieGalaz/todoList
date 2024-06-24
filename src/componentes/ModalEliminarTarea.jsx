import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
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
  gap: "20px",
  borderRadius: "20px",
  backgroundImage: `url(${fondo})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

export const ModalEliminarTarea = ({
  open,
  handleClose,
  tareaSeleccionada,
  eliminarTarea,
}) => {
  if (!tareaSeleccionada) {
    return null;
  }

  const { tarea, id } = tareaSeleccionada;

  const handleEliminar = () => {
    eliminarTarea(id);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          sx={{ textAlign: "center", fontSize: "1.6rem", fontWeight: 600 }}
        >
          Eliminar Tarea
        </Typography>
        <Typography id="modal-modal-description" sx={{ textAlign: "center" }}>
          ¿Estás seguro de que quieres eliminar la tarea?
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ textAlign: "center", color: "red", fontSize: "1.5rem" }}
        >
          {tarea}
        </Typography>
        <Box sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <Button
            onClick={handleEliminar}
            variant="contained"
            color="error"
            style={{ borderRadius: "10px" }}
          >
            Eliminar
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
      </Box>
    </Modal>
  );
};
