// === MÓDULO 1: SEGURIDAD INFORMÁTICA (SHA-256, ANTI-XSS, CONTROL DE ACCESO) ===
const SEGURIDAD = {
  MAX_INTENTOS: 3,
  TIEMPO_BLOQUEO_MS: 60000,
  TIMEOUT_INACTIVIDAD_MS: 15 * 60 * 1000,
  intentosFallidos: 0,
  bloqueadoHasta: 0,
  timerInactividad: null,

  sanitizar(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  },

  async hashPassword(password) {
    const salt = "PB_TEC24_SECURE_SALT_2026_";
    const data = new TextEncoder().encode(salt + password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
  },

  validarPasswordFuerte(pass) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(pass);
  },

  reiniciarTimerSesion() {
    clearTimeout(this.timerInactividad);
    if (typeof sesionActual !== "undefined" && sesionActual) {
      this.timerInactividad = setTimeout(() => {
        alert("🔒 Por seguridad (inactividad de 15 min), tu sesión ha sido cerrada automáticamente.");
        cerrarSesion();
      }, this.TIMEOUT_INACTIVIDAD_MS);
    }
  }
};

["click", "keypress", "mousemove"].forEach(ev =>
  document.addEventListener(ev, () => SEGURIDAD.reiniciarTimerSesion(), { passive: true })
);