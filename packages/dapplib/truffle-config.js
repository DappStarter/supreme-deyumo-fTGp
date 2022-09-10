require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note muscle quality install hidden slot gauge'; 
let testAccounts = [
"0x74761cbccb6d51186f471697baa63aec9a61cb69780ff6ec29e76da5ff1990e0",
"0xbaf66dc9b48ee8aed827812be79f6828b1858780d04b0dc9e4cf563cd09cf440",
"0x8747ba4b127491b6f66b8b0159af0fb86a2286c48c0b6eca5108f6b04cae4c43",
"0xe318ee738909e086e2b500df4b5886aa332ff8432bde11266de8371c80888a72",
"0xb52fa337d46f5c1c85514401e299be706daa680240aa7a1f29404f02dcc98039",
"0xc42802db196bb959d88d0e08df5461425c8f7fbdb5becab2734c285e3978a478",
"0x01acd16892dbc82baf9eff61e7c57f8426d935f85654b76c8d3ec796459d1dd0",
"0xefa651e9547a6fbc5c327411dde44fb0e61ec6af1ccdd0f10390ca179471649e",
"0xde55b4349c87d53ca6c6c9ba02c4d821387c8faffda0f57b0a578035848c889a",
"0xd87ccd94ce9712802c094cacdc2eb1f4535f99b763048bda5297c92bf9f5ee47"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

