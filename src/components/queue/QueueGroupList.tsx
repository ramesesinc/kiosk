import React, { useState } from "react";
import QueueItem from "./QueueItem";
import { createFetch } from "@/libs/fetch";
import { fetchNextSeries } from "@/services/queue";
import QueueTicket from "./QueueTicket";
import QueueSectionList from "./QueueSectionList";

interface QueueGroupListProps {
  groups: QueueGroup[];
}

interface QueueGroup {
  objid: string;
  title: string;
  sections: QueueSection[];
}

interface QueueSection {
  objid: string;
  title: string;
}

const QueueGroupList: React.FC<QueueGroupListProps> = ({ groups }) => {
  const [isQueueTicketOpen, setIsQueueTicketOpen] = useState(false);
  const openQueueTicket = () => setIsQueueTicketOpen(true);
  const closeQueueTicket = () => setIsQueueTicketOpen(false);

  const { value: showticket, execute } = createFetch(fetchNextSeries);

  function nextTicket(sectionid: string) {
    execute({ sectionid });
    openQueueTicket();
  }

  return (
    <div className="text-[45px] grid grid-cols-1 grid-flow-row gap-12">
      {groups.map((group: QueueGroup) => (
        <div
          key={group.objid}
          className="flex flex-col gap-10 py-10 rounded-2xl "
        >
          <div className="text-4xl font-bold uppercase pb-5 border-b border-[#53bffa]">
            {group.title}
          </div>
          <QueueSectionList
            sections={group.sections}
            onClick={(sectionId) => {
              nextTicket(sectionId);
            }}
          />
        </div>
      ))}

      {showticket && (
        <QueueTicket
          isOpen={isQueueTicketOpen}
          onClose={closeQueueTicket}
          seriesno={showticket.seriesno}
          txndatestr={showticket.txndatestr}
        />
      )}
    </div>
  );
};

export default QueueGroupList;
