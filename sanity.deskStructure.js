import { InfoOutlineIcon, CogIcon } from "@sanity/icons";

export default {
    structure: (S) =>
        S.list().title('Content').items([
            // S.listItem()
            //     .schemaType('splash')
            //     .title('Splash')
            //     .icon(InfoOutlineIcon)
            //     .child(S.document().schemaType('splash').title('Splash')),
            S.listItem()
                .schemaType("siteSettings")
                .title("Site Settings")
                .icon(CogIcon)
                .child(S.document().schemaType("siteSettings").title("Site Settings")),
        ]),
}
