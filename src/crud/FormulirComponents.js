import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const FormulirComponents = () => {
  return (
    <div>
      <Row>
        <Col>
          <h4>Tambah Data</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="namaMakanan">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control type="text" placeholder="Masukan nama makanan" value={this.props.nama} onChange={(event) => this.props.handleChange()} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Deskripsi">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" name="Deskripsi" rows={3} placeholder="Masukan Deskripsi Makanan" value={this.props.deskripsi} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="hargaMakanan">
              <Form.Label>Harga</Form.Label>
              <Form.Control type="number" placeholder="Masukan Harga makanan" value={this.props.harga} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default FormulirComponents;
