import Button from "@/components/ui/Button";
import { Bpls } from "@/stores/bplsitems";
import router from "next/router";
import React from "react";

function BplsItems({ bpls }: { bpls: Bpls }) {
  function viewBplsHandler() {
    router.push(`/menu/bpls/${bpls.id}`);
  }

  return (
    <div className="flex justify-center items-center w-full h-[150px] border-8 border-[#335F96] rounded-xl py-3">
      <Button
        text={bpls.title}
        onClick={viewBplsHandler}
        className="w-full h-full border-none font-bold"
      />
    </div>
  );
}

export default BplsItems;
