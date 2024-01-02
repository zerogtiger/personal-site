import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css'


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
    <div className="-border-2 photocard_container"
      onClick={() => {
        setPopupShown(true);
        setDisplayIndex(index);
        setDisplayId(id)
      }}>
      <img className="mt-0 mb-4"
        src={file_location}
      />
      <p className="photocard-preview-location text-sm"><FontAwesomeIcon icon={faLocationDot} /> {city}, {state}</p>
    </div>
  )
}
