import React, { useRef, useState } from "react";
import _ from 'lodash'

import SettingsNav from "./SettingsNav";
import SingleSocialMedia from "./SingleSocialMedia";

import SettingIcon from "../../components/Icons/SettingIcon";
import UploadIcon from "../../components/Icons/UploadIcon";
import PlusIcon from "../../components/Icons/Plus";
import CrossIcon from "../../components/Icons/CrossIcon";

export default function BusinessSettings() {
  _.noConflict()
  let frame
  const [tabState, setTabState] = useState(2);
  const [socialMedia, setSocialMedia] = useState([
    { 
      logo_id: '1',
      logo_name: 'Facebook',
      logo_url: '',
      link: ''
    },
    { 
      logo_id: '2',
      logo_name: 'Twitter',
      logo_url: '',
      link: ''
    }
    
  ]);

  //---business settings tab-----
  const toggleTab = (index) => {
    setTabState(index);
  };

  //-------logo upload from wp media--------
  const addLogo = (event) => {
    event.preventDefault()

    // If the media frame already exists, reopen it.
    if (frame) {
      frame.open()
      return
    }

    // Create a new media frame
    frame = wp.media({
      library : {
        type : 'image',
      },
      title: 'Select or Upload Media',
      button: {
        text: 'Add This Photo',
      },
      multiple: false,
    })

    // Finally, open the modal on click
    frame.on('select', function () {
        var attachment = frame.state().get('selection').first().toJSON();
        document.getElementById("preview-img-link").value = attachment.id;
        document.getElementById("preview-img-src").src = attachment.url;
    });

    frame.open();
    return false;
  }

  //------add social media-------
  const addSocialMedia = (value) => {
    setSocialMedia(prevState => {
      return [...prevState, { 
        logo_id: '4',
        logo_name: '',
        logo_url: '',
        link: ''
      }];
    })
  };

  return (
     <div className="mintmrm-settings-page">
      <div className="mintmrm-container">
        <div className="mintmrm-settings">
          <h2 class="conatct-heading">Settings</h2>

          <div className="mintmrm-settings-wrapper">
            <SettingsNav/>

            <div className="settings-tab-content">
              <div className="single-tab-content business-tab-content">
                <div className="tab-body">
                  <header className="tab-header">
                    <h4 className="title">
                      <SettingIcon />
                      Business Settings
                    </h4>
                  </header>

                  <nav className="business-settings-tab-nav">
                    <button type="button" className={tabState === 1 ? "active" : ""} onClick={() => toggleTab(1)} >Basic Settings</button>
                    <button type="button" className={tabState === 2 ? "active" : ""} onClick={() => toggleTab(2)} >Social Media</button>
                  </nav>

                  <div className={ tabState === 1 ? "form-wrapper business-settings-wrapper active" : "form-wrapper business-settings-wrapper" }>
                    <div className="form-group">
                      <label htmlFor="business-name">Business Name</label>
                      <input type="text" name="business-name" id="business-name" placeholder="Enter Business Name" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone-number">Phone Number</label>
                      <input type="text" name="phone-number" id="phone-number" placeholder="Enter Phone Number" />
                    </div>

                    <hr />

                    <div className="form-group top-align">
                      <label htmlFor="business-address">Business Address</label>
                      <textarea name="business-address" id="business-address" cols="30" rows="3" placeholder="Enter Business Address "></textarea>
                    </div>

                    <hr />

                    <div className="form-group top-align photo-upload">
                      <label htmlFor="upload-logo">Upload Logo</label>
                      
                      <div className="photo-area">
                        <div className="preview-img">
                          <input type="hidden" id="preview-img-link" value="" />
                          <img src="" id="preview-img-src" alt="logo" />
                        </div>

                        <div className="upload-area">
                          <button onClick={addLogo} type="button">
                            <span className="icon">
                              <UploadIcon/>
                            </span>
                            <span className="title"><mark>Click to upload</mark> 
                            {/* and drag and drop <br /> SVG, PNG JPG or GIF (max. 800x400px)  */}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className={ tabState === 2 ? "form-wrapper social-settings-wrapper active" : "form-wrapper social-settings-wrapper" } >
                    <div className="social-media-header">
                      <h4>Social Media</h4>
                      <button type="button" className="mintmrm-btn" title="Add a social media" onClick={addSocialMedia} >
                        <PlusIcon/>
                        Add
                      </button>
                    </div>

                    <div className="social-media-wrapper">
                      {socialMedia.map((singleSocialMedia, idx) => {
                        return (
                          <SingleSocialMedia
                          key={idx}
                          index={idx}
                          socialMedialLength={singleSocialMedia.length}
                          />
                        );
                      })}
                    </div>
                  </div>

                </div>

                <div className="tab-footer">
                  <button className="mintmrm-btn" type="button">
                    Save Settings
                    <span className="mintmrm-loader"></span>
                  </button>
                </div>

              </div>
            </div>
            {/* end settings-tab-content */}

          </div>

        </div>
      </div>
    </div>
  );
}

