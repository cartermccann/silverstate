import { useCallback } from 'react'

const MONO = "'SF Mono', 'Fira Code', Menlo, Consolas, monospace"

const labelStyle = {
  display: 'block',
  fontSize: '.7rem',
  fontWeight: 600,
  letterSpacing: '.04em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
  marginBottom: 6,
}

const inputBase = {
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

function SelectControl({ name, value, options, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      style={{ ...inputBase, cursor: 'pointer' }}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  )
}

function RangeControl({ name, value, min, max, step, onChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <input
        type="range"
        className="prop-range"
        min={min}
        max={max}
        step={step}
        value={value}
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

function ToggleControl({ name, value, onChange }) {
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

function TextControl({ name, value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      style={inputBase}
    />
  )
}

function NumberControl({ name, value, min, max, step, onChange }) {
  return (
    <input
      type="number"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(name, parseFloat(e.target.value) || 0)}
      style={{ ...inputBase, maxWidth: 120 }}
    />
  )
}

function ColorControl({ name, value, onChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{
        width: 24, height: 24, borderRadius: 6,
        border: '1px solid var(--border)',
        background: value,
        flexShrink: 0,
      }} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        style={{ ...inputBase, flex: 1 }}
      />
    </div>
  )
}

export default function PropControl({ schema, values, onChange, onReset }) {
  const renderControl = useCallback((entry) => {
    const val = values[entry.name]
    const props = { name: entry.name, value: val, onChange }

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
