import React, { useState } from "react";
// copy clipboard package
import { CopyToClipboard } from "react-copy-to-clipboard";
// material ui imports
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Contact = () => {
  const [copy, setCopy] = useState({
    value: "matthewjamesbedard@outlook.com",
    copied: false
  });

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <section className="contactContainer">
      <h4 className="contactTitle">Contact</h4>

      <p className="contactParagraph">
        Send an email to{" "}
        <CopyToClipboard
          text={copy.value}
          onCopy={() => setCopy({ copied: true })}
        >
          <span className="email" onClick={handleClick}>
            MatthewJamesBedard@outlook.com
          </span>
        </CopyToClipboard>
      </p>

      <p className="contactParagraph">
        Add me to your network{" "}
        <a href="www.linkedin.com/in/matthew-bedard-dev" target="blank">
          LinkedIn
        </a>
      </p>
      <p className="contactParagraph">
        Tag me in a tweet{" "}
        <a href="https://twitter.com/Matthew_Bedard_" target="blank">
          @Matthew_Bedard_
        </a>
      </p>

      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Email Copied to Clipboard
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;
