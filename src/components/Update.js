import React, { useState } from 'react';
import { Form, FormGroup, Label, Button, Col, Input} from 'reactstrap';
const Update = () => {
    const [title, setTitle] = useState('');
    return ( 
        <Form>
            <FormGroup row>
                <Label htmlFor='title' md={2}>Title</Label>
                <Col md={6}>
                    <Input name="title" type="text" placeholder='title' className='form-control'/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col md={{size: 10, offset: 2}}>
                    <Button type="submit" color="primary"> Send feedback</Button>
                </Col>
            </FormGroup>
        </Form>
    );
}
 
export default Update;