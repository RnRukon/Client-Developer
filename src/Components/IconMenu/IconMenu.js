import {
    Menu,
    MenuHandler,
    MenuList,
    IconButton,
  

} from "@material-tailwind/react";



export default function IconMenu({ icon, children }) {
    return (
        <Menu>
            <MenuHandler>
                <IconButton variant="text">
                    {icon}
                </IconButton>
            </MenuHandler>
            <MenuList className="flex flex-col gap-2">

                {children}


            </MenuList>
        </Menu>
    );
}