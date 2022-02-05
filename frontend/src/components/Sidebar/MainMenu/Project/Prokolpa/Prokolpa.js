import React from 'react';
import * as s from "./Prokolpa.styles";
import { Link } from 'react-router-dom';

const Prokolpa = props => {

  const prokolpa = props.match.params.prokolpa;

  const prokolpas = {
    aba: {
      img: '/images/countries/canada.png',
      description: 'Canada is chilly'
    },
    akok: {
      img: '/images/countries/brazil.jpg',
      description: 'Brazil is sunny'
    },
    ibt: {
      img: '/images/countries/australia.jpg',
      description: 'Australia is boring'
    },
    ala: {
      img: '/images/countries/india.jpg',
      description: 'India is awesome'
    },
    jba: {
      img: '/images/countries/moldova.jpeg',
      description: 'Moldova is beautiful'
    },
    ia: {
      img: '/images/countries/kenya.jpg',
      description: 'Kenya is breathtaking'
    }
  }

  return (
    <s.ProkolpaContainer>
      <s.ProkolpaImage img={prokolpas[prokolpa]['img']} />
      <s.ProkolpaDescription>{prokolpas[prokolpa]['description']}</s.ProkolpaDescription>
    </s.ProkolpaContainer>
  )
}

export default Prokolpa