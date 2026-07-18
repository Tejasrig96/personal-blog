'use client';
import { useState } from 'react';

interface SliderProps {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}

function Slider({ label, value, display, min, max, step, onChange }: SliderProps) {
  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', marginBottom: 4,
        fontFamily: 'var(--font-serif)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)',
      }}>
        <span>{label}</span>
        <span style={{ color: 'var(--c-ink)', fontWeight: 500 }}>{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: '100%', accentColor: 'var(--c-teal)' }}
      />
    </div>
  );
}

// Water collected (in mL) crossing `dist` metres at `speed` m/s through rain
// falling at `rain` mm/h with drop terminal velocity `fall` m/s.
function waterML(rain: number, fall: number, dist: number, frontArea: number, topArea: number, speed: number) {
  const Rsi = rain / 1000 / 3600; // rainfall rate in metres of water per second
  const top = Rsi * topArea * (dist / speed); // falls on head while exposed
  const front = (Rsi / fall) * frontArea * dist; // swept out of the air — speed-independent
  return (top + front) * 1e6;
}

export default function RainCalculator() {
  const [rain, setRain] = useState(10);
  const [fall, setFall] = useState(7);
  const [dist, setDist] = useState(300);
  const [frontArea, setFrontArea] = useState(0.5);
  const [topArea, setTopArea] = useState(0.06);
  const [walkSpeed, setWalkSpeed] = useState(1.4);
  const [runSpeed, setRunSpeed] = useState(3.5);

  const walkML = waterML(rain, fall, dist, frontArea, topArea, walkSpeed);
  const runML = waterML(rain, fall, dist, frontArea, topArea, runSpeed);
  const floorML = ((rain / 1000 / 3600) / fall) * frontArea * dist * 1e6;
  const drierBy = walkML > 0 ? Math.max(0, ((walkML - runML) / walkML) * 100) : 0;

  // Chart geometry
  const W = 640, H = 300, padL = 56, padR = 20, padT = 24, padB = 40;
  const sMin = 0.8, sMax = 8;
  const yMax = waterML(rain, fall, dist, frontArea, topArea, sMin) * 1.08;
  const xPos = (s: number) => padL + ((s - sMin) / (sMax - sMin)) * (W - padL - padR);
  const yPos = (ml: number) => padT + (1 - ml / yMax) * (H - padT - padB);

  let curve = '';
  for (let s = sMin; s <= sMax + 0.001; s += 0.1) {
    const x = xPos(s), y = yPos(waterML(rain, fall, dist, frontArea, topArea, s));
    curve += (curve === '' ? 'M' : 'L') + x.toFixed(1) + ' ' + y.toFixed(1) + ' ';
  }

  const clampX = (x: number) => Math.min(Math.max(x, padL), W - padR);
  const wx = clampX(xPos(walkSpeed)), wy = yPos(walkML);
  const rx = clampX(xPos(runSpeed)), ry = yPos(runML);
  const floorY = yPos(floorML);

  const results = [
    { label: 'Walking', value: `${Math.round(walkML)} mL` },
    { label: 'Running', value: `${Math.round(runML)} mL` },
    { label: 'Drier by', value: `${Math.round(drierBy)}%` },
  ];

  return (
    <div style={{
      margin: '32px 0',
      padding: 'clamp(18px,3vw,28px)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-xs)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px 24px', marginBottom: 20 }}>
        <Slider label="Rainfall rate" value={rain} display={`${rain} mm/h`} min={1} max={50} step={1} onChange={setRain} />
        <Slider label="Raindrop fall speed" value={fall} display={`${fall.toFixed(1)} m/s`} min={4} max={10} step={0.1} onChange={setFall} />
        <Slider label="Distance to cover" value={dist} display={`${dist} m`} min={50} max={1000} step={10} onChange={setDist} />
        <Slider label="Frontal area" value={frontArea} display={`${frontArea.toFixed(2)} m²`} min={0.3} max={0.8} step={0.01} onChange={setFrontArea} />
        <Slider label="Top area (head + shoulders)" value={topArea} display={`${topArea.toFixed(2)} m²`} min={0.02} max={0.12} step={0.01} onChange={setTopArea} />
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px 24px',
        padding: '16px 0', marginBottom: 20,
        borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)',
      }}>
        <Slider label="Your walking speed" value={walkSpeed} display={`${walkSpeed.toFixed(1)} m/s`} min={0.8} max={2.5} step={0.1} onChange={setWalkSpeed} />
        <Slider label="Your running speed" value={runSpeed} display={`${runSpeed.toFixed(1)} m/s`} min={2} max={8} step={0.1} onChange={setRunSpeed} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 20 }}>
        {results.map((r) => (
          <div key={r.label} style={{ background: 'var(--surface-sand)', borderRadius: 'var(--radius-sm)', padding: '14px 16px' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>{r.label}</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-lg)', fontWeight: 500, color: 'var(--c-ink)' }}>{r.value}</div>
          </div>
        ))}
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }} role="img"
        aria-label="Chart of total water collected versus travel speed, showing the speed-independent front-soak floor">
        {/* axes */}
        <line x1={padL} y1={H - padB} x2={W - padR} y2={H - padB} stroke="var(--c-ink-300)" strokeWidth="1" />
        <line x1={padL} y1={padT} x2={padL} y2={H - padB} stroke="var(--c-ink-300)" strokeWidth="1" />
        <text x={padL} y={H - 12} fontSize="13" fill="var(--text-muted)" fontFamily="var(--font-serif)">Slow</text>
        <text x={W - padR} y={H - 12} fontSize="13" fill="var(--text-muted)" fontFamily="var(--font-serif)" textAnchor="end">Fast</text>
        <text x={padL - 8} y={padT + 4} fontSize="13" fill="var(--text-muted)" fontFamily="var(--font-serif)" textAnchor="end">mL</text>

        {/* front-only floor */}
        <line x1={padL} y1={floorY} x2={W - padR} y2={floorY} stroke="var(--c-teal)" strokeWidth="1.5" strokeDasharray="6 5" />
        <text x={W - padR} y={floorY - 8} fontSize="13" fill="var(--c-teal-600)" fontFamily="var(--font-serif)" textAnchor="end">front-only floor</text>

        {/* total water curve */}
        <path d={curve} fill="none" stroke="var(--c-ink)" strokeWidth="2.5" />

        {/* markers */}
        <circle cx={wx} cy={wy} r="7" fill="var(--c-ink)" />
        <text x={wx} y={wy - 12} fontSize="14" fill="var(--c-ink)" fontFamily="var(--font-serif)" textAnchor="middle">Walk</text>
        <circle cx={rx} cy={ry} r="7" fill="var(--c-teal)" />
        <text x={rx} y={ry - 12} fontSize="14" fill="var(--c-teal-600)" fontFamily="var(--font-serif)" textAnchor="middle">Run</text>
      </svg>
    </div>
  );
}
