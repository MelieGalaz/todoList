import { useState, useRef } from "react";
import { Button } from "@mui/material";
import { IoColorPalette } from "react-icons/io5";

export const BotonTema = () => {
  const gradientes = [
    "linear-gradient(to right, #ffaa88, #ffd8b3)",
    "linear-gradient(to right, #a564e9, #77a7ff)",
    "linear-gradient(to right, #66d6ff, #33aaff)",
    "linear-gradient(to right, #ffba5a, #ffe780)",
    "linear-gradient(to right, #6ae1bd, #3f8ab6)",
    "linear-gradient(to right, #ff765b, #f34f92)",
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
      style={{
        backgroundImage: buttonGradienteRef.current,
        gap: "5px",
        padding: "6px 10px",
      }}
    >
      <IoColorPalette style={{ fontSize: "1.3em" }} /> Tema
    </Button>
  );
};
