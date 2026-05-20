"use client"

import { useState } from "react"

import Register from "@modules/account/components/register"
import Login from "@modules/account/components/login"

export enum LOGIN_VIEW {
  SIGN_IN = "sign-in",
  REGISTER = "register",
}

const LoginTemplate = () => {
  const [currentView, setCurrentView] = useState("sign-in")

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Logo */}
      <div className="mb-8 text-center">
        <span
          className="text-4xl font-black tracking-widest uppercase"
          style={{ color: "#4ade80" }}
        >
          8TF
        </span>
        <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: "#555" }}>
          Sports Shop
        </p>
      </div>

      {/* Tab switcher */}
      <div
        className="flex rounded-lg p-1 mb-8 gap-x-1"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="px-6 py-2 rounded-md text-sm font-semibold uppercase tracking-wider transition-all"
          style={
            currentView === LOGIN_VIEW.SIGN_IN
              ? { backgroundColor: "#4ade80", color: "#0a0a0a" }
              : { backgroundColor: "transparent", color: "#888" }
          }
        >
          Anmelden
        </button>
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="px-6 py-2 rounded-md text-sm font-semibold uppercase tracking-wider transition-all"
          style={
            currentView === LOGIN_VIEW.REGISTER
              ? { backgroundColor: "#4ade80", color: "#0a0a0a" }
              : { backgroundColor: "transparent", color: "#888" }
          }
        >
          Registrieren
        </button>
      </div>

      {/* Form panel */}
      {currentView === LOGIN_VIEW.SIGN_IN ? (
        <Login setCurrentView={setCurrentView} />
      ) : (
        <Register setCurrentView={setCurrentView} />
      )}
    </div>
  )
}

export default LoginTemplate
