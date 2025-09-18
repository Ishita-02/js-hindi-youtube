// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Count {
    uint public count = 0;

    function increment() public returns(uint) {
        count += 1;
        return count;
    }

    function decrement() public returns(uint) {
        count -= 1;
        return count;
    }
}