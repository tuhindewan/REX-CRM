import React, { useRef, useState } from "react";
import _ from 'lodash'

import UploadIcon from "../../components/Icons/UploadIcon";
import CrossIcon from "../../components/Icons/CrossIcon";

export default function SingleSocialMedia({ index, socialMedialLength }) {
  _.noConflict()
  let frame

  //-------logo upload from wp media--------
  const addLogo = (index) => {

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
        document.getElementById("preview-img-src"+index).src = attachment.url;
    });

    frame.open();
    return false;
  }

    return (
        <>
            <div className="single-media">
                <button type="button" className="remove-media" title="Delete">
                    <CrossIcon/>
                </button>

                <div className="social-media-upload">
                    <img src="" alt="logo" id={"preview-img-src" + index} />
                    <button type="button" className="upload-btn" onClick={() => addLogo(index) }>
                        <UploadIcon/>
                    </button>
                </div>

                <div className="form-group">
                    <label htmlFor="">Link</label>
                    <input type="text" name="" placeholder="https://" />
                </div>
            </div>
        </>
    );
}

