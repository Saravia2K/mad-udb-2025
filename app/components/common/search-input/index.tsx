import { useId } from "react";

import MagnifyingGlass from "@/components/icons/magnifying-glass";

import styles from "./search-input.module.scss";

export default function SearchInput({ onChange }: SearchInputProps) {
  const id = useId();
  const inputId = `search-input-${id}`;

  return (
    <div className={styles["search-input"]}>
      <label htmlFor={inputId}>
        <MagnifyingGlass />
      </label>
      <input
        name={inputId}
        id={inputId}
        placeholder="Buscar"
        onChange={(e) => onChange && onChange(e.target.value || "")}
      />
    </div>
  );
}

type SearchInputProps = {
  onChange?: (val: string) => void;
};
