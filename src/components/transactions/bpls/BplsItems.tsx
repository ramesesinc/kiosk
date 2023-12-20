import Button from "@/components/ui/Button";
import { Bpls } from "@/stores/bplsitems";
import router from "next/router";
import React from "react";

function BplsItems({ bpls }: { bpls: Bpls }) {
  function viewBplsHandler() {
    router.push(`/menu/bpls/${bpls.id}`);
  }

  return (
    <div className="flex justify-center items-center w-full border border-[#335F96] rounded-2xl py-3">
      <Button
        text={bpls.id}
        onClick={viewBplsHandler}
        className="w-full border-none font-bold"
      />
    </div>
  );
}

export default BplsItems;
