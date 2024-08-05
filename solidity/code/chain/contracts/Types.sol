// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "hardhat/console.sol";

contract Types {
    
    // unit[3] memory public uintArray = [1, 2, 3];

    // uint[3] uintArray = [1, 2, 3];

    
    constructor() {
    }

    function getArr() public pure returns (uint16[3] memory) {

        uint16[3] memory uintArray = [1, 2000, 3];
        return uintArray;
    
    }

    function getPure() public pure returns (bool) {
        bool a;
        console.log("in contract: bool %o", a);
        return a;
    }

    function getNormal() public view returns (bool) {
        return v2;
    }

    event Normal2Returned(string description);
    event intReturned(int value);

    function getNormal2() public returns (string memory) {
        bool normal = getNormal();
        console.log("in contract normal2: bool %o", normal);
        emit Normal2Returned("normal2");
        emit intReturned(10086);
        console.log("event Normal2Returned emitted");
        return v1;
    }

    string public v1 = 'view';
    bool public v2 = true;

    function getView() public view returns (bool) {
        return v2;
    }
}