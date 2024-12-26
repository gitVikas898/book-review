export const Header = () => {
  return (
    <div className=" bg-purpleColor flex justify-evenly items-center p-4  w-full">
        <div id="elements">
            <ul className="flex gap-8 items-center justify-evenly  text-white font-semibold">
                <li className="hover:bg-white hover:text-black p-2 rounded-sm transition-all ease-in cursor-pointer">
                    Home
                </li>
                <li className="hover:bg-white hover:text-black p-2 rounded-sm transition-all ease-in cursor-pointer">
                    About
                </li>
                <li className="hover:bg-white hover:text-black p-2 rounded-sm transition-all ease-in cursor-pointer">
                    Contacts
                </li>
            </ul>
        </div>
    </div>
  )
}
