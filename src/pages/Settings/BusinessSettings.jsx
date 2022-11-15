import React, { useRef, useState } from "react";
import _ from 'lodash'

import SettingsNav from "./SettingsNav";
import SettingIcon from "../../components/Icons/SettingIcon";
import UploadIcon from "../../components/Icons/UploadIcon";

export default function BusinessSettings() {
  _.noConflict()
  let frame

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

                  <div className="form-wrapper">
                    <div className="form-group">
                      <label htmlFor="business-name">Business Name</label>
                      <input type="text" name="business-name" id="business-name" placeholder="Enter Business Name" pattern="" />
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

