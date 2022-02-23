import Image from 'next/image'
import Link from 'next/link'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}



const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <h1 className={style.title}>Discover, collect and sell extraordinary NFTs</h1>
            <p className={style.description}>OpenSea is the world&apos;s first and largest NFT marketplace</p>
            <div className={style.ctaContainer}>
              <Link href='/collections/0x2D7B1258Ee5919A64dc48D7d5688315232D4a624'><a className={style.accentedButton}>Explore</a></Link>
              <button className={style.button}>Create</button>
            </div>
          </div>

          <div className={style.cardContainer}>
            <Image
              className='rounded-t-lg'
              src='https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250'
              width={360}
              height={460}
              alt='NFT image'
            />
            <div className={style.infoContainer}>
              <Image
                className='h-[2.25rem] rounded-full'
                src='https://lh3.googleusercontent.com/qaIpimX6EFuyx-29k7H1YvXOPqyvgM9kVhMQAK_lp2RaVejBSLspLd3GIuuqPMKGbYRqugL-wI8NLwLprcWFJ19z6E6Q7Q2QcgUgYzs=s80'
                width={50}
                height={50}
                alt='Profile logo'
              />
              <div className={style.author}>
                <p className={style.author}>Jolly</p>
                <a
                  className='text-[#1868b7]'
                  href='/'
                >
                  hola-kanola
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;