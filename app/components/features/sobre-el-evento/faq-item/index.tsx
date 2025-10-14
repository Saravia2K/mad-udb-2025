import type { ReactNode } from "react";
import clsx from "clsx";
import Arrow from "@/components/icons/arrow";

import styles from "./faq-item.module.scss";

export default function FAQItem(props: FAQItemProps) {
  const { title, children, active, onClick } = props;

  return (
    <div
      onClick={onClick}
      className={clsx({ active }, "overflow-hidden", styles["faq-item"])}
    >
      <div className="mb-4 grid grid-cols-[10%_1fr] items-center border-b-2 border-b-white pb-2 md:gap-2">
        <Arrow
          className="scale-50 md:scale-60 lg:scale-80"
          style={{ transform: `rotate(${active ? 0 : -90}deg)` }}
        />
        <h3 className="font-[Nexa] font-bold md:text-3xl lg:text-4xl">
          {title}
        </h3>
      </div>
      <div style={{ maxHeight: active ? 1000 : 0 }}>{children}</div>
    </div>
  );
}

type FAQItemProps = {
  title: string;
  children: ReactNode;
  onClick?: () => void;
  active?: boolean;
};
