import fs from 'fs'
import matter from "gray-matter"

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'
import rehypeRaw from 'rehype-raw';

import Image from 'next/image';
import imageSize from 'image-size';
import Link from 'next/link';

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

  const { post_route } = params;
  const fileContents = fs.readFileSync(`public/_posts/${post_route.join('/')}.md`, 'utf8');
  const matterResult = matter(fileContents);
  const img_src = (post_route.slice(0, -1).join('/') + (post_route.length === 1 ? '' : '/') + matterResult.data.twitter_image).trim().toString();
  // console.log(`twitter image route: https://raw.githubusercontent.com/zerogtiger/personal-site/main/public/_posts/${img_src}`)
  return {
    title: `${matterResult.data.title} | zerogtiger`,
    twitter: {
      card: 'summary_large_image',
      title: `${matterResult.data.title} | zerogtiger`,
      images: {
        url: `https://raw.githubusercontent.com/zerogtiger/personal-site/main/public/_posts/${img_src}`,
      },
    },
  }
}

export default async function Post({ params }) {

  const { post_route } = params

  const fileContents = fs.readFileSync(`public/_posts/${post_route.join('/')}.md`, 'utf8');
  const matterResult = matter(fileContents);

  // <meta property="twitter:image" content="" />
  // return <Image src={'/_posts/' + img_src} alt={props.alt} width={img_dim.width} height={img_dim.height} />
  return (
    <main>
      <div className="-border mx-auto px-4 max-w-[52rem]">
        <Markdown
          components={{
            img: (props) => {
              const img_src = (post_route.slice(0, -1).join('/') + (post_route.length === 1 ? '' : '/') + props.src).trim().toString();
              const img_dim = imageSize(`public/_posts/${img_src}`);
              return <img src={`/_posts/${img_src}`} alt={props.alt} width={img_dim.width} height={img_dim.height} />
            },
            video: (props) => {
              const video_src = (post_route.slice(0, -1).join('/') + (post_route.length === 1 ? '' : '/') + props.node.children[1].properties.src).trim().toString();
              // console.log(props);
              return <video autoPlay={props.autoPlay} muted={props.muted} controls={props.controls} loop={props.loop}> <source src={`/_posts/${video_src}`}/> </video>
            },
            a(props) {
              return <Link target='_blank' href={props.href}>{props.children}</Link>;
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
            li({ children, index, ordered, ...props }) {
              // console.log(ordered);
              if (ordered) {
                return (
                  <li><div>{children}</div></li>
                )
              }
              return (
                // <li><div>{ordered? (index + 1) + "." + children : children}</div></li>
                <li><div>{children}</div></li>
              )
            },
            // ul({children, ...props}) {
            //   console.log(children);
            // }
            // ol({ children, ...props }) {
            //   console.log(children);
            //   return (
            //     <li><div>{children}</div></li>
            //   )
            // },
          }}
          children={matterResult.content} remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]} />
      </div>
    </main>
  )
}
