'use server'
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  request
  // request
  // photo_id, // -1 if all photos
  // mode, // 1 if all info, 0 if id only
) {
  try {
    const { searchParams } = new URL(request.url);

    const photo_id = Number(searchParams.get('photo_id'));
    const mode = Number(searchParams.get('mode'));

    // console.log(photo_id);
    // console.log(mode);
    // const photo_id = -1;
    // const mode = 1;

    // all photos
    // const photos = await prisma.photos.findMany({
    //   include: {
    //     lenses: true,
    //     cameras: true,
    //     locations: true,
    //   }
    // });

    // order by location
    // const photos = await prisma.photos.findMany({
    //   include: {
    //     lenses: true,
    //     cameras: true,
    //     locations: true,
    //   },
    //   orderBy: {
    //     locations: {
    //       city: "asc",
    //     }
    //   }
    // });

    // order by camera
    // const photos = await prisma.photos.findMany({
    //   include: {
    //     lenses: true,
    //     cameras: true,
    //     locations: true,
    //   },
    //   orderBy: {
    //     cameras: {
    //       make: "asc",
    //     }
    //   }
    // });

    // order by date
    // const photos = await prisma.photos.findMany({
    //   include: {
    //     lenses: true,
    //     cameras: true,
    //     locations: true,
    //   },
    //   orderBy: {
    //     date: "asc",
    //   }
    // });

    // filter by location, camera, lens, etc.
    // const photos = await prisma.photos.findMany({
    //   include: {
    //     lenses: true,
    //     cameras: true,
    //     locations: true,
    //   },
    //   orderBy: {
    //     date: "asc",
    //   },
    //   where: {
    //     OR: [
    //       { lens_id: 1 }, // iphone ultra wide
    //       { lens_id: 2 }, // iphone main
    //       { location_id: 1 }, // waterloo
    //     ],
    //   }
    // });
    //

    // search (in all categories)
    // const photos = await prisma.photos.findMany({
    //   include: {
    //     lenses: true,
    //     cameras: true,
    //     locations: true,
    //   },
    //   orderBy: {
    //     date: "asc",
    //   },
    //   where: {
    //     OR: [
    //       { lens_id: 1 }, // iphone ultra wide
    //       { lens_id: 2 }, // iphone main
    //       { location_id: 1 }, // waterloo
    //     ],
    //   }
    // });

    // search
    const user_input = "26mm";
    const user_input_num = Number(user_input);
    // const photos = await prisma.photos.findMany({
    //   include: {
    //     lenses: true,
    //     cameras: true,
    //     locations: true,
    //   },
    //   orderBy: {
    //     date: "asc",
    //   },
    //   where: {
    //     OR: [
    //       {
    //         lenses: {
    //           make: { contains: user_input, mode: 'insensitive', },
    //         }
    //       },
    //       {
    //         lenses: {
    //           model: { contains: user_input, mode: 'insensitive', },
    //         },
    //       },
    //       {
    //         cameras: {
    //           make: { contains: user_input, mode: 'insensitive', },
    //         }
    //       },
    //       {
    //         cameras: {
    //           model: { contains: user_input, mode: 'insensitive', },
    //         },
    //       },
    //       {
    //         locations: {
    //           city: { contains: user_input, mode: 'insensitive', },
    //         },
    //       },
    //       {
    //         locations: {
    //           state: { contains: user_input, mode: 'insensitive', },
    //         },
    //       },
    //       {
    //         locations: {
    //           country: { contains: user_input, mode: 'insensitive', },
    //         },
    //       },
    //       {
    //         description: { contains: user_input, mode: 'insensitive', },
    //       },
    //       {
    //         locations: {
    //           longitude: {
    //             gte: (Number.isNaN(user_input_num) ? -1000 : user_input_num - 5),
    //             lte: (Number.isNaN(user_input_num) ? -1000 : user_input_num + 5),
    //           },
    //         },
    //       },
    //       {
    //         locations: {
    //           latitude: {
    //             gte: (Number.isNaN(user_input_num) ? -1000 : user_input_num - 5),
    //             lte: (Number.isNaN(user_input_num) ? -1000 : user_input_num + 5),
    //           },
    //         },
    //       },
    //       {
    //         aperature: {
    //           gte: (Number.isNaN(user_input_num) ? -1 : user_input_num - 0.5),
    //           lte: (Number.isNaN(user_input_num) ? -1 : user_input_num + 0.5),
    //         },
    //       },
    //       {
    //         shutter_speed: {
    //           contains: user_input,
    //         },
    //       },
    //       {
    //         iso: {
    //           gte: (Number.isNaN(user_input_num) ? 0 : user_input_num - 500),
    //           lte: (Number.isNaN(user_input_num) ? -500 : user_input_num + 500),
    //         },
    //       },
    //     ],
    //   }
    // });
    //
    // await prisma.$disconnect()
    //   .catch(async (e) => {
    //     console.error(e)
    //     await prisma.$disconnect()
    //     process.exit(1)
    //   })

    // console.log("ret");

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
    else {
      ret = await prisma.photos.findFirst({
        where: {
          id: photo_id,
        },
        select: {
          id: true
        }
      })
    }


    // console.log(ret);
    // console.log(`window type: ${typeof window === 'undefined'}`)
    await prisma.$disconnect()
      .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
      })
    return NextResponse.json({ret});
  } catch (error) {
    await prisma.$disconnect()
      .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
      })
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
