import React from "react"
import PropTypes from "prop-types"
import {
    EmailShareButton,
      FacebookShareButton,
      TelegramShareButton,
      VKShareButton,
      WhatsappShareButton,
      EmailIcon,
      FacebookIcon,
      TelegramIcon,
      VKIcon,
      WhatsappIcon,
} from "react-share";
class Share extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className ="ShareBlock">
      <div className="shareButtons">
        <EmailShareButton
          url={"shareUrl"}
          title={"title"}
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
      <div className="shareButtons">
         <VKShareButton
           url={"shareUrl"}
           title={"title"}
         >
           <VKIcon size={32} round />
         </VKShareButton>
         </div>
         <div className="shareButtons">
          <WhatsappShareButton
            url={"shareUrl"}
            title={"title"}
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
        <div className="shareButtons">
          <FacebookShareButton
            url={"shareUrl"}
            title={"title"}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div className="shareButtons">
          <TelegramShareButton
            url={"shareUrl"}
            title={"title"}
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Share
