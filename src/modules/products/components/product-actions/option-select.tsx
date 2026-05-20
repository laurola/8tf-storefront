import { HttpTypes } from "@medusajs/types"
import React from "react"

type OptionSelectProps = {
  option: HttpTypes.StoreProductOption
  current: string | undefined
  updateOption: (title: string, value: string) => void
  title: string
  disabled: boolean
  "data-testid"?: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
}) => {
  const filteredOptions = (option.values ?? []).map((v) => v.value)

  return (
    <div className="flex flex-col gap-y-3">
      <span
        className="text-sm font-medium uppercase tracking-wider"
        style={{ color: "#9ca3af" }}
      >
        {title}
      </span>
      <div
        className="flex flex-wrap gap-2"
        data-testid={dataTestId}
      >
        {filteredOptions.map((v) => {
          const isSelected = v === current
          return (
            <button
              onClick={() => updateOption(option.id, v)}
              key={v}
              disabled={disabled}
              data-testid="option-button"
              className="h-10 min-w-[3rem] px-4 rounded-lg text-sm font-medium transition-all duration-150"
              style={{
                backgroundColor: isSelected ? "rgba(74, 222, 128, 0.1)" : "#1a1a1a",
                border: isSelected ? "2px solid #4ade80" : "1px solid #333333",
                color: isSelected ? "#4ade80" : "#ffffff",
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? 0.5 : 1,
              }}
              onMouseEnter={(e) => {
                if (!disabled && !isSelected) {
                  e.currentTarget.style.backgroundColor = "#262626"
                }
              }}
              onMouseLeave={(e) => {
                if (!disabled && !isSelected) {
                  e.currentTarget.style.backgroundColor = "#1a1a1a"
                }
              }}
            >
              {v}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect
