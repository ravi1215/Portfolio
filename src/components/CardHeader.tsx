import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const CardHeader = ( {title,desciption,className }: {
    title:string;
    desciption:string;
    className?:string;
}) => {
     return (
        <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10",className)}>
           <div className="inline-flex items-center gap-2">
            <StarIcon className="size-9 text-emerald-300"/>
            <div className="flex flex-col">
            <h3 className="font-serif text-3xl">{title}</h3>
            <p className="text-sm md:text-sm lg:text-sm max-w-xs text-white/60 mt-2">{desciption}</p>
            </div>
           </div>
        </div>
     );
}; 