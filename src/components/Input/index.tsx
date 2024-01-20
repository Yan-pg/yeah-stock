import { Icon } from "@phosphor-icons/react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: Icon;
  label?: string;
  error?: boolean;
}

export function Input({
  startIcon: StartIcon,
  label,
  error,
  ...rest
}: InputProps) {
  return (
    <div>
      {label && <label className="text-gray-primary">{label}</label>}
      <div className="flex items-center gap-5 bg-[#242424] border border-black-light rounded-lg px-4">
        {StartIcon && <StartIcon size={20} className="text-white" />}
        <input
          {...rest}
          className="placeholder:text-black-light text-white bg-transparent outline-none w-full h-8 px-1"
        />
      </div>
      {error && <span className="text-red-600">{label} is required</span>}
    </div>
  );
}
