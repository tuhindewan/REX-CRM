import { __ } from "@wordpress/i18n";
import Contacts from "../pages/Contacts";
import Lists from "../pages/Lists";
import Automation from "../pages/Automation";
import Tags from "../pages/Tags";
import Segments from "../pages/Segments";
import Dashboard from "../pages/Dashboard";
import ImportContacts from "../pages/ImportContacts";
import ContactCreateUpdate from "../pages/ContactCreateUpdate";

const routes = [
  {
    path: "/",
    element: Dashboard,
    title: __("Dashboard", "mrm"),
  },
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
];

export default routes;
