import React, { useContext, useEffect } from "react";
import KioskContext from "@/stores/kiosk-context";
import Service from "@/libs/remote-service";
import type { QueueGroup, QueueSection } from "@/stores/kiosk-context";
import QueueLayout from "@/components/queue/QueueLayout";
import QueueGroupList from "@/components/queue/QueueGroupList";
import ActionBar from "@/components/layouts/ActionBar";
import Button from "@/components/ui/Button";
import router from "next/router";
import Title from "@/components/ui/Title";
import Subtitle from "@/components/ui/Subtitle";

function QueueGroupPage({ groups }: { groups: QueueGroup[] }) {
  const ctx = useContext(KioskContext);

  useEffect(() => {
    ctx.setGroups(groups);
  }, []);

  return (
    <QueueLayout>
      <Subtitle text={"Select a Category below to proceed with your Choice."} />
      <QueueGroupList groups={groups} />
      <ActionBar>
        <Button
          text={"Back"}
          onClick={() => {
            router.push("/menu");
          }}
        />
        <Button
          text={"Next"}
          onClick={() => {
            router.push("/menu/queue");
          }}
          className="invisible"
        />
      </ActionBar>
    </QueueLayout>
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
