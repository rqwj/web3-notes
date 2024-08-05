import { buildModule } from "@nomicfoundation/hardhat-ignition/modules"

module.exports = buildModule("ShippingModule", (m) => {
    const shipping = m.contract("Shipping", [])
    m.call(shipping, "ship", [])
    const initStatus = m.call(shipping, "getStatus", [])
    console.log(`contract deployed with status: ${initStatus.value}`)
    console.log(initStatus)
    return { shipping }
})