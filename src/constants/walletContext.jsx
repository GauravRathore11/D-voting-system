import React, {children, createContext, useState} from "react";
import Web3 from "web3";

export const WalletContext = createContext();

const WalletProvider = ({children}) => {

    const [userAddress, setUserAddress] = useState("");
    const [web3, setWeb3] = useState(null);

    const connectWallet = async () => {


        if(typeof window.ethereum !== "undefined") {
            try{
                //request account access
                await window.ethereum.request({ method: "eth_requestAccounts" });

                //set new web3 instance
                setWeb3(new Web3(window.ethereum));

                // Get the user's account
                const accounts = await web3.eth.getAccounts();
                setUserAddress(accounts[0]);

                console.log("Connected wallet address:", accounts[0]);

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
        <WalletContext.Provider value={{ web3, userAddress, connectWallet }}>
            {children}
        </WalletContext.Provider>
    )
}

export default WalletProvider;