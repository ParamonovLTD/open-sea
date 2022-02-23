import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai';
import openseaLogo from '../../assets/opensea.png'
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

const style = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}

const linksData = [
  {
    text: 'Collections',
    href: '/collections/0x2D7B1258Ee5919A64dc48D7d5688315232D4a624'
  },
  {
    text: 'Stats',
    href: ''
  },
  {
    text: 'Resources',
    href: ''
  },{
    text: 'Create',
    href: ''
  },

]


const Header = () => {
  return (
    <div className={style.wrapper}>
      <Link href='/'>
        <a>
          <div className={style.logoContainer}>
            <Image src={openseaLogo} width={40} height={40} />
            <div className={style.logoText}>Opensea</div>
          </div>
        </a>
      </Link>

      <div className={style.searchBar}>
        <div className={style.searchBar}>
          <AiOutlineSearch />
        </div>
        <input
          className={style.searchInput}
          type="text"
          placeholder='Search items, collections, and accounts'
        />
      </div>

      <div className={style.headerItems}>
        {linksData.map((item, index) => (
          <Link href={item.href}  key={index}>
            <a>
              <div className={style.headerItem}>{item.text}</div>
            </a>
          </Link>
        ))}
        <div className={style.headerIcon}>
          <CgProfile />
        </div>
        <div className={style.headerIcon}>
          <MdOutlineAccountBalanceWallet />
        </div>
      </div>
    </div>
  );
};

export default Header;