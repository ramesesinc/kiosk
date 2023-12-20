import Title from "@/components/ui/Title";
import React from "react";
import ActionBar from "@/components/layouts/ActionBar";
import BplsLayout from "@/components/transactions/bpls/BplsLayout";
import { Bpls, getBpls } from "@/stores/bplsitems";
import BplsItems from "@/components/transactions/bpls/BplsItems";
import Grid from "@/components/ui/Grid";
import Flex from "@/components/ui/Flex";

function BplsPage({ bpls }: { bpls: Bpls[] }) {
  return (
    <Flex>
      <BplsLayout>
        <Title text={"Select Transaction"} />
        <Grid columns={"gap-10"}>
          {bpls.map((bplsitem) => {
            return <BplsItems key={bplsitem.id} bpls={bplsitem} />;
          })}
        </Grid>
        ;
        <ActionBar backRoute="/menu" className="invisible" />
      </BplsLayout>
    </Flex>
  );
}

export default BplsPage;

/*==========================================
* SERVER SIDE CODE
==========================================*/

export async function getStaticProps() {
  console.log(">>>getStaticProps");
  const bpls = getBpls();

  return {
    props: {
      bpls,
    },
  };
}
