import React, { Component } from "react";
import style from "./addshoes/addsh.module.css";
import Select1 from "react-select";
import ImageUploading from "react-images-uploading";
import { Row, Col, Form, Container } from "react-bootstrap";
import axios from "axios";
import { ShoeContext } from "../../context/filter.context";
import Header1 from "./header";
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
  { value: "C", label: "C" },
  { value: "Pt", label: "Pt" },
  { value: "Fe", label: "Fe" },
  { value: "A", label: "A" },
  { value: "E", label: "E" },
  { value: "P", label: "P" },
  { value: "Wru", label: "Wru" },
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

class UpdateShoe extends Component {
  static contextType = ShoeContext;
  constructor(props) {
    super(props);

    this.state = {
      imgshow: true,
      _id: "",
      name: "",
      sizes: [],
      weights: [],
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
        C: false,
        Pt: false,
        Fe: false,
        A: false,
        E: false,
        P: false,
        Wru: false,
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
  }
  componentDidMount() {
    console.log(window.location.pathname);
    console.log(this.context.update);

    let bb = this.context.update;
    console.log(this.state);
    bb != null &&
      this.setState({
        _id: bb._id,
        name: bb.name,
        sizes: bb.size,
        weights: bb.weight,
        image: bb.image,
        norm: bb.norm,
        types: bb.types,
        fixing: bb.fixing,
        upper: bb.upper,
        toeCap: bb.toeCap,
        safty: bb.safetyProperties,
        additional: bb.additionalProperties,
        collection: bb.shoesCollection,
        sfrom: bb.size[0],
        sto: bb.size[1],
        wfrom: bb.weight[0],
        wto: bb.weight[1],
      });

    // Simple PUT request with a JSON body using axios
    // const article = { title: "React PUT Request Example" };
    // axios
    //   .put(
    //     "http://localhost:9000/shoes/delete-shoes/" +
    //       JSON.stringify(this.props.value1)
    //   )
    //   .then((response) =>
    //     this.setState({ updatedAt: response.data.updatedAt })
    //   );
  }
  handleSubmit = async () => {
    let data;
    data = new FormData();
    console.log(this.state);
    data.append("_id", JSON.stringify(this.state._id));
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
    console.log("update final ", data);
    try {
      let res = await axios.put("/shoes/edit-shoes", data);
      this.setState({
        redirect: true,
      });
      console.log(res, "jh");
      alert("update");
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
  handleimage = (e) => {
    console.log(e.target.files[0]);
    this.setState({ image: e.target.files[0] });
    this.setState({
      imgshow: false,
    });
  };
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleNorms = (e) => {
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
  handletype = (e) => {
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
    let v = e.value;
    var fixing = { ...this.state.fixings };
    fixing[v] = true;
    this.setState({ fixing });
    this.state.fixing[v] = true;
    this.setState({
      fixing,
    });
  };
  handleUpper = (e) => {
    let v = e.value;
    var upper = { ...this.state.uppers };
    upper[v] = true;
    this.setState({ upper });
    this.state.upper[v] = true;
    this.setState({
      upper,
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
  render() {
    const { selectedOption, selectednorm } = this.state;
    let selected = Object.keys(this.state.norm).filter(
      (a) => this.state.norm[a] === true
    );
    console.log(selected);
    let defaultnorm = [];
    for (let i = 0; i < selected.length; i++) {
      defaultnorm.push({ value: selected[i], label: selected[i] });
    }
    //type filter
    let selectedtype = Object.keys(this.state.types).filter(
      (a) => this.state.types[a] === true
    );

    let defaultType = [];
    for (let i = 0; i < selectedtype.length; i++) {
      defaultType.push({ value: selectedtype[i], label: selectedtype[i] });
    }
    //fixing filter
    let selectedfixing = Object.keys(this.state.fixing).filter(
      (a) => this.state.fixing[a] === true
    );

    let defaultfixing = [];
    for (let i = 0; i < selectedfixing.length; i++) {
      defaultfixing.push({
        value: selectedfixing[i],
        label: selectedfixing[i],
      });
    }
    //upper filter
    let selectedupper = Object.keys(this.state.upper).filter(
      (a) => this.state.upper[a] === true
    );

    let defaultupper = [];
    for (let i = 0; i < selectedupper.length; i++) {
      defaultupper.push({
        value: selectedupper[i],
        label: selectedupper[i],
      });
    }
    //toeCap filter
    let selectedtoeCap = Object.keys(this.state.toeCap).filter(
      (a) => this.state.toeCap[a] === true
    );

    let defaulttoeCap = [];
    for (let i = 0; i < selectedtoeCap.length; i++) {
      defaulttoeCap.push({
        value: selectedtoeCap[i],
        label: selectedtoeCap[i],
      });
    }
    //safty filter
    let selectedsafty = Object.keys(this.state.safty).filter(
      (a) => this.state.safty[a] === true
    );

    let defaultsafty = [];
    for (let i = 0; i < selectedsafty.length; i++) {
      defaultsafty.push({
        value: selectedsafty[i],
        label: selectedsafty[i],
      });
    }
    //addtio filter
    let selectedadditional = Object.keys(this.state.additional).filter(
      (a) => this.state.additional[a] === true
    );

    let defaultadditional = [];
    for (let i = 0; i < selectedadditional.length; i++) {
      defaultadditional.push({
        value: selectedadditional[i],
        label: selectedadditional[i],
      });
    }
    if (this.state.redirect) {
      return <Redirect to="/admindashboard" />;
    }
    return (
      <div>
        <Header1 />
        <Container>
          <div className={style.head}>Update Shoes</div>
          <Row className={style.selectrow}>
            <Col lg={3}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="name*"
                value={this.state.name}
                onChange={this.handleName}
              />
            </Col>
            <Col lg={3}>
              <Form.Label>shoesCollection</Form.Label>
              <Form.Control
                type="name"
                placeholder="shoesCollection*"
                value={this.state.collection}
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
              {defaultnorm.length > 0 && (
                <Select1
                  name="colors"
                  defaultValue={defaultnorm}
                  options={norms}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleNorms}
                />
              )}
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
              {defaultType.length > 0 && (
                <Select1
                  name="colors"
                  options={types}
                  defaultValue={defaultType}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handletype}
                />
              )}
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
              {defaultfixing.length > 0 && (
                <Select1
                  name="colors"
                  defaultValue={defaultfixing}
                  options={colourOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleFixing}
                />
              )}
            </Col>
          </Row>

          <Row className={style.selectrow}>
            <Col lg={4}>
              {" "}
              upper
              {defaultupper.length > 0 && (
                <Select1
                  name="colors"
                  defaultValue={defaultupper}
                  options={upper}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleUpper}
                />
              )}
            </Col>
            <Col lg={4}>
              {" "}
              Toe cap
              {defaulttoeCap.length > 0 && (
                <Select1
                  name="colors"
                  defaultValue={defaulttoeCap}
                  options={toeCap}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleToeCap}
                />
              )}
            </Col>
            <Col lg={4}>
              {" "}
              safety properties
              {defaultsafty.length > 0 && (
                <Select1
                  isMulti
                  name="colors"
                  defaultValue={defaultsafty}
                  options={safty}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleSafety}
                />
              )}
            </Col>
          </Row>
          <Row className={style.selectrow}>
            <Col lg={12}>
              {" "}
              Additional properties
              {defaultadditional.length > 0 && (
                <Select1
                  isMulti
                  name="colors"
                  options={additional}
                  defaultValue={defaultadditional}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleAdditional}
                />
              )}
            </Col>
          </Row>
          <Row className={`${style.selectrow} `}>
            <Col lg={6} className={style.alignimg}>
              <Form.File
                //   onChange={(e) => this.setState({ image: e.target.files[0] })}
                onChange={this.handleimage}
                type="file"
                name="hgvb"
                id="exampleFormControlFile1"
                label="Choose Image for update"
              />
              {this.state.imgshow && (
                <div>
                  {" "}
                  <img
                    src={`https://shoe-backend.herokuapp.com/${this.state.image}`}
                    alt="shoe "
                    width="200px"
                  ></img>
                </div>
              )}
            </Col>
            <Col className={style.alignbu}>
              <button onClick={this.handleSubmit} className={style.addbutton}>
                UPDATE SHOE
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default UpdateShoe;
