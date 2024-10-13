import { Card } from "@telegram-apps/telegram-ui";

// import "./CardStakeTotalModule.css";

export const CardStakeInput = () => {
  return (
        <Card 
            className="Card flex flex-col h-full w-full p-4 mt-5 gap-4"
            style={{
                height: 167
            }}
        >
           <p style={{
                fontSize: "10px",
                fontWeight: 700,
                lineHeight: "11.33px",
                textAlign: "left",    
                
           }}>YOU STAKE:</p>
           <input style={{ 
                height: "44px",
                top: "116px",
                left: "40px",
                gap: "0px",
                borderRadius: "10px",
                opacity: "0px",
                color: "black",
                textAlign: "left",
                alignItems: "center",
                padding: "20px"
}}></input>
        </Card> 
  )
};
