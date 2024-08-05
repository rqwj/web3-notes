import { ethers } from 'hardhat';

console.log('ethers', ethers);

async function main() {
    const localModuleAddress = '0x610178dA211FEF7D417bC0e6FeD39F05609AD788';
    const provider = ethers.provider;
    const balance = await provider.getBalance(localModuleAddress);
    const balanceInEther = ethers.formatEther(balance);

    console.log(`address: ${localModuleAddress} balance: ${balance} balanceInEther: ${balanceInEther}`);

    const Shipping = await ethers.getContractFactory('Shipping');
    const shipping = await Shipping.attach(localModuleAddress);
    const status = await shipping.getStatus();

    console.log(`status: ${status}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });