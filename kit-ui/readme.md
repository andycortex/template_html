# KitUI - Sistema de Componentes Completo

Bienvenido a KitUI, una biblioteca de componentes de interfaz de usuario creada con HTML y CSS puro. Este kit está diseñado para ser intuitivo, personalizable y fácil de integrar en cualquier proyecto web.

## Filosofía

KitUI se basa en los siguientes principios:

- **Variables de CSS:** La personalización es clave. Casi todos los aspectos del diseño (colores, espaciado, bordes, sombras) se controlan a través de variables de CSS para que puedas adaptar el tema fácilmente.
- **Clases de Utilidad:** Inspirado en frameworks como Tailwind CSS, KitUI ofrece clases de utilidad para flexbox, grid y espaciado, permitiendo construir layouts complejos sin escribir CSS personalizado.
- **Componentes Modulares:** Cada componente está diseñado como un bloque de construcción independiente y reutilizable.

## Archivos Principales

- `index.html`: Contiene ejemplos de todos los componentes disponibles. Es el mejor lugar para verlos en acción.
- `main.css`: El corazón de la biblioteca. Contiene todas las variables, estilos base y clases de los componentes.
- `main.js`: Gestiona la interactividad de componentes como el menú móvil, los snackbars y los modales.

---

## Personalización (Theming)

Para cambiar el tema de KitUI, simplemente sobrescribe las variables de CSS definidas en la sección `:root` de `main.css`.

### Variables Principales

```css
:root {
  /* Paleta de Colores */
  --color-secondary: #ebe1ba;
  --color-primary: #fb4934;
  --color-bg: #1d2021;
  --color-accent: #458588;
  --color-text-muted: #665c54;
  --color-card: #282828;
  --color-border: #504945;
  --color-input: #3c3836;

  /* Bordes y Radios */
  --border: 1px solid var(--color-border);
  --radius-md: 8px;

  /* Sombras */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.15);

  /* Tipografía */
  --font-mono: 'Anka/Coder', monospace;
}
```

---

## Componentes

A continuación se detallan los componentes principales y cómo utilizarlos.

### 1. Tipografía

KitUI ofrece un sistema de tipografía completo para mantener la jerarquía visual.

- `.title`: Título principal (h1).
- `.subtitle`: Subtítulo (h2).
- `.heading`: Encabezado de sección (h3).
- `.paragraph`: Texto de párrafo estándar.
- `.text-muted`: Texto secundario o de apoyo.
- `.text-small`: Texto pequeño para notas.
- `.link`: Enlace estándar.

### 2. Botones

Los botones vienen en varias variantes y soportan un estado de carga.

**Clases:**
- `.btn`: Clase base.
- `.btn-primary`: Botón principal.
- `.btn-secondary`: Botón secundario.
- `.btn-accent`: Botón con color de acento.
- `.btn-outline`: Botón con borde.
- `.btn-ghost`: Botón transparente.
- `.btn-loading`: Añadir para mostrar un spinner de carga (requiere JS para la lógica).

**Ejemplo:**
```html
<button class="btn btn-primary">Botón Primario</button>
<button class="btn btn-outline">Botón Outline</button>
<button class="btn btn-accent btn-loading">Cargando...</button>
```

### 3. Formularios

Componentes para crear formularios interactivos.

- **Inputs:** `.input`
- **Textareas:** `.textarea`
- **Selects:** `.select`
- **Checkboxes:** `checkbox`
- **Radios:** `radio`

**Ejemplo de Checkbox:**
```html
<label class="checkbox-label">
    <input type="checkbox" class="checkbox" checked>
    <span class="checkbox-custom"></span>
    Opción
</label>
```

### 4. Cards

Contenedores flexibles para mostrar contenido agrupado.

**Clases:**
- `.card`: Contenedor principal.
- `.card-header`: Sección de la cabecera.
- `.card-content`: Sección del cuerpo.
- `.card-description`: Texto descriptivo en la cabecera.

**Ejemplo:**
```html
<div class="card">
    <div class="card-header">
        <h2>Título de la Card</h2>
        <p class="card-description">Descripción opcional.</p>
    </div>
    <div class="card-content">
        <p>Contenido de la card.</p>
    </div>
</div>
```

### 5. Notificaciones (Snackbars)

Mensajes emergentes para notificar al usuario. Se controlan con JavaScript.

**Clases de Estado:**
- `.snackbar-success`
- `.snackbar-error`
- `.snackbar-warning`
- `.snackbar-info`

**Uso (JS):**
Llama a la función `showSnackbar('success')` para mostrar una notificación. El contenedor `.snackbar-container` debe existir en el HTML.

### 6. Modales

Ventanas emergentes que requieren la atención del usuario. Se controlan con JavaScript.

**Clases:**
- `.modal`: El contenedor de fondo oscuro que cubre toda la pantalla.
- `.modal-content`: La ventana de diálogo principal.
- `.modal-header`: La cabecera del modal, para el título y el botón de cierre.
- `.modal-body`: El área de contenido principal.
- `.modal-actions`: El pie del modal, para los botones de acción.
- `.modal-close`: El botón para cerrar el modal.

**Estructura HTML:**
```html
<div id="modal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h3>Título del Modal</h3>
            <button class="modal-close" onclick="closeModal()">×</button>
        </div>
        <div class="modal-body">
            <p>Contenido del modal.</p>
            <div class="modal-actions">
                <button class="btn btn-primary">Confirmar</button>
                <button class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
            </div>
        </div>
    </div>
</div>
```
**Uso (JS):**
Llama a `openModal()` y `closeModal()` para gestionar la visibilidad.

### 7. Layout y Utilidades

KitUI proporciona una serie de clases de utilidad para construir layouts y aplicar estilos de forma granular.

- **Contenedores:**
    - `.container`: Contenedor principal con ancho máximo.
    - `.container-sm`, `.container-md`, `.container-lg`, `.container-xl`: Contenedores con anchos máximos específicos.
    - `.container-fluid`: Contenedor de ancho completo.

- **Flexbox:**
    - `.flex`: Habilita un contexto flex.
    - `.flex-col`, `.flex-row`: Dirección del flex.
    - `.flex-wrap`: Permite que los ítems se envuelvan.
    - `.items-center`, `.items-start`, `.items-end`: Alineación de ítems en el eje cruzado.
    - `.justify-center`, `.justify-between`, `.justify-around`, `.justify-start`, `.justify-end`: Alineación de ítems en el eje principal.

- **Grid:**
    - `.grid`: Habilita un contexto grid.
    - `.grid-cols-1`, `.grid-cols-2`, `.grid-cols-3`, `.grid-cols-4`: Define el número de columnas.

- **Espaciado (Gaps):**
    - `.gap-1`, `.gap-2`, `.gap-3`, `.gap-4`, `.gap-6`, `.gap-8`: Espaciado entre ítems en flex o grid.

- **Divisores:**
    - `.divider`: Divisor horizontal estándar.
    - `.divider-vertical`: Divisor vertical.
    - `.divider-thick`: Divisor horizontal más grueso.
    - `.divider-dashed`: Divisor horizontal punteado.

- **Papers (Contenedores con Estilo):**
    - `.paper`: Contenedor con estilo de tarjeta y sombra ligera.
    - `.paper-sm`, `.paper-lg`, `.paper-xl`: Variantes de tamaño de padding.
    - `.paper-flat`: Sin sombra.
    - `.paper-elevated`: Con sombra más pronunciada.

- **Tamaños de Texto:**
    - `.text-xs`, `.text-sm`, `.text-base`, `.text-lg`, `.text-xl`, `.text-2xl`, `.text-3xl`, `.text-4xl`, `.text-5xl`: Clases para aplicar diferentes tamaños de fuente.

---

## Responsive

El diseño es "mobile-first". La mayoría de los estilos para escritorio se aplican a partir de un breakpoint de `768px`. El menú de navegación principal se oculta en móvil y se reemplaza por un menú de hamburguesa (`.burger-button`).