import React, { useState, useEffect, useRef } from 'react'
import './Hero.css'


const FlowerDefs = ({ id = '' }) => (
  <defs>
    <linearGradient id={`soilTop${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#6B4226" />
      <stop offset="100%" stopColor="#4a2f1a" />
    </linearGradient>
    <linearGradient id={`soilDeep${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#3d2010" />
      <stop offset="100%" stopColor="#2a1508" />
    </linearGradient>

    <linearGradient id={`seedG${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#d4a866" />
      <stop offset="40%" stopColor="#b8843a" />
      <stop offset="100%" stopColor="#7a5220" />
    </linearGradient>

    <linearGradient id={`huskG${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#c9a96e" />
      <stop offset="100%" stopColor="#8c6030" />
    </linearGradient>

    <linearGradient id={`stemG${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stopColor="#1e5c12" />
      <stop offset="35%"  stopColor="#4a9e2a" />
      <stop offset="65%"  stopColor="#5db335" />
      <stop offset="100%" stopColor="#2d7018" />
    </linearGradient>

    <linearGradient id={`cotylG${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#a8d860" />
      <stop offset="100%" stopColor="#6aaa30" />
    </linearGradient>

    <linearGradient id={`leafG${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#5fb840" />
      <stop offset="50%" stopColor="#3d9020" />
      <stop offset="100%" stopColor="#2a6e14" />
    </linearGradient>

    <linearGradient id={`sepalG${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#8ab840" />
      <stop offset="100%" stopColor="#4a7a18" />
    </linearGradient>

    <linearGradient id={`budG${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#c8d860" />
      <stop offset="50%" stopColor="#8aab30" />
      <stop offset="100%" stopColor="#5a7a1a" />
    </linearGradient>

    <linearGradient id={`petalG${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%"   stopColor="#ffe566" />
      <stop offset="30%"  stopColor="#ffc800" />
      <stop offset="70%"  stopColor="#e88000" />
      <stop offset="100%" stopColor="#c85a00" />
    </linearGradient>

    <linearGradient id={`petalInnerG${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%"  stopColor="#fff380" />
      <stop offset="50%" stopColor="#ffe040" />
      <stop offset="100%" stopColor="#ffaa00" />
    </linearGradient>

    <radialGradient id={`discG${id}`} cx="38%" cy="32%" r="62%">
      <stop offset="0%"   stopColor="#8a4010" />
      <stop offset="40%"  stopColor="#5c2a06" />
      <stop offset="80%"  stopColor="#3a1802" />
      <stop offset="100%" stopColor="#1e0c00" />
    </radialGradient>

    <radialGradient id={`discRimG${id}`} cx="50%" cy="50%" r="50%">
      <stop offset="65%" stopColor="transparent" />
      <stop offset="100%" stopColor="rgba(255,160,40,0.25)" />
    </radialGradient>

    <radialGradient id={`pollenG${id}`} cx="50%" cy="50%" r="50%">
      <stop offset="60%" stopColor="transparent" />
      <stop offset="85%" stopColor="rgba(255,220,50,0.4)" />
      <stop offset="100%" stopColor="transparent" />
    </radialGradient>

    <linearGradient id={`stemGg${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stopColor="#2d6a1f" />
      <stop offset="50%"  stopColor="#5a9e3a" />
      <stop offset="100%" stopColor="#3a7a28" />
    </linearGradient>
    <linearGradient id={`leafGg${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#6abf4b" />
      <stop offset="100%" stopColor="#3d7a28" />
    </linearGradient>
    <linearGradient id={`petalGg${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%"   stopColor="#ffe44d" />
      <stop offset="40%"  stopColor="#ffcc00" />
      <stop offset="100%" stopColor="#e68a00" />
    </linearGradient>
    <linearGradient id={`petalInnerGg${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%"  stopColor="#fff176" />
      <stop offset="60%" stopColor="#ffd740" />
      <stop offset="100%" stopColor="#ffab00" />
    </linearGradient>
    <radialGradient id={`discGg${id}`} cx="38%" cy="35%" r="60%">
      <stop offset="0%"   stopColor="#7a3b10" />
      <stop offset="50%"  stopColor="#5c2a08" />
      <stop offset="100%" stopColor="#3b1a04" />
    </radialGradient>
    <radialGradient id={`discRimGg${id}`} cx="50%" cy="50%" r="50%">
      <stop offset="70%" stopColor="transparent" />
      <stop offset="100%" stopColor="rgba(255,180,60,0.3)" />
    </radialGradient>

    <radialGradient id={`backGlow${id}`} cx="50%" cy="50%" r="50%">
      <stop offset="0%"  stopColor="rgba(255,230,50,0.92)" />
      <stop offset="30%" stopColor="rgba(255,200,20,0.65)" />
      <stop offset="60%" stopColor="rgba(255,160,0,0.28)" />
      <stop offset="85%" stopColor="rgba(255,120,0,0.08)" />
      <stop offset="100%" stopColor="rgba(255,100,0,0)" />
    </radialGradient>

    <filter id={`glow${id}`} x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <filter id={`backGlowFilter${id}`} x="-80%" y="-80%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="14" result="blur1" />
      <feGaussianBlur in="blur1" stdDeviation="8" result="blur2" />
      <feMerge>
        <feMergeNode in="blur2" />
        <feMergeNode in="blur1" />
      </feMerge>
    </filter>

    <filter id={`shadow${id}`} x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,0.3)" />
    </filter>

    <filter id={`petalTex${id}`}>
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise"/>
      <feColorMatrix type="saturate" values="0" result="gray"/>
      <feBlend in="SourceGraphic" in2="gray" mode="overlay" result="blend"/>
      <feComposite in="blend" in2="SourceGraphic" operator="in"/>
    </filter>
  </defs>
)

const Petal = ({ cx, cy, angle, length, width, fillUrl, opacity = 1, twisted = 0 }) => {
  const rad = (angle * Math.PI) / 180
  const tipX = cx + Math.cos(rad) * length
  const tipY = cy + Math.sin(rad) * length
  const perp = rad + Math.PI / 2 + twisted * 0.15

  const c1x = cx + Math.cos(rad) * length * 0.25 + Math.cos(perp) * width
  const c1y = cy + Math.sin(rad) * length * 0.25 + Math.sin(perp) * width
  const c2x = cx + Math.cos(rad) * length * 0.65 + Math.cos(perp) * width * 0.7
  const c2y = cy + Math.sin(rad) * length * 0.65 + Math.sin(perp) * width * 0.7
  const c3x = cx + Math.cos(rad) * length * 0.25 - Math.cos(perp) * width
  const c3y = cy + Math.sin(rad) * length * 0.25 - Math.sin(perp) * width
  const c4x = cx + Math.cos(rad) * length * 0.65 - Math.cos(perp) * width * 0.7
  const c4y = cy + Math.sin(rad) * length * 0.65 - Math.sin(perp) * width * 0.7

  const v1x = cx + Math.cos(rad) * length * 0.72
  const v1y = cy + Math.sin(rad) * length * 0.72

  const sv1ax = cx + Math.cos(rad) * length * 0.4 + Math.cos(perp) * 4
  const sv1ay = cy + Math.sin(rad) * length * 0.4 + Math.sin(perp) * 4
  const sv1bx = cx + Math.cos(rad) * length * 0.55 + Math.cos(perp) * width * 0.5
  const sv1by = cy + Math.sin(rad) * length * 0.55 + Math.sin(perp) * width * 0.5
  const sv2ax = cx + Math.cos(rad) * length * 0.4 - Math.cos(perp) * 4
  const sv2ay = cy + Math.sin(rad) * length * 0.4 - Math.sin(perp) * 4
  const sv2bx = cx + Math.cos(rad) * length * 0.55 - Math.cos(perp) * width * 0.5
  const sv2by = cy + Math.sin(rad) * length * 0.55 - Math.sin(perp) * width * 0.5

  return (
    <g opacity={opacity}>
      <path
        d={`M ${cx} ${cy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${tipX} ${tipY} C ${c4x} ${c4y}, ${c3x} ${c3y}, ${cx} ${cy}`}
        fill={fillUrl}
        stroke="rgba(160,80,0,0.2)"
        strokeWidth="0.4"
      />
      <line x1={cx} y1={cy} x2={v1x} y2={v1y}
        stroke="rgba(180,100,0,0.3)" strokeWidth="0.8" />
      <line x1={sv1ax} y1={sv1ay} x2={sv1bx} y2={sv1by}
        stroke="rgba(180,100,0,0.2)" strokeWidth="0.5" />
      <line x1={sv2ax} y1={sv2ay} x2={sv2bx} y2={sv2by}
        stroke="rgba(180,100,0,0.2)" strokeWidth="0.5" />
    </g>
  )
}

const Disc = ({ cx, cy, r, id = '' }) => {
  const seeds = []
  const n = 220
  const goldenAngle = 137.5077640500378
  for (let i = 0; i < n; i++) {
    const t = i / n
    const sr = Math.sqrt(t) * (r - 1.5)
    const sa = (i * goldenAngle * Math.PI) / 180
    const sx = cx + sr * Math.cos(sa)
    const sy = cy + sr * Math.sin(sa)
    const seedR = 0.7 + t * 0.65
    const bright = Math.floor(55 + t * 55)
    const g = Math.floor(bright * 0.42)
    const b = Math.floor(bright * 0.08)
    seeds.push(
      <ellipse key={i} cx={sx} cy={sy}
        rx={seedR} ry={seedR * 1.15}
        transform={`rotate(${(i * goldenAngle) % 360},${sx},${sy})`}
        fill={`rgb(${bright},${g},${b})`}
      />
    )
  }
  return (
    <g>
      <circle cx={cx} cy={cy} r={r + 1} fill={`url(#discRimG${id})`} />
      <circle cx={cx} cy={cy} r={r} fill={`url(#discG${id})`} />
      <circle cx={cx} cy={cy} r={r} fill={`url(#pollenG${id})`} />
      {seeds}
      <ellipse cx={cx - r * 0.22} cy={cy - r * 0.26}
        rx={r * 0.28} ry={r * 0.16}
        fill="rgba(255,230,160,0.18)" />
      <circle cx={cx + r * 0.1} cy={cy + r * 0.12} r={r * 0.4}
        fill="rgba(0,0,0,0.12)" />
    </g>
  )
}

const TrueLeaf = ({ x1, y1, angle, size, id = '', flip = false }) => {
  const rad = (angle * Math.PI) / 180
  const ex = x1 + Math.cos(rad) * size
  const ey = y1 + Math.sin(rad) * size
  const perp = rad + (flip ? -Math.PI / 2 : Math.PI / 2)
  const cpx = x1 + Math.cos(rad) * size * 0.5 + Math.cos(perp) * size * 0.4
  const cpy = y1 + Math.sin(rad) * size * 0.5 + Math.sin(perp) * size * 0.4
  const cp2x = x1 + Math.cos(rad) * size * 0.5 - Math.cos(perp) * size * 0.15
  const cp2y = y1 + Math.sin(rad) * size * 0.5 - Math.sin(perp) * size * 0.15

  const notches = []
  for (let i = 0; i < 3; i++) {
    const t = 0.25 + i * 0.25
    const nx = x1 + Math.cos(rad) * size * t + Math.cos(perp) * size * 0.35
    const ny = y1 + Math.sin(rad) * size * t + Math.sin(perp) * size * 0.35
    const depth = size * 0.08
    notches.push({ nx: nx - Math.cos(perp) * depth, ny: ny - Math.sin(perp) * depth, t })
  }

  return (
    <g filter={`url(#shadow${id})`}>
      <path
        d={`M ${x1} ${y1} Q ${cpx} ${cpy} ${ex} ${ey} Q ${cp2x} ${cp2y} ${x1} ${y1}`}
        fill={`url(#leafG${id})`}
        stroke="#1e5c12"
        strokeWidth="0.8"
      />
      <line x1={x1} y1={y1} x2={ex} y2={ey}
        stroke="#1e5c12" strokeWidth="1" opacity="0.6" />
      {/* Side veins */}
      {[0.3, 0.55, 0.75].map((t2, vi) => {
        const vx = x1 + Math.cos(rad) * size * t2
        const vy = y1 + Math.sin(rad) * size * t2
        const vex = vx + Math.cos(perp) * size * 0.25
        const vey = vy + Math.sin(perp) * size * 0.25
        return <line key={vi} x1={vx} y1={vy} x2={vex} y2={vey}
          stroke="#1e5c12" strokeWidth="0.5" opacity="0.45" />
      })}
    </g>
  )
}

const RealisticFlower = ({ stage, isFlying, id = 'main' }) => {
  const cx = 110, cy = 108

  const stemTopY = [285, 255, 220, 185, 155, 130][stage]
  const stemW   = [0,   4,   5,   6,   7,   8  ][stage]

  const discR = [0, 0, 0, 14, 20, 28][stage]

  const outerCount = [0, 0, 0, 10, 15, 20][stage]
  const outerLen   = [0, 0, 0, 32, 46, 62][stage]
  const outerWid   = [0, 0, 0, 7,  10, 14][stage]

  const innerCount = [0, 0, 0, 0,  10, 16][stage]
  const innerLen   = [0, 0, 0, 0,  28, 40][stage]
  const innerWid   = [0, 0, 0, 0,   6,  9][stage]

  const petalOpacity = (i) => stage === 3 ? 0.4 + (i % 3) * 0.2 : 1

  return (
    <svg
      width="220" height="310" viewBox="0 0 220 310"
      className={isFlying ? 'fly-to-garden' : ''}
      style={{ overflow: 'visible' }}
    >
      <FlowerDefs id={id} />

      <rect x="10" y="270" width="200" height="40"
        rx="6" fill="url(#soilTop)" />
      <rect x="10" y="282" width="200" height="28"
        rx="0" fill="url(#soilDeep)" />
      {[25,55,80,105,140,165,188].map((x, i) => (
        <circle key={i} cx={x} cy={275 + (i % 3) * 3}
          r={1.2} fill="rgba(255,255,255,0.12)" />
      ))}

      {stage === 0 && (
        <g>
          <ellipse cx={cx} cy={268} rx={9} ry={13}
            fill="url(#seedG)" stroke="#7a5220" strokeWidth="1" />
          {[-3, 0, 3].map((dx, i) => (
            <line key={i}
              x1={cx + dx} y1={256} x2={cx + dx * 0.6} y2={280}
              stroke="rgba(80,40,10,0.4)" strokeWidth="0.8" />
          ))}
          <ellipse cx={cx} cy={256} rx={4} ry={3}
            fill="#c8a050" />
          <path d={`M ${cx} 280 Q ${cx+8} 292 ${cx+5} 302`}
            fill="none" stroke="rgba(200,170,120,0.5)" strokeWidth="1.2" strokeLinecap="round" />
          <path d={`M ${cx} 280 Q ${cx-6} 293 ${cx-4} 300`}
            fill="none" stroke="rgba(200,170,120,0.4)" strokeWidth="1" strokeLinecap="round" />
          <ellipse cx={cx} cy={268} rx={9} ry={13}
            fill="rgba(50,25,8,0.25)" />
        </g>
      )}

      {stage === 1 && (
        <g>
          <path d={`M 85 270 Q 100 265 110 268 Q 120 265 135 270`}
            fill="none" stroke="#8B6040" strokeWidth="2" strokeLinecap="round" />
          <path d={`M 95 270 Q 103 260 108 254`}
            fill="none" stroke="#5a3820" strokeWidth="1.5" />
          <ellipse cx={cx} cy={252} rx={7} ry={10}
            fill="url(#huskG)" stroke="#8c6030" strokeWidth="0.8" opacity="0.8" />
          <path d={`M ${cx} 270 Q ${cx - 12} 255 ${cx} 250`}
            fill="none" stroke="#c8e880" strokeWidth="4" strokeLinecap="round" />
          <path d={`M ${cx} 252 Q ${cx-14} 242 ${cx-16} 234`}
            fill="none" stroke="#a8d850" strokeWidth="3.5" strokeLinecap="round" />
          <path d={`M ${cx} 252 Q ${cx+10} 243 ${cx+8} 235`}
            fill="none" stroke="#a8d850" strokeWidth="3.5" strokeLinecap="round" />
        </g>
      )}

      {stage === 2 && (
        <g>
          <path
            d={`M ${cx} 270 Q ${cx - 5} 240 ${cx} ${stemTopY}`}
            fill="none" stroke="#9ed450" strokeWidth="3" strokeLinecap="round"
          />
          <ellipse cx={cx - 18} cy={232} rx={14} ry={9}
            fill="url(#cotylG)" stroke="#5a9020" strokeWidth="0.7"
            transform={`rotate(-20,${cx-18},232)`} />
          <ellipse cx={cx + 18} cy={232} rx={14} ry={9}
            fill="url(#cotylG)" stroke="#5a9020" strokeWidth="0.7"
            transform={`rotate(20,${cx+18},232)`} />
          <line x1={cx - 18} y1={226} x2={cx - 18} y2={238}
            stroke="#4a8018" strokeWidth="0.8" opacity="0.6" transform={`rotate(-20,${cx-18},232)`} />
          <line x1={cx + 18} y1={226} x2={cx + 18} y2={238}
            stroke="#4a8018" strokeWidth="0.8" opacity="0.6" transform={`rotate(20,${cx+18},232)`} />
          <ellipse cx={cx} cy={stemTopY - 2} rx={5} ry={7}
            fill="#b0e050" stroke="#5a9020" strokeWidth="0.5" />
        </g>
      )}

      {stage >= 3 && (
        <>
          <path
            d={`M ${cx} 275 Q ${cx - 10} ${(275 + stemTopY) / 2 + 20} ${cx} ${stemTopY}`}
            fill="none" stroke={`url(#stemG${id})`}
            strokeWidth={stemW} strokeLinecap="round"
          />
          <path
            d={`M ${cx + 2} 275 Q ${cx - 7} ${(275 + stemTopY) / 2 + 20} ${cx + 2} ${stemTopY}`}
            fill="none" stroke="rgba(200,255,120,0.2)"
            strokeWidth={stemW * 0.3} strokeLinecap="round"
          />
        </>
      )}

      {stage >= 3 && (
        <>
          <TrueLeaf id={id} x1={104} y1={220} angle={-150} size={52} flip={false} />
          <TrueLeaf id={id} x1={116} y1={198} angle={-30}  size={48} flip={true}  />
          {stage >= 4 && (
            <>
              <TrueLeaf id={id} x1={106} y1={180} angle={-160} size={40} flip={false} />
              <TrueLeaf id={id} x1={114} y1={165} angle={-20}  size={36} flip={true}  />
            </>
          )}
        </>
      )}

      {stage === 3 && (
        <g filter={`url(#shadow${id})`}>
          <ellipse cx={cx} cy={stemTopY + 5} rx={12} ry={7}
            fill="#6a9830" stroke="#4a7018" strokeWidth="1" />
          {[0, 51, 102, 153, 204, 255, 306].map((a, i) => {
            const r2 = (a * Math.PI) / 180
            return (
              <path key={i}
                d={`M ${cx + Math.cos(r2) * 11} ${stemTopY + 4 + Math.sin(r2) * 5}
                    Q ${cx + Math.cos(r2) * 16} ${stemTopY - 12}
                      ${cx + Math.cos(r2) * 6} ${stemTopY - 24}`}
                fill="url(#sepalG)" stroke="#3a6010" strokeWidth="0.8"
              />
            )
          })}
          <ellipse cx={cx} cy={stemTopY - 12} rx={11} ry={17}
            fill="url(#budG)" stroke="#4a7018" strokeWidth="0.8" />
          <ellipse cx={cx} cy={stemTopY - 26} rx={6} ry={4}
            fill="#e8d020" opacity="0.5" />
        </g>
      )}

      {stage === 4 && (
        <>
          <ellipse cx={cx} cy={stemTopY + 6} rx={14} ry={8}
            fill="#6a9830" stroke="#4a7018" strokeWidth="1" />
          {[0, 51, 102, 153, 204, 255, 306].map((a, i) => {
            const r2 = (a * Math.PI) / 180
            const spread = 0.6
            return (
              <path key={i}
                d={`M ${cx + Math.cos(r2) * 12} ${stemTopY + 4 + Math.sin(r2) * 5}
                    Q ${cx + Math.cos(r2) * 22 * spread} ${stemTopY}
                      ${cx + Math.cos(r2) * 26 * spread} ${stemTopY + 8}`}
                fill="url(#sepalG)" stroke="#3a6010" strokeWidth="0.7"
              />
            )
          })}
          {[...Array(outerCount)].map((_, i) => {
            const angle = (i * 360 / outerCount) - 90
            const curl = i % 3 === 0 ? 0.7 : i % 3 === 1 ? 0.85 : 1
            return (
              <Petal key={`op${i}`}
                cx={cx} cy={cy}
                angle={angle}
                length={outerLen * curl}
                width={outerWid * curl}
                fillUrl={`url(#petalG${id})`}
                opacity={0.55 + (i % 3) * 0.2}
                twisted={i % 2 === 0 ? 1 : -1}
              />
            )
          })}
          <Disc cx={cx} cy={cy} r={discR * 0.7} id={id} />
        </>
      )}

      {stage === 5 && (
        <>
          <circle cx={cx} cy={cy} r={150}
            fill={`url(#backGlow${id})`} 
            opacity="0.45" 
            filter={`url(#backGlowFilter${id})`} />

          <ellipse cx={cx} cy={stemTopY + 8} rx={16} ry={9}
            fill="#6a9830" stroke="#4a7018" strokeWidth="1" />
          {[0, 51, 102, 153, 204, 255, 306].map((a, i) => {
            const r2 = (a * Math.PI) / 180
            return (
              <path key={i}
                d={`M ${cx + Math.cos(r2) * 14} ${stemTopY + 5 + Math.sin(r2) * 5}
                    Q ${cx + Math.cos(r2) * 30} ${cy + 20}
                      ${cx + Math.cos(r2) * 34} ${cy + 28}`}
                fill="url(#sepalG)" stroke="#3a6010" strokeWidth="0.7"
              />
            )
          })}

          {[...Array(outerCount)].map((_, i) => {
            const angle = (i * 360 / outerCount) - 90
            return (
              <Petal key={`op${i}`}
                cx={cx} cy={cy}
                angle={angle}
                length={outerLen}
                width={outerWid}
                fillUrl={`url(#petalG${id})`}
                opacity={1}
                twisted={i % 2 === 0 ? 0.3 : -0.3}
              />
            )
          })}

          {[...Array(innerCount)].map((_, i) => {
            const angle = (i * 360 / innerCount) - 90 + (180 / innerCount)
            return (
              <Petal key={`ip${i}`}
                cx={cx} cy={cy}
                angle={angle}
                length={innerLen}
                width={innerWid}
                fillUrl={`url(#petalInnerG${id})`}
                opacity={0.92}
              />
            )
          })}

          <Disc cx={cx} cy={cy} r={discR} id={id} />

          <g filter={`url(#glow${id})`}>
            <circle cx={cx} cy={cy} r={discR + 4}
              fill="none" stroke="rgba(255,210,50,0.1)" strokeWidth="1" />
            <circle cx={cx} cy={cy} r={discR + 10}
              fill="none" stroke="rgba(255,190,30,0.1)" strokeWidth="1" />
          </g>

        </>
      )}
    </svg>
  )
}

const GardenFlower = ({ id }) => {
  const cx = 45, cy = 42
  return (
    <svg width="90" height="120" viewBox="0 0 90 120" style={{ overflow: 'visible' }}>
      <FlowerDefs id={id} />
      <path d={`M 45 120 Q 43 90 ${cx} ${cy + 20}`}
        fill="none" stroke={`url(#stemGg${id})`} strokeWidth="4" strokeLinecap="round" />
      <path d={`M 42 90 Q 25 80 22 70 Q 32 78 42 84`}
        fill={`url(#leafGg${id})`} stroke="#2d6a1f" strokeWidth="0.6" />
      <path d={`M 48 78 Q 65 68 68 58 Q 58 66 48 72`}
        fill={`url(#leafGg${id})`} stroke="#2d6a1f" strokeWidth="0.6" />
      {[...Array(13)].map((_, i) => {
        const angle = (i * 360 / 13) - 90
        return <Petal key={`gop${i}`} cx={cx} cy={cy} angle={angle}
          length={22} width={5} fillUrl={`url(#petalGg${id})`} />
      })}
      {[...Array(9)].map((_, i) => {
        const angle = (i * 360 / 9) - 90 + 20
        return <Petal key={`gip${i}`} cx={cx} cy={cy} angle={angle}
          length={14} width={3.5} fillUrl={`url(#petalInnerGg${id})`} opacity={0.9} />
      })}
      <Disc cx={cx} cy={cy} r={10} id={id} />
    </svg>
  )
}



const Hero = () => {
  const [todos, setTodos] = useState([])
  const [newTodoText, setNewTodoText] = useState('')
  const [isAddingTodo, setIsAddingTodo] = useState(false)
  const [hoveredFlower, setHoveredFlower] = useState(null)
  const [isAnimatingToGarden, setIsAnimatingToGarden] = useState(false)
  const [previousCompleted, setPreviousCompleted] = useState(0)
  const inputRef = useRef(null)

  const completedCount = todos.filter(t => t.completed).length
  const completedTodos = todos.filter(t => t.completed)
  const maxTodos = 5
  const canAddMore = todos.length < maxTodos
  const allCompleted = todos.length === maxTodos && completedCount === maxTodos

  const flowerStage = completedCount

  useEffect(() => {
    if (completedCount === 5 && previousCompleted === 4) {
      const timer = setTimeout(() => {
        setIsAnimatingToGarden(true)
        setTimeout(() => setIsAnimatingToGarden(false), 1500)
      }, 1200)
      return () => clearTimeout(timer)
    }
    setPreviousCompleted(completedCount)
  }, [completedCount])

  useEffect(() => {
    setPreviousCompleted(completedCount)
  }, [completedCount])

  useEffect(() => {
    if (isAddingTodo && inputRef.current) inputRef.current.focus()
  }, [isAddingTodo])

  const toggleTodo = (id) =>
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))

  const addTodo = () => {
    if (newTodoText.trim() && canAddMore) {
      setTodos(prev => [...prev, { id: Date.now(), text: newTodoText, completed: false }])
      setNewTodoText('')
      setIsAddingTodo(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addTodo()
    else if (e.key === 'Escape') { setIsAddingTodo(false); setNewTodoText('') }
  }

  const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id))

  const clearAllTodos = () => {
    setTodos([]); setIsAddingTodo(false); setNewTodoText(''); setPreviousCompleted(0)
  }

  return (
    <div className="hero">
      <div className="bloom-container">
        <h1 className="bloom-title"> My Bloom List </h1>
        <p className="bloom-subtitle">Stay Consistent, Dv!</p>

        <div className="bloom-main-content">
          <div className="bloom-todo-section">
            {todos.length > 0 && (
              <div className="bloom-task-counter">
                {todos.length}/{maxTodos} tasks {!canAddMore && '(Max reached!)'}
              </div>
            )}

            {todos.map(todo => (
              <div key={todo.id} className="bloom-todo-item">
                <label className="bloom-checkbox-container">
                  <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                  <span className="bloom-checkmark"></span>
                  <span className={`bloom-todo-text ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
                </label>
                <button className="bloom-delete-btn" onClick={() => deleteTodo(todo.id)} aria-label="Delete task">×</button>
              </div>
            ))}

            <div className={`bloom-add-item${isAddingTodo ? ' bloom-add-item--open' : ''}`}>
              <input
                ref={inputRef}
                type="text"
                className="bloom-todo-input"
                placeholder="Enter your task..."
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                onKeyDown={handleKeyPress}
                tabIndex={isAddingTodo ? 0 : -1}
              />
              <div className="bloom-add-actions">
                <button className="bloom-save-btn" onClick={addTodo}>Save</button>
                <button className="bloom-cancel-btn" onClick={() => { setIsAddingTodo(false); setNewTodoText('') }}>Cancel</button>
              </div>
            </div>

            {!isAddingTodo && canAddMore && (
              <button className="bloom-add-btn" onClick={() => setIsAddingTodo(true)}>
                <span className="bloom-plus-icon">+</span>
                <span>Add Task</span>
              </button>
            )}

            {allCompleted && (
              <button className="bloom-clear-btn" onClick={clearAllTodos}>
                <span className="bloom-sparkle-icon">🌼</span>
                <span>Start Fresh Garden</span>
                <span className="bloom-sparkle-icon">🌼</span>
              </button>
            )}

            {todos.length === 0 && !isAddingTodo && (
              <div className="bloom-empty-state">
                <p>Tell me your first task!</p>
                <p className="bloom-empty-subtext">Add up to 5 tasks to grow your sunflower</p>
              </div>
            )}

            {!canAddMore && !allCompleted && !isAddingTodo && (
              <div className="bloom-max-reached">
                <p>You've added all 5 tasks!</p>
                <p className="bloom-max-subtext">Complete them all to bloom fully 🌻</p>
              </div>
            )}
          </div>

          <div className="bloom-flower-container">
            <RealisticFlower stage={flowerStage} isFlying={isAnimatingToGarden} id="main" />
            <div className="bloom-progress-text">{completedCount}/5 bloomed</div>
          </div>
        </div>

        <div className="bloom-garden">
          <div className="bloom-sky"></div>
          <div className="bloom-clouds">
            <div className="bloom-cloud bloom-cloud1"></div>
            <div className="bloom-cloud bloom-cloud2"></div>
            <div className="bloom-cloud bloom-cloud3"></div>
          </div>
          <h3 className="bloom-garden-title">DV's Garden</h3>
          <div className="bloom-garden-bed">
            <div className="bloom-grass-layer"></div>
            <div className="bloom-bushes">
              <div className="bloom-bush bloom-bush-left"></div>
              <div className="bloom-bush bloom-bush-right"></div>
              <div className="bloom-small-bush bloom-small-bush-1"></div>
              <div className="bloom-small-bush bloom-small-bush-2"></div>
            </div>
            <div className="bloom-flowers-container">
              {completedTodos.map((todo, index) => (
                <div
                  key={todo.id}
                  className="bloom-garden-flower"
                  style={{ '--delay': `${index * 0.2}s` }}
                  onMouseEnter={() => setHoveredFlower(todo.id)}
                  onMouseLeave={() => setHoveredFlower(null)}
                >
                  <GardenFlower id={`g${todo.id}`} />
                  {hoveredFlower === todo.id && (
                    <div className="bloom-flower-tooltip">{todo.text}</div>
                  )}
                </div>
              ))}
            </div>
            {completedTodos.length === 0 && (
              <div className="bloom-empty-garden"><p>Complete tasks to grow your sunflower garden!</p></div>
            )}
          </div>
          <div className="bloom-ground"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero