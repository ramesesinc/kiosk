import { useState, createContext } from "react";
import type { ReactNode } from "react";

export type QueueSection = {
  objid: string;
  groupid: string;
  title: string;
  currentseries: number;
  group: {
    objid: string;
    title: string;
  };
};

export type QueueGroup = {
  objid: string;
  title: string;
  sections: QueueSection[];
};

export type KioskContextData = {
  groups: QueueGroup[];
  getGroups: () => QueueGroup[];
  setGroups: (groups: QueueGroup[] | []) => void;
  getSections: (groupId: string) => QueueSection[];
};

const KioskContext = createContext<KioskContextData>({
  groups: [],
  getGroups: () => [],
  setGroups: (groups: QueueGroup[]) => [],
  getSections: (groupId: string) => [],
});

export function KioskContextProvider({ children }: { children: ReactNode }) {
  const [queueGroups, setQueueGroups] = useState<QueueGroup[]>([]);

  function setGroups(groups: QueueGroup[]) {
    setQueueGroups(groups);
  }

  function getGroups() {
    return queueGroups;
  }

  function getSections(groupId: string): QueueSection[] {
    const group = queueGroups.find(
      (group) => group.objid.toLowerCase() === groupId
    );
    return group?.sections || [];
  }

  const context: KioskContextData = {
    groups: queueGroups,
    getGroups,
    setGroups,
    getSections,
  };

  return (
    <KioskContext.Provider value={context}>{children}</KioskContext.Provider>
  );
}

export default KioskContext;
