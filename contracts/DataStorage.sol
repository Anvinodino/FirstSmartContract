// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract DataStorage {
    struct Data {
        uint256 id;
        string value;
    }

    Data[] public dataList;
    uint256 public dataCount;

    event DataStored(uint256 id, string value);

    function storeData(string memory _value) public {
        dataCount++;
        dataList.push(Data(dataCount, _value));
        emit DataStored(dataCount, _value);
    }

    function getData(uint256 _id) public view returns (string memory) {
        for (uint256 i = 0; i < dataList.length; i++) {
            if (dataList[i].id == _id) {
                return dataList[i].value;
            }
        }
        return "Data not found";
    }
}

