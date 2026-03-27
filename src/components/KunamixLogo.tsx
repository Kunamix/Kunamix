// components/KunamixLogo.tsx

interface KunamixLogoProps {
  size?: number;
  gradientId?: string;
}

const KunamixLogo = ({ size = 32, gradientId = "" }: KunamixLogoProps) => (
  <img
    src="/logo.webp"
    alt="Kunamix Logo"
    width={size}
    height={size}
    className={`shrink-0 object-contain ${gradientId}`}
    style={{ width: size, height: size }}
    aria-hidden="true"
  />
);

export default KunamixLogo;
