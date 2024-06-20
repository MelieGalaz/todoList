import { useState } from "react";
import "./App.css";
import { ModalNuevaTarea } from "./componentes/ModalNuevaTarea";
import { ModalEditarTarea } from "./componentes/ModalEditarTarea";
import { Tareas } from "./componentes/Tareas";
import { NavBar } from "./layout/navBar/NavBar";
import { Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

function App() {
  const defaultTask = [
    {
      tarea: "Tarea",
      Descripcion: "Descripción de la tarea",
      id: uuidv4(),
    },
  ];

  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : defaultTask;
  });

  const [openNew, setOpenNew] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

  const handleOpenNew = () => setOpenNew(true);
  const handleCloseNew = () => setOpenNew(false);

  const handleOpenEdit = (tarea) => {
    setTareaSeleccionada(tarea);
    setOpenEdit(true);
  };

  const agregarTarea = (nuevaTarea) => {
    const nuevasTareas = [...tareas, nuevaTarea];
    setTareas(nuevasTareas);
    localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
  };

  return (
    <>
      <NavBar />

      <Button
        onClick={handleOpenNew}
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
        open={openNew}
        handleClose={handleCloseNew}
        agregarTarea={agregarTarea}
        setTareas={setTareas}
      />
      <ModalEditarTarea
        open={openEdit}
        setOpen={setOpenEdit}
        tarea={tareaSeleccionada}
        tareas={tareas}
        setTareas={setTareas}
      />
      <Tareas tareas={tareas} handleOpenEdit={handleOpenEdit} />
    </>
  );
}

export default App;
