# KitUI – Documentación de Componentes

Este repositorio incluye componentes HTML/CSS listos para usar, cada uno con estilos independientes definidos en `main.css`.  
No dependen de clases globales, frameworks externos ni librerías adicionales.

---

## 📦 Componentes

### 1. Paleta de Colores
**Descripción:**  
Muestra los colores base del proyecto con nombre y código HEX.  
**Características:**
- Colores definidos: `primary`, `secondary`, `accent`, `bg`, `text-muted`.
- Cada color se presenta en un bloque visual.

---

### 2. Botones
**Descripción:**  
Conjunto de botones estilizados para diferentes acciones.  
**Variantes:**
- Botón primario.
- Botón secundario.
- Botón outline.
- Botón ghost.
- Botón accent.

---

### 3. Tarjeta Destacada
**Descripción:**  
Tarjeta de presentación con imagen, texto descriptivo y barra de progreso.  
**Características:**
- Imagen o avatar.
- Nombre y rol.
- Texto de proyecto.
- Barra de progreso con porcentaje.

---

### 4. Formulario de Contacto
**Descripción:**  
Formulario simple para envío de mensajes.  
**Campos incluidos:**
- Nombre.
- Correo electrónico.
- Mensaje.
- Botón de envío.

---

### 5. Estadísticas
**Descripción:**  
Bloque de métricas clave en formato compacto.  
**Ejemplos de métricas:**
- Usuarios activos.
- Proyectos.
- Satisfacción.
- Soporte.

---

### 6. Formulario Avanzado
**Descripción:**  
Incluye elementos de formulario adicionales.  
**Elementos:**
- Select desplegable.
- Casillas de verificación (checkboxes).
- Botones de radio.

---

### 7. Navegación
**Descripción:**  
Componentes de navegación para moverse dentro de la aplicación.  
**Incluye:**
- Menú principal.
- Breadcrumbs.
- Paginación.

---

### 8. Modal
**Descripción:**  
Ventana modal emergente para mostrar información o confirmar acciones.  
**Características:**
- Botón para abrir.
- Cierre con botón interno o clic fuera.
- Controlado por JavaScript (`openModal`, `closeModal`).

---

### 9. Barras de Progreso
**Descripción:**  
Indicadores visuales de avance.  
**Características:**
- Varias longitudes y colores.
- Texto opcional con porcentaje.

---

### 10. Lista de Iconos
**Descripción:**  
Lista de iconos para representar acciones o categorías.  
**Formato:**
- Disposición horizontal o vertical.
- Soporte para SVG o icon fonts.

---

### 11. Listas
**Descripción:**  
Elementos ordenados o no ordenados para mostrar datos.  
**Tipos:**
- Lista ordenada (`<ol>`).
- Lista no ordenada (`<ul>`).

---

### 12. Tablas
**Descripción:**  
Tabla para mostrar datos estructurados.  
**Características:**
- Cabecera con títulos.
- Filas con estado y acciones.
- Diseño responsive.

---

### 13. Área con Scroll
**Descripción:**  
Contenedor con contenido extenso y barra de desplazamiento personalizada.

---

### 14. Menú Móvil (Mobile Menu)

**Descripción:**
Menú de navegación adaptable para dispositivos móviles, con botón tipo "hamburguesa" para abrir/cerrar.
Características:

Botón de apertura con tres líneas (burger-button).

Cierre con botón “×”.

Secciones con submenús desplegables (mobile-menu-tree).

Animaciones de apertura/cierre controladas por JavaScript.

### 15. Tipografía

**Descripción:** Sistema completo de jerarquía tipográfica.
Elementos:

Títulos (h1, h2, h3).

Subtítulos (.subtitle).

Encabezados (.heading).

Párrafos (.paragraph).

Texto secundario (.text-muted).

Texto pequeño (.text-small).

Variantes de tamaño: .text-xs, .text-sm, .text-base, .text-lg, .text-xl, .text-2xl.

Estilos para enlaces (.link, .link-muted).

### 16. Spinners de Carga

**Descripción:** Indicadores de carga con diferentes tamaños y estilos.
Variantes:

spinner-sm (pequeño).

spinner (normal).

spinner-lg (grande).

spinner-primary.

spinner-secondary.
Incluye: Botones con estado de carga (.btn-loading).

### 17. Componentes de Utilidad

**Descripción:** Bloques de estructura para maquetar contenido.
Incluye:

Contenedores (.container-sm, .container-md).

Sistema de Grid (.grid, .grid-cols-X).

Flexbox con alineaciones (.flex, .justify-between, .items-center).

Divisores (.divider, .divider-dashed, .divider-thick).

Variantes de Paper (.paper-sm, .paper, .paper-lg, .paper-elevated).

### 18. Tooltips

**Descripción:** Mensajes flotantes que aparecen al pasar el cursor sobre un elemento.
Posiciones:

Superior (.tooltip-top).

Inferior (.tooltip-bottom).

Izquierda (.tooltip-left).

Derecha (.tooltip-right).

### 19. Sistema de Notificaciones (Snackbars)

**Descripción:** Mensajes de alerta temporales para mostrar información al usuario.
Tipos:

Éxito (success).

Error (error).

Advertencia (warning).

Información (info).

Debug (debug).

Crítico (critical).

## 🚀 Uso
1. Copia el HTML del componente que necesites.
2. Importa `main.css`.
3. Pega el componente en tu proyecto: funcionará sin dependencias.

