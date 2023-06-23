import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Pagination() {
    const [page, setPage] = React.useState(1);

    const getItemProps = (index) =>
    ({
        variant: page === index ? "filled" : "text",
        color: page === index ? "blue" : "blue-gray",
        onClick: () => setPage(index),
        className: "rounded-full",
    });

    const next = () => {
        if (page === 5) return;

        setPage(page + 1);
    };

    const prev = () => {
        if (page === 1) return;

        setPage(page - 1);
    };

    return (
        <div className="flex items-center gap-4">
            <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-2 rounded-full"
                onClick={prev}
                disabled={page === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
            </Button>
            <div className="flex items-center gap-2">
                <IconButton {...getItemProps(1)}>1</IconButton>
                <IconButton {...getItemProps(2)}>2</IconButton>
                <IconButton {...getItemProps(3)}>3</IconButton>
                <IconButton {...getItemProps(4)}>4</IconButton>
                <IconButton {...getItemProps(5)}>5</IconButton>
            </div>
            <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-2 rounded-full"
                onClick={next}
                disabled={page === 5}
            >
                Next
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
}