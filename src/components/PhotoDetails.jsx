import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faCalendar, faCamera, faChevronLeft, faChevronRight, faLocationDot, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

// const prisma = new PrismaClient();

export default function PhotoDetails({
  popupShown, setPopupShown,
  photoDisplayId,
  changeIndex,
  photos,
}) {

  // console.log(photoDisplayId);

  // const photodetails = await prisma.photos.findfirst({
  //   where: {
  //     id: photo_id,
  //   },
  //   include: {
  //     locations: true,
  //     cameras: true,
  //     lenses: true,
  //   }
  // })

  // console.log(photoDetails);

  // await prisma.$disconnect()
  //   .catch(async (e) => {
  //     console.error(e)
  //     await prisma.$disconnect()
  //     process.exit(1)
  //   })

  const photoDetails = photos.get(photoDisplayId);

  const popup = useRef(null);

  useEffect(() => {
    if (!popupShown) return;
    function handleClickOutside(event) {
      if (popup.current && !popup.current.contains(event.target)) {
        setPopupShown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupShown]);


  return (
    popupShown ?
      <div className="text-black px-2 py-2 inset-0 rounded-2xl fixed -border-fg bg-white m-auto flex w-[93%] h-[90%] -border-2 justify-center items-center" ref={popup}>
        <div className="-border absolute top-2 right-4 text-[#C0C0C0] text-3xl " >
          <FontAwesomeIcon className="-border cursor-pointer" icon={faTimes} onClick={() => setPopupShown(false)} />
        </div>
        <div className="-border-2 flex justify-center items-center h-full w-[8%] ">
          <p className="-border-2 text-[#C0C0C0] text-4xl ">
            <FontAwesomeIcon onClick={() => changeIndex(-1)} className="cursor-pointer" icon={faChevronLeft} />
          </p>
        </div>
        <div className="h-full pb-3 w-[95%]">
          <div className="py-3 -border-2 relative top-0 mx-auto h-4/5">
            <img
              className="w-full h-full object-contain m-0"
              src={`/photography/${photoDetails.file_location}`}
            />
          </div>
          <div className="mx-3 -border-2 h-1/5">
            <h1 className="text-black mt-0 mb-2 h-1/3">{photoDetails.description}</h1>
            <div className="flex h-2/3">
              <div className="w-1/2 -border-2 text-sm">
                <FontAwesomeIcon icon={faLocationDot} />  {photoDetails.locations.city}, {photoDetails.locations.state}, {photoDetails.locations.country}
                <br />
                ({photoDetails.locations.latitude >= 0 ? `${photoDetails.locations.latitude}° N` : `${photoDetails.locations.latitude}° S`}, {photoDetails.locations.longitude >= 0 ? `${photoDetails.locations.longitude}° E` : `${photoDetails.locations.longitude}° W`})
                <br />
                <FontAwesomeIcon icon={faCalendar} /> {photoDetails.date.toDateString()} | {photoDetails.time.toLocaleTimeString()}
                <br />
                <FontAwesomeIcon icon={faCamera} /> {photoDetails.cameras.make} {photoDetails.cameras.model}
              </div>
              <div className="text-sm w-1/2 -border-2 text-right">
                {photoDetails.lenses.make} {photoDetails.lenses.model}
                <br />
                {photoDetails.focal_length}mm | f/{photoDetails.aperature.toString()} | {photoDetails.shutter_speed} | ISO {photoDetails.iso}
              </div>
            </div>
          </div>
        </div>
        <div className="-border-2 flex justify-center items-center h-full w-[8%] ">
          <p className="-border-2 text-[#C0C0C0] text-4xl text-left">
            <FontAwesomeIcon onClick={() => changeIndex(1)} className="cursor-pointer" icon={faChevronRight} />
          </p>
        </div>
      </div>
      :
      ""
  )
}
