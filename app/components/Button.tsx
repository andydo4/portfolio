import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  icon?: string;
  iconAlt?: string;
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  icon,
  iconAlt = "",
  className = "",
  target,
  rel,
  onClick,
}: ButtonProps) {
  // Base classes for all buttons
  const baseClasses =
    "font-['Instrument_Sans'] text-white bg-[#292929] border border-[#474747] rounded-[5px] m-1.25 text-center flex items-center justify-center transition-transform duration-300 ease";

  // Classes for skill tags (no link, no icon)
  const skillClasses =
    "text-[10px] md:text-xs px-1 md:px-2.5 py-0.5 md:py-1.25 h-7 hover:scale-110";

  // Classes for link buttons (with icon)
  const linkClasses = icon
    ? "flex flex-row text-xs h-7 px-2.5 py-1.25 gap-1.75 no-underline hover:scale-120"
    : "";

  const combinedClasses = `${baseClasses} ${
    icon ? linkClasses : skillClasses
  } ${className}`;

  if (href) {
    if (href.startsWith("http") || href.startsWith("//")) {
      return (
        <a
          href={href}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          className={combinedClasses}
        >
          {icon && <Image src={icon} alt={iconAlt} width={15} height={15} />}
          <p>{children}</p>
        </a>
      );
    } else {
      return (
        <Link href={href} className={combinedClasses}>
          {icon && <Image src={icon} alt={iconAlt} width={15} height={15} />}
          <p>{children}</p>
        </Link>
      );
    }
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={combinedClasses}>
        {icon && <Image src={icon} alt={iconAlt} width={15} height={15} />}
        <p>{children}</p>
      </button>
    );
  }

  // Default: skill tag (no link, no icon)
  return (
    <div className={combinedClasses}>
      <p>{children}</p>
    </div>
  );
}
