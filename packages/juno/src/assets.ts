import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'juno',
  assets: [
    {
      description: 'The native token of JUNO Chain',
      denom_units: [
        {
          denom: 'ujuno',
          exponent: 0
        },
        {
          denom: 'juno',
          exponent: 6
        }
      ],
      base: 'ujuno',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingecko_id: 'juno-network'
    },
    {
      description: 'The native token cw20 for Neta on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
      denom_units: [
        {
          denom:
            'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
          exponent: 0
        },
        {
          denom: 'neta',
          exponent: 6
        }
      ],
      base: 'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
      },
      coingecko_id: 'neta'
    },
    {
      description: 'The native token cw20 for Marble DAO on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
      denom_units: [
        {
          denom:
            'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
          exponent: 0
        },
        {
          denom: 'marble',
          exponent: 3
        }
      ],
      base: 'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
      name: 'Marble',
      display: 'marble',
      symbol: 'MARBLE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
      },
      coingecko_id: 'marble'
    },
    {
      description:
        'Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.',
      type_asset: 'cw20',
      address:
        'juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
      denom_units: [
        {
          denom:
            'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
          exponent: 0
        },
        {
          denom: 'hope',
          exponent: 6
        }
      ],
      base: 'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
      name: 'Hope Galaxy',
      display: 'hope',
      symbol: 'HOPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
      },
      coingecko_id: 'hope-galaxy'
    },
    {
      description:
        'Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem',
      type_asset: 'cw20',
      address:
        'juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
      denom_units: [
        {
          denom:
            'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
          exponent: 0
        },
        {
          denom: 'rac',
          exponent: 6
        }
      ],
      base: 'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
      name: 'Racoon',
      display: 'rac',
      symbol: 'RAC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
      },
      coingecko_id: 'racoon'
    },
    {
      description: 'The native token of Marble DEX on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
      denom_units: [
        {
          denom:
            'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
          exponent: 0
        },
        {
          denom: 'block',
          exponent: 6
        }
      ],
      base: 'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
      name: 'Block',
      display: 'block',
      symbol: 'BLOCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
      }
    },
    {
      description: 'The DAO token to build consensus among Hong Kong People',
      type_asset: 'cw20',
      address:
        'juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
      denom_units: [
        {
          denom:
            'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
          exponent: 0,
          aliases: ['dhk']
        }
      ],
      base: 'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
      name: 'DHK',
      display: 'dhk',
      symbol: 'DHK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
      }
    },
    {
      description: 'Token governance for Junoswap',
      type_asset: 'cw20',
      address:
        'juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
      denom_units: [
        {
          denom:
            'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
          exponent: 0
        },
        {
          denom: 'raw',
          exponent: 6
        }
      ],
      base: 'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
      name: 'JunoSwap',
      display: 'raw',
      symbol: 'RAW',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png'
      },
      coingecko_id: 'junoswap-raw-dao'
    },
    {
      description:
        'Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!',
      type_asset: 'cw20',
      address:
        'juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
      denom_units: [
        {
          denom:
            'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
          exponent: 0
        },
        {
          denom: 'asvt',
          exponent: 6
        }
      ],
      base: 'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
      name: 'Another.Software Validator Token',
      display: 'asvt',
      symbol: 'ASVT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
      }
    },
    {
      description:
        'IBC HNS is HNS, coin of Handshake, decentralized root namesystem, but wrapped to cosmos for IBC support by Another.Software through Juno netowrk.',
      type_asset: 'cw20',
      address:
        'juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
      denom_units: [
        {
          denom:
            'cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
          exponent: 0
        },
        {
          denom: 'hns',
          exponent: 6
        }
      ],
      base: 'cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k',
      name: 'IBC HNS (Handshake)',
      display: 'hns',
      symbol: 'HNS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hns.svg'
      }
    },
    {
      description: 'DAO dedicated to building tools on the Juno Network',
      type_asset: 'cw20',
      address:
        'juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
      denom_units: [
        {
          denom:
            'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
          exponent: 0
        },
        {
          denom: 'joe',
          exponent: 6
        }
      ],
      base: 'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
      name: 'JoeDAO',
      display: 'joe',
      symbol: 'JOE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
      }
    },
    {
      description: 'Governance Token for Digital Land Acquisition DAO',
      type_asset: 'cw20',
      address:
        'juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
      denom_units: [
        {
          denom:
            'cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
          exponent: 0
        },
        {
          denom: 'dla',
          exponent: 6
        }
      ],
      base: 'cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr',
      name: 'Digital Land Acquisition DAO',
      display: 'dla',
      symbol: 'DLA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.svg'
      }
    },
    {
      description: 'DeFi gaming platform built on Juno',
      type_asset: 'cw20',
      address:
        'juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
      denom_units: [
        {
          denom:
            'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
          exponent: 0
        },
        {
          denom: 'glto',
          exponent: 6
        }
      ],
      base: 'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
      }
    },
    {
      description: 'Gelotto Year 1 Grand Prize Token',
      type_asset: 'cw20',
      address:
        'juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
      denom_units: [
        {
          denom:
            'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
          exponent: 0
        },
        {
          denom: 'gkey',
          exponent: 6
        }
      ],
      base: 'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
      name: 'GKey',
      display: 'gkey',
      symbol: 'GKEY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
      }
    },
    {
      description: 'The native token cw20 for BlackHole on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
      denom_units: [
        {
          denom:
            'cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
          exponent: 0
        },
        {
          denom: 'hole',
          exponent: 6
        }
      ],
      base: 'cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m',
      name: 'BlackHole',
      display: 'hole',
      symbol: 'HOLE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.svg'
      }
    },
    {
      description: 'Staking derivative seJUNO for staked JUNO',
      type_asset: 'cw20',
      address:
        'juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
      denom_units: [
        {
          denom:
            'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
          exponent: 0
        },
        {
          denom: 'sejuno',
          exponent: 6
        }
      ],
      base: 'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
      name: 'StakeEasy seJUNO',
      display: 'sejuno',
      symbol: 'SEJUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
      },
      coingecko_id: 'stakeeasy-juno-derivative'
    },
    {
      description: 'Staking derivative bJUNO for staked JUNO',
      type_asset: 'cw20',
      address:
        'juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
      denom_units: [
        {
          denom:
            'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
          exponent: 0
        },
        {
          denom: 'bjuno',
          exponent: 6
        }
      ],
      base: 'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
      name: 'StakeEasy bJUNO',
      display: 'bjuno',
      symbol: 'BJUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
      },
      coingecko_id: 'stakeeasy-bjuno'
    },
    {
      description:
        'Solarbank DAO Governance Token for speeding up the shift to renewable and green energy',
      type_asset: 'cw20',
      address:
        'juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
      denom_units: [
        {
          denom:
            'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
          exponent: 0
        },
        {
          denom: 'solar',
          exponent: 6
        }
      ],
      base: 'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
      name: 'Solarbank DAO',
      display: 'solar',
      symbol: 'SOLAR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
      }
    },
    {
      description: 'StakeEasy governance token',
      type_asset: 'cw20',
      address:
        'juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
      denom_units: [
        {
          denom:
            'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
          exponent: 0
        },
        {
          denom: 'seasy',
          exponent: 6
        }
      ],
      base: 'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
      name: 'StakeEasy SEASY',
      display: 'seasy',
      symbol: 'SEASY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
      },
      coingecko_id: 'seasy'
    },
    {
      description: 'The native token cw20 for MuseDAO on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
      denom_units: [
        {
          denom:
            'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
          exponent: 0
        },
        {
          denom: 'muse',
          exponent: 6
        }
      ],
      base: 'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
      name: 'MuseDAO',
      display: 'muse',
      symbol: 'MUSE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
      }
    },
    {
      description: 'The native token cw20 for Loop Finance on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
      denom_units: [
        {
          denom:
            'cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
          exponent: 0
        },
        {
          denom: 'loop',
          exponent: 6
        }
      ],
      base: 'cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
      name: 'Loop Finance',
      display: 'loop',
      symbol: 'LOOP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/loop.png'
      },
      coingecko_id: 'loop'
    },
    {
      description: 'The native token cw20 for Fanfury on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
      denom_units: [
        {
          denom:
            'cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
          exponent: 0
        },
        {
          denom: 'fury',
          exponent: 6
        }
      ],
      base: 'cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
      name: 'Fanfury',
      display: 'fury',
      symbol: 'FURY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
      },
      coingecko_id: 'fanfury'
    },
    {
      description: 'The native token cw20 for PHMN on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
      denom_units: [
        {
          denom:
            'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
          exponent: 0
        },
        {
          denom: 'phmn',
          exponent: 6
        }
      ],
      base: 'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
      name: 'POSTHUMAN',
      display: 'phmn',
      symbol: 'PHMN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
      },
      coingecko_id: 'posthuman'
    },
    {
      description: 'The native token cw20 for Hopers on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
      denom_units: [
        {
          denom:
            'cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
          exponent: 0
        },
        {
          denom: 'hopers',
          exponent: 6
        }
      ],
      base: 'cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
      name: 'Hopers',
      display: 'hopers',
      symbol: 'HOPERS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png'
      },
      coingecko_id: 'hopers-io '
    },
    {
      description: 'RED',
      type_asset: 'cw20',
      address:
        'juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za',
      denom_units: [
        {
          denom:
            'cw20:juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za',
          exponent: 0
        },
        {
          denom: 'red',
          exponent: 6
        }
      ],
      base: 'cw20:juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za',
      name: 'Red',
      display: 'red',
      symbol: 'RED',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/red.png'
      }
    },
    {
      description: 'BLUE',
      type_asset: 'cw20',
      address:
        'juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7',
      denom_units: [
        {
          denom:
            'cw20:juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7',
          exponent: 0
        },
        {
          denom: 'blue',
          exponent: 6
        }
      ],
      base: 'cw20:juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7',
      name: 'Blue',
      display: 'blue',
      symbol: 'BLUE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/blue.png'
      }
    },
    {
      description: 'WYND DAO Governance Token',
      type_asset: 'cw20',
      address:
        'juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
      denom_units: [
        {
          denom:
            'cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
          exponent: 0
        },
        {
          denom: 'wynd',
          exponent: 6
        }
      ],
      base: 'cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
      name: 'Wynd DAO Governance Token',
      display: 'wynd',
      symbol: 'WYND',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png'
      }
    },
    {
      description: 'Bored APE IBC club token',
      type_asset: 'cw20',
      address:
        'juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
      denom_units: [
        {
          denom:
            'cw20:juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
          exponent: 0
        },
        {
          denom: 'banana',
          exponent: 6
        }
      ],
      base: 'juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj',
      name: 'Banana Token',
      display: 'banana',
      symbol: 'BANANA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/banana.png'
      }
    },
    {
      description: 'nRide Token',
      type_asset: 'cw20',
      address:
        'juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
      denom_units: [
        {
          denom:
            'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
          exponent: 0
        },
        {
          denom: 'nride',
          exponent: 6
        }
      ],
      base: 'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
      name: 'nRide Token',
      display: 'nride',
      symbol: 'NRIDE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png'
      }
    },
    {
      description: 'Signal Art and Gaming on Juno',
      type_asset: 'cw20',
      address:
        'juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
      denom_units: [
        {
          denom:
            'cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
          exponent: 0
        },
        {
          denom: 'sgnl',
          exponent: 6
        }
      ],
      base: 'cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
      name: 'Signal',
      display: 'sgnl',
      symbol: 'SGNL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
      }
    },
    {
      description:
        'Governance and utility token for the Junø Apes NFT platform on Juno',
      type_asset: 'cw20',
      address:
        'juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
      denom_units: [
        {
          denom:
            'cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
          exponent: 0
        },
        {
          denom: 'jape',
          exponent: 6
        }
      ],
      base: 'cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
      name: 'Junø Apes',
      display: 'jape',
      symbol: 'JAPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
      }
    },
    {
      description:
        'A community meme token with a fantasy fiction storyline and comic based NFTs on Juno',
      type_asset: 'cw20',
      address:
        'juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa',
      denom_units: [
        {
          denom:
            'cw20:juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa',
          exponent: 0
        },
        {
          denom: 'catom',
          exponent: 6
        }
      ],
      base: 'cw20:juno12wxyvtqe76x2a5jj6ckp2hfq8v32m6rvyyxwwufl2tksqvkt7whqczv6pa',
      name: 'Catom',
      display: 'catom',
      symbol: 'CATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catom.png'
      }
    },
    {
      description:
        'Utility token of Howl.social, an on chain micro-blogging platform on Juno',
      type_asset: 'cw20',
      address:
        'juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
      denom_units: [
        {
          denom:
            'cw20:juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
          exponent: 0
        },
        {
          denom: 'howl',
          exponent: 6
        }
      ],
      base: 'cw20:juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
      name: 'Howl',
      display: 'howl',
      symbol: 'HOWL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/howl.png'
      }
    },
    {
      description:
        'Inspired by Bonk. A community project to celebrate the settlers of JunoNetwork.',
      type_asset: 'cw20',
      address:
        'juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
      denom_units: [
        {
          denom:
            'cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
          exponent: 0
        },
        {
          denom: 'fox',
          exponent: 6
        }
      ],
      base: 'cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
      name: 'Juno Fox',
      display: 'fox',
      symbol: 'FOX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
      }
    },
    {
      description: 'The native token cw20 for Neta on Juno Chain',
      type_asset: 'cw20',
      address:
        'juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
      denom_units: [
        {
          denom:
            'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
          exponent: 0,
          aliases: ['uneta']
        },
        {
          denom: 'neta',
          exponent: 6
        }
      ],
      base: 'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png'
      },
      coingecko_id: 'neta'
    }
  ]
};
export default assets;
