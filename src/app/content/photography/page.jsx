import { PrismaClient } from "@prisma/client"

export const metadata = {
  title: 'Photography | zerogtiger'
}

const prisma = new PrismaClient();

// async function make_call() {
//   const ret = await prisma.photos.count();
//   console.log(ret);
//   return ret;
// }

export default async function Photography() {
  const ret = await prisma.photos.findMany();
  await prisma.$disconnect()
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })

  // console.log("ret");
  // console.log(ret);

  return (
    <main>
      <div className='-border card-list mx-auto px-4 max-w-[52rem]'>
        <div className="w-full">
          <h1>Photography</h1>
        </div>
        <div className="columns-2xs">
          {ret.map(photo => <div>
            <img src={'/photography/' + photo.file_location} />
            <p>
              {photo.id}
            </p>
          </div>)
          }
        </div>
      </div>
    </main>
  )
}

