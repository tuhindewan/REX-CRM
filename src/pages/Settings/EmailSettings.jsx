import SettingsNav from "./SettingsNav"
export default function EmailSettings(){
    return(
        <div className="contact-settings-page">
      <div className="mintmrm-container">
        <div className="mintmrm-settings">
          <h2 class="conatct-heading">Settings</h2>

          <div className="mintmrm-settings-wrapper">
            <SettingsNav/>
            <div className="settings-tab-content">
              <div className="business-tab-content single-tab-content">
                  <h1>business tab content</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}