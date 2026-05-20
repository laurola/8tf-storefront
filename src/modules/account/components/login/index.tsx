import { login } from "@lib/data/customer"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import { useActionState } from "react"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(login, null)

  return (
    <div
      className="w-full max-w-sm rounded-xl p-8 flex flex-col items-center"
      style={{ backgroundColor: "#1a1a1a" }}
      data-testid="login-page"
    >
      <h1 className="text-xl font-bold uppercase tracking-widest mb-2" style={{ color: "#fff" }}>
        Willkommen zurück
      </h1>
      <p className="text-center text-sm mb-8" style={{ color: "#888" }}>
        Melde dich an für ein besseres Einkaufserlebnis.
      </p>

      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-3">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#aaa" }}>
              E-Mail
            </label>
            <Input
              label="Email"
              name="email"
              type="email"
              title="Enter a valid email address."
              autoComplete="email"
              required
              data-testid="email-input"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#aaa" }}>
              Passwort
            </label>
            <Input
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              data-testid="password-input"
            />
          </div>
        </div>

        <div className="flex justify-end mt-2">
          <button
            type="button"
            className="text-xs transition-colors hover:underline"
            style={{ color: "#666" }}
          >
            Passwort vergessen?
          </button>
        </div>

        <ErrorMessage error={message} data-testid="login-error-message" />

        <SubmitButton data-testid="sign-in-button" className="w-full mt-6">
          Anmelden
        </SubmitButton>
      </form>

      <span className="text-center text-sm mt-6" style={{ color: "#666" }}>
        Noch kein Konto?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="font-semibold transition-colors hover:underline"
          style={{ color: "#4ade80" }}
          data-testid="register-button"
        >
          Jetzt registrieren
        </button>
      </span>
    </div>
  )
}

export default Login
