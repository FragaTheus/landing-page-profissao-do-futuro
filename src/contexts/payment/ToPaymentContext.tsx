import { createContext, useContext } from "react";

    interface IToPaymentProp{
        toLink: ()=>void;
    }

    const PayContext = createContext({} as IToPaymentProp);

    interface IPaymentProvider{
        children: React.ReactNode;
    }

    export const PayContextProvider: React.FC<IPaymentProvider>=({children})=>{
        const paymentUrl = "https://pay.kirvano.com/2d8a4f30-1f2b-4bc5-acfc-a57f04ee5913"

        const toLink = ()=>{
            window.open(paymentUrl, "_blank")
        }
        return(
            <PayContext.Provider value={{toLink}}>
                {children}
            </PayContext.Provider>
        );
    }

    export const usePayContext =()=>{
        return useContext(PayContext);
    }

     

