
export default function PhotoSearchBar() {
  const photo_dim = imageSize(`public/${file_location}`);
  return (
    <div className="-border-2 photocard_container group">
      <Image className="photocard_photo"
        src={file_location}
        width={photo_dim.width}
        height={photo_dim.height}
      />
      <p className="photocard-preview-location text-sm"><FontAwesomeIcon icon={faLocationDot} /> {city}, {state}</p>
    </div>
  )
}
