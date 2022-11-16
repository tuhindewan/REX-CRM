import React, { useRef, useState } from "react";
import _ from 'lodash'

import UploadIcon from "../../components/Icons/UploadIcon";
import CrossIcon from "../../components/Icons/CrossIcon";

export default function SingleSocialMedia( props ) {
  _.noConflict()
  let frame
    const { index, deleteSocialLogo, icon, url, handleSocialUrl, data, handleSocialIcon } = props
    const [socialLogo , setSocialLogo] = useState(icon)
    const [socialUrl , setSocialUrl] = useState(url)
  //-------logo upload from wp media--------
  const addSocialLogo = (index) => {

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
        document.getElementById("social-logo-src"+index).src = attachment.url;
        handleSocialIcon(data,attachment.url, index )

    });

    frame.open();
    return false;
  }
    return (
        <>
            <div className="single-media">
                <button type="button" className="remove-media" title="Delete" onClick={() => deleteSocialLogo(index)}>
                    <CrossIcon/>
                </button>

                <div className="social-media-upload">
                    <img src={icon} alt="logo" id={"social-logo-src" + index} />
                    <button type="button" className="upload-btn" onClick={() => addSocialLogo(index)}>
                        <UploadIcon/>
                    </button>
                </div>

                <div className="form-group">
                    <label htmlFor="">Link</label>
                    <input type="text" name={"social-url" + index} id={"social-url" + index} placeholder="https://" value={url} onChange={ (val) => handleSocialUrl(data,val, index) } />
                </div>
            </div>
        </>
    );
}

