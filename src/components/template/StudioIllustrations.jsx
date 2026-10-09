export default function StudioIllustration({ kind, x = 0, y = 0, scale = 1, hatch }) {
  const paper = 'var(--ctl-paper)';
  const line = { fill: 'none', stroke: 'currentColor', strokeWidth: .9, strokeLinejoin: 'round', strokeLinecap: 'round' };
  return <g transform={`translate(${x} ${y}) scale(${scale})`} color="var(--ctl-ink)"><g className="ctl-studio-art" {...line}>
    {kind === 'desk' && <>
      <path d="M-132-128L110-155L130-29L-112-2Z" fill={paper} /><path d="M-125-122L104-148L121-36L-105-10Z" fill={hatch} /><path d="M-115-115L96-138L109-47L-102-25Z" fill={paper} />
      <path d="M-52-83C-39-116 21-124 47-92C78-53 24-43-11-53C-44-63-32-94-5-91C23-88 19-63-2-71" /><path d="M-76-123L-66-43M-10-130L0-50M58-137L68-57M-100-95L98-117M-96-63L102-85" strokeDasharray="2 3" opacity=".5" />
      <path d="M-133-1H135V12H-133ZM-111 12L-132 105H-115L-84 12M102 12L129 105H113L76 12M-118 61H117" fill={paper} /><path d="M-133 5H135M-126 98H-116M117 98H126" /><path d="M-110-3H110V9H-110Z" fill={hatch} />
      <text x="-100" y="-57" fontFamily="Georgia,serif" fontSize="11" fill="currentColor" stroke="none" transform="rotate(-7 -100 -57)">NÉT / 01</text>
    </>}
    {kind === 'pen' && <>
      <path d="M0 2L-43 72L-28 146H28L43 72Z" fill={paper} /><path d="M0 2L43 72L28 146H11L25 72Z" fill={hatch} /><path d="M0 3V106M-39 76L-12 104M39 76L12 104" /><circle cy="107" r="10" fill={paper} />
      <path d="M-30 146H30V166H-30ZM-24 166H24V235H-24Z" fill={paper} /><path d="M-24 166H24V235H-24Z" fill={hatch} /><path d="M-28 154H28M-13 169V228M-8 169V228M-3 169V228M2 169V228M7 169V228M12 169V228M17 169V228" strokeWidth=".55" /><path d="M-34 235H34V248H-34Z" fill={paper} /><path d="M-29 242H29" />
    </>}
    {kind === 'web' && <>
      <rect x="-94" y="-54" width="188" height="112" rx="3" fill={paper} /><path d="M-94-54H94V-36H-94Z" fill={hatch} /><path d="M-94-35H94" /><circle cx="-82" cy="-45" r="2" /><circle cx="-74" cy="-45" r="2" /><circle cx="-66" cy="-45" r="2" />
      <rect x="-79" y="-22" width="58" height="61" fill={hatch} /><path d="M-8-21H75M-8-11H53M-8 1H68M-8 11H59M-8 32H34V44H-8Z" /><path d="M-23 58V72H23V58M-41 72H41V80H-41Z" fill={paper} /><path d="M-56 18L-45 7L-34 18M-45 7V30" />
    </>}
    {kind === 'easel' && <>
      <path d="M-64 207L-21 5H-11L-46 207ZM64 207L21 5H11L46 207Z" fill={paper} /><rect x="-82" y="25" width="164" height="137" fill={paper} /><rect x="-75" y="32" width="150" height="123" fill={hatch} /><rect x="-68" y="39" width="136" height="109" fill={paper} />
      <path d="M0 122V67M0 102C-39 96-49 79-47 62C-15 55-3 78 0 102ZM0 88C34 84 48 65 45 50C17 44 2 63 0 88" /><path d="M-42 64L-6 98M41 54L5 85M-30 62L-26 77M-17 66L-15 87M25 51L24 67M14 55L14 75" strokeWidth=".65" /><path d="M-92 162H92V175H-92ZM-59 187H59" fill={paper} /><path d="M-86 169H86M-32 175L-36 198M32 175L36 198" />
    </>}
    {kind === 'palette' && <>
      <path d="M-37 67C-88 73-106 126-73 166C-44 202 7 205 37 178C49 166 30 152 17 150C-9 145-4 121 14 108C38 89 1 59-37 67Z" fill={paper} /><path d="M-76 151C-43 193 15 187 30 166" fill={hatch} />
      {[[-51, 95], [-72, 119], [-54, 156], [-21, 175], [2, 89]].map(([cx, cy]) => <circle key={cx} cx={cx} cy={cy} r="8" fill={hatch} />)}<ellipse cx="-5" cy="126" rx="10" ry="14" />
      <path d="M12 219L55 7L68 10L26 222Z" fill={paper} /><path d="M55 7L63-21L68 10M46 55L59 58M40 82L53 85M16 213L24 216" /><path d="M-72 232H52V243H-72Z" fill={paper} />
    </>}
    {kind === 'swatches' && <>
      <rect x="-40" y="-25" width="64" height="45" fill={paper} transform="rotate(-20)" /><rect x="-34" y="-20" width="64" height="45" fill={paper} transform="rotate(-8)" /><rect x="-28" y="-15" width="64" height="45" fill={paper} /><path d="M-21-8H-7V12H-21ZM0-8H14V12H0ZM21-8H29V12H21Z" fill={hatch} /><path d="M-21 20H29" /><circle cx="-18" cy="23" r="2" />
    </>}
  </g></g>;
}
