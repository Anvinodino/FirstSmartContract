const { Web3 } = require('web3');
const web3 = new Web3('http://localhost:7545'); // Ganache läuft auf diesem Port

const contractAddress = '0xd87838363951b26cDd2B273b47eC9e435C2aebBD';
const contractABI= [
    {
      "constant": true,
      "inputs": [],
      "name": "dataCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "dataList",
      "outputs": [
        {
          "name": "id",
          "type": "uint256"
        },
        {
          "name": "value",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "string"
        }
      ],
      "name": "DataStored",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_value",
          "type": "string"
        }
      ],
      "name": "storeData",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getData",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]; 
// Adresse des deployten Smart Contracts

const dataStorage = new web3.eth.Contract(contractABI, contractAddress);

async function getData(ID) {
    const result = await dataStorage.methods.getData(ID).call();
    console.log('Data:', result);
}

getData(1); // Abrufen der Daten mit der ID 1
