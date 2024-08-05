const { expect } = require('chai');
const hh = require('hardhat');
describe('Types', function () {
    
    let typesContract;

    before(async function () {
        typesContract = await hh.ethers.deployContract('Types', [])
    });

    it("should return false", async function () {
        
        console.log('view:', await typesContract.getView());
        console.log('pure:', await typesContract.getPure());
        console.log('normal:', await typesContract.getNormal());
        console.log('normal:', await typesContract.getNormal2());
        
        let a = await typesContract.getView();
        expect(await typesContract.getPure()).to.equal(false);
    });

    it("should return false", async function () {
        expect(await typesContract.getView()).to.equal(false);
    });
});