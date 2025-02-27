import { Chain } from '@chain-registry/types';
const testnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'osmosistestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Osmosis Testnet',
  chain_id: 'osmo-test-4',
  bech32_prefix: 'osmo',
  daemon_name: 'osmosisd',
  node_home: '$HOME/.osmosisd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uosmo',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uosmo'
      }
    ]
  },
  codebase: {
    git_repo: 'https://github.com/osmosis-labs/osmosis',
    recommended_version: 'v14.0.0-rc1',
    compatible_versions: ['v14.0.0-rc1'],
    cosmos_sdk_version: '0.45',
    tendermint_version: '0.34',
    cosmwasm_version: '0.29',
    cosmwasm_enabled: true,
    genesis: {
      genesis_url:
        'https://github.com/osmosis-labs/networks/raw/main/osmo-test-4/genesis.tar.bz2'
    }
  },
  peers: {
    seeds: [
      {
        id: '0f9a9c694c46bd28ad9ad6126e923993fc6c56b1',
        address: '137.184.181.105:26656',
        provider: ''
      }
    ],
    persistent_peers: [
      {
        id: '4ab030b7fd75ed895c48bcc899b99c17a396736b',
        address: '137.184.190.127:26656',
        provider: ''
      },
      {
        id: '3dbffa30baab16cc8597df02945dcee0aa0a4581',
        address: '143.198.139.33:26656',
        provider: ''
      }
    ]
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.osmo-test.ccvalidators.com/',
        provider: 'CryptoCrew'
      },
      {
        address: 'https://osmosistest-rpc.quickapi.com/',
        provider: 'ChainLayer'
      },
      {
        address: 'https://rpc.testnet.osmosis.zone/',
        provider: 'Osmosis'
      }
    ],
    rest: [
      {
        address: 'https://osmosistest-lcd.quickapi.com/',
        provider: 'CryptoCrew'
      },
      {
        address: 'https://lcd.osmo-test.ccvalidators.com/',
        provider: 'ChainLayer'
      },
      {
        address: 'https://testnet-rest.osmosis.zone/',
        provider: ''
      }
    ],
    grpc: [
      {
        address: 'https://grpc-test.osmosis.zone:443',
        provider: 'Osmosis'
      }
    ]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png'
  },
  keywords: ['dex', 'testnet']
};
export default testnet;
