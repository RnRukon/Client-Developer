import React from "react";
import {
    Drawer,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";


import SidebarMenu from "./DashboardNavigation/SidebarMenu";

export function DashboardDrawer({ open, setOpen }) {
    const closeDrawer = () => setOpen(false);

    return (
        <React.Fragment>

            <Drawer open={open} onClose={closeDrawer}>
                <div className="mb-2 flex items-center justify-between p-4">
                    <Typography variant="h5" color="blue-gray">
                        Side Menu
                    </Typography>
                    <IconButton variant="text" onClick={closeDrawer}>
                        <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                    </IconButton>
                </div>

                <SidebarMenu />

            </Drawer>
        </React.Fragment>
    );
}