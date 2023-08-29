import Link from "next/link"

export const metadata = {
    title: 'About | zerogtiger'
}

   export const preview = "About me Here is my resume a..."
// export const preview = "This is Tiger Z. Ding's website ..."

export default function About() {
    return (
        <main>
            <div className='-border mx-auto px-4 max-w-[52rem]'>
                <h1> About </h1>
                <section>
                    <h2> About me</h2>
                    <p>
                        Here is my <Link target='_blank' href={'/files/resume.pdf'}>resume</Link> and <Link href={'/contact'}>contact info</Link>.
                    </p>
                    <p>
                        You can also find me on <Link target='_blank' href='https://www.linkedin.com/in/tiger-ding-16880a247/'>LinkedIn</Link> and <Link target="_blank" href='https://github.com/zerogtiger'>GitHub</Link>.
                    </p>
                    <p>As for my background and interests, here they are: </p>
                    <ul>
                        <li><div><p>I am a Computer Science undergraduate student at the University of Waterloo in Ontario, Canada.</p></div></li>
                        <li><div><p>I went to high school in Markham, Ontario, where I picked up a keen focus on competitive mathematics as well as competitive programming. Some of my achievements include earning group III on the <Link target="_blank" href={'https://uwaterloo.ca/'}>CSMC</Link> honor roll, as well as qualifying for the <Link target="_blank" href={'https://cms.math.ca/competitions/cmo/'}>CMO</Link> in my senior year.</p></div></li>
                        <li><div><p>I was given a <Link target="_blank" href={'https://www.raspberrypi.com/'}>Raspberry Pi</Link> at a young age, and started messing around with the Debian Linux distribution, though the adventure mostly halted at trying to look cool by typing stuff in a terminal window.</p>
                            <p>When I finally discovered the world of open source in high school, I naturally became a Linux enthusiast beloving the (Neo)vim editor. Even now, I still work on projects involving the Raspberry Pi platform ever so often.</p>
                        </div></li>
                        <li><div>
                            Some of my other hobbies include: 3D design, printing (with CAD software), and visualizations (via <Link target="_blank" href={'https://www.blender.org/'}>Blender</Link>); figure sketching; calligraphy (not done in English); photography; reading primarily classical fictional texts; as well as playing badminton and exercising.
                        </div></li>
                    </ul>
                </section>
                <section>
                    <h2>About this website</h2>
                    <ul>
                        <li><div>
                            This site was built using NextJS and styled with Tailwind CSS.
                        </div></li>
                        <li><div>All articles found under <Link href={'content'}>content</Link> were rendered from markdown files using <Link target='_blank' href={'https://github.com/remarkjs/react-markdown'}>react-markdown</Link> with plugins associated with <Link target="_blank" href={'https://github.com/remarkjs/remark'}>remark</Link> and <Link target="_blank" href={'https://github.com/rehypejs/rehype/tree/main'}>rehype</Link>.</div></li>
                        <li><div>
                            The font used for the majority of the content is <Link target="_blank" href={'https://github.com/rsms/inter'}>Inter</Link>, while <Link target="_blank" href={'https://github.com/be5invis/Iosevka'}>Iosevka</Link> was used for code snippets.
                        </div></li>
                        <li><div>
                            The website's source code is available on <Link target="_blank" href={"https://github.com/zerogtiger/personal-site"}>GitHub</Link>.
                        </div></li>
                        <li><div>Inspiration for the overall design and philosophy of this site came from <Link target="_blank" href={'https://www.ejmastnak.com/'}>Elijan J. Mastnak</Link>.</div></li>
                    </ul>
                </section>
            </div >
        </main >
    )
}
