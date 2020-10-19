const entrasACabana = confirm("Estas en el bosque y ves una cabana. Entras?");

if (entrasACabana) {
  const comerAvena = confirm(
    "Alli encuentra 3 tazones de avena, uno caliente, otro frio y otro esta bien. Te tomas el que esta bien?"
  );
  if (comerAvena) {
    const sentarEnSilla = confirm(
      "Luego encuentra 3 sillas, una demasiado grande, otra demasiado pequena y otra de su talla. Te sientas en la que es de tu talla? "
    );
    if (sentarEnSilla) {
      const dormirEnCama = confirm(
        "Cansada, va al dormitorio y encuentra 3 camas. Una dura, otra blanda y otra perfecta. Duermes en la que es perfecta?"
      );
      if (dormirEnCama) {
        alert(
          "Entra en un sueno muy profundo y se despierta para encontrarse con una familia de osos muy enojada. FIN"
        );
      } else {
        alert("Eleccion incorrecta. Se acabo el cuento");
      }
    } else {
      alert("Eleccion incorrecta. Se acabo el cuento");
    }
  } else {
    alert("Eleccion incorrecta. Se acabo el cuento");
  }
} else {
  alert("Eleccion incorrecta. Se acabo el cuento");
}
