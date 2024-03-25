import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css'
import Image from "next/image";


export default function PhotoCard({
  id,
  file_location,
  date, // search unimplemented
  time, // search unimplemented
  description,
  aperature,
  shutter_speed,
  iso,
  city,
  state,
  country,
  latitude,
  longitude,
  camera_make,
  camera_model,
  lens_make,
  lens_model,
  index,
  setPopupShown,
  setDisplayId,
  setDisplayIndex,
}) {

  return (
    <div className="-border photocard-container"
      onClick={() => {
        setPopupShown(true);
        setDisplayIndex(index);
        setDisplayId(id)
      }}>
      <Image className="-border mb-1 mt-4 sm:mt-0 sm:mb-4" width={400} height={400}
        src={file_location}
      />
      <p className="-border hidden sm:block sm:photocard-preview-location sm:text-sm"><FontAwesomeIcon icon={faLocationDot} /> {city}, {state}</p>
    </div>
  )
}
