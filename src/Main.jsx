import React, { useState } from 'react'
import { Container, Button, Row, Col, Card } from 'react-bootstrap'
import axios from "axios";
import { Input } from "antd";

const Main = () => {
  const [cidLookup, setCidLookup] = useState('');
  const [data, setData] = useState(null);

  const getURL = async () => {
    setData(null);
    console.log('fetching...');
    try {
      let url = "https://ipfs.io/ipfs/" + cidLookup + "/metadata.json";
      let result = await axios.get(url);
      let data = await result.data;
      setData(data);
    } catch (err) {
      console.warn("Error: " + err);
    }
  };

  function cleanImgUrl(ipfsStr) {
    let imgUrl = ipfsStr.replace("ipfs://", "https://ipfs.io/ipfs/");
    return imgUrl
  }

  return (
    <Container id='main'>
      <h3>Lookup CID on IPFS</h3>
      <Row className='mx-auto'>
        <Col id='cidInputCol'>
          <Input id='cidLookup' placeholder="CID"
            onChange={e => setCidLookup(e.target.value)} />
        </Col>
        <Col className='col-xs-12 col-sm-3'>
          <Button variant='outline-dark' onClick={getURL}>
            Display IPFS CID
          </Button>
        </Col>
      </Row>
      <Row>
        {data ?
          <Card>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
            <Card.Img src={cleanImgUrl(data.image)}/>
          </Card>
          : <div></div>
        }
      </Row>
    </Container>
  )
}

export default Main;
