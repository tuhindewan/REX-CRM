import { __ } from "@wordpress/i18n";
import AllCampaigns from "../components/AllCampaigns";
import AddCampaign from "../components/Campaign/AddCampaign";
import EditCampaign from "../components/Campaign/EditCampaign";
import EmailBuilder from "../components/Campaign/EmailBuilder";
import ContactDetails from "../components/ContactDetails";
import CreateContact from "../components/CreateContact";
import CustomFieldCreate from "../components/CustomFieldCreate";
import CustomFields from "../components/CustomFields";
import Dashboard from "../components/Dashboard";
import FormEditor from "../components/Form/FormEditor";
import ImportConfirmation from "../components/ImportConfirmation";
import CreateList from "../components/List/CreateList";
import UpdateList from "../components/List/UpdateList";
import SelectFieldsMap from "../components/SelectFieldsMap";
import Settings from "../components/Setting";
import CreateTag from "../components/Tag/CreateTag";
import UpdateTag from "../components/Tag/UpdateTag";
import WordPressFieldMap from "../components/WordPressFieldMap";
import Contacts from "../pages/Contacts";
import ImportContactFile from "../pages/ImportContactFile";
import ImportContactRaw from "../pages/ImportContactRaw";
import ImportMailchimp from "../pages/ImportMailchimp";
import ImportWordpress from "../pages/ImportWordpress";
import Lists from "../pages/Lists";
import Tags from "../pages/Tags";
import FormIndex from "../components/Form";

const routes = [
  {
    path: "/",
    element: Dashboard,
    title: __("Dashboard", "mrm"),
    hideInMenu: true,
  },
  {
    path: "/contacts",
    element: Contacts,
    title: __("Contacts", "mrm"),
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
    path: "/contacts/import/wordpress",
    element: ImportWordpress,
    hideInMenu: true,
  },
  {
    path: "/contacts/import/wordpress/map",
    element: WordPressFieldMap,
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
    //bage: 15,
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
    hideInMenu: true,
  },
  {
    path: "/custom-fields/create",
    element: CustomFieldCreate,
    hideInMenu: true,
  },
  {
    path: "/custom-fields/update/:id",
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
  },
  {
    path: "/campaigns/",
    element: AllCampaigns,
    hideInMenu: true,
  },
  // {
  //   path: "/campaigns/sequences",
  //   element: AllCampaigns,
  //   title: __("Email Sequences", "mrm"),
  //   campaignMenu: true,
  //   hideInMenu: true,
  // },
  // {
  //   path: "/campaigns/templates",
  //   element: AllCampaigns,
  //   title: __("Email Templates", "mrm"),
  //   campaignMenu: true,
  //   hideInMenu: true,
  // },
  {
    path: "/campaigns/create",
    element: AddCampaign,
    hideInMenu: true,
  },
  {
    path: "/campaigns/builder",
    element: EmailBuilder,
    hideInMenu: true,
  },
  {
    path: "/campaign/edit/:id",
    element: EditCampaign,
    hideInMenu: true,
  },
  {
    path: "/form/",
    element: FormIndex,
    hideInMenu: true,
  },
  {
    path: "/form-builder/",
    element: FormEditor,
    hideInMenu: true,
  },
  {
    path        : "/settings",
    element     : Settings,
    hideInMenu  : true,
  }
];

export default routes;
