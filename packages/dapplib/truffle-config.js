require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss grace battle bone social'; 
let testAccounts = [
"0x1dee57478a1a30ba8b18ff4806f979199f007a353b292e479a4300ef1eba0885",
"0x79a897cf4b41b298781694977923d17ff034dbb0fda145a88f908fe6b1c4289a",
"0x33624df5504068eb20ffb576a6a53df6bea529b30568906eb9b9f916f38a3611",
"0x0a03534da9181dc96bb011e6a146705e0f90cf8a468303b7954f1ab5a30f66ae",
"0x9762afe7bde34f219fb190a0c18d53cb0da2dfc1d43ac639460c26ca4b083f68",
"0x0ca3b87c1b1caa769be2d2a023f5587868d0880225bc43d549feb4be3552188b",
"0x60659993d0706a034a8c1df96e38111fca9276c86c2f69cad6ef292627bc6155",
"0xc830bde4c1b0201c1c5093bbdd0f552af961e202f4c249191a55e69ba3bdba41",
"0x4bcf0aa5be08089629c17ced96becedd94bdfef707c56e0a0ed109ccb0cf4b8d",
"0x3bf76768fab575abadf33b60d945054bb38acc268d10fe827fdc33ae27cc150d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


