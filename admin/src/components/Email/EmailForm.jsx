import axios from "axios";
import React, { useState, useEffect } from "react";

import { Form, ButtonToolbar, Button, Input, useToaster, Notification } from 'rsuite';
import FormGroup from 'rsuite/esm/FormGroup';
import { Link, useLocation, useNavigate, useParams} from "react-router-dom";

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);



const EmailForm = (props) => {
  const navigate = useNavigate();
  const toaster = useToaster();
  const [emailData, setEmailData] = useState({});
  const [type, setType] = useState("email");
  const [reciever, setReciever] = useState("");
  const {id} = useParams();
  const { contactEndpoint = "contacts/" } = props;

    // console.log(from);
    // console.log(to);
    // console.log(subject);
    // console.log(type);
    // console.log(body);

    useEffect(() => { 
      async function getData() {
          const res = await axios.get(
                  `/wp-json/mrm/v1/${contactEndpoint}${id}`,{
                  headers: {
                      "Content-type": "application/json",
                  },
                  }
          )
          setReciever(res.data.data.email);
      }
      getData();
    }, []);

  const handleSend = (value) => {
      setEmailData (value);
  }
  async function sendEmail(){
    console.log(emailData);

    const emailJson = {
      'email_subject': emailData.subject,
      'type'         : "email",
      'email_body'   : emailData.body,
      'email_address': reciever
    };

    //console.log(emailJson);

    const res = await axios.post(
        `/wp-json/mrm/v1/${contactEndpoint}${id}/send-message`,
          emailJson
        ,
        {
          headers: {
              "Content-type": "application/json",
          },
        }
      )

     if (res.data.code === 200){
      toaster.push(
          <Notification closable type="success" header="success" duration={2000}>
            Email has been sent
          </Notification>,
          {
            placement: "bottomEnd",
          }
      );
      }else {
        //error message
      }
      navigate(`../contacts/update/${id}`);
  }

  return (
    <>
      <Form onChange={handleSend} style={{marginTop: "20px"}}>
        <Form.Group controlId="reciever">
          <Form.ControlLabel>To</Form.ControlLabel>
          <Form.Control name="reciever" type="email" disabled value={reciever}/>
        </Form.Group>

        <Form.Group controlId="subject">
          <Form.ControlLabel>Subject</Form.ControlLabel>
          <Form.Control rows={1} name="subject" accepter={Textarea} />
        </Form.Group>

        <Form.Group controlId="body">
          <Form.ControlLabel>Email Body</Form.ControlLabel>
          <Form.Control rows={5} name="body" accepter={Textarea} />
        </Form.Group>

        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary" onClick={sendEmail}>Send Email</Button>
            <Button appearance="default">Cancel</Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </>
  )
}

export default EmailForm