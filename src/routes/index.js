import { __ } from "@wordpress/i18n";
import AllCampaigns from "../components/AllCampaigns";
import AddCampaign from "../components/Campaign/AddCampaign";
import ContactDetails from "../components/ContactDetails";
import CreateContact from "../components/CreateContact";
import EmailSequences from "../components/EmailSequences";
import EmailTemplates from "../components/EmailTemplates";
import ImportConfirmation from "../components/ImportConfirmation";
import CreateList from "../components/List/CreateList";
import UpdateList from "../components/List/UpdateList";
import CreateSegment from "../components/Segment/CreateSegment";
import SelectFieldsMap from "../components/SelectFieldsMap";
import CreateTag from "../components/Tag/CreateTag";
import UpdateTag from "../components/Tag/UpdateTag";
import Contacts from "../pages/Contacts";
import ImportContactFile from "../pages/ImportContactFile";
import Lists from "../pages/Lists";
import Tags from "../pages/Tags";
import CampaignConfirmation from "../components/Campaign/CampaignConfirmation"

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
  // {
  //   path: "/contacts/update/:id",
  //   element: ContactCreateUpdate,
  //   hideInMenu: true,
  // },
  {
    path: "/contacts/update/:id",
    element: ContactDetails,
    hideInMenu: true,
  },
  {
    path: "/contacts/import",
    element: ImportContactFile,
    hideInMenu: true,
  },
  {
    path: "/contacts/import/selectfields",
    element: SelectFieldsMap,
    hideInMenu: true,
  },
  {
    path: "/contacts/import/selectfields/confirmation",
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
  // {
  //   path: "/segments",
  //   element: Segments,
  //   title: __("Segments", "mrm"),
  //   bage: 5,
  // },
  // {
  //   path: "/automation",
  //   element: Automation,
  //   title: __("Automation", "mrm"),
  // },
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
  {
    path: "/campaigns",
    element: AllCampaigns,
    title: __("All Campaigns", "mrm"),
    // bage: 14,
    campaignMenu: true, 
    
  },
  // {
  //   path: "/emailsequences",
  //   element: EmailSequences,
  //   title: __("Email Sequences", "mrm"),
  //   hideInMenu: true,
  //   // bage: __("08"),
  //   campaignMenu: true,
  // },
  // {
  //   path: "/emailtemplates",
  //   element: EmailTemplates,
  //   title: __("Email Templates", "mrm"),
  //   hideInMenu: true,
  //   // bage: __("06"),
  //   campaignMenu: true,
  // },
  {
    path: "/campaigns/addcampaign",
    element: AddCampaign,
    hideInMenu: true,
  },
  {
    path: "/campaigns/update/:id",
    element: AddCampaign,
    hideInMenu: true,
  },
  {
    path: "/campaigns/addcampaign/confirmation",
    element: CampaignConfirmation,
    hideInMenu: true,
  },

];

export default routes;
