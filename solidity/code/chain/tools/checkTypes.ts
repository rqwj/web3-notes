import { ethers } from 'hardhat';
import { Types } from '../typechain-types/Types';

// console.log('ethers', ethers);

async function main() {
    const localModuleAddress = '0x4826533B4897376654Bb4d4AD88B7faFD0C98528';
    const provider = ethers.provider;
    const balance = await provider.getBalance(localModuleAddress);
    const balanceInEther = ethers.formatEther(balance);

    console.log(`address: ${localModuleAddress} balance: ${balance} balanceInEther: ${balanceInEther}`);

    const typesContract = await ethers.getContractFactory('Types');
    const types = await typesContract.attach(localModuleAddress);
    const normalTx = await types.getNormal();
      // 等待交易确认
    const normalReceipt = await normalTx.wait();
      // 获取事件日志
    const normalRet = normalReceipt.events?.find(e => e.event === "Normal2Returned");

    const normal2Tx = await types.getNormal2();
    const normal2Receipt = await normal2Tx.wait();
    const normal2Ret = normal2Receipt.events?.find(e => e.event === "Normal2Returned");


    console.log('normal:\ntx:\n', normalTx, 'receipt:\n', normalReceipt, 'ret:\n', normalRet);
    console.log('normal2:\ntx:\n', normal2Tx, 'receipt:\n', normal2Receipt, 'ret:\n', normal2Receipt.events);
}

async function main2() {

    const TypesContract = await ethers.getContractFactory("Types");
    console.log("TypesContract:", TypesContract);
    const typesContract: Types = await TypesContract.deploy();
    console.log("Type contract deployed to:", typesContract);
    typesContract.addListener("Normal2Returned", (returnValue) => {
        console.log("Normal2Returned:", returnValue);
    })
    typesContract.addListener("intReturned", (returnValue) => {
        console.log("intReturned:", returnValue);
    })

    const deployedContract = await typesContract.waitForDeployment();
    console.log("deployedContract:", deployedContract);

    // 调用setValue函数
    const txResponse = await typesContract.getNormal2();
    //console.log("Transaction Response:", txResponse);

    // 等待交易完成
    const txReceipt = await txResponse.wait();
    //console.log("Transaction Receipt:", txReceipt);

    // 从事件日志中获取返回值（如果有的话）
    //const returnValue = txReceipt.events.find(event => event.event === 'ReturnValue').args[0];
    //console.log("Return Value:", returnValue.toString());

    const localModuleAddress = await typesContract.getAddress();
    console.log("localModuleAddress:", localModuleAddress);
    const provider = ethers.provider;
    // provider.on("intReturned", (returnValue) => {
    //    console.log("provider intReturned:", returnValue);
    //});
    const typesContract2 = await ethers.getContractFactory('Types');
    const types2: Types = typesContract2.attach(localModuleAddress);
    types2.addListener("intReturned", (returnValue) => {
        console.log("contract intReturned:", returnValue);
    })
    
    
    const normal2Tx = await types2.getNormal2();
      // 等待交易确认
    const normal2Receipt = await normal2Tx.wait();
    console.log("types2:", types2);

    //const normal2Ret = normal2Receipt.ƒevents?.find(e => e.event === "Normal2Returned");

    // console.log('normal2:\ntx:\n', normal2Tx, 'receipt:\n', normal2Receipt, 'ret:\n', normal2Receipt.events);

}


main2()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });