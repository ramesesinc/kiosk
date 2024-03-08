import ActionBar from "@/components/layout/ActionBar";
import BplsItems from "@/components/transactions/details/Item";
import Button from "@/components/ui/Button";
import Grid from "@/components/ui/Grid";
import Title from "@/components/ui/Title";
import { Bpls, getBpls } from "@/stores/bpls-items";
import Layout from "./layout";

function BplsPage({ bpls }: { bpls: Bpls[] }) {
  return (
    <Layout>
      <Title text={"Select Transaction"} textSize="text-4xl" />
      <Grid columns="gap-10">
        {bpls.map((bplsitem) => {
          return <BplsItems key={bplsitem.id} bpls={bplsitem} />;
        })}
      </Grid>
      <ActionBar>
        <Button href="/menu" buttonText="Back" animation="shrink" />
      </ActionBar>
    </Layout>
  );
}

export default BplsPage;

/*==========================================
* SERVER SIDE CODE
==========================================*/

export async function getStaticProps() {
  const bpls = getBpls();

  return {
    props: {
      bpls,
    },
  };
}
