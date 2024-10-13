import { Card, Select } from "@telegram-apps/telegram-ui";
import { FILE } from "dns";

// import "./CardStakeTotalModule.css";

export const CardStakeDrop = () => {
  return (
        <Card 
            className="Card flex flex-col h-full w-full justify-center p-4 mt-5 gap-4"
            style={{
                height: 120
            }}
        >
           <select style={{
                height: "44px",
                top: "116px",
                left: "40px",
                gap: "0px",
                borderRadius: "10px",
                opacity: "0px",
                color: "black",
                textAlign: "center",
                alignItems: "center"
            
           }}>
            <option>1.00 TON = 5.30 USDT</option>
            <option>1.00 USD = 1.00 USDT</option>
           </select>
           <div
           style={{
            // width: "195px",
            // maxWidth: "195px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "30px",
            gap: "0px",
            borderRadius: "5px",
            opacity: "0px",
            background: "#2BA8FA",
            fontSize: "10px",
            fontWeight: 700,
            lineHeight: "11.33px",
            textAlign: "center",


           }}>
            POWERED BY TONSTAKERS
           </div>


        </Card> 
  )
};
