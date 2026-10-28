const BASE = import.meta.env.VITE_API_URL;
const ADMIN_ROLES = ["admin", "super"];

export const isAdminRole = (role) => ADMIN_ROLES.includes(role);

// Where each type of person lands after login
export const homeForRole = (role) =>
  isAdminRole(role) ? "#/admin" : "#/candidate";

/* ---------- Session helpers ---------- */
export function saveSession({ token, role }) {
  localStorage.setItem("authToken", token);
  localStorage.setItem("authRole", role);
}

export function getSession() {
  const token = localStorage.getItem("authToken");
  const role = localStorage.getItem("authRole");
  return token && role ? { token, role } : null;
}

export function clearSession() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("authRole");
}

/* ---------- Login ---------- */
export async function loginUser(username, password) {
  // ---- TEMPORARY TEST LOGINS (only run when VITE_API_URL is not set) ----
  //   Admin:      admin / Admin@123
  //   Candidate:  8888888888 / Candidate@123
  // Delete this block once your real API is connected.
  if (!BASE) {
    await new Promise((r) => setTimeout(r, 800));
    if (import.meta.env.DEV) {
      if (username.toLowerCase() === "admin" && password === "Admin@123")
        return { token: "dev-admin", role: "admin" };
      if (username === "8888888888" && password === "Candidate@123")
        return { token: "dev-candidate", role: "candidate" };
    }
    throw new Error("Invalid username or password.");
  }
  // -----------------------------------------------------------------------

  let res;
  try {
    res = await fetch(`${BASE}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
  } catch {
    throw new Error(
      "Cannot reach the server. Check your internet and try again.",
    );
  }

  if (res.status === 401 || res.status === 422)
    throw new Error("Invalid username or password.");
  if (res.status === 429)
    throw new Error(
      "Too many attempts. Please wait a few minutes and try again.",
    );
  if (!res.ok)
    throw new Error(
      "Something went wrong on our side. Please try again later.",
    );

  return res.json(); // expected: { token: "...", role: "admin" | "super" | "candidate" }
}
