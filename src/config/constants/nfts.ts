import { Nft } from './types'

export const NftFarm = '0xAc5A9cA010969C70B97E59d1f2A0089371C3095b'
export const NFT = '0xd77486cD6C6b1cFD272CF1FE0b13Ac6C58C7C12D'
export const AMOUNT_TO_CLAIM = '10'

const Nfts: Nft[] = [
  {
    name: 'Main Pass NFT',
    metadata: '',
    description:
      'All inclusive Main Event Venue DJ Concert. Open Bar. Lottery draw for the afterparty exclusive. Transportation to and from all events from approved hotels.',
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmaAZXjDP9RaccmbqXBmxh9ByfLdxzgJHdb7mSbKVghzd4',
    previewImage: 'preview1.png',
    blurImage: 'swapsies-blur.png',
    sortOrder: 999,
    fileType: 'mp4',
    nftId: 1,
    tokenAmount: 10,
    tokenSupply: 15,
    nftFarmContract: '0xe876d9A1A8AA778c67bf04fe943677Df84eD99AA',
    nftContract: '0x1605854923FC0bDC13F0336C06f4fB1c1e6e83eE',
    active: false,
  },
  {
    name: 'Yacht Pass NFT',
    metadata: '',
    description:
      'All inclusive Yacht Party. Fully Catered. Open Bar. Private DJ. Full day Punta Cana booze cruise sightseeing tour. Main Event NFT’s included! (25 STOS Value). Transportation to and from all events',
    originalImage: 'https://gateway.pinata.cloud/ipfs/Qmd4dPZsBbqpG1dNr4DxkiVyz9wpVQAhUw2cvqshn9e2Na',
    previewImage: 'preview2.png',
    blurImage: 'drizzle-blur.png',
    sortOrder: 999,
    fileType: 'mp4',
    nftId: 0,
    tokenAmount: 250,
    tokenSupply: 50,
    nftFarmContract: '0xe876d9A1A8AA778c67bf04fe943677Df84eD99AA',
    nftContract: '0x1605854923FC0bDC13F0336C06f4fB1c1e6e83eE',
    active: true,
  },
  {
    name: 'VIP WEEK Pass NFT',
    metadata: '',
    description:
      '5 Bed Villa from a list of oceanfront choices. Personal chef with daily menus. Transportation to and from the events. Yacht Party Admission. Main Event Admission + Afterparty. Party of 8 covered for Villa and all admissions. 4 days, 3 nights (extensions extra)',
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmdTZT6LS9AULcvwGSYuDS6oBQ7GuHqKWJcSu1ymX3crXV',
    previewImage: 'preview3.png',
    blurImage: 'blueberries-blur.png',
    sortOrder: 999,
    fileType: 'mp4',
    nftId: 2,
    tokenAmount: 20,
    tokenSupply: 5,
    nftFarmContract: '0xe876d9A1A8AA778c67bf04fe943677Df84eD99AA',
    nftContract: '0x1605854923FC0bDC13F0336C06f4fB1c1e6e83eE',
    active: false,
  },
]

export default Nfts
