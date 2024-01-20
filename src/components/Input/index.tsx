import { Icon } from "@phosphor-icons/react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: Icon;
}

export function Input({ startIcon: StartIcon, ...rest }: InputProps) {
  return (
    <div className="flex items-center gap-5 bg-[#242424] border border-black-light rounded-lg px-4">
      {StartIcon && <StartIcon size={20} className="text-white" />}
      <input
        {...rest}
        className="placeholder:text-black-light text-white bg-transparent outline-none w-full h-8 px-1"
      />
    </div>
  );
}
