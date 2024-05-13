
import React from "react";
import "./Gallery.css"
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    IconButton,
    Typography,
    Input,
} from "@material-tailwind/react";
const Gallery = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen((cur) => !cur);
    const containerStyles = {
        backgroundImage: `url(https://i.ibb.co/m815Hf5/image.png)`,
       
    }
const handleAdd =()=>{}
    return (
        <div>
            <div style={containerStyles} className="element">
                <div  className="min-h-[60vh] w-full bg-cover rounded-2xl  text-center bg-gradient-to-t from-black relative bg-opacity-0 to-transparent items-center bg-center z-20"  >

                    <h1 className="text-primary text-center font-bold pt-16 md:pt-32 p-auto ">Foods Gallery</h1>
                    <div className="text-2xl p-6 md:p-8 text-white text-center">
                        Embark on a gastronomic journey with our diverse food selection. From savory to sweet, our menu caters to every palate. Explore and delight in culinary wonders that promise to tantalize your taste buds.
                    </div>
                    <div className="text-center py-5">
                        <button type="button" className="flex items-center text-secondary bg-primary justify-center  p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 border border-secondary mx-auto my-4" onClick={() => { handleAdd(), handleOpen() }}>Add Your Food </button>
                        <section className="grid place-items-center">
                          
                            <Dialog className="p-4" size="md" open={open} handler={handleOpen}>
                                <DialogHeader className="justify-between">
                                    <img
                                        src="/image/exclamation.svg"
                                        alt="exclamation"
                                        className="w-10 h-10"
                                    />
                                    <IconButton
                                        color="gray"
                                        size="sm"
                                        variant="text"
                                        onClick={handleOpen}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </IconButton>
                                </DialogHeader>
                                <DialogBody className="overflow-y-scroll">
                                    <Typography color="blue-gray" className="mb-1 font-bold">
                                        Reset Settings
                                    </Typography>
                                    <Typography
                                        variant="paragraph"
                                        className="font-normal text-gray-600 max-w-lg"
                                    >
                                        Are you sure you want to reset all settings to their default values?
                                        This action cannot be undone.
                                    </Typography>
                                    <div>
                                        <Typography
                                            variant="small"
                                            className="mt-6 mb-2 text-gray-600 font-normal"
                                        >
                                            Please type{" "}
                                            <strong className="text-gray-900">
                                                &quot;Reset settings&quot;
                                            </strong>{" "}
                                            to confirm.
                                        </Typography>
                                        <div className="flex flex-col md:flex-row gap-2">
                                            <Input
                                                color="gray"
                                                label="Reset settings"
                                                size="lg"
                                                className="w-full md:max-w-lg"
                                            />
                                            <Button color="gray" className="w-full lg:max-w-[15rem]">
                                                I understant, reset settings
                                            </Button>
                                        </div>
                                    </div>
                                </DialogBody>
                            </Dialog>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Gallery;