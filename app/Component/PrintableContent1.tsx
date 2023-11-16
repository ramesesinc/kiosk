import React, { forwardRef, ForwardRefRenderFunction, Ref } from "react";

const PrintableContent1: ForwardRefRenderFunction<HTMLDivElement, {}> = (
  props,
  ref: Ref<HTMLDivElement>
) => (
  <div ref={ref} className="flex flex-col justify-center items-center">
    <img className="w-[80px] h-[80px]" src="/Qr.png" alt="" />
    <h1 className="text-[35px] uppercase font-semibold">Queue No</h1>
    <p className="text-[70px] font-bold ">001</p>
  </div>
);

export default forwardRef(PrintableContent1);
