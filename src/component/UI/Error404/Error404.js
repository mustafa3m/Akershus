import React from 'react';
import Image from "react-bootstrap/Image";
import imageError404 from '../../../assets/error404.png';
import Titel from '../Titel/Titel';

const error404 = (props) => (
  <div>
    <Titel>The requested page does not exist</Titel>

    <Image
      src={imageError404}
      fluid
      thumbnail
      style={{ width: "50%" }}
      alt="error 404"
    />
  </div>
);

export default error404;