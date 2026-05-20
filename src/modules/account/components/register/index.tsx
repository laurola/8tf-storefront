"use client"

import { useActionState } from "react"
import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { signup } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(signup, null)

  return (
    <div
      className="w-full max-w-sm rounded-xl p-8 flex flex-col items-center"
      style={{ backgroundColor: "#1a1a1a" }}
      data-testid="register-page"
    >
      <h1 className="text-xl font-bold uppercase tracking-widest mb-2" style={{ color: "#fff" }}>
        Konto erstellen
      </h1>
      <p className="text-center text-sm mb-8" style={{ color: "#888" }}>
        Werde 8TF-Mitglied und genieße exklusive Vorteile.
      </p>

      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-3">
          <Input
            label="Vorname"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
          />
          <Input
            label="Nachname"
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
          />
          <Input
            label="E-Mail"
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
          />
          <Input
            label="Telefon"
            name="phone"
            type="tel"
            autoComplete="tel"
            data-testid="phone-input"
          />
          <Input
            label="Passwort"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
          />
        </div>

        <ErrorMessage error={message} data-testid="register-error" />

        <p className="text-center text-xs mt-6" style={{ color: "#555" }}>
          Mit der Registrierung stimmst du den{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline transition-colors hover:text-white"
            style={{ color: "#888" }}
          >
            Datenschutzbestimmungen
          </LocalizedClientLink>{" "}
          und den{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline transition-colors hover:text-white"
            style={{ color: "#888" }}
          >
            Nutzungsbedingungen
          </LocalizedClientLink>{" "}
          zu.
        </p>

        <SubmitButton className="w-full mt-6" data-testid="register-button">
          Registrieren
        </SubmitButton>
      </form>

      <span className="text-center text-sm mt-6" style={{ color: "#666" }}>
        Bereits Mitglied?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="font-semibold transition-colors hover:underline"
          style={{ color: "#4ade80" }}
        >
          Anmelden
        </button>
      </span>
    </div>
  )
}

export default Register
