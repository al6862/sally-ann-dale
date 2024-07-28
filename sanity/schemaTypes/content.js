import { InfoOutlineIcon as icon } from "@sanity/icons";

const content = {
    name: 'content',
    title: "Content",
    type: 'document',
    icon,
    fields: [
        {
            name: 'left_text',
            title: 'Left Text',
            type: 'string',
        },
    ],
}

export default content;