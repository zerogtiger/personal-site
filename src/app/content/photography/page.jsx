"use client"
import PhotoCard from "@/components/PhotoCard";
import PhotoDetails from "@/components/PhotoDetails";
import { PrismaClient } from "@prisma/client"
import { useState, useEffect } from "react";
import { GET } from "../api/route";

// export const metadata = {
//   title: 'Photography | zerogtiger'
// }

const prisma = new PrismaClient();

// async function make_call() {
//   const ret = await prisma.photos.count();
//   console.log(ret);
//   return ret;
// }

export default function Photography() {
  const [popupShown, setPopupShown] = useState(false);
  const [photoDisplayId, setPhotoDisplayId] = useState(0); // photos.id, array index
  const [photoDisplayIndex, setPhotoDisplayIndex] = useState(0); // photos.id, array index
  const [photos, setPhotos] = useState(null); // map storing all photos
  const [currentQuery, setCurrentQuery] = useState([]);
  const [isLoading, setLoading] = useState(true); // page loading

  const changeIndex = (delta) => {
    if (delta > 0) {
      const newIndex = Math.min(photoDisplayIndex + 1, currentQuery.length - 1);
      setPhotoDisplayIndex(newIndex);
      setPhotoDisplayId(currentQuery[newIndex]);
    }
    if (delta < 0) {
      const newIndex = Math.max(photoDisplayIndex - 1, 0);
      setPhotoDisplayIndex(newIndex);
      setPhotoDisplayId(currentQuery[newIndex]);
    }
  }

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

  useEffect(() => {
    GET({ photo_id: -1, mode: 1 }).then((data) => {
      const mp = new Map();
      // console.log(`map: ${mp.size()}`);
      // console.log(data);
      const arr = [];
      for (const photo_index in data) {
        // console.log(data[photo_index]);
        mp.set(data[photo_index].id, data[photo_index]);
        arr.push(data[photo_index].id);
      }
      setPhotos(mp);
      setCurrentQuery(arr);
      setLoading(false);
    })
  }, []);

  // useEffect(() => {
  //   GET({ photo_id: -1, mode: 0 }).then((data) => {
  //     console.log(data);
  //     const arr = [];
  //     for (const idx in data) {
  //       arr.push(data[idx].id);
  //     }
  //     setCurrentQuery(() => arr);
  //     console.log(currentQuery);
  //   })
  // }, [isLoading]);

  if (isLoading) return (
    <main>
      <div className='-border mx-auto px-4 max-w-[52rem]'>
        <div className="w-full">
          <h1>Photography</h1>
          <p>Following these lines are the photos I've taken in my recent few years of pursuit in photography. </p>
        </div>
        <div className="w-full">Loading...</div>
      </div>
    </main>
  );

  // const { data } = GET({ photo_id: -1 }).then(photos => {
  return (
    <main>
      <div className='-border mx-auto px-4 max-w-[52rem]'>
        <div className="w-full">
          <h1>Photography</h1>
          <p>Following these lines are the photos I've taken in my recent few years of pursuit in photography. </p>
        </div>
        <div className="-border-[1px] columns-2xs">
          {currentQuery.map((key, idx) => {
            // console.log(photos + " | " + key);
            const photo = photos.get(key);
            return (
              <div>
                <PhotoCard
                  id={photo.id}
                  file_location={`/photography/${photo.file_location}`}
                  date={photo.date}
                  time={photo.time}
                  description={photo.description}
                  aperature={photo.aperature}
                  shutter_speed={photo.shutter_speed}
                  iso={photo.iso}
                  city={photo.locations.city}
                  state={photo.locations.state}
                  country={photo.locations.country}
                  latitude={photo.locations.latitude}
                  longitude={photo.locations.longitude}
                  camera_make={photo.cameras.make}
                  camera_model={photo.cameras.model}
                  lens_make={photo.lenses.make}
                  lens_model={photo.lenses.model}
                  index={idx}
                  setPopupShown={setPopupShown}
                  setDisplayId={setPhotoDisplayId}
                  setDisplayIndex={setPhotoDisplayIndex}
                />
              </div>
            )
          })}
        </div>
      </div>
      {popupShown ? <div className="fixed inset-0 bg-black/50 w-full h-full"/> : ""}
        <PhotoDetails
          popupShown={popupShown}
          setPopupShown={setPopupShown}
          photoDisplayId={photoDisplayId}
          setPhotoDisplayId={setPhotoDisplayId}
          changeIndex={changeIndex}
          photos={photos}
        />
      </main>
    //   // )}
  );
}

