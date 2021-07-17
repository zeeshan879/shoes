import React, { Component } from "react";
import style from "../../admin/addshoes/addsh.module.css";
import Select1 from "react-select";
import ImageUploading from "react-images-uploading";
import { Row, Col, Form, Container } from "react-bootstrap";
import axios from "axios";
import Header1 from "../header";
import { Redirect } from "react-router-dom";
const colourOptions = [
  { value: "Laces", label: "Laces" },
  { value: "Velcro", label: "Velcro" },
  { value: "SlipOn", label: "SlipOn" },
];
const norms = [
  { value: "S1", label: "S1" },
  { value: "S1P", label: "S1P" },
  { value: "S2", label: "S2" },
  { value: "S3", label: "S3" },
  { value: "SO2SO3", label: "SO2SO3" },
];
const types = [
  { value: "LowShoes", label: "LowShoes" },
  { value: "Sandals", label: "Sandals" },
  { value: "AnkleBoots", label: "AnkleBoots" },
  { value: "other", label: "other" },
];
const upper = [
  { value: "pullupLeather", label: "pullupLeather" },
  { value: "Suede", label: "Suede" },
  { value: "MicroFiber", label: "MicroFiber" },
  { value: "textileMaterial", label: "textileMaterial" },
];
const toeCap = [
  { value: "Steel", label: "Steel" },
  { value: "Aluminum", label: "Aluminum" },
  { value: "HDFC", label: "HDFC" },
  { value: "Policarbonate", label: "Policarbonate" },
  { value: "carbonFiber", label: "carbonFiber" },
];
const safty = [
  { value: "O_percent_metal", label: "0% metal" },
  { value: "ESD", label: "ESD" },
  { value: "SRC", label: "SRC" },
  { value: "An", label: "An" },
  { value: "Ci", label: "Ci" },
  { value: "Hi", label: "Hi" },
  { value: "Wr", label: "Wr" },
  { value: "Hro", label: "Hro" },
  { value: "Fo", label: "Fo" },
];
const additional = [
  { value: "GussetTongue", label: "GussetTongue" },
  { value: "PUProtectionBack", label: "PUProtectionBack" },
  { value: "PUProtectionFront", label: "PUProtectionFront" },
  { value: "MembraneLining", label: "MembraneLining" },
  { value: "CorpulenceH1mod2", label: "CorpulenceH1mod2" },
  { value: "MondoPoint", label: "MondoPoint" },
  { value: "ReflectiveElements", label: "ReflectiveElements" },
  { value: "EasyPuttingElements", label: "EasyPuttingElements" },
  { value: "AntibacterialInsole", label: "AntibacterialInsole" },
  { value: "MemoryInsole", label: "MemoryInsole" },
  { value: "Vibram", label: "Vibram" },
  { value: "Sympatex", label: "Sympatex" },
];
class AddShoes extends Component {
  state = {
    name: "",
    sizes: [],
    weights: [],
    redirect: false,
    image: {},
    sfrom: 0,
    sto: 100,
    wfrom: 0,
    wto: 100,
    norm: {},
    normsF: {
      S1: false,
      S1P: false,
      S2: false,
      S3: false,
      SO2SO3: false,
    },
    types: {},
    type: {
      LowShoes: false,
      Sandals: false,
      AnkleBoots: false,
      other: false,
    },
    fixings: {
      Laces: false,
      Velcro: false,
      SlipOn: false,
    },
    fixing: {},
    uppers: {
      pullupLeather: false,
      Suede: false,
      MicroFiber: false,
      textileMaterial: false,
    },
    upper: {},
    toeCaps: {
      Steel: false,
      Aluminum: false,
      HDFC: false,
      Policarbonate: false,
      carbonFiber: false,
    },
    toeCap: {},
    saftys: {
      O_percent_metal: false,
      ESD: false,
      SRC: false,
      An: false,
      Ci: false,
      Hi: false,
      Wr: false,
      Hro: false,
      Fo: false,
    },
    safty: {},
    additionals: {
      GussetTongue: false,
      PUProtectionBack: false,
      PUProtectionFront: false,
      MembraneLining: false,
      CorpulenceH1mod2: false,
      MondoPoint: false,
      ReflectiveElements: false,
      EasyPuttingElements: false,
      AntibacterialInsole: false,
      MemoryInsole: false,
      Vibram: false,
      Sympatex: false,
    },
    additional: {},
    collection: "",
  };
  handleNorm = (e) => {
    console.log(e.value);
    let v = e.value;
    var norm = { ...this.state.normsF };
    norm[v] = true;
    this.setState({ norm });
    this.state.norm[v] = true;
    this.setState({
      norm,
    });
  };

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = async () => {
    let data;
    data = new FormData();
    console.log(this.state);
    data.append("name", JSON.stringify(this.state.name));
    data.append("sizes", JSON.stringify(this.state.sizes));
    data.append("weights", JSON.stringify(this.state.weights));
    data.append("shoesImage", this.state.image);
    data.append("norm", JSON.stringify(this.state.norm));
    data.append("types", JSON.stringify(this.state.types));
    data.append("fixing", JSON.stringify(this.state.fixing));
    data.append("upper", JSON.stringify(this.state.upper));
    data.append("toeCap", JSON.stringify(this.state.toeCap));
    data.append("safty", JSON.stringify(this.state.safty));
    data.append("additional", JSON.stringify(this.state.additional));
    data.append("collection", JSON.stringify(this.state.collection));

    try {
      let res = await axios.post("/shoes/add-shoes", data);
      this.setState({
        redirect: true,
      });
      console.log(res, "jh");
      alert("save");
    } catch (error) {
      console.log(error);
    }
  };

  handleSfrom = (e) => {
    let sizes = [...this.state.sizes];
    sizes[0] = e.target.value;
    this.setState({
      sfrom: e.target.value,
      sizes,
    });
  };
  handleSto = (e) => {
    let sizes = [...this.state.sizes];
    sizes[1] = e.target.value;
    this.setState({
      sto: e.target.value,
      sizes,
    });
  };
  handleWfrom = (e) => {
    let weights = [...this.state.weights];
    weights[0] = e.target.value;
    this.setState({
      wfrom: e.target.value,
      weights,
    });
  };
  handleWto = (e) => {
    let weights = [...this.state.weights];
    weights[1] = e.target.value;
    this.setState({
      wto: e.target.value,
      weights,
    });
  };
  handleCollection = (e) => {
    this.setState({
      collection: e.target.value,
    });
  };
  handleAdditional = (e) => {
    this.setState({
      additional: this.state.additionals,
    });
    let l = e.length;
    console.log(l);
    let additional = { ...this.state.additionals };

    for (let k = 1; k <= l; k++) {
      let v = e[k - 1].value;
      additional[v] = true;
      this.setState({ additional: additional });
    }
  };
  handleSafety = (e) => {
    this.setState({
      safty: this.state.saftys,
    });
    let l = e.length;
    console.log(l);
    let safty = { ...this.state.saftys };

    for (let k = 1; k <= l; k++) {
      let v = e[k - 1].value;
      safty[v] = true;
      this.setState({ safty: safty });
    }
  };
  handleToeCap = (e) => {
    // console.log(e);
    // this.setState({
    //   toeCap: this.state.toeCaps,
    // });
    // let l = e.length;
    // console.log(l);
    // let toeCap = { ...this.state.toeCaps };

    // for (let k = 1; k <= l; k++) {
    //   let v = e[k - 1].value;
    //   toeCap[v] = true;
    //   this.setState({ toeCap: toeCap });
    // }
    console.log(e.value);
    let v = e.value;
    var toeCap = { ...this.state.toeCaps };
    toeCap[v] = true;
    this.setState({ toeCap });
    this.state.toeCap[v] = true;
    this.setState({
      toeCap,
    });
  };
  handleUpper = (e) => {
    // console.log(e);
    // this.setState({
    //   upper: this.state.uppers,
    // });
    // let l = e.length;
    // console.log(l);
    // let upper = { ...this.state.uppers };

    // for (let k = 1; k <= l; k++) {
    //   let v = e[k - 1].value;
    //   upper[v] = true;
    //   this.setState({ upper: upper });
    // }
    let v = e.value;
    var upper = { ...this.state.uppers };
    upper[v] = true;
    this.setState({ upper });
    this.state.upper[v] = true;
    this.setState({
      upper,
    });
  };
  // handleNorms = (e) => {
  //   this.setState({
  //     norm: this.state.normsF,
  //   });
  //   let l = e.length;
  //   console.log(l);
  //   let norm = { ...this.state.normsF };

  //   for (let k = 1; k <= l; k++) {
  //     let v = e[k - 1].value;
  //     norm[v] = true;
  //     this.setState({ norm: norm });
  //   }
  // };
  handletype = (e) => {
    // this.setState({
    //   types: this.state.type,
    // });
    // let l = e.length;
    // console.log(l);
    // let types = { ...this.state.type };

    // for (let k = 1; k <= l; k++) {
    //   let v = e[k - 1].value;
    //   types[v] = true;
    //   this.setState({ types: types });
    // }
    let v = e.value;
    var types = { ...this.state.type };
    types[v] = true;
    this.setState({ types });
    this.state.types[v] = true;
    this.setState({
      types,
    });
  };
  handleFixing = (e) => {
    // this.setState({
    //   fixing: this.state.fixings,
    // });
    // let l = e.length;
    // console.log(l);
    // let fixin = { ...this.state.fixings };

    // for (let k = 1; k <= l; k++) {
    //   let v = e[k - 1].value;
    //   fixin[v] = true;
    //   this.setState({ fixing: fixin });
    // }
    let v = e.value;
    var fixing = { ...this.state.fixings };
    fixing[v] = true;
    this.setState({ fixing });
    this.state.fixing[v] = true;
    this.setState({
      fixing,
    });
  };
  render() {
    const { selectedOption, selectednorm } = this.state;
    if (this.state.redirect) {
      return <Redirect to="/admindashboard" />;
    }
    return (
      <div>
        <Header1 />
        <Container>
          <div className={style.head}>ADD Shoes</div>
          <Row className={style.selectrow}>
            <Col lg={3}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="name*"
                onChange={this.handleName}
              />
            </Col>
            <Col lg={3}>
              <Form.Label>shoesCollection</Form.Label>
              <Form.Control
                type="name"
                placeholder="shoesCollection*"
                onChange={this.handleCollection}
              />
            </Col>
            <Col lg={3}>
              Size
              <div className="cont">
                from
                <input
                  type="number"
                  className="size_weight"
                  value={this.state.sfrom}
                  onChange={this.handleSfrom}
                  min={0}
                ></input>
                to
                <input
                  type="number"
                  className="size_weight"
                  value={this.state.sto}
                  onChange={this.handleSto}
                  max={100}
                ></input>
              </div>
            </Col>
            <Col lg={3}>
              weight
              <div className="cont">
                from
                <input
                  type="number"
                  className="size_weight"
                  value={this.state.wfrom}
                  onChange={this.handleWfrom}
                  min={0}
                ></input>
                to
                <input
                  type="number"
                  value={this.state.wto}
                  className="size_weight"
                  onChange={this.handleWto}
                  max={100}
                ></input>
              </div>
            </Col>
          </Row>
          <Row className={style.selectrow}>
            <Col lg={4}>
              {" "}
              Norms
              <Select1
                name="colors"
                options={norms}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleNorm}
              />
              {/* <Select
             name="ShearAndClamp"
             native
             onChange={this.handleNorm}>
             <option value={''}></option>
             <option value="S1">S1</option>
             <option value="S1P">S1P</option>
             <option value="S2">S2</option>
             <option value="S3">S3</option>
             <option value="S02S03">S02S03</option>
            </Select> */}
            </Col>
            <Col lg={4}>
              {" "}
              Shoe type
              <Select1
                name="colors"
                options={types}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handletype}
              />
              {/* <Select
             name="ShearAndClamp"
             native
             onChange={this.handletype}>
             <option value={''}></option>
             <option value="LowShoes">Low shoes</option>
             <option value="Sandals">Sandals</option>
             <option value="AnkleBoots">Ankie boots</option>
             <option value="other">Other</option>
            
            </Select> */}
            </Col>
            <Col lg={4}>
              {" "}
              Fixing
              {/* <Select
             name="ShearAndClamp"
             native
            
             onChange={this.handleShearClamp}>
             <option value={''}></option>
             <option value="S1">S1</option>
             <option value="S1P">S1P</option>
             <option value="S2">S2</option>
             <option value="S3">S3</option>
             <option value="O2">O2</option>
            </Select> */}
              <Select1
                name="colors"
                options={colourOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleFixing}
              />
            </Col>
          </Row>

          <Row className={style.selectrow}>
            <Col lg={4}>
              {" "}
              upper
              <Select1
                name="colors"
                options={upper}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleUpper}
              />
            </Col>
            <Col lg={4}>
              {" "}
              Toe cap
              <Select1
                name="colors"
                options={toeCap}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleToeCap}
              />
            </Col>
            <Col lg={4}>
              {" "}
              safety properties
              <Select1
                isMulti
                name="colors"
                options={safty}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleSafety}
              />
            </Col>
          </Row>
          <Row className={style.selectrow}>
            <Col lg={12}>
              {" "}
              Additional properties
              <Select1
                isMulti
                name="colors"
                options={additional}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleAdditional}
              />
            </Col>
          </Row>
          <Row className={`${style.selectrow} ${style.mart}`}>
            <Col lg={3}>
              <Form.File
                onChange={(e) => this.setState({ image: e.target.files[0] })}
                type="file"
                id="exampleFormControlFile1"
                label="Choose Image of shoes"
              />
            </Col>
            <Col className={style.alignbu}>
              <button onClick={this.handleSubmit} className={style.addbutton}>
                submit
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AddShoes;
