import FootNav from '@/components/FootNav'
import NavBar from '@/components/NavBar'
import Link from 'next/link'

export const metadata = {
  title: 'Home | zerogtiger',
}

export const preview = "This is Tiger Z. Ding's website ..."

export default function Home() {
  return (
    <main>
      <div className='mx-auto px-4 max-w-[52rem]'>
        <h1> Home </h1>
        <p>This is Tiger Z. Ding's website.</p>
        <p>To avoid making a glorified business card, this website was designed to be a relatively standalone platform featuring some exclusive content.</p>
        <p className='font-bold'>If you are new here, here are the links to:</p>
        <ul>
          <li><div><Link href={'/content'}>Contents</Link> of this website</div></li>
          <li><div>Information <Link href={'/about'}>about me and this project</Link></div></li>
        </ul>
        { /*<p className='font-bold'>Here are some recommended content if you don't know where to start:</p>*/}
        { /*<ul>*/}
        { /*<li><div>Contents of this website</div></li>*/}
        { /*<li><div>Information about me and this project</div></li>*/}
        { /*</ul>*/}
        <br />
        <br />
        <div>
          <p className='my-0'>Here are badges of a few friends' website, my own, and of Neovim.</p>
          <p className="flex -border pt-2 mb-0 my-0 py-0">
            <Link href={'https://naesna.es/'} target='_blank' className="pt-0 pb-2 mr-3 my-0 font-bold">
              <img width={88} height={31} className="my-0 max-w-[88px]" src={'/eighteightthreeone/naesna_button.gif'} />
            </Link>
            <Link href={'https://hexadecimaldinosaur.com/'} target='_blank' className="pt-0 pb-2 mr-3 my-0 font-bold">
              <img width={88} height={31} className=" my-0 max-w-[88px]" src={'/eighteightthreeone/hxdino.gif'} />
            </Link>
            <Link href={'https://dundeezhang.com/'} target='_blank' className="border-red -border py-0 mr-3 my-0">
              <img width={88} height={31} className="py-0 -border my-0 max-w-[88px]" src={'/eighteightthreeone/dundeezhang.gif'} />
            </Link>
          </p>
          <p className="flex -border pt-2 mb-3 my-0 py-0">
            <Link href={'/'} className="py-0 pb-2 mr-3 my-0 font-bold ">
              <img width={88} height={31} className="my-0 max-w-[88px]" src={'/eighteightthreeone/zerotiger.gif'} />
            </Link>
            <Link href={'https://neovim.io/'} target='_blank' className="pb-2 py-0 mr-3 my-0 font-bold ">
              <img width={88} height={31} className=" my-0 max-w-[88px]" src={'/eighteightthreeone/neovim.png'} />
            </Link>
          </p>
        </div>
      </div>
    </main >
  )
}
// and here's mine, along with a few others.
// <p className="flex -border pt-0 mb-3 my-0">
// </p>
// <p className=" -border font-bold mb-3 ">
//   88 × 31 Badge
// </p>
