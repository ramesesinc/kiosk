import KioskContext from "@/stores/kiosk-context";
import { useRouter } from "next/router";
import { useContext } from "react";

function QueueSectionPage() {
  const ctx = useContext(KioskContext);
  const router = useRouter();
  const groupId = router.query.groupId as string;
  const sections = ctx.getSections(groupId);

  return (
    <div>
      <p>SECTIONS:</p>
      {sections.map((section) => (
        <p key={section.objid}>{section.title}</p>
      ))}
    </div>
  );
}

export default QueueSectionPage;
