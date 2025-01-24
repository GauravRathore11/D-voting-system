import React, {children, createContext, useState} from "react";
import Web3 from "web3";

export const WalletContext = createContext();

const WalletProvider = ({children}) => {

    const [userAddress, setUserAddress] = useState("");
    const [web3, setWeb3] = useState(null);
    const [transaction, setTransaction] = useState(false);

    const connectWallet = async () => {

        if(window.ethereum) {
            try{
                //request account access
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

                //set new web3 instance
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);

                // localStorage.setItem("userAddress", userAddress);
                // localStorage.setItem("web3Provider", window.ethereum);

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
        <WalletContext.Provider value={{ web3, userAddress, transaction, setTransaction, setUserAddress, setWeb3 , connectWallet }}>
            {children}
        </WalletContext.Provider>
    )
}

export default WalletProvider;




// const connectWallet = async () => {

//         if(window.ethereum) {
//             try{
//                 //request account access
//                 const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

//                 //set new web3 instance
//                 const web3Instance = new Web3(window.ethereum);
//                 setWeb3(web3Instance);

//                 // localStorage.setItem("userAddress", userAddress);
//                 // localStorage.setItem("web3Provider", window.ethereum);

//                 // Get the user's account
//                 // const accounts = await web3.eth.getAccounts();
//                 setUserAddress(accounts[0]);

//                 console.log("Connected wallet address:", accounts[0]);

//             }catch(error){
//                 if(error.code === 4001) {
//                     console.log("Connection request rejected by the user");
//                 }
//                 else{
//                     console.log("yo hai", error);
//                 }
//             }
//         }
//         else{
//             console.log("No wallet found");
//             alert("Please install a web3 wallet");
//         }
//     };