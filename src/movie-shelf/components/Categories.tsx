import { useState } from "react";
import clsx from "clsx";

import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible } from "@/components/ui/collapsible";

import { Category } from "../types";

type Props = {
  selectedCategory: Category | undefined;
  onApplyCategory: (category: Category) => void;
};

export const Categories = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCheck = (category: Category) => {
    props.onApplyCategory(category);
    setIsOpen(false);
  };

  return (
    <Collapsible
      isOpen={isOpen}
      onToggle={setIsOpen}
      title="Categories"
      className={clsx(isOpen ? "mb-[68px]" : "mb-4")}
    >
      <form className={"flex flex-col rounded-xs overflow-hidden"}>
        <Checkbox
          checked={props.selectedCategory === "popular"}
          onCheck={() => handleCheck("popular")}
          label="Popular"
          id="popular"
        />

        <Checkbox
          checked={props.selectedCategory === "top_rated"}
          onCheck={() => handleCheck("top_rated")}
          label="Top Rated"
          id="topRated"
        />

        <Checkbox
          checked={props.selectedCategory === "upcoming"}
          onCheck={() => handleCheck("upcoming")}
          label="Upcoming"
          id="upcoming"
        />
      </form>
    </Collapsible>
  );
};
