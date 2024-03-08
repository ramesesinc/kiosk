import Button from "@/components/ui/Button";
import { Rpt } from "@/stores/rpt-items";
import router from "next/router";

type RptItemsProps = {
  disabled: boolean;
};

function RptItems({ rpt, disabled }: { rpt: Rpt } & RptItemsProps) {
  function viewRptHandler() {
    router.push(`/menu/rpt/${rpt.id}`);
  }

  return (
    <>
      {!disabled && (
        <div className="flex justify-center items-center w-full h-[150px] border-8 border-[#335F96] rounded-xl py-3">
          <Button
            buttonText={rpt.title}
            onClick={viewRptHandler}
            classname="w-full h-full border-none font-bold"
          />
        </div>
      )}
    </>
  );
}

export default RptItems;
