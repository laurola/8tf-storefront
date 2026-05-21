import { EllipseMiniSolid } from "@medusajs/icons"
import { RadioGroup } from "@medusajs/ui"

type FilterRadioGroupProps = {
  title: string
  items: {
    value: string
    label: string
  }[]
  value: any
  handleChange: (...args: any[]) => void
  "data-testid"?: string
}

const FilterRadioGroup = ({
  title,
  items,
  value,
  handleChange,
  "data-testid": dataTestId,
}: FilterRadioGroupProps) => {
  return (
    <div className="flex items-center gap-x-4">
      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#6b7280" }}>
        {title}
      </span>
      <RadioGroup
        data-testid={dataTestId}
        onValueChange={handleChange}
        className="flex flex-row gap-x-2"
      >
        {items?.map((i) => (
          <div key={i.value} className="flex items-center">
            <RadioGroup.Item
              checked={i.value === value}
              className="hidden peer"
              id={i.value}
              value={i.value}
            />
            <label
              htmlFor={i.value}
              className="cursor-pointer px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 border select-none"
              style={
                i.value === value
                  ? {
                      backgroundColor: "rgba(22, 163, 74, 0.08)",
                      borderColor: "#16a34a",
                      color: "#16a34a",
                    }
                  : {
                      backgroundColor: "transparent",
                      borderColor: "#e5e7eb",
                      color: "#6b7280",
                    }
              }
              data-testid="radio-label"
              data-active={i.value === value}
            >
              {i.label}
            </label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

export default FilterRadioGroup
