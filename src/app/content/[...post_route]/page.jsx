import fs from 'fs'
import matter from "gray-matter"

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'
import rehypeRaw from 'rehype-raw';

import Image from 'next/image';
import imageSize from 'image-size';

const path = require("path");

const files = [];
// const img_dim = {};
// const imgFormat = ['.jpg', '.jpeg', '.png', '.gif', '.tif', '.tiff'];

function index_md_files(dir) {
    fs.readdirSync(dir).forEach(file => {
        const absPath = path.join(dir, file);
        if (fs.statSync(absPath).isDirectory()) return index_md_files(absPath);
        else if (absPath.substring(absPath.length - 3) === '.md') files.push({ post_route: absPath.substring(0, absPath.length - 3).split("/").splice(2) });
    });
}

// function index_img_dim(dir) {
//     fs.readdirSync(dir).forEach(file => {
//         const absPath = path.join(dir, file);
//         if (fs.statSync(absPath).isDirectory()) return index_img_dim(absPath);
//         // else if (imgFormat.includes(absPath.substring(absPath.lastIndexOf('.')))) console.log(imageSize(absPath).width);
//         else if (imgFormat.includes(absPath.substring(absPath.lastIndexOf('.')))) img_dim[absPath.split('/').slice(2).join('/')] = { width: imageSize(absPath).width, height: imageSize(absPath).height };
//     });
// }

export const dynamicParams = false;

export function generateStaticParams() {
    index_md_files("public/_posts/");
    return files;
}


export async function generateMetadata({ params }) {

    const { post_route } = params
    const fileContents = fs.readFileSync(`public/_posts/${post_route.join('/')}.md`, 'utf8');
    const matterResult = matter(fileContents);
    return {
        title: `${matterResult.data.title} | zerogtiger`
    }
}

export default async function Post({ params }) {

    const { post_route } = params

    const fileContents = fs.readFileSync(`public/_posts/${post_route.join('/')}.md`, 'utf8');
    const matterResult = matter(fileContents);

    return (
        <main>
            <div className="-border mx-auto px-4 max-w-[52rem]">
                <ReactMarkdown
                    components={{
                        img: (props) => {
                            const img_src = (post_route.slice(0, -1).join('/') + (post_route.length === 1 ? '' : '/') + props.src).trim().toString();
                            const img_dim = imageSize('public/_posts/' + img_src);
                            return <Image src={'/_posts/' + img_src} alt={props.alt} width={img_dim.width} height={img_dim.height} />
                        },
                        code({ node, inline, className, children, ...props }) {
                            return !inline ? (
                                <div className='border-y-2 border-gray px-2 py-4 w-full bg-bg2 text-fg overflow-x-scroll'>
                                    <code {...props}>
                                        {children}
                                    </code>
                                </div>
                            ) : (
                                <code {...props} className='inline-code'>
                                    {children}
                                </code>
                            )
                        },
                        li({ children, ...props}) {
                            return (
                                <li><div>{children}</div></li>
                            )
                        }
                    }}
                    children={matterResult.content} remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]} />
            </div>
        </main>
    )
}
