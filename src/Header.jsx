import React, { useState } from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import { NFTStorage, File } from "nft.storage";
import { Input, Upload } from "antd";

const nftStorageKey = process.env.NFT_STORAGE_API_KEY;
const { Dragger } = Upload;

const Header = () => {
  const [uploadedFile, setUploadedFile] = useState([]);
  const [title, setTitle] = useState("My NFT");
  const [description, setDescription] = useState("");
  const [nftStored, setNftStored] = useState('');
  const client = new NFTStorage({ token: nftStorageKey });

  const onUpload = async file => {
    if (file) {
      setUploadedFile(new File([await file.arrayBuffer()], file.name, { type: file.type }));
    }
    return false;
  };

  const sendData = async () => {
    console.log('sending...');
    try {
      const metadata = await client.store({
        name: title,
        description: description,
        image: uploadedFile,
      });
      setNftStored(metadata.ipnft);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <Container id='header' className=''>
      <h3>Upload to IPFS</h3>
      <Row className='mx-auto'>
        <Col>
          <Dragger className="drag-upload" action="" beforeUpload={onUpload}>
            <p className="ant-upload-text">Click or drag image file here to upload</p>
            <p className="ant-upload-text">This will be uploaded to IPFS</p>
          </Dragger>
        </Col>
        <Col>
          <Input placeholder="NFT Title" onChange={e => setTitle(e.target.value)} />
          <Input placeholder="NFT Description" onChange={e => setDescription(e.target.value)} />
        </Col>
        <Col className='col-xs-12 col-sm-3'>
          <Button variant='outline-dark' onClick={sendData}>
            Pin to IPFS
          </Button>
        </Col>
      </Row>
      <Row>
      <Col id='stored-result'>{nftStored}</Col>
      </Row>
    </Container>
  )
}

export default Header;
