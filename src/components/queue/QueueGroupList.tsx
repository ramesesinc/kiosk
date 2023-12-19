import React, { useState } from "react";
import { createFetch } from "@/libs/fetch";
import { fetchNextSeries } from "@/services/queue";
import QueueTicket from "./QueueTicket";
import QueueSectionList from "./QueueSectionList";
import Title from "../ui/Title";

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
    execute({sectionid});
    openQueueTicket();
  }
  
  return (
    <div className="text-[45px] grid grid-cols-1 grid-flow-row gap-12 w-full">
      {groups.map((group: QueueGroup) => (
        <div key={group.objid} className="flex flex-col gap-10 py-10">
          <div className="pl-5 ">
            <Title text={group.title} className="!text-2xl mb-2" />
            <div className="h-[7px] w-[55%]  bg-gradient-to-r from-[#53bffa]"></div>
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
          txndatestr={showticket.txndatestr}
          ticketno={showticket.ticketno}
        />
      )}
    </div>
  );
};

export default QueueGroupList;
