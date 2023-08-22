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
                    <h2>Tutorials</h2>
                    <p>Coming soon: </p>
                    <div>
                        <p>
                            <span className="font-bold">The tailored editor: Neovim</span>
                            <br />
                            A detailed beginner's guide to understanding and setting up Neovim as an IDE.
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className="font-bold">Debian Linux on the go</span>
                            <br />
                            Set up a portable Debian Linux environment with an iPad and a Raspbery Pi.
                        </p>
                    </div>
                </section>
                <section>
                    <h2>Projects</h2>
                    <p>Coming soon: </p>
                    <div>
                        <p>
                            <span className="font-bold">Photorealistic canyon water landscape</span>
                            <br />
                            A photorealistic landscape created with procedural textures in Blender.
                        </p>
                    </div>
                </section>
            </div>
        </main >
    )
}
