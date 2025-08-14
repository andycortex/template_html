# UI Components Kit

Este repositorio contiene un conjunto de componentes HTML/CSS/JS diseñados para ser **totalmente independientes**, es decir:

- No requieren clases globales o externas.
- Cada componente incluye su propio estilo y estructura interna.
- Pueden reutilizarse en cualquier proyecto sin conflictos.

---

## 📦 Lista de Componentes

### 1. **Article**
**Descripción:**  
Bloque de contenido para mostrar textos, noticias o publicaciones. Incluye título, subtítulo y cuerpo de texto.

**Características:**
- Estructura semántica `<article>`.
- Soporta imágenes opcionales.
- Ideal para blogs, notas y artículos informativos.

---

### 2. **Card Pricing**
**Descripción:**  
Tarjeta para mostrar planes de precios o suscripciones.

**Características:**
- Incluye título del plan, precio, lista de características y botón de acción.
- Estilos predefinidos para destacar el plan.
- Perfecto para páginas de planes y suscripciones.

---

### 3. **Card Product**
**Descripción:**  
Tarjeta diseñada para mostrar productos de forma atractiva.

**Características:**
- Imagen destacada del producto.
- Nombre, descripción y precio.
- Botón de compra o agregar al carrito.

---

### 4. **FAQ**
**Descripción:**  
Bloque de preguntas frecuentes 

**Características:**
- Título de la pregunta y respuesta.
- Permite múltiples FAQs en una sola página.

---

### 5. **Header**
**Descripción:**  
Cabecera principal del sitio o aplicación.

**Características:**
- Incluye logo, navegación y enlaces.
- Soporta menús horizontales o hamburguesa para responsive.
- Funciona como bloque fijo o desplazable.

---

### 6. **Hero**
**Descripción:**  
Sección principal y destacada en la parte superior de la página.

**Características:**
- Imagen o fondo principal con título y texto de llamada a la acción.
- Botones de acción integrados.
- Ideal para captar la atención del usuario al entrar.

---

### 7. **Jumbotron**
**Descripción:**  
Bloque ancho y llamativo para resaltar información clave.

**Características:**
- Texto grande y visible.
- Colores y tipografía resaltados.
- Perfecto para anuncios, promociones o mensajes importantes.

---

### 8. **Logo**
**Descripción:**  
Elemento gráfico que representa la marca.

**Características:**
- Puede ser imagen SVG, PNG o vectorial embebido.
- Escalable y adaptable a diferentes tamaños.
- Se integra en cualquier parte del sitio.

---

## 🔧 Uso

Cada componente puede copiarse y pegarse directamente en el proyecto sin depender de hojas de estilo globales.
Basta con importar el archivo correspondiente:

```html
<link rel="stylesheet" href="main.css">
<script src="component.js"></script> <!-- el componente que se requiera en la pagina -->
