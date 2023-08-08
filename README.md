# Proyecto Inari

El proyecto Inari es una API que permite a los usuarios registrar transacciones y presupuestos para generar facturas y gestionar sus finanzas de manera fácil y eficiente. La API está desarrollada utilizando Express.js en el backend y React.js en el frontend.

## Explicación del Proyecto

1. [Requisitos Previos](#requisitos-previos)
2. [Características](#características)
3. [Backend](#backend)
4. [Frontend](#frontend)

## Requisitos Previos

- [Node.js](https://nodejs.org/es)
- [MongoDB](https://www.mongodb.com/es)
- [Configuración variables de Entorno]()
- Clona el repositorio del proyecto desde GitHub:

```bash
git clone https://github.com/Akio1102/Inari
```

## Características

- Registro de Usuario: Los usuarios tienen la opción de crear una cuenta y acceder al sistema mediante un proceso de registro.

- Registro de transacciones: Los usuarios pueden agregar y visualizar sus transacciones financieras, lo que les permite realizar un seguimiento detallado de sus gastos e ingresos.

- Gestión de presupuestos: Inari permite a los usuarios crear y administrar presupuestos para diferentes categorías de gastos, lo que les ayuda a controlar sus finanzas y mantenerse dentro de sus límites.

- Generación de facturas: Los usuarios pueden generar facturas basadas en sus transacciones y presupuestos, lo que facilita el proceso de contabilidad y presentación de informes financieros.

## Backend

**Express.js**: Un marco de desarrollo web de Node.js que se utiliza para crear el backend de la API y manejar las solicitudes y respuestas HTTP.

### Dependencias

- [**bcrypt**](https://www.npmjs.com/package/bcrypt) Una librería utilizada para el hashing y salting de contraseñas, lo que brinda una capa adicional de seguridad al almacenar contraseñas en la base de datos.

- [**cookie-parser**](https://www.npmjs.com/package/cookie-parser) Un middleware que facilita el manejo y análisis de cookies en aplicaciones Node.js, lo que permite almacenar y acceder a información en el navegador del usuario.

- [**cors**](https://www.npmjs.com/package/cors) Un middleware que permite la configuración de cabeceras HTTP para controlar el acceso a recursos de origen cruzado (CORS) en una API, lo que permite que diferentes dominios se comuniquen entre sí de manera segura.

- [**dotenv**](https://www.npmjs.com/package/dotenv) Una biblioteca que permite cargar variables de entorno desde un archivo .env, lo que facilita la configuración y gestión de variables sensibles y específicas del entorno.

- [**express**](https://www.npmjs.com/package/express) Un marco de desarrollo web de Node.js que simplifica la creación de aplicaciones web y APIs mediante la gestión de rutas, middleware y manejo de solicitudes y respuestas HTTP.

- [**jose**](https://www.npmjs.com/package/jose) Una librería que proporciona soporte para JSON Web Tokens (JWT), permitiendo la creación, validación y manejo seguro de tokens de autenticación y autorización.

- [**mongoose**](https://www.npmjs.com/package/mongoose) Una librería de modelado de objetos de MongoDB para Node.js que facilita la interacción con la base de datos MongoDB, permitiendo definir modelos de datos y realizar operaciones de base de datos de manera más sencilla.

- [**morgan**](https://www.npmjs.com/package/morgan) Un middleware que registra los detalles de las solicitudes HTTP entrantes, lo que es útil para el registro y el análisis de eventos y comportamientos de la aplicación.

- [**zod**](https://www.npmjs.com/package/zod) Una biblioteca de validación de esquemas para TypeScript y JavaScript, que facilita la validación y la tipificación segura de datos, especialmente útil para verificar la validez de los datos recibidos en una API.

### Dependencia de desarrollo

- [**nodemon**](https://www.npmjs.com/package/nodemon) Una herramienta de desarrollo que se utiliza para reiniciar automáticamente el servidor cada vez que se detectan cambios en los archivos del proyecto, lo que agiliza el proceso de desarrollo y prueba. Es una dependencia de desarrollo, lo que significa que no se utiliza en producción, sino solo durante el proceso de desarrollo.

### Instalación

1. Instala las dependencias del backend

```bash
cd Backend
npm install
```

2. Configurar las variables de entorno: Crea un archivo [.env](./Backend/) en la carpeta y configura las variables necesarias para el puerto de ejecucción del servidor, conexión con MongoDB y la Private_KEY de jose. Puedes Guiarte del archivo [.env.example](./Backend/.env.example)

3. Inicia el servidor backend

```bash
npm run dev
```

## Frontend

**React.js**: Una biblioteca de JavaScript para construir interfaces de usuario interactivas y receptivas en el frontend del proyecto.

### Dependencias

- [**axios**](https://www.npmjs.com/package/axios) Una librería de JavaScript que permite realizar peticiones HTTP desde el cliente, lo que facilita la comunicación con servidores y APIs externas.

- [**js-cookie**](https://www.npmjs.com/package/js-cookie) Una librería para trabajar con cookies en JavaScript, que permite almacenar, obtener y eliminar cookies en el navegador del usuario.

- [**react**](https://www.npmjs.com/package/react) Una biblioteca de JavaScript para construir interfaces de usuario interactivas y reactivas en aplicaciones web.

- [**react-dom**](https://www.npmjs.com/package/react-dom) Un paquete de React que proporciona métodos específicos para manipular el DOM del navegador, lo que permite renderizar componentes React en el navegador.

- [**react-hook-form**](https://www.npmjs.com/package/react-hook-form) Una librería de React para manejar formularios de manera sencilla y eficiente, facilitando la validación y gestión de datos de formulario.

- [**react-router-dom**](https://www.npmjs.com/package/react-router-dom) Una librería de React que permite manejar la navegación y el enrutamiento de páginas en aplicaciones web de una sola página (SPA), lo que permite cargar y mostrar diferentes componentes según la URL.

### Dependencias de desarrollo

- [**@types/react**](https://www.npmjs.com/package/@types/react) Paquetes de tipos de TypeScript para React, que proporcionan información de tipado para facilitar el desarrollo en proyectos que utilizan TypeScript con React.

- [**@types/react-dom**](https://www.npmjs.com/package/@types/react-dom) Paquetes de tipos de TypeScript para React-DOM, que proporcionan información de tipado para facilitar el desarrollo en proyectos que utilizan TypeScript con React.

- [**@vitejs/plugin-react**](https://www.npmjs.com/package/@vitejs/plugin-react) Un complemento de Vite para trabajar con React, que permite una integración fluida de React con Vite, un entorno de desarrollo rápido para aplicaciones web.

- [**autoprefixer**](https://www.npmjs.com/package/autoprefixer) Un complemento para PostCSS que agrega automáticamente prefijos de navegadores a las reglas de CSS para asegurar la compatibilidad en diferentes navegadores.

- [**eslint**](https://www.npmjs.com/package/eslint) Una herramienta de análisis de código estático para identificar y corregir problemas en el código JavaScript y JSX, ayudando a mantener un código limpio y consistente.

- [**eslint-plugin-react**](https://www.npmjs.com/package/eslint-plugin-react) Un complemento de ESLint específico para trabajar con React, que proporciona reglas adicionales para el análisis y la mejora de código en proyectos de React.

- [**eslint-plugin-react-hooks**](https://www.npmjs.com/package/eslint-plugin-react-hooks) Un complemento de ESLint para validar el uso correcto de los hooks de React, lo que ayuda a detectar errores comunes relacionados con los hooks.

- [**eslint-plugin-react-refresh**](https://www.npmjs.com/package/eslint-plugin-react-refresh) Un complemento de ESLint para trabajar con el refrescamiento de React, que permite utilizar la característica de refrescamiento de React sin errores de ESLint.

- [**postcss**](https://www.npmjs.com/package/postcss) Un procesador de CSS que permite aplicar transformaciones y optimizaciones al código CSS, lo que facilita el trabajo con estilos en proyectos web.

- [**tailwindcss**](https://www.npmjs.com/package/tailwindcss) Un framework de CSS que proporciona una amplia colección de clases utilitarias para estilizar rápidamente componentes y páginas web.

- [**vite**](https://www.npmjs.com/package/vite) Un entorno de desarrollo rápido para aplicaciones web que ofrece una experiencia de desarrollo en tiempo real y una compilación extremadamente rápida, lo que mejora la productividad del desarrollador.

### Instalación

1.  Inicia las dependencias del frontend

```bash
cd Frontend
npm install
```

2. Inicia el servidor frontend

```bash
npm run dev
```
