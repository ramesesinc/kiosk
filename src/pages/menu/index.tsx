import Grid from "@/components/ui/Grid";
import Icon from "@/components/ui/Icon";
import { modules } from "@/stores/menu-items";
import router from "next/router";
import Layout from "./layout";
import useTimer from "@/hooks/useTimer";

const MenuPage = () => {
  const timeLimit = 15000;
  useTimer(timeLimit);

  return (
    <Layout>
      {modules && (
        <Grid columns="grid-cols-3 gap-y-20">
          {modules.map((item, index) => (
            <Icon
              key={index}
              title={item.title}
              onClick={() => router.push(item.target)}
              image={item.image}
              fontSize="text-[22px]"
              height={80}
              width={80}
              active={item.active}
            />
          ))}
        </Grid>
      )}
    </Layout>
  );
};

export default MenuPage;
