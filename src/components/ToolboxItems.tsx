import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import { Fragment } from "react";

type ToolboxItem = {
  title: string;
  iconType: React.ElementType;
};

export const ProminentToolboxItems = ({
  items,
  className,
}: {
  items: ToolboxItem[];
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "grid grid-cols-2 md:grid-cols-4 gap-3 px-6 md:px-10 pb-4",
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.title}
          className="inline-flex items-center gap-3 py-3 px-3 md:px-4 rounded-xl outline outline-2 outline-emerald-300/30 bg-gradient-to-br from-emerald-300/10 to-sky-400/10"
        >
          <TechIcon component={item.iconType} />
          <span className="font-semibold text-sm md:text-base">{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: ToolboxItem[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div className={twMerge(
      "flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transaprent)]",
      className
    )}
    >
      <div className={twMerge(
        "flex flex-none py-0.5 gap-6 pr-6",
        itemsWrapperClassName
      )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <TechIcon component={item.iconType} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};