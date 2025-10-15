# Hero Component - Rosa Chicle

## Descripción

Componente Hero diseñado con tonos rosa chicle atractivos para la página principal.

## Características

- ✨ Diseño moderno con gradientes rosa chicle
- 🎨 Animaciones suaves y atractivas
- 📱 Totalmente responsive
- ♿ Accesible (ARIA roles)
- 🧪 Tests unitarios incluidos
- 🎯 Alto contraste para mejor legibilidad

## Paleta de Colores

- **Rosa Chicle Claro**: `#FFB3D9`
- **Rosa Chicle**: `#FF69B4`
- **Rosa Chicle Oscuro**: `#FF1493`
- **Rosa Chicle Más Oscuro**: `#C71585`
- **Texto de Contraste**: `#1a1a2e`
- **Texto Claro**: `#ffffff`

## Uso

jsx
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Hero />
    </div>
  );
}


## Instalación

bash
npm install


## Tests

bash
npm test


## Estructura del Componente

- `Hero.jsx` - Componente principal
- `Hero.css` - Estilos y animaciones
- `Hero.test.jsx` - Tests unitarios

## Personalización

Puedes personalizar los colores modificando las variables CSS en `Hero.css`:

css
:root {
  --pink-bubblegum-light: #FFB3D9;
  --pink-bubblegum: #FF69B4;
  /* ... más variables */
}
