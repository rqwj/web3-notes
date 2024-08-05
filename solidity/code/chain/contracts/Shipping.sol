// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Shipping {
   
    enum ShippingStatus {Pending, Shipped, Delivered}
    event LogNewAlert(string description);
    ShippingStatus private status;
    
    constructor() {
        status = ShippingStatus.Pending;
        emit LogNewAlert("Shipping contract was created");
    }
    
    function ship() public {
        require(status == ShippingStatus.Pending, "Can't ship a package that is already shipped or delivered");
        status = ShippingStatus.Shipped;
        emit LogNewAlert("Package was shipped");
    }

    function deliver() public {
        require(status == ShippingStatus.Shipped, "Can't deliver a package that is not shipped");
        status = ShippingStatus.Delivered;
        emit LogNewAlert("Package was delivered");
    }

    function getStatus() public view returns (string memory) {
        if (status == ShippingStatus.Pending) {
            return "Pending";
        } else if (status == ShippingStatus.Shipped) {
            return "Shipped";
        } else {
            return "Delivered";
        }
    }
}