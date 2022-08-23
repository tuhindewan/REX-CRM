import { __ } from "@wordpress/i18n";
import Contacts from "../pages/Contacts";
import Lists from "../pages/Lists";
import Automation from "../pages/Automation";
import Tags from "../pages/Tags";
import Segments from "../pages/Segments";
import Dashboard from "../pages/Dashboard";
import ImportContacts from "../pages/ImportContacts";
import ContactCreateUpdate from "../pages/ContactCreateUpdate";
import CreateTag from "../components/Tag/CreateTag";
import UpdateTag from "../components/Tag/UpdateTag";
import CreateList from "../components/List/CreateList";
import UpdateList from "../components/List/UpdateList";
import CreateSegment from "../components/Segment/CreateSegment";

const routes = [
  {
    path: "/contacts",
    element: Contacts,
    title: __("Contacts", "mrm"),
  },
  {
    path: "/contacts/create",
    element: ContactCreateUpdate,
    hideInMenu: true,
  },
  {
    path: "/contacts/update/:id",
    element: ContactCreateUpdate,
    hideInMenu: true,
  },
  {
    path: "/contacts/import",
    element: ImportContacts,
    hideInMenu: true,
  },
  {
    path: "/lists",
    element: Lists,
    title: __("Lists", "mrm"),
  },
  {
    path: "/tags",
    element: Tags,
    title: __("Tags", "mrm"),
  },
  {
    path: "/segments",
    element: Segments,
    title: __("Segments", "mrm"),
  },
  {
    path: "/automation",
    element: Automation,
    title: __("Automation", "mrm"),
  },
  {
    path: "/tags/create",
    element: CreateTag,
    hideInMenu: true,
  },
  {
    path: "/tags/update/:id",
    element: UpdateTag,
    hideInMenu: true,
  },
  {
    path: "/lists/create",
    element: CreateList,
    hideInMenu: true,
  },
  {
    path: "/lists/update/:id",
    element: UpdateList,
    hideInMenu: true,
  },
  {
    path: "segments/create",
    element: CreateSegment,
    hideInMenu: true,
  },
];

export default routes;
