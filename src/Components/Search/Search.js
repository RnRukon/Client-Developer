import React from 'react';
import { Input, Button } from "@material-tailwind/react";
import { FiSearch } from 'react-icons/fi';
const Search = ({ setSearch }) => {
    const [value, setValue] = React.useState("");
    const onChange = ({ target }) => setValue(target.value);
    return (
        <div className="relative flex w-full max-w-[24rem]">
            <Input
                type="text"
                label="Search"
                value={value}
                onChange={onChange}
                className="pr-20"
                containerProps={{
                    className: "min-w-0",
                }}
            />
            <Button
                size="md"
                color={value ? "blue" : "blue-gray"}
                disabled={!value}
                className="!absolute right-0 top-0 bottom-0 rounded"
                onClick={() => setSearch(value)}
            >
                <FiSearch size={20} />
            </Button>
        </div>
    );
};

export default Search;