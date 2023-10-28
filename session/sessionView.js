export const buildUnauthorizedSession = () => {
    return `
      <a href="./login.html" class="button nav_option">Login</a>
      <a href="./signup.html" class="button nav_option">Sign Up</a>`;
  }
  
  export const buildAuthenticatedSession = () => {
    return `
    <a href="./adCreation.html" class="nav_option">Crear anuncio</a>
    <button class="nav_option">Cerrar sesión</button>`;
  }

  
