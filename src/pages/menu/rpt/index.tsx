import ActionBar from "@/components/layout/ActionBar";
import RptItems from "@/components/transactions/rpt/details/Item";
import Button from "@/components/ui/Button";
import Grid from "@/components/ui/Grid";
import Title from "@/components/ui/Title";
import { Rpt, getRpt } from "@/stores/rpt-items";
import Layout from "./layout";

function RptPage({ rpt }: { rpt: Rpt[] }) {
  return (
    <Layout>
      <Title text={"Select Transaction"} textSize="text-4xl" />
      <Grid columns="gap-10">
        {rpt.map((rptitem) => {
          return (
            <RptItems
              key={rptitem.id}
              rpt={rptitem}
              disabled={rptitem.disabled}
            />
          );
        })}
      </Grid>
      <ActionBar>
        <Button href="/menu" buttonText="Back" animation="shrink" />
      </ActionBar>
    </Layout>
  );
}

export default RptPage;

/*==========================================
* SERVER SIDE CODE
==========================================*/

export async function getStaticProps() {
  const rpt = getRpt();

  return {
    props: {
      rpt,
    },
  };
}
