import React, {Children, createContext, useState} from "react";
import Web3 from "web3";

export const WalletContext = createContext();

const WalletProvider = ({children}) => {

    const [userAddress, setUserAddress] = useState("");

    const connectWallet = async () => {
        if(typeof window.ethereum !== "undefined") {
            try{
                setUserAddress(address);
            }catch(error){
                if(error.code === 4001) {
                    console.log("Connection request rejected by the user");
                }
                else{
                    console.log(error);
                }
            }
        }
        else{
            console.log("No wallet found");
            alert("Please install a web3 wallet");
        }
    };

    return (
        <WalletContext.Provider value={{ userAddress, connectWallet }}>
            {children}
        </WalletContext.Provider>
    )
}

export default WalletProvider;