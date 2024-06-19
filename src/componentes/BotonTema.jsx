import { useState, useRef } from "react";
import { Button } from "@mui/material";
import { IoColorPalette } from "react-icons/io5";

export const BotonTema = () => {
  const gradientes = [
    "linear-gradient(to right, #ff7e5f, #feb47b)",
    "linear-gradient(to right, #6a11cb, #2575fc)",
    "linear-gradient(to right, #00c6ff, #0072ff)",
    "linear-gradient(to right, #f7971e, #ffd200)",
    "linear-gradient(to right, #43cea2, #185a9d)",
    "linear-gradient(to right, #ff512f, #dd2476)",
  ];

  const [backgroundGradiente, setBackgroundGradiente] = useState(gradientes[0]);
  const buttonGradienteRef = useRef(
    gradientes.filter((gradient) => gradient !== backgroundGradiente)[0]
  );

  const cambiarFondo = () => {
    const randomGradient =
      gradientes[Math.floor(Math.random() * gradientes.length)];
    setBackgroundGradiente(randomGradient);

    document.body.style.backgroundImage = randomGradient;
    document.body.style.backgroundSize = "cover";

    const buttonGradientes = gradientes.filter(
      (gradient) => gradient !== randomGradient
    );
    buttonGradienteRef.current =
      buttonGradientes[Math.floor(Math.random() * buttonGradientes.length)];
  };

  return (
    <Button
      variant="contained"
      onClick={cambiarFondo}
      style={{ backgroundImage: buttonGradienteRef.current }}
    >
      <IoColorPalette style={{ fontSize: "1.3em" }} /> Tema
    </Button>
  );
};
