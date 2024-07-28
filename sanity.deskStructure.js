import { InfoOutlineIcon, CogIcon } from "@sanity/icons";

export default {
    structure: (S) =>
        S.list().title('Content').items([
            S.listItem()
                .schemaType('content')
                .title('Content')
                .icon(InfoOutlineIcon)
                .child(S.document().schemaType('content').title('Content')),
            S.listItem()
                .schemaType("siteSettings")
                .title("Site Settings")
                .icon(CogIcon)
                .child(S.document().schemaType("siteSettings").title("Site Settings")),
        ]),
}
