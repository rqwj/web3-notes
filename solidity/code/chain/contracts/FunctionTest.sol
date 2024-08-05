// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "hardhat/console.sol";

contract FunctionTest {

    address private owner;

    constructor() {
        owner = msg.sender;
    }

    // Modifier Access control test
    modifier checkAccess() {
        require(msg.sender == owner, "You aren't the owner");
        _;
    }


    function doCriticalAction() public checkAccess {
        console.log("Critical action was done");
    }

    // Modifier Validation test
    modifier checkValue(uint value) {
        require(value > 100, "Not enough value");
        _;
    }

    function doSomeAction(uint var1, uint var2) public checkValue(var1 + var2) {
        console.log("Some action was done");
    }

    
    // Modifier log test
    uint private retValue;

    modifier logAccess() {
        console.log("Access granted");
        _;
    }

    modifier logReturn1(uint retValue) {
        _;
        console.log("Function executed with return value: %d", retValue);
    }

    modifier logReturn2() {
        _;
        console.log("Function executed with return value: %d", retValue);
    }

    function doLogableAction() public logAccess logReturn1(retValue) logReturn2 {
        retValue = 100;
    }

}