import React, { useContext, useEffect } from "react";
import Button from "@/components/ui/Button";
import router from "next/router";
import QueueList from "@/components/queue/QueueList";
import Paragraph from "@/components/ui/Paragraph";
import KioskContext from "@/stores/kiosk-context";

import Service from "@/libs/remote-service";
import type { QueueGroup, QueueSection } from "@/stores/kiosk-context";

function QueueGroupPage({ groups }: { groups: QueueGroup[] }) {
  const ctx = useContext(KioskContext);

  useEffect(() => {
    ctx.setGroups(groups);
  }, []);

  return (
    <div className="w-full flex flex-col justify-between items-center">
      <div className="text-[45px] px-28 pt-20 grid grid-cols-1 grid-flow-row gap-12">
        {groups?.map((group: QueueGroup) => (
          <div key={group.objid}>
            <QueueList
              title={group.title}
              onClick={() => {
                router.push(`/menu/queue/${group.objid.toLowerCase()}`);
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

export default QueueGroupPage;

//====================================
//SERVER CODE
//====================================

export const getServerSideProps = async () => {
  const svc = Service.lookup("QueueGroupService", "etracs");
  const groupsWithSections = await svc.invoke("getGroupsWithSections", null);

  const groups: QueueGroup[] = groupsWithSections.map((item: any) => {
    const group: QueueGroup = {
      objid: item.objid,
      title: item.title,
      sections: getSections(item),
    };
    return group;
  });

  return {
    props: {
      groups,
    },
  };
};

function getSections(group: any) {
  return group.sections.map((item: any) => {
    const section: QueueSection = {
      objid: item.objid,
      groupid: item.groupid,
      title: item.title,
      currentseries: item.currentseries,
      group: {
        objid: group.objid,
        title: group.title,
      },
    };
    return section;
  });
}
