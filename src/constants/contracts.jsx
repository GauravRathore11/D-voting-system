import Web3 from "web3";

export const CONTRACT_ADDRESS = "0xf7a5b8828db35ed0491b0b58061a737048a06bef"

export const CONTRACT_ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint8",
				"name": "success",
				"type": "uint8"
			}
		],
		"name": "registrationStatus",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "success",
				"type": "uint256"
			}
		],
		"name": "voted",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "candidateRegistration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_age",
				"type": "uint8"
			}
		],
		"name": "personRegistration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "publicId",
				"type": "address"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "registeredAccounts",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "age",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "personId",
				"type": "address"
			},
			{
				"internalType": "uint32",
				"name": "voteCount",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const createContractInstance = (web3) => {
	if(!web3){
		throw new Error("Web3 instance is required to create a new contract");
	}

	return new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
}