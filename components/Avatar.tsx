const COLORS = ['#7c3aed', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

interface AvatarProps {
  name: string;
  size?: number;
  color?: string;
}

export default function Avatar({ name, size = 32, color }: AvatarProps) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  const bg = color || COLORS[name.charCodeAt(0) % COLORS.length];

  return (
    <div
      className="flex items-center justify-center text-white flex-shrink-0 font-bold"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: bg,
        fontSize: size * 0.36,
        letterSpacing: '0.02em',
      }}
    >
      {initials}
    </div>
  );
}
