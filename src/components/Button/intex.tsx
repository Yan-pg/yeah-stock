import { Icon } from "@phosphor-icons/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: Icon;
}

export function Button({
  startIcon: StartIcon,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className="bg-blue-dark text-white border-none rounded-lg flex items-center justify-center gap-2 py-1 px-5 h-8"
    >
      {StartIcon && (
        <StartIcon size={20} className="text-white" weight="bold" />
      )}
      {children}
    </button>
  );
}
