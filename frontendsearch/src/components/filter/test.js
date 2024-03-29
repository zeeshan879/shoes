import React from "react";
import "./filter.style.css";

import {
  Button,
  Container,
  Col,
  Row,
  Dropdown,
  DropdownButton,
  Form,
} from "react-bootstrap";

import _ from "lodash";

import axios from "axios";

import { ShoeContext } from "../../context/filter.context";

import Radio from "../radio-button/radio.component";
import RoundRadio from "../radio-button-round/radio-round.component";

class Filter extends React.Component {
  static contextType = ShoeContext;

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      norm: {
        S1: false,
        S1P: false,
        S2: false,
        S3: false,
        S02S03: false,
      },
      types: {
        LowShoes: false,
        Sandals: false,
        AnkleBoots: false,
        other: false,
      },
      fixing: {
        Laces: false,
        Velcro: false,
        SlipOn: false,
      },
      upper: {
        pullupLeather: false,
        Suede: false,
        MicroFiber: false,
        textileMaterial: false,
      },
      toeCap: {
        Steel: false,
        Aluminum: false,
        HDFC: false,
        Policarbonate: false,
        carbonFiber: false,
      },
      safetyProperties: {
        // zero: false,
        // ESD: false,
        // SRC: false,
        // An: false,
        E: false,
        // Ci: false,
        // Hi: false,
        // Wr: false,
        Wru: false,
        // Hro: false,
        // Fo: false,
        Pt: false,
        Fe: false,
        A: false,
        C: false,
        P: false,
      },
      additionalProperties: {
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
    };
  }

  handleChange = (value, catagory, dbName) => {
    const { handleFilterd, filterd } = this.context;

    this.setState({
      [catagory]: {
        ...this.state[catagory],
        [dbName]: value,
      },
    });
  };

  componentDidMount() {
    const { changeShoe, changeFetched } = this.context;

    async function fetchAd() {
      axios
        .post("http://192.168.8.112:9000/shoes/get-all-shoes")
        .then(function (response) {
          // //console.log(response.data);
          changeShoe(response.data);
          changeFetched(response.data);
        })
        .catch(function (error) {
          //console.log(error);
        })
        .then(function () {});
    }
    fetchAd();
  }
  handdleSubmit = (e) => {
    const {
      shoes,
      changeShoe,
      fetched,
      changeFetched,
      wFrom,
      wTo,
      sFrom,
      sTo,
      handleFilterd,
      filterd,
    } = this.context;

    // //console.log(filterd, 'fiiiiiii');

    e.preventDefault();
    const test = {
      S1P: true,
    };
    // //console.log(this.state, 'trrrrrr');

    let fs = [];
    let t = [];
    const fill = [];

    Object.keys(this.state.norm).map((i) => {
      if (this.state.norm[i]) {
        fetched.map((f) => {
          if (f.norm[i]) {
            fs.push(f);
          }
        });
      }
      changeShoe(fs);
    });

    Object.keys(this.state.types).map((i) => {
      if (this.state.types[i]) {
        // console.log(i, 'trrrr');
        // fs.map((f)=>{
        //   const v=null;
        //   console.log(f.types[])
        // })

        let typess = { types: {} };
        typess["types"][i] = true;
        console.log(typess, "lol");
        // console.log(JSON.parse(typess));

        // console.log(v, 'trrrr');
        _.filter(fs, typess);
      }
      console.log(fs, "filll");
      // if (fill.length) {
      //   changeShoe(
      //     _.uniqBy(fill, function (e) {
      //       return e.name;
      //     })
      //   );
      // }
    });

    // Object.keys(this.state.types).map((i) => {
    //   if (this.state.types[i]) {
    //     if (
    //       _.findIndex(fs, (el) => {
    //         return el.types[i];
    //       }) === -1
    //     ) {
    //       console.log('not found');
    //     } else {
    //       _.findIndex(fs);
    //       fill.push(
    //         fs[
    //           _.findIndex(fs, (el) => {
    //             return el.types[i];
    //           })
    //         ]
    //       );
    //     }
    //   }

    //   if (fill.length) {
    //     changeShoe(
    //       _.uniqBy(fill, function (e) {
    //         return e.name;
    //       })
    //     );
    //   }
    // });
    // Object.keys(this.state.fixing).map((i) => {
    //   if (this.state.fixing[i]) {
    //     if (
    //       _.findIndex(fs, (el) => {
    //         return el.fixing[i];
    //       }) === -1
    //     ) {
    //       console.log('not found');
    //     } else {
    //       _.findIndex(fs);
    //       fill.push(
    //         fs[
    //           _.findIndex(fs, (el) => {
    //             return el.fixing[i];
    //           })
    //         ]
    //       );
    //     }
    //   }

    //   if (fill.length) {
    //     changeShoe(
    //       _.uniqBy(fill, function (e) {
    //         return e.name;
    //       })
    //     );
    //   }
    // });
    // Object.keys(this.state.upper).map((i) => {
    //   if (this.state.upper[i]) {
    //     if (
    //       _.findIndex(fs, (el) => {
    //         return el.upper[i];
    //       }) === -1
    //     ) {
    //       console.log('not found');
    //     } else {
    //       _.findIndex(fs);
    //       fill.push(
    //         fs[
    //           _.findIndex(fs, (el) => {
    //             return el.upper[i];
    //           })
    //         ]
    //       );
    //     }
    //   }

    //   if (fill.length) {
    //     changeShoe(
    //       _.uniqBy(fill, function (e) {
    //         return e.name;
    //       })
    //     );
    //   }
    // });
    // Object.keys(this.state.toeCap).map((i) => {
    //   if (this.state.toeCap[i]) {
    //     if (
    //       _.findIndex(fs, (el) => {
    //         return el.toeCap[i];
    //       }) === -1
    //     ) {
    //       console.log('not found');
    //     } else {
    //       _.findIndex(fs);
    //       fill.push(
    //         fs[
    //           _.findIndex(fs, (el) => {
    //             return el.toeCap[i];
    //           })
    //         ]
    //       );
    //     }
    //   }

    //   if (fill.length) {
    //     changeShoe(
    //       _.uniqBy(fill, function (e) {
    //         return e.name;
    //       })
    //     );
    //   }
    // });
    // Object.keys(this.state.toeCap).map((i) => {
    //   if (this.state.toeCap[i]) {
    //     if (
    //       _.findIndex(fs, (el) => {
    //         return el.toeCap[i];
    //       }) === -1
    //     ) {
    //       console.log('not found');
    //     } else {
    //       _.findIndex(fs);
    //       fill.push(
    //         fs[
    //           _.findIndex(fs, (el) => {
    //             return el.toeCap[i];
    //           })
    //         ]
    //       );
    //     }
    //   }

    //   if (fill.length) {
    //     changeShoe(
    //       _.uniqBy(fill, function (e) {
    //         return e.name;
    //       })
    //     );
    //   }
    // });

    // Object.keys(this.state.safetyProperties).map(
    //   (i) => {
    //     if (this.state.safetyProperties[i]) {
    //       if (
    //         _.findIndex(fs, (el) => {
    //           return el.safetyProperties[i];
    //         }) === -1
    //       ) {
    //         console.log('not found');
    //       } else {
    //         console.log('found');
    //         _.findIndex(fs);
    //         fill.push(
    //           fs[
    //             _.findIndex(fs, (el) => {
    //               return el.safetyProperties[i];
    //             })
    //           ]
    //         );
    //       }
    //     }

    //     if (fill.length) {
    //       changeShoe(
    //         _.uniqBy(fill, function (e) {
    //           return e.name;
    //         })
    //       );
    //     }
    //   }
    // );

    // Object.keys(this.state.fixing).map((i) => {
    // //console.log(this.state.types);
    //console.log(this.state.fixing[i]);
    // if (this.state.fixing[i]) {
    // //console.log('reached here');
    // t = fs.filter((f) => {
    //   return f.fixing[i];
    // });
    // fs = t;
    //     const tr = [];
    //     fs.map((e) => {
    //       if (e.fixing[i]) {
    //         tr.push(e);
    //       }
    //     });
    //     fs = tr;
    //   }
    // });
    //console.log(fs, 'eeeeeeee');

    // Object.keys(this.state.upper).map((i) => {
    // //console.log(this.state.types);
    //console.log(this.state.upper[i]);
    // if (this.state.upper[i]) {
    //console.log('reached here');
    //     t = fs.filter((f) => {
    //       return f.upper[i];
    //     });
    //     fs = t;
    //   }
    // });
    // t = [];
    // Object.keys(this.state.toeCap).map((i) => {
    //   // //console.log(this.state.types);
    //   //console.log(this.state.toeCap[i]);
    //   if (this.state.toeCap[i]) {
    //     //console.log('reached here');
    //     t = fs.filter((f) => {
    //       return f.toeCap[i];
    //     });
    //     fs = t;
    //   }
    // });
    // Object.keys(this.state.safetyProperties).map(
    //   (i) => {
    //     // //console.log(this.state.types);
    //     //console.log(
    //     // this.state.safetyProperties[i]
    //     // );
    //     if (this.state.safetyProperties[i]) {
    //       //console.log('reached here');
    //       t = fs.filter((f) => {
    //         return f.safetyProperties[i];
    //       });
    //       fs = t;
    //     }
    //   }
    // );
    // Object.keys(
    //   this.state.additionalProperties
    // ).map((i) => {
    //   // //console.log(this.state.types);
    //   //console.log(
    //   // this.state.additionalProperties[i]
    //   // );
    //   if (this.state.additionalProperties[i]) {
    //console.log('reached here');
    //     t = fs.filter((f) => {
    //       return f.additionalProperties[i];
    //     });
    //     fs = t;
    //   }
    // });
    // //console.log('resulet', fs, this.state);
    // let sttest = JSON.stringify(test);
    // sttest = sttest.substring(
    //   1,
    //   sttest.length - 1
    // );
    // // //console.log(
    // //   sttest.substring(1, sttest.length - 1)
    // // );
    // // //console.log(JSON.stringify(test));
    // // //console.log(JSON.stringify(this.state));
    // // fetched.map((el) => {
    // //   // //console.log(JSON.stringify(el));
    // //   if (
    // //     JSON.stringify(el).search(sttest) != -1
    // //   ) {
    // //     // //console.log(el);
    // //   }
    // // });
    // // let filtered = new Set();
    // // Object.keys(this.state).map((i) => {
    // //   Object.keys(this.state[i]).map((prop) => {
    // //     fetched.map((el) => {
    // //       Object.keys(fetched[el]).map((t) => {
    //         //console.log(t);
    //         // el[i][prop] === this.state[i][prop] &&
    //         // filtered.add(el);
    //       });
    //     });
    //   });
    // });
    // //console.log(filtered, 'fill');

    // fetched.map((e) => {
    //   const allowed = [
    //     'norm',
    //     'types',
    //     'fixing',
    //     'upper',
    //     'toeCap',
    //     'safetyProperties',
    //     'additionalProperties',
    //   ];

    //   const filter = Object.keys(e)
    //     .filter((key) => allowed.includes(key))
    //     .reduce((obj, key) => {
    //       obj[key] = e[key];
    //       return obj;
    //     }, {});

    //   if (
    //     JSON.stringify(filter) ==
    //     JSON.stringify(this.state)
    //   ) {
    //     let we = false;
    //     let si = false;
    //     e.weight.map((w) => {
    //       // //console.log('brrrr', w, 'tss', wTo);
    //       we =
    //         w >= wFrom && w <= wTo ? true : false;
    //     });
    //     e.size.map((w) => {
    //       si =
    //         w >= sFrom && w <= sTo ? true : false;
    //     });
    //     // //console.log('trrrr', si, 'weeee', we);
    //     if (we && si) filtered.push(e);
    //   }
    // });
    // changeShoe(fs);
    // //console.log('filtered data:', filtered);
  };
  render() {
    const {
      shoes,
      changeShoe,
      changeWto,
      changeSto,
      changesFrom,
      changeWfrom,
      wFrom,
      wTo,
      sFrom,
      sTo,
    } = this.context;

    // const obj1 = { name: 'heok', age: 10 };
    // const obj2 = { name: 'heoks', age: 0 };

    // //console.log(
    //   Object.keys(shoes[0].toeCap)
    //     .filter((k) => k !== 'HDFC')
    //     .every(
    //       (k) =>
    //         shoes[0].toeCap[k] ===
    //         this.state.toeCap[k]
    //     )
    // );

    return (
      <Form onSubmit={this.handdleSubmit}>
        <Container className="home_container" lg="1" md="1" sm="1" xs="1" fluid>
          <Row xs={2} md={2} lg={2}>
            <h5>TENEDER SHOE SEARCH</h5>
            <Col style={{ textAlign: "right" }}>
              <DropdownButton
                variant="light"
                id="dropdown-item-button"
                title="Language: ENGLISH"
              >
                <Dropdown.Item as="button">Language 1</Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>

          <Row>
            <Col lg="3" md="6">
              <Row>
                <Col>
                  <p className="title">Norm</p>
                  <Radio
                    change={this.handleChange}
                    title={"S1"}
                    catagory={"norm"}
                    dbName={"S1"}
                    className="test"
                  />
                  <Radio
                    change={this.handleChange}
                    title={"S1P"}
                    catagory={"norm"}
                    dbName={"S1P"}
                  />{" "}
                  <Radio
                    title={"S2"}
                    change={this.handleChange}
                    catagory={"norm"}
                    dbName={"S2"}
                  />{" "}
                  <Radio
                    title={"S3"}
                    change={this.handleChange}
                    catagory={"norm"}
                    dbName={"S3"}
                  />{" "}
                  <Radio
                    title={"O2/O3"}
                    change={this.handleChange}
                    catagory={"norm"}
                    dbName={"S02S03"}
                  />
                  <p className="title">Shoe type</p>
                  <Radio
                    title={"Low shoes"}
                    change={this.handleChange}
                    catagory={"types"}
                    dbName={"LowShoes"}
                  />
                  <Radio
                    title={"Sandals"}
                    change={this.handleChange}
                    catagory={"types"}
                    dbName={"Sandals"}
                  />{" "}
                  <Radio
                    title={"Ankie boots"}
                    change={this.handleChange}
                    catagory={"types"}
                    dbName={"AnkleBoots"}
                  />{" "}
                  <Radio
                    title={"Other"}
                    change={this.handleChange}
                    catagory={"types"}
                    dbName={"other"}
                  />{" "}
                  <p className="title">Fixing</p>
                  <Radio
                    title={"Laces"}
                    change={this.handleChange}
                    catagory={"fixing"}
                    dbName={"Laces"}
                  />
                  <Radio
                    title={"Velcro"}
                    change={this.handleChange}
                    catagory={"fixing"}
                    dbName={"Velcro"}
                  />{" "}
                  <Radio
                    title={"Slip-on"}
                    change={this.handleChange}
                    catagory={"fixing"}
                    dbName={"SlipOn"}
                  />{" "}
                </Col>
              </Row>
            </Col>
            <Col lg="3" md="6">
              <Row>
                <Col>
                  <p className="title">Size and weight</p>
                  <div className="cont">
                    size
                    <input
                      type="number"
                      className="size_weight"
                      value={sFrom}
                      onChange={changesFrom}
                      min={0}
                    ></input>
                    to
                    <input
                      type="number"
                      className="size_weight"
                      value={sTo}
                      onChange={changeSto}
                      min={0}
                    ></input>
                  </div>
                  <div className="cont">
                    weight
                    <input
                      type="number"
                      className="size_weight"
                      value={wFrom}
                      onChange={changeWfrom}
                      min={0}
                    ></input>
                    to
                    <input
                      type="number"
                      value={wTo}
                      className="size_weight"
                      onChange={changeWto}
                      min={0}
                    ></input>
                  </div>
                  <p className="title">Upper</p>
                  <Radio
                    title={"Pull-up leather"}
                    change={this.handleChange}
                    catagory={"upper"}
                    dbName={"pullupLeather"}
                  />
                  <Radio
                    title={"Suede"}
                    change={this.handleChange}
                    catagory={"upper"}
                    dbName={"Suede"}
                  />{" "}
                  <Radio
                    title={"MicroFiber"}
                    change={this.handleChange}
                    catagory={"upper"}
                    dbName={"MicroFiber"}
                  />{" "}
                  <Radio
                    title={"Textile material"}
                    change={this.handleChange}
                    catagory={"upper"}
                    dbName={"textileMaterial"}
                  />{" "}
                  <p className="title">Toe cap</p>
                  <Radio
                    title={"steel"}
                    change={this.handleChange}
                    catagory={"toeCap"}
                    dbName={"Steel"}
                  />
                  <Radio
                    title={"alimunium"}
                    change={this.handleChange}
                    catagory={"toeCap"}
                    dbName={"Aluminum"}
                  />{" "}
                  <Radio
                    title={"HDFC"}
                    change={this.handleChange}
                    catagory={"toeCap"}
                    dbName={"HDFC"}
                  />{" "}
                  <Radio
                    title={"Policarbonate"}
                    change={this.handleChange}
                    catagory={"toeCap"}
                    dbName={"Policarbonate"}
                  />{" "}
                  <Radio
                    title={"Carbon fiber"}
                    change={this.handleChange}
                    catagory={"toeCap"}
                    dbName={"carbonFiber"}
                  />{" "}
                </Col>
              </Row>
            </Col>
            <Col lg="3" md="6">
              <Row>
                <Col>
                  <p className="title">Safty properties</p>
                  <RoundRadio
                    title={"C"}
                    change={this.handleChange}
                    catagory={"safetyProperties"}
                    dbName={"C"}
                    className="S02S03 S3"
                  />
                  <RoundRadio
                    title={"Pt"}
                    change={this.handleChange}
                    catagory={"safetyProperties"}
                    dbName={"Pt"}
                    className="S1 S1P S2 S3"
                  />{" "}
                  <RoundRadio
                    title={"Fe"}
                    change={this.handleChange}
                    catagory={"safetyProperties"}
                    dbName={"Fe"}
                    className="S1 S1P S2 S02S03 S3"
                  />{" "}
                  <RoundRadio
                    title={"A"}
                    change={this.handleChange}
                    catagory={"safetyProperties"}
                    dbName={"A"}
                    className="S1 S1P S2 S02S03 S3"
                  />{" "}
                  <RoundRadio
                    title={"E"}
                    change={this.handleChange}
                    catagory={"safetyProperties"}
                    dbName={"E"}
                    className="S1 S1P S2 S02S03 S3"
                  />
                  <RoundRadio
                    title={"P"}
                    change={this.handleChange}
                    catagory={"safetyProperties"}
                    dbName={"P"}
                    className="S1P S02S03 S3"
                  />
                  <RoundRadio
                    title={"Wru"}
                    change={this.handleChange}
                    catagory={"safetyProperties"}
                    dbName={"Wru"}
                    className="S2 S02S03 S3"
                  />
                </Col>
              </Row>
            </Col>{" "}
            <Col lg="3" md="6">
              <Row>
                <Col>
                  <p className="title">Additional properties</p>
                  <RoundRadio
                    title={"Gussts tongue"}
                    change={this.handleChange}
                    catagory={"additionalProperties"}
                    dbName={"GussetTongue"}
                  />
                  <RoundRadio
                    title={"PU protection back"}
                    change={this.handleChange}
                    catagory={"additionalProperties"}
                    dbName={"PUProtectionBack"}
                  />{" "}
                  <RoundRadio
                    title={"PU protection front"}
                    change={this.handleChange}
                    catagory={"additionalProperties"}
                    dbName={"S1"}
                  />{" "}
                  <RoundRadio
                    title={"Membrane lining"}
                    change={this.handleChange}
                    catagory={"additionalProperties"}
                    dbName={"MembraneLining"}
                  />{" "}
                  <RoundRadio
                    title={"Corpulence >H1/2"}
                    change={this.handleChange}
                    catagory={"additionalProperties"}
                    dbName={"CorpulenceH1mod2"}
                  />
                  <RoundRadio
                    title={"Mondopoint > 10  "}
                    change={this.handleChange}
                    catagory={"additionalProperties"}
                    dbName={"MondoPoint"}
                  />
                  <RoundRadio
                    title={"Reflective elemets"}
                    change={this.handleChange}
                    catagory={"additionalProperties"}
                    dbName={"ReflectiveElements"}
                  />
                  <RoundRadio
                    title={"Easy Putting Elements"}
                    change={this.handleChange}
                    catagory={"additionalProperties"}
                    dbName={"EasyPuttingElements"}
                  />
                  <RoundRadio
                    title={"Anti bacterial insole"}
                    change={this.handleChange}
                    catagory={"additionalProperties"}
                    dbName={"AntibacterialInsole"}
                  />
                  <RoundRadio
                    title={"MemoryInsole"}
                    change={this.handleChange}
                    catagory={"additionalProperties"}
                    dbName={"MemoryInsole"}
                  />
                  <RoundRadio
                    title={"Vibram"}
                    change={this.handleChange}
                    catagory={"additionalProperties"}
                    dbName={"Vibram"}
                  />
                  <RoundRadio
                    title={"sympatex"}
                    change={this.handleChange}
                    catagory={"additionalProperties"}
                    dbName={"Sympatex"}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="search">
            SEARCH
          </Button>
        </Container>
      </Form>
    );
  }
}

export default Filter;

// console.log(g, 'trr');
//   if (
//     _.findIndex(fs, (el) => {
//       return el.types[i];
//     }) === -1
//   ) {
//     console.log('not found');
//   } else {
//     _.findIndex(fs);
//     fill.push(
//       fs[
//         _.findIndex(fs, (el) => {
//           return el.types[i];
//         })
//       ]
//     );
//   }
// }

// if (fill.length) {
//   changeShoe(
//     _.uniqBy(fill, function (e) {
//       return e.name;
//     })
//   );
// }
//});
// Object.keys(this.state.fixing).map((i) => {
//   if (this.state.fixing[i]) {
//     if (
//       _.findIndex(fs, (el) => {
//         return el.fixing[i];
//       }) === -1
//     ) {
//       console.log('not found');
//     } else {
//       _.findIndex(fs);
//       fill.push(
//         fs[
//           _.findIndex(fs, (el) => {
//             return el.fixing[i];
//           })
//         ]
//       );
//     }
//   }

//   if (fill.length) {
//     changeShoe(
//       _.uniqBy(fill, function (e) {
//         return e.name;
//       })
//     );
//   }
// });
// Object.keys(this.state.upper).map((i) => {
//   if (this.state.upper[i]) {
//     if (
//       _.findIndex(fs, (el) => {
//         return el.upper[i];
//       }) === -1
//     ) {
//       console.log('not found');
//     } else {
//       _.findIndex(fs);
//       fill.push(
//         fs[
//           _.findIndex(fs, (el) => {
//             return el.upper[i];
//           })
//         ]
//       );
//     }
//   }

//   if (fill.length) {
//     changeShoe(
//       _.uniqBy(fill, function (e) {
//         return e.name;
//       })
//     );
//   }
// });
// Object.keys(this.state.toeCap).map((i) => {
//   if (this.state.toeCap[i]) {
//     if (
//       _.findIndex(fs, (el) => {
//         return el.toeCap[i];
//       }) === -1
//     ) {
//       console.log('not found');
//     } else {
//       _.findIndex(fs);
//       fill.push(
//         fs[
//           _.findIndex(fs, (el) => {
//             return el.toeCap[i];
//           })
//         ]
//       );
//     }
//   }

//   if (fill.length) {
//     changeShoe(
//       _.uniqBy(fill, function (e) {
//         return e.name;
//       })
//     );
//   }
// });
// Object.keys(this.state.toeCap).map((i) => {
//   if (this.state.toeCap[i]) {
//     if (
//       _.findIndex(fs, (el) => {
//         return el.toeCap[i];
//       }) === -1
//     ) {
//       console.log('not found');
//     } else {
//       _.findIndex(fs);
//       fill.push(
//         fs[
//           _.findIndex(fs, (el) => {
//             return el.toeCap[i];
//           })
//         ]
//       );
//     }
//   }

//   if (fill.length) {
//     changeShoe(
//       _.uniqBy(fill, function (e) {
//         return e.name;
//       })
//     );
//   }
// });

// Object.keys(this.state.safetyProperties).map(
//   (i) => {
//     if (this.state.safetyProperties[i]) {
//       if (
//         _.findIndex(fs, (el) => {
//           return el.safetyProperties[i];
//         }) === -1
//       ) {
//         console.log('not found');
//       } else {
//         _.findIndex(fs);
//         fill.push(
//           fs[
//             _.findIndex(fs, (el) => {
//               return el.safetyProperties[i];
//             })
//           ]
//         );
//       }
//     }

//     if (fill.length) {
//       changeShoe(
//         _.uniqBy(fill, function (e) {
//           return e.name;
//         })
//       );
//     }
//   }
// );

// Object.keys(this.state.fixing).map((i) => {
// //console.log(this.state.types);
//console.log(this.state.fixing[i]);
// if (this.state.fixing[i]) {
// //console.log('reached here');
// t = fs.filter((f) => {
//   return f.fixing[i];
// });
// fs = t;
//     const tr = [];
//     fs.map((e) => {
//       if (e.fixing[i]) {
//         tr.push(e);
//       }
//     });
//     fs = tr;
//   }
// });
//console.log(fs, 'eeeeeeee');

// Object.keys(this.state.upper).map((i) => {
// //console.log(this.state.types);
//console.log(this.state.upper[i]);
// if (this.state.upper[i]) {
//console.log('reached here');
//     t = fs.filter((f) => {
//       return f.upper[i];
//     });
//     fs = t;
//   }
// });
// t = [];
// Object.keys(this.state.toeCap).map((i) => {
//   // //console.log(this.state.types);
//   //console.log(this.state.toeCap[i]);
//   if (this.state.toeCap[i]) {
//     //console.log('reached here');
//     t = fs.filter((f) => {
//       return f.toeCap[i];
//     });
//     fs = t;
//   }
// });
// Object.keys(this.state.safetyProperties).map(
//   (i) => {
//     // //console.log(this.state.types);
//     //console.log(
//     // this.state.safetyProperties[i]
//     // );
//     if (this.state.safetyProperties[i]) {
//       //console.log('reached here');
//       t = fs.filter((f) => {
//         return f.safetyProperties[i];
//       });
//       fs = t;
//     }
//   }
// );
// Object.keys(
//   this.state.additionalProperties
// ).map((i) => {
//   // //console.log(this.state.types);
//   //console.log(
//   // this.state.additionalProperties[i]
//   // );
//   if (this.state.additionalProperties[i]) {
//console.log('reached here');
//     t = fs.filter((f) => {
//       return f.additionalProperties[i];
//     });
//     fs = t;
//   }
// });
// //console.log('resulet', fs, this.state);
// let sttest = JSON.stringify(test);
// sttest = sttest.substring(
//   1,
//   sttest.length - 1
// );
// // //console.log(
// //   sttest.substring(1, sttest.length - 1)
// // );
// // //console.log(JSON.stringify(test));
// // //console.log(JSON.stringify(this.state));
// // fetched.map((el) => {
// //   // //console.log(JSON.stringify(el));
// //   if (
// //     JSON.stringify(el).search(sttest) != -1
// //   ) {
// //     // //console.log(el);
// //   }
// // });
// // let filtered = new Set();
// // Object.keys(this.state).map((i) => {
// //   Object.keys(this.state[i]).map((prop) => {
// //     fetched.map((el) => {
// //       Object.keys(fetched[el]).map((t) => {
//         //console.log(t);
//         // el[i][prop] === this.state[i][prop] &&
//         // filtered.add(el);
//       });
//     });
//   });
// });
// //console.log(filtered, 'fill');

// fetched.map((e) => {
//   const allowed = [
//     'norm',
//     'types',
//     'fixing',
//     'upper',
//     'toeCap',
//     'safetyProperties',
//     'additionalProperties',
//   ];

//   const filter = Object.keys(e)
//     .filter((key) => allowed.includes(key))
//     .reduce((obj, key) => {
//       obj[key] = e[key];
//       return obj;
//     }, {});

//   if (
//     JSON.stringify(filter) ==
//     JSON.stringify(this.state)
//   ) {
//     let we = false;
//     let si = false;
//     e.weight.map((w) => {
//       // //console.log('brrrr', w, 'tss', wTo);
//       we =
//         w >= wFrom && w <= wTo ? true : false;
//     });
//     e.size.map((w) => {
//       si =
//         w >= sFrom && w <= sTo ? true : false;
//     });
//     // //console.log('trrrr', si, 'weeee', we);
//     if (we && si) filtered.push(e);
//   }
// });
// changeShoe(fs);
// //console.log('filtered data:', filtered);
