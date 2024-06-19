import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import fondoNav from "../../assets/fondoNav1.avif";
import gif from "../../assets/icons8-tarea.gif";
import { BotonTema } from "../../componentes/BotonTema";
export const NavBar = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage: `url(${fondoNav})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          padding: "6px",
          alignItems: "center",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            padding: { xs: 0, sm: 0 },
            maxWidth: "1000px",
            width: "100%",

            alignItems: "center",
          }}
        >
          <Box display="flex" alignItems="center">
            <Box
              component="img"
              src={gif}
              alt="Icono"
              sx={{ width: "1.6rem", height: "1.6rem" }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontSize: "1.6rem", fontWeight: "600" }}
            >
              ListaMaestra
            </Typography>
          </Box>
          <BotonTema />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
