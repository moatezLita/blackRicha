import React from 'react';
import {
    Drawer,
    Button,
    Typography,
    IconButton,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";

  import {

    XMarkIcon,
    Bars3Icon
  } from "@heroicons/react/24/outline";
export default function CategoryMenu ({ categories }) {
    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    return (
        <>
                  <Bars3Icon onClick={openDrawer} className="h-8 w-8 stroke-2" />

      {/* <Button onClick={openDrawer}>Open Drawer</Button> */}
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Categories
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex flex-col gap-4">
          {categories.map((category) => (
            category.subcategories ? (
              <div className="relative inline-block" key={category.id}>
                <Typography variant="h6" className="cursor-pointer">
                  {category.name}
                </Typography>
                <ul>
                  {category.subcategories.map((sub) => (
                    <li key={sub.id}>
                      <Link to={sub.path}>
                        <Typography variant="body2" className="hover:bg-gray-100 px-2 py-1 rounded-md">
                          {sub.name}
                        </Typography>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link to={category.path} key={category.id}>
                <Typography variant="body1" className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md">
                  {category.name}
                </Typography>
              </Link>
            )
          ))}
        </div>
      </Drawer>
    </>
    );

}