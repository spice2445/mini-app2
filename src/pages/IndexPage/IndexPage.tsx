import { List } from "@telegram-apps/telegram-ui";
import type { FC } from "react";

import { Page } from "@/components/Page.tsx";

import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <List>
        <Header />

        <Footer />
      </List>
    </Page>
  );
};
