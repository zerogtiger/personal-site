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
  inspectIndex,
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
      <div className="text-black px-1 sm:px-2 py-2 inset-0 rounded-2xl fixed -border-fg bg-white m-auto flex w-[97%] h-[98%] sm:w-[93%] sm:h-[90%] -border-2 justify-center items-center z-50" ref={popup}>
        <div className="-border absolute top-2 right-4 text-[#C0C0C0] text-3xl " >
          <FontAwesomeIcon className="-border cursor-pointer" icon={faTimes} onClick={() => setPopupShown(false)} />
        </div>
        <div className="-border-2 flex justify-center items-center h-full w-[8%] ">
          <p className="-border-2 text-[#C0C0C0] text-2xl sm:text-4xl ">
            {inspectIndex(-1) ? <FontAwesomeIcon onClick={() => changeIndex(-1)} className="cursor-pointer" icon={faChevronLeft} /> : ""}
          </p>
        </div>
        <div className="flex flex-col h-full -border-red -border pb-3 w-[95%] ">

          <div className="py-3 -border-2 relative top-0 mx-auto flex-1 flex items-center justify-center overflow-hidden">
            <img
              className="max-h-full max-w-full object-contain"
              src={`/photography/${photoDetails.file_location}`}
            />
          </div>

          <div className="mx-3 mb-3 -border-blue -border-2 h-fit">
            {photoDetails.description ? <h1 className="flex items-center -border text-black leading-6 sm:leading-7 -border h-fit text-xl sm:text-3xl mt-0 mb-2 sm:mt-2 sm:mb-4 -border  align-middle sm:h-fit">{photoDetails.description}</h1> : <div className="mt-3"></div>}
            <div className="flex h-fit">
              <div className="w-1/2 h-fit -border-2 text-sm">
                <table className="-border text-left items-start">
                  <tbody>
                    <tr className="-border">
                      <th className="-border w-6 flex items-center">
                        <FontAwesomeIcon className="mx-[1.4px] py-1" icon={faLocationDot} />
                      </th>
                      <th className="font-normal text-[7pt] leading-3 sm:leading-5 sm:text-sm"> {photoDetails.locations.city}, {photoDetails.locations.state}, {photoDetails.locations.country}
                        <br />
                        ({photoDetails.locations.latitude >= 0 ? `${photoDetails.locations.latitude}° N` : `${photoDetails.locations.latitude}° S`}, {photoDetails.locations.longitude >= 0 ? `${photoDetails.locations.longitude}° E` : `${photoDetails.locations.longitude}° W`})
                      </th>
                    </tr>
                    <tr>
                      <th><FontAwesomeIcon className="mx-[0.7px]" icon={faCalendar} /> </th>
                      <th className="font-normal text-[7pt] leading-3 sm:leading-5 sm:text-sm"> {(new Date(photoDetails.date.slice(0, 23))).toDateString()} | {(new Date(photoDetails.time.slice(0, 23))).toLocaleTimeString()}</th>
                    </tr>
                    <tr>
                      <th><FontAwesomeIcon icon={faCamera} /></th>
                      <th className="font-normal text-[7pt] leading-3 sm:leading-5 sm:text-sm"> {photoDetails.cameras.make} {photoDetails.cameras.model}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className=" text-[7pt] leading-3 sm:leading-5 sm:text-sm w-1/2 -border-2 text-right">
                {photoDetails.lenses.make} {photoDetails.lenses.model}
                <br />
                {photoDetails.focal_length}mm | f/{photoDetails.aperature.toString()} | {photoDetails.shutter_speed} | ISO {photoDetails.iso}
              </div>
            </div>
          </div>
        </div>
        <div className="-border-2 flex justify-center items-center h-full w-[8%] ">
          <p className="-border-2 text-[#C0C0C0] text-2xl sm:text-4xl text-left">
            {inspectIndex(1) ? <FontAwesomeIcon onClick={() => changeIndex(1)} className="cursor-pointer" icon={faChevronRight} /> : ""}
          </p>
        </div>
      </div>
      :
      ""
  )
}
// <FontAwesomeIcon icon={faLocationDot} />  {photoDetails.locations.city}, {photoDetails.locations.state}, {photoDetails.locations.country}
// <br />
// ({photoDetails.locations.latitude >= 0 ? `${photoDetails.locations.latitude}° N` : `${photoDetails.locations.latitude}° S`}, {photoDetails.locations.longitude >= 0 ? `${photoDetails.locations.longitude}° E` : `${photoDetails.locations.longitude}° W`})
// <br />
// <FontAwesomeIcon icon={faCalendar} /> {(new Date(photoDetails.date)).toDateString()} | {(new Date(photoDetails.time)).toLocaleTimeString()}
// <br />
// <FontAwesomeIcon icon={faCamera} /> {photoDetails.cameras.make} {photoDetails.cameras.model}
// 
// <div className="py-3 border-2 relative top-0 mx-auto max-h-full flex-1">
//   <img
//     className="max-h-full object-contain m-0 flex-1"
//     src={`/photography/${photoDetails.file_location}`}
//   />
// </div>

