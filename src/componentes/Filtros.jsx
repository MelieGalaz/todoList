import { Select, MenuItem, Box, Typography } from "@mui/material";

export const Filtros = ({ filtroTareas, setFiltroTareas }) => {
  const handleChangeFiltro = (event) => {
    setFiltroTareas(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        margin: "20px auto",
        color: "black",
      }}
    >
      <Typography sx={{ fontWeight: 700 }}> Filtrar por :</Typography>
      <Select
        value={filtroTareas}
        onChange={handleChangeFiltro}
        variant="outlined"
        sx={{
          color: "white",
          "& .MuiSelect-root": {
            padding: "0px",
          },
          "& .MuiOutlinedInput-input": {
            padding: "5px 12px",
            backgroundImage: "linear-gradient(to right, #c167de, #feb47b)",
            backgroundSize: "cover",
          },
        }}
      >
        <MenuItem value="todas" sx={{ padding: "5px" }}>
          Todas
        </MenuItem>
        <MenuItem value="completadas" sx={{ padding: "5px" }}>
          Realizada
        </MenuItem>
        <MenuItem value="noCompletadas" sx={{ padding: "5px" }}>
          No Realizada
        </MenuItem>
      </Select>
    </Box>
  );
};
