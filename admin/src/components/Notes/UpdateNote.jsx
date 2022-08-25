import axios from "axios";
import React, { useState, useEffect } from "react";

import { Form, ButtonToolbar, Button, Input, useToaster, Notification } from 'rsuite';
import FormGroup from 'rsuite/esm/FormGroup';
import { Link, useLocation, useNavigate, useParams} from "react-router-dom";

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);



const UpdateNode = (props) => {
   const navigate = useNavigate();
  const toaster = useToaster();
  const [noteData, setNoteData] = useState({});
  const {id} = useParams();
  const { contactEndpoint = "contact/" } = props;


  const handleUpdate = (value) => {
      setNoteData (value);
  }

  async function addNote(){
    console.log(noteData);

    const noteJson = {
      'type'         : noteData.type,
      'title'        : noteData.title,
      'description'  : noteData.description
    };


    const res = await axios.post(
        `/wp-json/mrm/v1/${contactEndpoint}${id}/notes`,
          noteJson
        ,
        {
          headers: {
              "Content-type": "application/json",
          },
        }
      )
      const code = res.data.code;
      if (code === 201){
        toaster.push(
            <Notification closable type="success" header="success" duration={2000}>
              New Note Added
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
      <Form onChange={handleAdd} style={{marginTop: "20px"}}>

        <Form.Group controlId="type">
          <Form.ControlLabel>Type</Form.ControlLabel>
          <Form.Control rows={1} name="type" accepter={Textarea} />
        </Form.Group>

        <Form.Group controlId="title">
          <Form.ControlLabel>Title</Form.ControlLabel>
          <Form.Control rows={1} name="title" accepter={Textarea} />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.ControlLabel>Description</Form.ControlLabel>
          <Form.Control rows={5} name="description" accepter={Textarea} />
        </Form.Group>

        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary" onClick={addNote}>Add Note</Button>
            <Button appearance="default">Cancel</Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </>
  )
}

export default UpdateNode