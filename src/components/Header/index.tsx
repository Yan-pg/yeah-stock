import { MagnifyingGlass, Plus } from "@phosphor-icons/react";
import { Input } from "../Input";
import { Button } from "../Button/intex";

export function Header() {
  return (
    <header className="flex items-center justify-between pr-10 mt-10">
      <div className=" md:max-w-96 md:w-full">
        <Input startIcon={MagnifyingGlass} placeholder="Search product" />
      </div>
      <div className="flex items-center gap-5">
        <Button startIcon={Plus}>Add Product</Button>
        <img
          src="https://avatars.githubusercontent.com/u/65233281?v=4"
          alt="avatar"
          className="h-14 w-14 rounded-full hidden md:block"
        />
      </div>
    </header>
  );
}
