import { useCallback, type CSSProperties } from 'react'

const MONO = "'SF Mono', 'Fira Code', Menlo, Consolas, monospace"

const labelStyle: CSSProperties = {
  display: 'block',
  fontSize: '.7rem',
  fontWeight: 600,
  letterSpacing: '.04em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
  marginBottom: 6,
}

const inputBase: CSSProperties = {
  width: '100%',
  padding: '7px 10px',
  borderRadius: 8,
  border: '1px solid var(--border)',
  background: '#fff',
  fontSize: '.82rem',
  fontFamily: MONO,
  color: 'var(--text)',
  outline: 'none',
  boxSizing: 'border-box',
}

// --- Prop value types ---
type PropValue = string | number | boolean

type OnChange = (name: string, value: PropValue) => void

// --- Schema entry discriminated union ---
interface BaseSchemaEntry {
  name: string
  label?: string
  defaultValue: PropValue
}

interface SelectSchemaEntry extends BaseSchemaEntry {
  type: 'select'
  options: string[]
}

interface RangeSchemaEntry extends BaseSchemaEntry {
  type: 'range'
  min: number
  max: number
  step: number
}

interface ToggleSchemaEntry extends BaseSchemaEntry {
  type: 'toggle'
}

interface TextSchemaEntry extends BaseSchemaEntry {
  type: 'text'
}

interface NumberSchemaEntry extends BaseSchemaEntry {
  type: 'number'
  min?: number
  max?: number
  step?: number
}

interface ColorSchemaEntry extends BaseSchemaEntry {
  type: 'color'
}

export type SchemaEntry =
  | SelectSchemaEntry
  | RangeSchemaEntry
  | ToggleSchemaEntry
  | TextSchemaEntry
  | NumberSchemaEntry
  | ColorSchemaEntry

// --- Sub-controls ---

function SelectControl({ name, value, options, onChange }: { name: string; value: PropValue; options: string[]; onChange: OnChange }) {
  return (
    <select
      value={String(value)}
      onChange={(e) => onChange(name, e.target.value)}
      style={{ ...inputBase, cursor: 'pointer' }}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  )
}

function RangeControl({ name, value, min, max, step, onChange }: { name: string; value: PropValue; min: number; max: number; step: number; onChange: OnChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <input
        type="range"
        className="prop-range"
        min={min}
        max={max}
        step={step}
        value={Number(value)}
        onChange={(e) => onChange(name, parseFloat(e.target.value))}
        style={{ flex: 1, cursor: 'pointer' }}
      />
      <span style={{
        fontSize: '.78rem', fontFamily: MONO, color: 'var(--text)',
        minWidth: 36, textAlign: 'right',
      }}>
        {value}
      </span>
    </div>
  )
}

function ToggleControl({ name, value, onChange }: { name: string; value: PropValue; onChange: OnChange }) {
  return (
    <button
      onClick={() => onChange(name, !value)}
      style={{
        display: 'inline-block',
        padding: '6px 16px',
        borderRadius: 999,
        border: 'none',
        background: value ? '#5A7A6E' : 'rgba(0,0,0,.08)',
        color: value ? '#fff' : 'var(--body)',
        fontSize: '.78rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all .15s ease',
        fontFamily: 'inherit',
      }}
    >
      {value ? 'On' : 'Off'}
    </button>
  )
}

function TextControl({ name, value, onChange }: { name: string; value: PropValue; onChange: OnChange }) {
  return (
    <input
      type="text"
      value={String(value)}
      onChange={(e) => onChange(name, e.target.value)}
      style={inputBase}
    />
  )
}

function NumberControl({ name, value, min, max, step, onChange }: { name: string; value: PropValue; min?: number; max?: number; step?: number; onChange: OnChange }) {
  return (
    <input
      type="number"
      min={min}
      max={max}
      step={step}
      value={Number(value)}
      onChange={(e) => onChange(name, parseFloat(e.target.value) || 0)}
      style={{ ...inputBase, maxWidth: 120 }}
    />
  )
}

function ColorControl({ name, value, onChange }: { name: string; value: PropValue; onChange: OnChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{
        width: 24, height: 24, borderRadius: 6,
        border: '1px solid var(--border)',
        background: String(value),
        flexShrink: 0,
      }} />
      <input
        type="text"
        value={String(value)}
        onChange={(e) => onChange(name, e.target.value)}
        style={{ ...inputBase, flex: 1 }}
      />
    </div>
  )
}

// --- Main component ---

interface PropControlProps {
  schema: SchemaEntry[]
  values: Record<string, PropValue>
  onChange: OnChange
  onReset: () => void
}

export default function PropControl({ schema, values, onChange, onReset }: PropControlProps) {
  const renderControl = useCallback((entry: SchemaEntry) => {
    const val = values[entry.name]
    const props = { name: entry.name, value: val as PropValue, onChange }

    switch (entry.type) {
      case 'select':
        return <SelectControl {...props} options={entry.options} />
      case 'range':
        return <RangeControl {...props} min={entry.min} max={entry.max} step={entry.step} />
      case 'toggle':
        return <ToggleControl {...props} />
      case 'text':
        return <TextControl {...props} />
      case 'number':
        return <NumberControl {...props} min={entry.min} max={entry.max} step={entry.step} />
      case 'color':
        return <ColorControl {...props} />
      default:
        return null
    }
  }, [values, onChange])

  return (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 16,
      }}>
        {schema.map((entry) => (
          <div key={entry.name}>
            <label style={labelStyle}>{entry.label || entry.name}</label>
            {renderControl(entry)}
          </div>
        ))}
      </div>
      <button
        onClick={onReset}
        style={{
          marginTop: 12,
          padding: '5px 14px',
          borderRadius: 6,
          border: '1px solid var(--border)',
          background: 'var(--warm)',
          fontSize: '.72rem',
          fontWeight: 600,
          color: 'var(--muted)',
          cursor: 'pointer',
          fontFamily: 'inherit',
        }}
      >
        Reset Defaults
      </button>

      <style>{`
        .prop-range {
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          background: var(--border);
          border-radius: 2px;
          outline: none;
        }
        .prop-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--blue);
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 1px 3px rgba(0,0,0,.15);
        }
        .prop-range::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--blue);
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 1px 3px rgba(0,0,0,.15);
        }
      `}</style>
    </div>
  )
}
