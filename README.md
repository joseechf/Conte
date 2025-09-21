# Conte
Sistema de búsqueda de trabajadores técnicos  

Problema específico a resolver
Al momento de buscar trabajadores técnicos para resolver un problema específico, ya sea de electricidad, plomería, refrigeración, etc; si no se cuenta con el contacto de antemano solo se cuenta con la opción de preguntarle a algún conocido, y dependemos totalmente de lo que nos recomienden un reducido puñado de personas sobre el trabajador.

Importancia del sistema
Contec busca solucionar el problema de busqueda de trabajadores técnicos ofreciendo una busqueda de todos los profesionales titulados o empíricos que trabajan por su zona, con evaluaciones de todos sus clientes anteriores y un historial de cada trabajo realizado. Asegurando así la calidad de quien está contratando.

Público objetivo
Clientes: busca contratar trabajadores para hacer algún trabajo
Técnicos: acepta trabajos y envia solicitudes para contratistas
Contratistas: acepta trabajos y contrata técnicos 

Requisitos funcionales
1.Pantalla de login
2.Pantalla de busqueda, con filtros.
3.Pantalla de perfil del Técnico, con historial de trabajos, publicaciones, calificación, datos personales
4.Pantalla de petición de trabajo
5.Alert de evaluación de trabajo (solo para el cliente)

Requisitos No funcionales
1.Sistema intuitivo
2.

Alcance 
1. MVP

Tecnologías
Frontend
  React
Backend
  Nodejs
  SQL
API'S
  GeoJSON (mapa en capas)
Alojamiento 
Control de versiones
  Github
Plataforma
  App híbrida 
  

Arquitectúra en Capas
Vista
  Pantallas
    -Login
      -Registro (formulario con roles segun cliente-técnico-contratista)
      -Iniciar sesion (con gmail y password, google)
    -Buscador
      -General (con filtros)
      -Expandido (Cuadro de texto con info adicional incluyendo publicaciones)
    -Perfil
      -Cliente 
      -Técnico
    -Solicitud (cambia el form dependiendo si es cotización o trabajo)
  Cuadro de texto (alert)
    -Calificar 
Logica
  Componentes
  -ORM
  -Login CRUD
  -Buscador
Datos
  Base de datos 
    -Tabla Técnico
    -Tabla Cliente
    -Tabla Lista Trabajos Realizados
    -Tabla Calificaciones
    

