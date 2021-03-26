pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaign;
    uint256[] public Minimun;

    function createCampaign(uint256 minimum) public {
        address newCampaign = new Campaign(msg.sender, minimum);
        Minimun.push(minimum);
        deployedCampaign.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[], uint256[]) {
        return (deployedCampaign, Minimun);
    }

    function getBalance(address campaignAddress) public view returns (uint256) {
        return campaignAddress.balance;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint256 value;
        address recipient;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint256 public minimumContribution;
    mapping(address => bool) public backers;
    uint256 public backersCount;
    address[] public backersAddress;
    uint256[] public contribution;
    bool public close = false;
    uint256 public funds = 0;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    modifier notClose() {
        require(close == false);
        _;
    }

    function Campaign(address creator, uint256 minimum) public {
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable notClose {
        require(msg.sender != manager);
        require(msg.value >= minimumContribution);
        require(!backers[msg.sender]);
        backers[msg.sender] = true;
        backersCount++;
        backersAddress.push(msg.sender);
        contribution.push(msg.value);
        funds = funds + msg.value;
    }

    function createRequest(
        string description,
        uint256 value,
        address recipient
    ) public restricted notClose {
        Request memory newRequest =
            Request({
                description: description,
                value: value,
                recipient: recipient,
                complete: false,
                approvalCount: 0
            });

        requests.push(newRequest);
    }

    function approveRequest(uint256 index) public notClose {
        Request storage request = requests[index];

        require(backers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint256 index) public restricted notClose {
        Request storage request = requests[index];
        require(!request.complete);
        require(request.approvalCount > (backersCount / 2));

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary()
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256,
            address
        )
    {
        return (
            minimumContribution,
            this.balance,
            requests.length,
            backersCount,
            manager
        );
    }

    function getRequestCount() public view returns (uint256) {
        return requests.length;
    }

    function totalBalance() public view returns (uint256) {
        return this.balance;
    }

    function closeCampaign(bool ans) public restricted {
        if (ans == true) {
            close = true;
            if (this.balance > backersCount * 3000000 && backersCount != 0) {
                uint256 usedPerHead = (funds - this.balance) / backersCount;
                for (uint256 i = 0; i < backersCount; i++) {
                    if (contribution[i] > 3000000) {
                        backersAddress[i].transfer(
                            contribution[i] - usedPerHead
                        );
                    }
                }
            }
        }
    }
}
