import React from 'react';
import Titel from '../../../component/UI/Titel/Titel';
import Image from "react-bootstrap/Image";
//import imageAkershus from '../../../assets/Akershus.jpeg';
import Carousel from './Carousel/Carousel';

const home = (props) => (
  <>
    <div className="container">
      <Titel className="bg-primary border p-3 text-white">
        Welcome to The site of Oslo Akershus !
      </Titel>
      <p className="fontFamily">
        The site helps you to find public establishments in Oslo Akershus !
      </p>
      <p className="fontFamily">
        Dating from 1299, this medieval castle and royal residence developed
        into a fortress in 1592 and was rebuilt into a renaissance castle
        between 1637 and 1648. Akershus Castle today contains banquet halls, the
        Royal Mausoleum and the government's reception rooms, and its small,
        historic church is the home of the royal sarcophagi.
      </p>
      {/* <Image src={imageAkershus}  fluid thumbnail style={{width:'100%'}}  alt="imageAkershus" /> */}
      <Carousel />
      <div className=" m-2"></div>
    </div>
  </>
);

export default home;