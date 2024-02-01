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
    const { searchParams } = new URL(request.url); // dereferencing

    // /api?query=1&searchterm=&orderby=date&filterkey=lens_id&filterkey=lens_id&filterkey=location_id&filtervalue=1&filtervalue=2&filtervalue=1

    const allphotos = searchParams.get('allphotos');
    const filter = searchParams.get('filter');
    const query = searchParams.get('query');
    const searchTerm = searchParams.get('searchterm');
    const orderby = searchParams.get('orderby');
    const filterkey = searchParams.getAll('filterkey');
    const filtervalue = searchParams.getAll('filtervalue');

    // console.log(allphotos);
    // console.log(filter);
    // console.log(query);
    // console.log(searchTerm === "");
    // console.log(orderby);
    // console.log(filterkey);
    // console.log(filtervalue);

    let ret;
    // console.log(ret);

    if (filter) {
      const cameras = await prisma.cameras.findMany();
      const lenses = await prisma.lenses.findMany();
      const locations = await prisma.locations.findMany();

      ret = { cameras, lenses, locations };
    }
    else if (allphotos) {
      ret = await prisma.photos.findMany({
        include: {
          lenses: true,
          cameras: true,
          locations: true,
        }
      });
    }
    else if (query) {
      const searchTermNum = Number(searchTerm);

      let filterRequired = false;
      const orderCondition = {};
      // console.log(orderby.toLowerCase() === "date");
      if (orderby.toLowerCase() === "date") {
        orderCondition["date"] = "asc";
      }
      else if (orderby.toLowerCase() === "lenses") {
        orderCondition["lens_id"] = "asc";
      }
      else if (orderby.toLowerCase() === "locations") {
        orderCondition["location_id"] = "asc";
      }
      // console.log(orderCondition);

      let orConditions = [];
      for (const idx in filterkey) {
        const obj = {};
        obj[filterkey[idx]] = Number(filtervalue[idx]);
        orConditions.push(obj);
        filterRequired = true;
      }
      if (searchTerm !== "") {
        filterRequired = true;
        orConditions = [{ "OR": [...orConditions] },
        {
          "OR": [
            {
              lenses: {
                make: { contains: searchTerm, mode: 'insensitive', },
              }
            },
            {
              lenses: {
                model: { contains: searchTerm, mode: 'insensitive', },
              },
            },
            {
              cameras: {
                make: { contains: searchTerm, mode: 'insensitive', },
              }
            },
            {
              cameras: {
                model: { contains: searchTerm, mode: 'insensitive', },
              },
            },
            {
              locations: {
                city: { contains: searchTerm, mode: 'insensitive', },
              },
            },
            {
              locations: {
                state: { contains: searchTerm, mode: 'insensitive', },
              },
            },
            {
              locations: {
                country: { contains: searchTerm, mode: 'insensitive', },
              },
            },
            {
              description: { contains: searchTerm, mode: 'insensitive', },
            },
            {
              locations: {
                longitude: {
                  gte: (Number.isNaN(searchTermNum) ? -1000 : searchTermNum - 5),
                  lte: (Number.isNaN(searchTermNum) ? -1000 : searchTermNum + 5),
                },
              },
            },
            {
              locations: {
                latitude: {
                  gte: (Number.isNaN(searchTermNum) ? -1000 : searchTermNum - 5),
                  lte: (Number.isNaN(searchTermNum) ? -1000 : searchTermNum + 5),
                },
              },
            },
            {
              aperature: {
                gte: (Number.isNaN(searchTermNum) ? -1 : searchTermNum - 0.5),
                lte: (Number.isNaN(searchTermNum) ? -1 : searchTermNum + 0.5),
              },
            },
            {
              shutter_speed: {
                contains: searchTerm,
              },
            },
            {
              iso: {
                gte: (Number.isNaN(searchTermNum) ? 0 : searchTermNum - 500),
                lte: (Number.isNaN(searchTermNum) ? -500 : searchTermNum + 500),
              },
            },
          ]
        }];
      }
      else {
        orConditions = [{ "OR": [...orConditions] }];
      }
      // ret - await prisma.photos.findMany();
      if (filterRequired) {
        ret = await prisma.photos.findMany({
          select: {
            id: true,
          },
          // include: {
          //   lenses: true,
          //   cameras: true,
          //   locations: true,
          // },
          orderBy: orderCondition,
          where: {
            AND: orConditions,
          }
        });
      }
      else {
        ret = await prisma.photos.findMany({
          select: {
            id: true,
          },
          // include: {
          //   lenses: true,
          //   cameras: true,
          //   locations: true,
          // },
          orderBy: orderCondition,
        });
      }
      // console.log(ret);
    }


    await prisma.$disconnect()
      .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
      })


    return NextResponse.json({ ret });


    // universal query
    // await prisma.$disconnect()
    //   .catch(async (e) => {
    //     console.error(e)
    //     await prisma.$disconnect()
    //     process.exit(1)
    //   })

    // console.log("ret");
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



    // console.log(ret);
    // console.log(`window type: ${typeof window === 'undefined'}`)
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
