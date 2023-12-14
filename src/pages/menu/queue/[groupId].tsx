import Button from "@/components/ui/Button";
import { useRouter } from "next/router";
import QueueLayout from "@/components/queue/QueueLayout";
import ActionBar from "@/components/layouts/ActionBar";
import QueueSectionList from "@/components/queue/QueueSectionList";

function QueueSectionPage() {
  const router = useRouter();

  return (
    <QueueLayout>
      <QueueSectionList />
      <ActionBar>
        <Button
          text={"Back"}
          onClick={() => {
            router.push("/menu/queue");
          }}
        />
        <Button
          text={"Back"}
          onClick={() => {
            router.push("/menu/queue");
          }}
          className="invisible"
        />
      </ActionBar>
    </QueueLayout>
  );
}

export default QueueSectionPage;
