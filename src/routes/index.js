import { __ } from "@wordpress/i18n";
import ContactDetails from "../components/ContactDetails";
import CreateContact from "../components/CreateContact";
import CustomFieldCreate from "../components/CustomFieldCreate";
import CustomFields from "../components/CustomFields";
import ImportConfirmation from "../components/ImportConfirmation";
import CreateList from "../components/List/CreateList";
import UpdateList from "../components/List/UpdateList";
import SelectFieldsMap from "../components/SelectFieldsMap";
import CreateTag from "../components/Tag/CreateTag";
import UpdateTag from "../components/Tag/UpdateTag";
import Contacts from "../pages/Contacts";
import ImportContactFile from "../pages/ImportContactFile";
import ImportContactRaw from "../pages/ImportContactRaw";
import ImportMailchimp from "../pages/ImportMailchimp";
import Lists from "../pages/Lists";
import Tags from "../pages/Tags";

const routes = [
  {
    path: "/contacts",
    element: Contacts,
    title: __("All Contacts", "mrm"),
    // bage: 20,
  },
  {
    path: "/contacts/create",
    element: CreateContact,
    hideInMenu: true,
  },
  {
    path: "/contacts/update/:id",
    element: ContactDetails,
    hideInMenu: true,
  },
  {
    path: "/contacts/import/csv",
    element: ImportContactFile,
    hideInMenu: true,
  },
  {
    path: "/contacts/import/raw",
    element: ImportContactRaw,
    hideInMenu: true,
  },
  {
    path: "/contacts/import/mailchimp",
    element: ImportMailchimp,
    hideInMenu: true,
  },
  {
    path: "/contacts/import/csv/map",
    element: SelectFieldsMap,
    hideInMenu: true,
  },
  {
    path: "/contacts/import/raw/map",
    element: SelectFieldsMap,
    hideInMenu: true,
  },
  {
    path: "/contacts/import/mailchimp/map",
    element: SelectFieldsMap,
    hideInMenu: true,
  },
  {
    path: "/contacts/import/confirmation",
    element: ImportConfirmation,
    hideInMenu: true,
  },
  {
    path: "/lists",
    element: Lists,
    title: __("Lists", "mrm"),
    // bage: 15,
  },
  {
    path: "/tags",
    element: Tags,
    title: __("Tags", "mrm"),
    // bage: 18,
  },
  ,
  {
    path: "/custom-fields",
    element: CustomFields,
    title: __("Custom Fields", "mrm"),
    // bage: 18,
  },
  {
    path: "/custom-fields/create",
    element: CustomFieldCreate,
    hideInMenu: true,
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
  }

];

export default routes;
