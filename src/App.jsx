import { useState } from "react";
import "./App.css";
import { ModalNuevaTarea } from "./componentes/ModalNuevaTarea";
import { Tareas } from "./componentes/Tareas";
import { NavBar } from "./layout/navBar/NavBar";
import { Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
function App() {
  const defaultTask = [
    {
      tarea: "Tarea ",
      Descripcion: "Descripción de la tarea",
      id: uuidv4(),
    },
  ];

  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : defaultTask;
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const agregarTarea = (nuevaTarea) => {
    const nuevasTareas = [...tareas, nuevaTarea];
    setTareas(nuevasTareas);
    localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
  };

  return (
    <>
      <NavBar />

      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          display: "block",
          margin: "auto",
          marginTop: "20px",
          backgroundImage: "linear-gradient(to right, #c167de, #feb47b)",
          backgroundSize: "cover",
          color: "#fff",
          fontWeight: 700,
        }}
      >
        Agregar Nueva Tarea
      </Button>
      <ModalNuevaTarea
        open={open}
        handleClose={handleClose}
        agregarTarea={agregarTarea}
      />
      <Tareas tareas={tareas} />
    </>
  );
}

export default App;
