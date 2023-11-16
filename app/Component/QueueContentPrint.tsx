// PrintableContent.tsx
import React, { forwardRef, ForwardRefRenderFunction, Ref } from "react";

interface PrintableContentProps {
  heading: string;
  number: number;
}

const PrintableContent: ForwardRefRenderFunction<
  HTMLDivElement,
  PrintableContentProps
> = ({ heading, number }, ref: Ref<HTMLDivElement>) => (
  <div ref={ref} className="flex flex-col justify-center items-center">
    <div className="text-4xl text-center">
      <h2>{heading}</h2>
      <p className=" ">{`Q-${number}`}</p>
    </div>
  </div>
);

export default forwardRef(PrintableContent);
