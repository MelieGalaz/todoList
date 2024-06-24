export const MarcarTareaCompletada = ({ tarea, completada }) => {
  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      {completada ? (
        <span style={{ color: "grey" }}>{tarea}</span>
      ) : (
        <span style={{ color: "#3f07f3" }}>{tarea}</span>
      )}
    </span>
  );
};
