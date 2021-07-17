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
