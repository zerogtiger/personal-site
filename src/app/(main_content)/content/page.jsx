import FootNav from "@/components/FootNav";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export const metadata = {
  title: 'Content | zerogtiger'
}

export const preview = "Tutorials Coming soon: The tail..."
// export const preview = "This is Tiger Z. Ding's website ..."

export default function Content() {
  return (
    <main>
      <div className='-border mx-auto px-4 max-w-[52rem]'>
        <h1>Content </h1>
        <section>
          <h2>Photography</h2>
          <div>
            <p>
              <Link href={'content/photography'} className="font-bold">Portfolio</Link>
              <br />
              Photos I've taken in my recent few years of pursuit in photography.
            </p>
          </div>
        </section>
        <section>
          <h2>Tutorials</h2>
          <div>
            <p>
              <Link href={'content/nvim_tutorial/intro'} className="font-bold"> Code as fast as thought</Link>
              <br />
              A detailed beginner's guide to building a tailored editor with Neovim
            </p>
          </div>
          <p><em>Coming soon: </em></p>
          <div>
            <p>
              <span className="font-bold">Debian Linux on the go</span>
              <br />
              Set up a portable Debian Linux environment with an iPad and a Raspberry Pi.
            </p>
          </div>
        </section>
        <section>
          <h2>Projects</h2>
          <div>
            <p>
              <Link href={'content/water_canyon_landscape/water_canyon_landscape'} className="font-bold">Photorealistic canyon water landscape</Link>
              <br />
              A photorealistic landscape created with procedural textures in Blender.
            </p>
          </div>
          <div>
            <p>
              <Link href={'https://qbox.zerotiger.ca/en/login'} className="font-bold" target="_blank">Box of のuestions</Link>
              <br />
              A mobile web-app to collect and publish anonymous questions from your friends.
            </p>
          </div>
          <p><em>Coming soon: </em></p>
          <div>
            <p>
              <Link href={'https://github.com/zerogtiger/Eleminima'} className="font-bold" target="_blank">Eliminima</Link>
              <br />
              A declarative graphics compositing language built with C++ and LLVM.
            </p>
          </div>
          <div>
            <p>
              <span  className="font-bold" target="_blank">
                149 Central Park North
              </span>
              <br />
              Interior visualization of an apartment floor located in Harlem, Manhatten, NYC. 
            </p>
          </div>
        </section>
        <section>
          <h2>Appendix</h2>
          <div>
            <p className=" -border font-bold mb-3 ">
              88 × 31 Badge
            </p>
            Here are badges of a few friends
            <p className="flex -border pt-2 mb-3 my-0">
              <Link href={'/'} className="pt-0 pb-2 mr-3 my-0 font-bold">
                <img width={88} height={31} className="my-0 max-w-[88px]" src={'/eighteightthreeone/naesna_button.gif'} />
              </Link>
              <Link href={'/'} className="pt-0 pb-2 mr-3 my-0 font-bold">
                <img width={88} height={31} className=" my-0 max-w-[88px]" src={'/eighteightthreeone/hxdino.gif'} />
              </Link>
            </p>
            and here's mine.
            <p className="flex -border pt-0 mb-3 my-0">
              <Link href={'/'} className="py-2 my-0 font-bold ">
                <img width={88} height={31} className="my-0 max-w-[88px]" src={'/eighteightthreeone/zerotiger.gif'} />
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main >
  )
}
