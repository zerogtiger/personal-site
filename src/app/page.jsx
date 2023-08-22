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
                <p>To avoid making this a glorified businesscard, this website was designed to be a relatively standalone platform featuring some unique content.</p>
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
            </div>
        </main >
    )
}
