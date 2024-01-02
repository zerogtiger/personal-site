'use server'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET({
  photo_id, // -1 if all photos
  mode, // 1 if all info, 0 if id only
}) {

  let ret;

  if (photo_id === -1 && mode === 1) {
    ret = await prisma.photos.findMany({
      include: {
        lenses: true,
        cameras: true,
        locations: true,
      }
    });
  }
  else if (photo_id === -1 && mode === 0) {
    ret = await prisma.photos.findMany({
      select: {
        id: true,
      },
    });
  }
  else if (mode === 1) {
    ret = await prisma.photos.findFirst({
      where: {
        id: photo_id,
      },
      include: {
        locations: true,
        cameras: true,
        lenses: true,
      }
    })
  }
  // useless query
  else if (mode === 0) {
    ret = await prisma.photos.findFirst({
      where: {
        id: photo_id,
      },
      select: {
        id: true
      }
    })
  }

  await prisma.$disconnect()
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })

  // console.log(ret);
  console.log(`window type: ${typeof window === 'undefined'}`)
  return ret;
}
