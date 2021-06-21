import React from "react";
import { useState } from "react";
import {
  FormGroup,
  Input,
  Button,
  Card,
  CardBody,
  Form,
  Label,
} from "reactstrap";
import "./HotelForm.css";

const HotelForm = () => {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState([]);
  const [stayPlace, setStayPlace] = useState([]);

  return (
    <Card className="align-items-center">
      <CardBody>
        <Form id="hotel-form">
          <FormGroup>
            <Label htmlFor="hotel-photo">
              <div className="custom-hotel-photo">
                <h3 className="text-light">Upload Hotel Photo</h3>
                <img
                  src="http://wallpaperose.com/wp-content/uploads/2013/07/Peaceful-Nature-Places2.jpg"
                  alt="nature"
                />
              </div>
            </Label>
            <Input
              style={{ display: "none" }}
              id="hotel-photo"
              name="photo"
              type="file"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              id="hotel-name"
              name="name"
              placeholder="Hotel Name"
              onChange=""
              value=""
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              id="hotel-location"
              name="location"
              placeholder="City"
              onChange=""
              value=""
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="number"
              id="hotel-rating"
              name="hotel"
              placeholder="Hotel Rating"
              onChange=""
              value=""
            />
          </FormGroup>
          <FormGroup className="my-4">
            
          </FormGroup>
          <Button>Create Hotel</Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default HotelForm;
