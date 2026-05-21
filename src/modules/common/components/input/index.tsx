import React, { useEffect, useImperativeHandle, useState } from "react"

import Eye from "@modules/common/icons/eye"
import EyeOff from "@modules/common/icons/eye-off"

type InputProps = Omit<
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
  "placeholder"
> & {
  label: string
  errors?: Record<string, unknown>
  touched?: Record<string, unknown>
  name: string
  topLabel?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, label, touched, required, topLabel, errors, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [showPassword, setShowPassword] = useState(false)
    const [inputType, setInputType] = useState(type)

    useEffect(() => {
      if (type === "password" && showPassword) {
        setInputType("text")
      }

      if (type === "password" && !showPassword) {
        setInputType("password")
      }
    }, [type, showPassword])

    useImperativeHandle(ref, () => inputRef.current!)

    const hasError = errors && touched && errors[name] && touched[name]

    return (
      <div className="flex flex-col w-full">
        {topLabel && (
          <label className="mb-2 text-sm font-medium text-[#6b7280]">
            {topLabel}
          </label>
        )}
        <div className="flex relative z-0 w-full text-sm">
          <input
            type={inputType}
            name={name}
            placeholder=" "
            required={required}
            className={[
              "peer pt-4 pb-1 block w-full h-11 px-4 mt-0 rounded-md appearance-none",
              "bg-white text-[#111827]",
              "border focus:outline-none focus:ring-0",
              "transition-colors duration-200",
              hasError
                ? "border-red-500 focus:border-red-500"
                : "border-[#e5e7eb] focus:border-[#16a34a]",
              "placeholder-shown:border-[#e5e7eb]",
            ].join(" ")}
            {...props}
            ref={inputRef}
          />
          <label
            htmlFor={name}
            onClick={() => inputRef.current?.focus()}
            className={[
              "flex items-center justify-center mx-3 px-1 absolute duration-300 origin-0",
              "pointer-events-none select-none",
              "top-3 text-[#6b7280] text-sm",
              "transition-all",
              "peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#6b7280]",
              "peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#16a34a]",
              "peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs",
            ].join(" ")}
          >
            {label}
            {required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-[#6b7280] hover:text-[#111827] px-4 focus:outline-none transition-colors duration-150 absolute right-0 top-3"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          )}
        </div>
        {!!hasError && (
          <p className="mt-1 text-xs text-red-500">
            {String(errors[name])}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export default Input
