import { buildModule } from "@nomicfoundation/hardhat-ignition/modules"

module.exports = buildModule("TypesModule", (m) => {
    const typesContract = m.contract("Types", [])
    const normal = m.call(typesContract, "getNormal", [])
    const normal2 = m.call(typesContract, "getNormal2", [])
    console.log(`normal:`, normal)
    console.log(`normal2:`, normal2)
    return { typesContract }
})