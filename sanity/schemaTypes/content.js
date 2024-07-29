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
            name: 'email',
            title: 'Email',
            description: 'The logo links to this email.',
            type: 'string',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
        },
    ],
}

export default content;