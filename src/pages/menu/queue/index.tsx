import ActionBar from "@/components/layout/ActionBar";
import QueueGroupList from "@/components/queue/GroupList";
import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import Service from "@/libs/remote-service";
import { QueueGroup, QueueSection } from "@/services/context/queue-context";
import Layout from "./layout";

function QueueGroupPage({ groups }: { groups: QueueGroup[] }) {
  return (
    <Layout>
      <Title
        text={`Select a Category below to proceed with your choice.`}
        textSize="text-4xl"
      />
      <QueueGroupList groups={groups} />
      <ActionBar>
        <Button href="/menu" buttonText="Back" animation="shrink" />
      </ActionBar>
    </Layout>
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
