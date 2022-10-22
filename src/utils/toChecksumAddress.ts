export const toChecksumAddress = (web3:any, address:string) => {
    return web3.utils.isAddress(address) ? web3.utils.toChecksumAddress(address) :  0x0000000000000000000000000000000000000000;
} 