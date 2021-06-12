import { Nft } from './types'

const Nfts: Nft[] = [
  {
    name: 'Main Pass NFT',
    metadata: '',
    description:
      'All inclusive Main Event Venue DJ Concert. Open Bar. Lottery draw for the afterparty exclusive. Transportation to and from all events from approved hotels.',
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/swapsies.png',
    previewImage: 'preview1.png',
    blurImage: 'swapsies-blur.png',
    sortOrder: 999,
    fileType: 'mp4',
    nftId: 0,
    tokenAmount: 5,
    tokenSupply: 30,
    nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
    nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
    active: false,
  },
  {
    name: 'Yacht Pass NFT',
    metadata: '',
    description:
      'All inclusive Yacht Party. Fully Catered. Open Bar. Private DJ. Full day Punta Cana booze cruise sightseeing tour. Main Event NFT’s included! (25 STOS Value). Transportation to and from all events',
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/drizzle.png',
    previewImage: 'preview2.png',
    blurImage: 'drizzle-blur.png',
    sortOrder: 999,
    fileType: 'mp4',
    nftId: 1,
    tokenAmount: 10,
    tokenSupply: 20,
    nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
    nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
    active: true,
  },
  {
    name: 'VIP WEEK Pass NFT',
    metadata: '',
    description:
      '5 Bed Villa from a list of oceanfront choices. Personal chef with daily menus. Transportation to and from the events. Yacht Party Admission. Main Event Admission + Afterparty. Party of 8 covered for Villa and all admissions. 4 days, 3 nights (extensions extra)',
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/blueberries.png',
    previewImage: 'preview3.png',
    blurImage: 'blueberries-blur.png',
    sortOrder: 999,
    fileType: 'mp4',
    nftId: 3,
    tokenAmount: 15,
    tokenSupply: 10,
    nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
    nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
    active: false,
  },
]

export default Nfts
