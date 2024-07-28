import { InfoOutlineIcon as icon } from "@sanity/icons";

const content = {
    name: 'content',
    title: "Content",
    type: 'document',
    icon,
    fields: [
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
        },
    ],
}

export default content;