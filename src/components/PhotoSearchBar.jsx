import { faBars, faFilter, faList, faList12, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function PhotoSearchBar({
  filterExpanded, setFilterExpanded,
  filterSelected, setFilterSelected,
  filterAvailable,
  listExpanded, setListExpanded,
  listSelected, setListSelected,
  listAvailable,
  search, setSearch,
  changeQuery,
}) {

  const handleChange = (e) => {
    const { target } = e;
    const { value } = target;

    // console.log(value);
    setSearch(value);
  }

  const invertSelectionState = value => {
    const idx = filterSelected.indexOf(value);
    // console.log(idx);
    idx >= 0 ?
      setFilterSelected(oldValues => {
        return oldValues.filter(
          (_, i) => i !== idx)
      })
      :
      setFilterSelected([...filterSelected, value]);
  }

  const filterPopup = useRef(null);
  const listPopup = useRef(null);

  useEffect(() => {
    if (!listExpanded) return;
    function handleClickOutside(event) {
      if (listPopup.current && !listPopup.current.contains(event.target)) {
        setListExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [listExpanded]);

  useEffect(() => {
    if (!filterExpanded) return;
    function handleClickOutside(event) {
      if (filterPopup.current && !filterPopup.current.contains(event.target)) {
        setFilterExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [filterExpanded]);


  // tag outside the bar
  let one = "flex-shrink-0 w-fit mx-1 my-1 px-4 py-[2px] justify-center items-center flex rounded-full border-[1px] z-0 cursor-pointer"
  // tag in the bar
  let two = "flex-shrink-0 mx-1 my-1 px-4 py-[2px] justify-center items-center flex rounded-full border-[1px] z-0 cursor-pointer"

  return (
    <div className="w-full -border filter-bar mb-4 sm:ml-4 -border">
      <div className="relative min-h-[40px] my-2 bg-[#E6E6E6] border-[#BCBCBC] flex rounded-xl flex-shrink-0 border items-center">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black text-lg my-auto mx-3" />
        <input
          name='message'
          placeholder="Search by title, date, ... anything"
          className='h-fit w-full bg-inherit text-sm sm:text-[12pt] placeholder:text-gray placeholder:text-sm sm:placeholder:text-[12pt] text-black align-middle outline-none border-none'
          onChange={handleChange}
        />
        <div
          className={`relative ${one} bg-black mx-2 hover:bg-[#E6E6E6] text-black group cursor-pointer`}
          onClick={changeQuery}>
          <p className="relative my-0 py-0 text-white font-semibold group-hover:text-black">Apply</p>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 -border gap-2">
        <div className={`${filterExpanded ? "bg-white" : "bg-[#E6E6E6]"} col-start-1 col-span-2 relative min-h-[40px] border-[#BCBCBC] rounded-xl h-full border z-50`}
          ref={filterPopup}>

          <div className="flex w-full min-h-[40px] items-center max-h-[40px] overflow-x-hidden"
            onClick={() => {
              if (!filterExpanded) { setFilterExpanded(true) }
              // else { setFilterExpanded(false) };
            }}
          >

            <FontAwesomeIcon icon={faFilter} className="text-black text-lg my-auto ml-3 mr-1" />

            {filterSelected.map(value => {
              return (
                <div className={`${two} bg-[#E6E6E6] border-[#666666]`}
                  onClick={() => filterExpanded ? invertSelectionState(value) : setFilterExpanded(true)}>
                  <p className="my-0 py-0 text-black font-semibold">{value}</p>
                </div>)
            })}

          </div>

          {!filterExpanded ? "" :
            <div className="absolute flex p-1 flex-wrap w-full top-[56px] min-h-[40px] rounded-xl z-10 bg-white border-[#BCBCBC] border"
            >

              {filterAvailable.map(value => {
                return (

                  <div
                    className={filterSelected.includes(value) ? `${one} bg-[#BBBBBB] border-[#666666]` : `${one} bg-[#E6E6E6] border-[#666666]`}
                    onClick={() => invertSelectionState(value)}>
                    <p className="my-0 py-0 text-black font-semibold">{value}</p>
                  </div>)

              })}

            </div>}

        </div>
        <div className={`${(listExpanded ? "bg-white" : "bg-[#E6E6E6]")} col-span-1 relative min-h-[40px] border-[#BCBCBC] rounded-xl border`}
          ref={listPopup}>

          <div className="w-full min-h-[40px] max-h-[40px] flex items-center overflow-x-hidden"
            onClick={() => {
              if (!listExpanded) { setListExpanded(true); } 
              // else { setListExpanded(false); } 
            }}>
            <FontAwesomeIcon icon={faBars} className="text-black text-lg my-auto ml-3 mr-1" />

            {listSelected === "" ? "" :
              <div className={`${one} bg-[#E6E6E6] border-[#666666]`}
                onClick={() => listExpanded ? setListSelected("") : setListExpanded(true)}>
                <p className="my-0 py-0 text-black font-semibold">{listSelected}</p>
              </div>
            }

          </div>

          {!listExpanded ? "" :
            <div className="absolute p-1 flex flex-wrap w-full top-[56px] min-h-[40px] rounded-xl z-10 bg-white border-[#BCBCBC] border">

              {listAvailable.map(value => {
                return (
                  <div className={value === listSelected ? `${one} bg-[#BBBBBB] border-[#666666]` : `${one} bg-[#E6E6E6] border-[#666666]`}
                    onClick={() => listSelected === value ? setListSelected("") : setListSelected(value)}>
                    <p className="my-0 py-0 text-black font-semibold">{value}</p>
                  </div>)
              })}
            </div>}

        </div>
      </div>
    </div >
  )
}

//   <div className="w-fit mx-2 my-2 px-5 py-[6px] bg-[#E6E6E6] rounded-full border-[1px] border-[#BCBCBC]">
//     <p className="my-0 py-0 text-black font-semibold">Pentax K-7</p>
//   </div>
//   <div className="w-fit mx-2 my-2 px-5 py-[6px] bg-[#E6E6E6] rounded-full border-[1px] border-[#BCBCBC]">
//     <p className="my-0 py-0 text-black font-semibold">Pentax K-7</p>
//   </div>
//   <div className="w-fit mx-2 my-2 px-5 py-[6px] bg-[#E6E6E6] rounded-full border-[1px] border-[#BCBCBC]">
//     <p className="my-0 py-0 text-black font-semibold">Pentax K-7</p>
//   </div>
// </div>
