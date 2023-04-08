// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Ballot {
    struct Voter {
        bool voted;
        address delegate;
        uint vote;
    }

    Voter voter;

    mapping (address => bool) public citizenshipStatus;
    mapping (address => uint) public votesFor;
    mapping (address => uint) public votesToUse;

    event Vote(address from, address to, uint vote);

    constructor(bool voted, address delegate, uint _vote) {
        voter = Voter(voted, delegate, _vote);
    } 

    function vote(address _to, uint _vote) public {
        require(citizenshipStatus[msg.sender] == true, "Must be a citizen.");
        require(votesToUse[msg.sender] == 1, "Cannot vote for multiple candidates.");

        votesFor[_to] += _vote;
        votesToUse[msg.sender] -= _vote;

        emit Vote(msg.sender, _to, _vote);
    }
}