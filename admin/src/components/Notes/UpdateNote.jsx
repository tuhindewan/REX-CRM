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
  const {contact_id, id} = useParams();
  const { contactEndpoint = "contact/" } = props;
  const [prevNote, setPrevNote] = useState({});


  const handleUpdate = (value) => {
    setNoteData (value);
  }


  async function updateNote(){
    const noteJson = {
      'type'         : noteData.type,
      'title'        : noteData.title,
      'description'  : noteData.description
    };


    if (noteJson.type == undefined){
        noteJson.type = prevNote.type;
    }
    if (noteJson.title == undefined){
        noteJson.title = prevNote.title;
    }
    if (noteJson.description == undefined){
        noteJson.description = prevNote.description;
    }


    const res = await axios.put(
        `/wp-json/mrm/v1/${contactEndpoint}${contact_id}/notes/${id}`,
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
                Note Updated
            </Notification>,
            {
              placement: "bottomEnd",
            }
        );
      }else {
        //error message
      }
      navigate(`../contacts/update/${contact_id}`);
  }

  async function deleteNote(){
    const res = await axios.delete(
        `/wp-json/mrm/v1/${contactEndpoint}${contact_id}/notes/${id}`,
        {
          headers: {
              "Content-type": "application/json",
          },
        }
      )
      const code = res.data.code;
      if (code === 200){
        toaster.push(
            <Notification closable type="success" header="success" duration={2000}>
               Note Deleted
            </Notification>,
            {
              placement: "bottomEnd",
            }
        );
      }else {
        //error message
      }
      navigate(`../contacts/update/${contact_id}`);
  }

  useEffect (()=>{
    async function getData(){
        const res = await axios.get(
            `/wp-json/mrm/v1/${contactEndpoint}${contact_id}/notes/${id}`
        )
        setPrevNote(res.data.data[0]);
    }
    getData();
  },[]);

   

  return (
    <>
      <Form onChange={handleUpdate} style={{marginTop: "20px"}}>

        <Form.Group controlId="type">
          <Form.ControlLabel>Type</Form.ControlLabel>
          <Form.Control rows={1} name="type" defaultValue={prevNote['type']} accepter={Textarea}/>
        </Form.Group>

        <Form.Group controlId="title">
          <Form.ControlLabel>Title</Form.ControlLabel>
          <Form.Control rows={1} name="title" defaultValue={prevNote['title']} accepter={Textarea} />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.ControlLabel>Description</Form.ControlLabel>
          <Form.Control rows={5} name="description" defaultValue={prevNote['description']} accepter={Textarea} />
        </Form.Group>

        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary" onClick={updateNote}>Update Note</Button>
            <Button color="red" appearance="primary" onClick={deleteNote}>Delete</Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </>
  )
}

export default UpdateNode