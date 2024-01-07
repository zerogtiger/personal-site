"use client"
import PhotoCard from "@/components/PhotoCard";
import PhotoDetails from "@/components/PhotoDetails";
import { PrismaClient } from "@prisma/client"
import { useState, useEffect } from "react";
import PhotoSearchBar from "@/components/PhotoSearchBar";

// export const metadata = {
//   title: 'Photography | zerogtiger'
// }

const prisma = new PrismaClient();

export default function Photography() {

  const [photos, setPhotos] = useState(null); // map storing all photos
  const [filterableMap, setFilterableMap] = useState(null); // map storing all photos
  const [isLoading, setLoading] = useState(true); // page loading

  const [popupShown, setPopupShown] = useState(false);
  const [photoDisplayId, setPhotoDisplayId] = useState(0); // photos.id, array index
  const [photoDisplayIndex, setPhotoDisplayIndex] = useState(0); // photos.id, array index

  const [currentQuery, setCurrentQuery] = useState([]);

  const [filterExpanded, setFilterExpanded] = useState(false); // filter options expanded?
  const [filterSelected, setFilterSelected] = useState([]); // filter options selected
  const [filterAvailable, setFilterAvailable] = useState([]); // filter options selected
  const [listExpanded, setListExpanded] = useState(false); // listby options expanded?
  const [listSelected, setListSelected] = useState(""); // listby option selected
  const [listAvailable, setListAvailable] = useState(["Lenses", "Locations", "Date"]); // listby option selected
  const [search, setSearch] = useState(""); // search textfield

  const inspectIndex = (delta) => {
    if (delta > 0) {
      return photoDisplayIndex + 1 <= currentQuery.length - 1;
      // const newIndex = Math.min(photoDisplayIndex + 1, currentQuery.length - 1);
      // setPhotoDisplayIndex(newIndex);
      // setPhotoDisplayId(currentQuery[newIndex]);
    }
    if (delta < 0) {
      return photoDisplayIndex - 1 >= 0;
      // const newIndex = Math.max(photoDisplayIndex - 1, 0);
      // setPhotoDisplayIndex(newIndex);
      // setPhotoDisplayId(currentQuery[newIndex]);
    }
  }

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

  const changeQuery = () => {
    console.log(filterSelected);
    console.log(listSelected);
    console.log(search);
    // setLoading(true);
    // /api?query=1&searchterm=&orderby=date&filterkey=lens_id&filterkey=lens_id&filterkey=location_id&filtervalue=1&filtervalue=2&filtervalue=1
    // setLoading(true);
    const fetchData = async () => {
      const fetchString = `searchterm=${search}&orderby=${listSelected}${filterSelected.map(item => {
        const filterable = filterableMap.get(item);
        return `&filterkey=${filterable.column}&filtervalue=${filterable.id}`;
      }).join("")}`;

      await fetch(`/content/api?query=1&${fetchString}`)
        .then(response => response.json())
        .then(ret => {
          const data = ret.ret;
          const arr = [];
          for (const idx in data) {
            arr.push(data[idx].id);
          }
          // console.log(arr);
          setCurrentQuery(arr);
        })
    };
    fetchData();
  }

  // useEffect(() => {
  //   if (!isLoading) return;
  //   const fetchData = async () => {
  //     // console.log("change query");
  //     const fetchString = `searchterm=${search}&orderby=${listSelected}${filterSelected.map(item => {
  //       const filterable = filterableMap.get(item);
  //       return `&filterkey=${filterable.column}&filtervalue=${filterable.id}`;
  //     }).join("")}`;
  //     console.log(fetchString);
  //
  //     await fetch(`/content/api?query=1&${fetchString}`)
  //       .then(response => response.json())
  //       .then(ret => {
  //         console.log(ret);
  //       })
  //     setLoading(false);
  //   }
  //
  //   fetchData();
  // }, [isLoading]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/content/api?allphotos=1")
        .then(response => response.json())
        .then(ret => {
          const data = ret.ret;

          // Photos map, query
          const mp = new Map();
          const arr = [];
          for (const photo_index in data) {
            // console.log(data[photo_index]);
            mp.set(data[photo_index].id, data[photo_index]);
            arr.push(data[photo_index].id);
          }
          setPhotos(mp);
          setCurrentQuery(arr);
        })

      await fetch("/content/api?filter=1")
        .then(response => response.json())
        .then(ret => {
          const uni_arr = [];
          const uni_mp = new Map();
          const { cameras, lenses, locations } = ret.ret;
          for (const camera in cameras) {
            const str = `${cameras[camera].make} ${cameras[camera].model}`;
            uni_arr.push(str);
            uni_mp.set(str, { column: "camera_id", id: cameras[camera].id });
          }
          for (const lens in lenses) {
            const str = `${lenses[lens].make} ${lenses[lens].model}`;
            uni_arr.push(str);
            uni_mp.set(str, { column: "lens_id", id: lenses[lens].id });
          }
          for (const location in locations) {
            const str = `${locations[location].city}, ${locations[location].state}`;
            uni_arr.push(str);
            uni_mp.set(str, { column: "location_id", id: locations[location].id });
          }
          setFilterAvailable(uni_arr);
          setFilterableMap(uni_mp);
        })

      setLoading(false);
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //       arr.push(data[idx].id);
  //     }
  //     setCurrentQuery(() => arr);
  //     console.log(currentQuery);
  //   })
  // }, [isLoading]);

  if (isLoading) return (
    <main>
      <div className='-border mx-auto px-4 max-w-[52rem]'>
        <div className="mt-10 flex w-full justify-center">
          <div className="-border w-2/5">
            <h1 className="mt-0">Photography</h1>
            <p>Following these lines are the photos I've taken in my recent few years of pursuit in photography. </p>
          </div>
          <div className="-border w-3/5 items-center justify-center flex">
            <PhotoSearchBar
              filterExpanded={filterExpanded} setFilterExpanded={setFilterExpanded}
              filterSelected={filterSelected} setFilterSelected={setFilterSelected}
              filterAvailable={filterAvailable}
              listExpanded={listExpanded} setListExpanded={setListExpanded}
              listSelected={listSelected} setListSelected={setListSelected}
              listAvailable={listAvailable}
              search={search} setSearch={setSearch}
              changeQuery={changeQuery}
            />
          </div>
        </div>
        <div className="w-full"><p className="font-semibold">Loading...</p></div>
      </div>
    </main>
  );

  // const { data } = GET({ photo_id: -1 }).then(photos => {
  return (
    <main>
      <div className='-border mx-auto px-4 max-w-[52rem]'>
        <div className="mt-10 flex w-full justify-center">
          <div className="-border w-2/5">
            <h1 className="mt-0">Photography</h1>
            <p>Following these lines are the photos I've taken in my recent few years of pursuit in photography. </p>
          </div>
          <div className="-border w-3/5 items-center justify-center flex">
            <PhotoSearchBar
              filterExpanded={filterExpanded} setFilterExpanded={setFilterExpanded}
              filterSelected={filterSelected} setFilterSelected={setFilterSelected}
              filterAvailable={filterAvailable}
              listExpanded={listExpanded} setListExpanded={setListExpanded}
              listSelected={listSelected} setListSelected={setListSelected}
              listAvailable={listAvailable}
              search={search} setSearch={setSearch}
              changeQuery={changeQuery}
            />
          </div>
        </div>
        <div className="-border-[1px] columns-2xs">
          {currentQuery.length===0? <div className="w-full"><p className="font-semibold">No results. Maybe try some other terms?</p></div> : currentQuery.map((key, idx) => {
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
      {popupShown ? <div className="fixed inset-0 bg-black/50 w-full h-full z-50" /> : ""}
      <PhotoDetails
        popupShown={popupShown}
        setPopupShown={setPopupShown}
        photoDisplayId={photoDisplayId}
        setPhotoDisplayId={setPhotoDisplayId}
        changeIndex={changeIndex}
        inspectIndex={inspectIndex}
        photos={photos}
      />
    </main>
    //   // )}
  );
}

