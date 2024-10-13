import { Card } from "@telegram-apps/telegram-ui";

import "./CardStakeTotalModule.css";

export const CardStakeTotal = () => {
  return (
        <Card 
            className="Card flex flex-col h-full w-full justify-between p-4 mt-5"
            style={{
                height: 87
            }}
        >
            <p style={{
                fontSize: "10px",
                fontWeight: 700,
                lineHeight: "11.33px",
                textAlign: "left",
                textTransform: "uppercase"
            }}>20.15% in total</p>
            <div className="flex flex-row">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="8" height="8" rx="4" fill="#A7DEFF"/>
                </svg>
                <p style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    lineHeight: "11.33px",
                    textAlign: "left",
                    textTransform: "uppercase",
                    marginLeft: 10
                }}>3.10% - Tonstakers staking</p>
            </div>

            <div className="flex flex-row">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="8" height="8" rx="4" fill="#4CD964"/>
                </svg>
                <p style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    lineHeight: "11.33px",
                    textAlign: "left",
                    textTransform: "uppercase",
                    marginLeft: 10
                }}>17.05% - Tonstakers earn</p>
            </div>
        </Card> 
  )
};
