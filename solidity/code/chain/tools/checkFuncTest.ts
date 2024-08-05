import { ethers } from 'hardhat';

async function main() {

    const FunctionTestContract = await ethers.getContractFactory("FunctionTest");
    console.log("FunctionTestContract:", FunctionTestContract);
    const functionTestContract = await FunctionTestContract.deploy();
    await functionTestContract.waitForDeployment();


    // 调用setValue函数
    await functionTestContract.doCriticalAction();
    await functionTestContract.doSomeAction(200,30);
    await functionTestContract.doLogableAction();
}


main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });