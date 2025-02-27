
import DropdownItem from "../../../../Sidebar/DropdownItem/DropdownItem";
import { MdOutlineEdit, MdOutlineRedo } from "react-icons/md";
import { useRef,  } from "react";
export default function DropdownOption(){
  const dropdownRef = useRef(null);

    return <div className="absolute top-0 mt-12 right-0 bg-white border rounded-lg 
                            shadow-lg z-10 w-40 ring-1 ring-black ring-opacity-5 focus:outline-none"
                ref={dropdownRef}
                >
                {/* <div className="absolute left-48 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" /> */}
                <ul>
                    <DropdownItem
                        icon={MdOutlineEdit}
                        label={"Edit"}
                        iconStyle={''}
                        dropdownStyle={'p-2'}
                        onClick={() => {}}
                    />
                    <hr />
                    <DropdownItem
                        icon={MdOutlineRedo}
                        label={"Redo"}
                        iconStyle={''}
                        dropdownStyle={'p-2'}
                        onClick={() => {}}
                    />
                </ul>
            </div>
}