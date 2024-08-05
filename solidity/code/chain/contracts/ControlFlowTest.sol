// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "hardhat/console.sol";

contract ControlFlowTest {

    function while_flows(uint a) public pure {
        uint i = 0;
        while(i < a) {
            i++;
            if(i == 5) {
                break;
            }
            if(i % 3 == 0) {
                continue;
            }
        }
        console.log("i: %d", i);
    }

    function do_flows(uint a) public pure {
        uint i = 0;
        do {
            i++;
            if(i == 5) {
                break;
            }
            if(i % 3 == 0) {
                continue;
            }
        } while(i < a);
        console.log("i: %d", i);
    }

    function for_flows(uint a) public pure {
        uint ii = 0;
        for(uint i = 0; i < a; i++) {
            if(i == 5) {
                ii = i;
                break;
            }
            if(i % 3 == 0) {
                continue;
            }
            ii = i;
        }
        console.log("ii: %d", ii);
    }

    function if_else_flows(int a) public pure {
        if(a > 10) {
            console.log("a is greater than 10");
        } else if(a < 10) {
            console.log("a is less than 10");
        } else {
            console.log("a is equal to 10");
        }
    }


}