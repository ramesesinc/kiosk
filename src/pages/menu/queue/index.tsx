import React, { useEffect } from "react";
import Button from "@/components/ui/Button";
import { createFetch } from "@/libs/fetch";
import { getGroupsWithSections } from "@/services/queue";
import router from "next/router";
import QueueList from "@/components/queue/QueueList";
import Paragraph from "@/components/ui/Paragraph";

type QueueGroup = {
  id: number;
  title: string;
  objid: string;
};

export default function Index() {
  const { value: queueGroups, execute } = createFetch(getGroupsWithSections);

  useEffect(() => {
    execute();
  }, []);

  return (
    <div className="w-full flex flex-col justify-between items-center">
      <div className="text-[45px] px-28 pt-20 grid grid-cols-1 grid-flow-row gap-12">
        {queueGroups?.map((group: QueueGroup) => (
          <div key={group.objid}>
            <QueueList
              title={group.title}
              onClick={() => {
                router.push(`/menu/queue/${group.objid}`);
              }}
            />
          </div>
        ))}
        <Paragraph text={""} />
      </div>
      <div className="text-[30px] gap-20 flex justify-center items-center w-full pt-10">
        <Button
          text={"Back"}
          onClick={() => {
            router.push("/menu");
          }}
        />
        <div className=" invisible">
          <Button text={"Next"} href="/" />
        </div>
      </div>
    </div>
  );
}
