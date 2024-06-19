// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import {
//   FormControl,
//   TextareaAutosize,
//   FormLabel,
//   Container,
//   Button,
//   Box,
//   Input,
//   Dialog,
//   Typography,
// } from "@mui/material";

// export const ModalNuevaTarea = ({ open, handleClose, agregarTarea }) => {
//   const [titulo, setTitulo] = useState("");
//   const [descripcion, setDescripcion] = useState("");
//   const [tituloError, setTituloError] = useState(false);

//   const handleTituloChange = (e) => {
//     setTitulo(e.target.value);
//     if (e.target.value.trim()) {
//       setTituloError(false);
//     }
//   };

//   const handleDescripcionChange = (e) => {
//     setDescripcion(e.target.value);
//   };

//   const handleAgregarTarea = () => {
//     if (!titulo.trim()) {
//       setTituloError(true);
//       return;
//     }

//     const nuevaTarea = {
//       tarea: titulo,
//       Descripcion: descripcion,
//       id: uuidv4(),
//     };

//     agregarTarea(nuevaTarea);
//     setTitulo("");
//     setDescripcion("");
//     handleClose();
//   };

//   return (
//     <Dialog open={open} onClose={handleClose}>
//       <Container
//         sx={{ display: "flex", flexDirection: "column", gap: "20px", p: 3 }}
//       >
//         <FormControl sx={{ gap: "20px" }} error={tituloError}>
//           <FormLabel htmlFor="tituloTarea">Tarea Nueva</FormLabel>
//           <Input
//             id="tituloTarea"
//             type="text"
//             maxLength={15}
//             minLength={5}
//             placeholder="Máximo de caracteres 15"
//             value={titulo}
//             onChange={handleTituloChange}
//             style={{
//               border: tituloError ? "2px solid red" : "2px solid #000",
//               padding: "4px 5px",
//               backgroundColor: "white",
//               marginTop: "0px",
//             }}
//           />
//           {tituloError && (
//             <Typography color="error" variant="caption">
//               Este campo es obligatorio
//             </Typography>
//           )}
//         </FormControl>

//         <FormControl sx={{ gap: "20px" }}>
//           <FormLabel htmlFor="descripcionTarea">Descripción de Tarea</FormLabel>
//           <TextareaAutosize
//             id="descripcionTarea"
//             maxLength={100}
//             placeholder="Máximo de caracteres 100"
//             maxRows={4}
//             aria-label="maximum height"
//             value={descripcion}
//             onChange={handleDescripcionChange}
//             style={{
//               minHeight: "30px",
//               border: "1px solid #000",
//               backgroundColor: "white",
//               padding: "4px 5px",
//               font: "inherit",
//               display: "flex",
//               alignItems: "center",
//             }}
//           ></TextareaAutosize>
//         </FormControl>
//         <Box sx={{ display: "flex", margin: "auto", gap: "20px" }}>
//           <Button onClick={handleClose} variant="outlined" color="error">
//             Cancelar
//           </Button>
//           <Button
//             onClick={handleAgregarTarea}
//             variant="contained"
//             color="success"
//           >
//             Aceptar
//           </Button>
//         </Box>
//       </Container>
//     </Dialog>
//   );
// };
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  FormControl,
  TextareaAutosize,
  FormLabel,
  Container,
  Button,
  Box,
  Input,
  Dialog,
  Typography,
} from "@mui/material";

export const ModalNuevaTarea = ({ open, handleClose, agregarTarea }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tituloError, setTituloError] = useState(false);

  const handleTituloChange = (e) => {
    const value = e.target.value;
    setTitulo(value);
    if (!value.trim() || value.length > 10) {
      setTituloError(true);
    } else {
      setTituloError(false);
    }
  };

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleAgregarTarea = () => {
    if (!titulo.trim() || titulo.length > 10) {
      setTituloError(true);
      return;
    }

    const nuevaTarea = {
      tarea: titulo,
      Descripcion: descripcion,
      id: uuidv4(),
    };

    agregarTarea(nuevaTarea);
    setTitulo("");
    setDescripcion("");
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Container
        sx={{ display: "flex", flexDirection: "column", gap: "20px", p: 3 }}
      >
        <FormControl sx={{ gap: "20px" }} error={tituloError}>
          <FormLabel htmlFor="tituloTarea">Tarea Nueva</FormLabel>
          <Input
            id="tituloTarea"
            type="text"
            maxLength={15}
            minLength={5}
            placeholder="Máximo de caracteres 10"
            value={titulo}
            onChange={handleTituloChange}
            style={{
              border: tituloError ? "2px solid red" : "2px solid #000",
              padding: "4px 5px",
              backgroundColor: "white",
              marginTop: "0px",
            }}
          />
          {tituloError && (
            <Typography color="error" variant="caption">
              {titulo.length > 10
                ? "El título no puede tener más de 10 caracteres"
                : "Este campo es obligatorio"}
            </Typography>
          )}
        </FormControl>

        <FormControl sx={{ gap: "20px" }}>
          <FormLabel htmlFor="descripcionTarea">Descripción de Tarea</FormLabel>
          <TextareaAutosize
            id="descripcionTarea"
            maxLength={100}
            placeholder="Máximo de caracteres 100"
            maxRows={4}
            aria-label="maximum height"
            value={descripcion}
            onChange={handleDescripcionChange}
            style={{
              minHeight: "30px",
              border: "1px solid #000",
              backgroundColor: "white",
              padding: "4px 5px",
              font: "inherit",
              display: "flex",
              alignItems: "center",
              wrap: "break-word",
            }}
          ></TextareaAutosize>
        </FormControl>
        <Box sx={{ display: "flex", margin: "auto", gap: "20px" }}>
          <Button onClick={handleClose} variant="outlined" color="error">
            Cancelar
          </Button>
          <Button
            onClick={handleAgregarTarea}
            variant="contained"
            color="success"
          >
            Aceptar
          </Button>
        </Box>
      </Container>
    </Dialog>
  );
};
