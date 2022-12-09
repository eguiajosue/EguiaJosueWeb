new gridjs.Grid({
  columns: ["Numero de Control", "Nombre", "Carrera"],
  data: [
    ["20100191", "Josue Eguia", "Sistemas"],
    ["18100660", "Cristina Salazar", "Administracion"],
    ["18100554", "Jorge Kassim", "Gestion Empresarial"],
    ["20100003", "Lorena Avila", "Arquitectura"]
  ]
}).render(document.getElementById("wrapper"));
