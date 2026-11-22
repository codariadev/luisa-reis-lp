
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function Button({
  children,
  href,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center
        bg-[#14284b]/95 text-white
        px-6 py-4 rounded-[10px]
        font-extrabold mt-4.5
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
