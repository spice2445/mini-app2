import { Page } from "@/components/Page";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";

import { List, Text, Button } from "@telegram-apps/telegram-ui";

import { CardStakeTotal } from "@/widgets/CardStakeTotal";
import { CardStakeInput } from "@/widgets/CardStakeInput";
import { CardStakeDrop } from "@/widgets/CardStakeDrop";

export const StakePage = () => {
  return (
    <Page back={false}
      >
      <List>
        <Header />
          <div className="border-t border-gray-800 mx-5 flex flex-col justify-center">

            <CardStakeDrop />
            <CardStakeInput />
            <CardStakeTotal />
            <Button
              size="l"
              className="my-5"
              style={{
                background: "#2BA8FA",
              }}
            >
              CONNECT WALLET TO STAKE
            </Button>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between mb-4">
                <Text
                  caps={true}
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    lineHeight: "11.33px",
                    textAlign: "left"
                  }}  
                >
                  You get
                </Text>
                <Text
                  caps={true}
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    lineHeight: "11.33px",
                    textAlign: "right",
                    color: "#BBBBBB"
                  }}  
                >
                  961.13 tston
                </Text>
                </div>
                <div className="flex flex-row justify-between mb-4">
                <Text
                  caps={true}
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    lineHeight: "11.33px",
                    textAlign: "left"
                  }}  
                >
                  historical apy
                </Text>
                <Text
                  caps={true}
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    lineHeight: "11.33px",
                    textAlign: "right",
                  }}  
                >
                  3.68%
                </Text>
                </div>
                <div className="flex flex-row justify-between mb-4">
                <Text
                  caps={true}
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    lineHeight: "11.33px",
                    textAlign: "left"
                  }}  
                >
                  tston exchange rate
                </Text>
                <Text
                  caps={true}
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    lineHeight: "11.33px",
                    textAlign: "right",
                    color: "#BBBBBB"
                  }}  
                >
                  1 tston = 1.0404 ton
                </Text>
                </div>
            </div>
          </div>
        <Footer />
      </List>
    </Page>
  );
};
