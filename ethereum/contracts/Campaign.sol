pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaign;

    function createCampaign(string name, string desc, uint256 minimum, uint256 totalDonation) public {
        address newCampaign = new Campaign(msg.sender, name, desc, minimum, totalDonation);
        deployedCampaign.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaign;
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
    string public campaignDescription;
    string public name;
    uint256 public donation;
    mapping(address => bool) public approvers;
    uint256 public approversCount;
    

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(
        address creator,
        string n,
        string desc,
        uint256 minimum,
        uint256 totalDonation
       
        ) public {
      
        manager = creator;
        minimumContribution = minimum;
        campaignDescription = desc;
        name = n;
        donation = totalDonation;
        
    }

    function contribute() public payable {
        require(msg.sender!=manager);
        require(msg.value >= minimumContribution);
        require(!approvers[msg.sender]);
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(
        string description,
        uint256 value,
        address recipient
    ) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint256 index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint256 index) public restricted {
        Request storage request = requests[index];
        require(!request.complete);
        require(request.approvalCount > (approversCount / 2));

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
            address,
            string,
            string
        )
    {
        return (
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager,
            name,
            campaignDescription
        );
    }

    function getRequestCount() public view returns (uint256) {
        return requests.length;
    }
    
    function checkContribution() public view returns (bool){
        if(this.balance != donation){
            return false;
        }
        return true;
    }
    function totalBalance() public view returns(uint256){
        return this.balance;
    }
}
