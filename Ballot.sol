// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Ballot {
    /* Voter struct */
    struct Voter {
        uint weight;
        bool voted;
        bool citizenshipStatus; 
        /* Can use some blockchain ML to scan ID and determine if the person is a citizen */
        address delegate;
        uint vote;
    }

    /* Single proposal type */
    struct Proposal {
        bytes32 name;
        uint voteCount;
    }

    address public chairperson;

    /* HashMap - each possible address will have a Voter */
    mapping (address => Voter) public voters;

    /* Dynamically-sized array of Proposal structs */
    Proposal[] public proposals;

    /* Creates new ballot, selects proposal name */
    constructor(bytes32[] memory proposalNames) {
        chairperson = msg.sender;
        voters[chairperson].weight = 1;

        for (uint i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
        }
    }

    /* Website will scan ID and give the voter right to access */
    function giveRightToVote(address voter) external {
        // Need to use AI to scan and make sure our voter is a citizen
        // Once we know they are a citizen, we can approve it
        require(
            !voters[voter].voted,
            "Only one vote allowed"
        );
        require(voters[voter].weight == 0);
        voters[voter].weight = 1;
    } 

    /* Delegate votes */
    function delegate(address _to) external {
        Voter storage sender = voters[msg.sender];
        require(sender.weight != 0, "Access to vote denied. Please verify.");
        require(!sender.voted, "You already voted.");

        while (voters[_to].delegate != address(0)) {
            _to = voters[_to].delegate; 
            require(_to != msg.sender, "Found loop in delegation.");
        }

        Voter storage delegate_ = voters[_to];
        require(delegate_.weight >= 1); /* Delegate must be able to vote */
        
        sender.voted = true;
        sender.delegate = _to;

        if (delegate_.voted) {
            proposals[delegate_.vote].voteCount += sender.weight;
        } else {
            delegate_.weight += sender.weight;
        }
    }

    event Vote(uint proposal);

    /* Give vote to proposal */
    function vote(uint _proposal) external {
        Voter storage sender = voters[msg.sender];
        require(sender.weight != 0, "Access to vote denied. Please verify.");
        require(!sender.voted, "You already voted.");
        sender.voted = true;
        sender.vote = _proposal;
        proposals[_proposal].voteCount += sender.weight;
        emit Vote(_proposal);
    }

    function winningProposal() public view
            returns (uint winningProposal_)
    {
        uint winningVoteCount = 0;
        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
            }
        }
    }

    function winnerName() external view
            returns (bytes32 winnerName_)
    {
        winnerName_ = proposals[winningProposal()].name;
    }

    /*
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
    */
}