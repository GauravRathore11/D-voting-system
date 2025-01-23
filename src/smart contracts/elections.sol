// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract election {
    address public immutable owner;
    event voted(uint indexed success);
    event registrationStatus(uint8 indexed success);

    struct person {
        string name;
        uint8 age;
        address personId;
        uint32 voteCount;
    }

    address[] public candidates;

    mapping(address => person) public registeredAccounts;
    mapping(address => bool) private isRegistered;
    mapping(address => bool) private isCandidate;
    mapping(address => bool) private hasVoted;

    constructor() {
        owner = msg.sender;
    }

    function personRegistration(string calldata _name, uint8 _age) external {
        require(!isRegistered[msg.sender], "You're already registered");
        require(_age >= 18, "You are underage");

        isRegistered[msg.sender] = true;
        registeredAccounts[msg.sender] = person({
            name: _name,
            age: _age,
            personId: msg.sender,
            voteCount: 0
        });

        emit registrationStatus(1);
    }

    function candidateRegistration() external {
        require(isRegistered[msg.sender], "You must be registered first!");
        require(!isCandidate[msg.sender], "Already registered as a candidate!");
        require(registeredAccounts[msg.sender].age > 25, "Candidate's age should be 26 or more!");

        isCandidate[msg.sender] = true;
        candidates.push(msg.sender);

        emit registrationStatus(1);
    }

    function vote(address publicId) external {
        require(!hasVoted[msg.sender], "You can only vote once");
        require(isCandidate[publicId], "This address does not belong to a valid candidate");

        registeredAccounts[publicId].voteCount++;
        hasVoted[msg.sender] = true;

        emit voted(1);
    }
}
