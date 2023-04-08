import React from "react";
import { useEffect, useState } from "react";
import {
  helloWorldContract,
  loadCurrentMessage,
  getCurrentVoterConnected,
  connectToEthChain,
  
} from "./util/interact.js";



const HelloWorld = () => {
  //state variables
  const [voteAddress, setVote] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("No connection to the network."); //default message
  const [newMessage, setNewMessage] = useState("");

  //called only once
  useEffect(async () => {
    const message = await loadCurrentMessage();
    setMessage(message);
    addSmartContractListener();

    const { address, status } = await getCurrentVoterConnected();
    setVote(address);
    setStatus(status);
  }, []);

  function addSmartContractListener() {
    helloWorldContract.events.UpdatedMessages({}, (error, data) => {
      if (error) { setStatus(error.message); }
      else {
        setMessage(data.returnValues[1]);
        setNewMessage("");
        setStatus("Message updated.");
      }
    });
  }

  function addWalletListener() { //TODO: implement
    
  }

  const connectVotingPressed = async () => { //TODO: implement
    const votingResponse = await connectToEthChain();
    setStatus(votingResponse.status);
    setVote(votingResponse.address);
  };

  const onUpdatePressed = async () => { //TODO: implement
    
  };

  //the UI of our component
  return (
    <div id="container">
      <img id="logo" src={alchemylogo}></img>
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <h2 style={{ paddingTop: "50px" }}>Current Message:</h2>
      <p>{message}</p>

      <h2 style={{ paddingTop: "18px" }}>New Message:</h2>

      <div>
        <input
          type="text"
          placeholder="Update the message in your smart contract."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <p id="status">{status}</p>

        <button id="publish" onClick={onUpdatePressed}>
          Update
        </button>
      </div>
    </div>
  );
};

export default HelloWorld;