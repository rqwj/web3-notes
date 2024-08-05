const { expect } = require('chai');
const hh = require('hardhat');
describe('Shipping', function () {
    
    let shippingContract;

    before(async function () {
        shippingContract = await hh.ethers.deployContract('Shipping', [])
        // let expectedContract = expect(await hh.ethers.deployContract('Shipping', []))
        // shippingContract = expectedContract.__flags.object
    });
    it("should return the status Pedding", async function () {
        expect(await shippingContract.getStatus())
            .to.equal('Pending');
    });
    it("should return the status Shipped", async function () {
        await expect(shippingContract.ship())
            .to.emit(shippingContract, 'LogNewAlert').withArgs('Package was shipped')

        expect(await shippingContract.getStatus())
            .to.equal('Shipped');
    });
    it("should return the status Delivered", async function () {
        await expect(shippingContract.deliver())
            .to.emit(shippingContract, 'LogNewAlert').withArgs('Package was delivered')
        
        expect(await shippingContract.getStatus())
            .to.equal('Delivered');
    });
});