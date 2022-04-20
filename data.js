datosDepartamento = () => {
  let marker = new google.maps.Marker({
    position: { lat: 4.579466, lng: -74.109183 },
    map: map,
    opacity: 0.1,
  });

  let data1 = {
    content: `
    
  <div id="tabla">
  <
      <table class="table table-striped table-hover">
<tr>
  <td>DPTO</td>
  <TD>11</TD>
</tr>
<tr>
  <td>NOMBRE_DPTO</td>
  <TD>SANTA FE DE BOGOTA D.C</TD>
</tr>
<tr>
  <td>AREA</td>
  <TD>1650947779.1340001</TD>
</tr>
<tr>
  <td>PERIMETER</td>
  <td>323322.53999999998</td>
</tr>
<tr>
  <td>HECTARES</td>
  <td>165094.77799999999</td>
</tr>

      </table>

    </div>
  `,
    maxWidth: 300,
  };

  let infoWindow = new google.maps.InfoWindow(data1);

  const open = {
    map: map,
  };

  google.maps.event.addListener(marker, "mouseover", function () {
    infoWindow.open(open, marker);
  });

  google.maps.event.addListener(marker, "mouseout", function () {
    infoWindow.close();
  });

  /////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker2 = new google.maps.Marker({
    position: { lat: 6.2418, lng: -75.574 },
    map: map,
    opacity: 0.1,
  });

  let data2 = {
    content: `
    
  <div id="tabla">
  <
      <table class="table table-striped table-hover">
<tr>
  <td>DPTO</td>
  <TD>05</TD>
</tr>
<tr>
  <td>NOMBRE_DPTO</td>
  <TD>ANTIOQUIA</TD>
</tr>
<tr>
  <td>AREA</td>
  <TD>63351855546.894997</TD>
</tr>
<tr>
  <td>PERIMETER</td>
  <td>1963728.8430000001</td>
</tr>
<tr>
  <td>HECTARES</td>
  <td>6335185.5549999997</td>
</tr>

      </table>

    </div>
  `,
    maxWidth: 300,
  };

  let infoWindow2 = new google.maps.InfoWindow(data2);

  const open2 = {
    map: map,
  };

  google.maps.event.addListener(marker2, "mouseover", function () {
    infoWindow2.open(open2, marker2);
  });

  google.maps.event.addListener(marker2, "mouseout", function () {
    infoWindow2.close();
  });

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker3 = new google.maps.Marker({
    position: { lat: 10.706, lng: -74.957 },
    map: map,
    opacity: 0.1,
  });

  let data3 = {
    content: `
    
  <div id="tabla">
  <
      <table class="table table-striped table-hover">
<tr>
  <td>DPTO</td>
  <TD>08</TD>
</tr>
<tr>
  <td>NOMBRE_DPTO</td>
  <TD>ATLANTICO</TD>
</tr>
<tr>
  <td>AREA</td>
  <TD>3360765349.961</TD>
</tr>
<tr>
  <td>PERIMETER</td>
  <td> 240936.17199999999</td>
</tr>
<tr>
  <td>HECTARES</td>
  <td>336076.53499999997</td>
</tr>

      </table>

    </div>
  `,
    maxWidth: 300,
  };

  let infoWindow3 = new google.maps.InfoWindow(data3);

  const open3 = {
    map: map,
  };

  google.maps.event.addListener(marker3, "mouseover", function () {
    infoWindow3.open(open3, marker3);
  });

  google.maps.event.addListener(marker3, "mouseout", function () {
    infoWindow3.close();
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker4 = new google.maps.Marker({
    position: { lat: 8.5492301, lng: -74.18546 },
    map: map,
    opacity: 0.1,
  });

  let data4 = {
    content: `
    
  <div id="tabla">
  <
      <table class="table table-striped table-hover">
<tr>
  <td>DPTO</td>
  <TD>13</TD>
</tr>
<tr>
  <td>NOMBRE_DPTO</td>
  <TD>BOLIVAR</TD>
</tr>
<tr>
  <td>AREA</td>
  <TD>26141894527.75</TD>
</tr>
<tr>
  <td>PERIMETER</td>
  <td>  1309427.9680000001</td>
</tr>
<tr>
  <td>HECTARES</td>
  <td>2614189.4530000002</td>
</tr>

      </table>

    </div>
  `,
    maxWidth: 300,
  };

  let infoWindow4 = new google.maps.InfoWindow(data4);

  const open4 = {
    map: map,
  };

  google.maps.event.addListener(marker4, "mouseover", function () {
    infoWindow4.open(open4, marker4);
  });

  google.maps.event.addListener(marker4, "mouseout", function () {
    infoWindow4.close();
  });

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker5 = new google.maps.Marker({
    position: { lat: 5.455291, lng: -73.362218 },
    map: map,
    opacity: 0.1,
  });

  let data5 = {
    content: `
    
  <div id="tabla">
  <
      <table class="table table-striped table-hover">
<tr>
  <td>DPTO</td>
  <TD>15</TD>
</tr>
<tr>
  <td>NOMBRE_DPTO</td>
  <TD>BOYACA</TD>
</tr>
<tr>
  <td>AREA</td>
  <TD>23352582463.938999</TD>
</tr>
<tr>
  <td>PERIMETER</td>
  <td> 1364539.9110000001</td>
</tr>
<tr>
  <td>HECTARES</td>
  <td>2335258.2459999998</td>
</tr>

      </table>

    </div>
  `,
    maxWidth: 300,
  };

  let ifnoWindow5 = new google.maps.InfoWindow(data5);

  const open5 = {
    map: map,
  };

  google.maps.event.addListener(marker5, "mouseover", function () {
    ifnoWindow5.open(open5, marker5);
  });

  google.maps.event.addListener(marker5, "mouseout", function () {
    ifnoWindow5.close();
  });

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker6 = new google.maps.Marker({
    position: { lat: 5.269242, lng: -75.349692 },
    map: map,
    opacity: 0.1,
  });

  let data6 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>17</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>CALDAS</TD></tr>
  <tr><td>AREA</td><TD>7558199875.5559998</TD></tr>
  <tr><td>PERIMETER</td><td> 603282.45700000005</td></tr>
  <tr><td>HECTARES</td><td>755819.98800000001</td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow6 = new google.maps.InfoWindow(data6);

  const open6 = { map: map };

  google.maps.event.addListener(marker6, "mouseover", function () {
    infoWindow6.open(open6, marker6);
  });

  google.maps.event.addListener(marker6, "mouseout", function () {
    infoWindow6.close();
  });

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker7 = new google.maps.Marker({
    position: { lat: 0.904446, lng: -74.165538 },
    map: map,
    opacity: 0.1,
  });

  let data7 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>18</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>CAQUETA</TD></tr>
  <tr><td>AREA</td><TD>90180868828.820999</TD></tr>
  <tr><td>PERIMETER</td><td> 1888506.9010000001</td></tr>
  <tr><td>HECTARES</td><td> 9018086.8829999994</td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow7 = new google.maps.InfoWindow(data7);

  const open7 = { map: map };

  google.maps.event.addListener(marker7, "mouseover", function () {
    infoWindow7.open(open7, marker7);
  });

  google.maps.event.addListener(marker7, "mouseout", function () {
    infoWindow7.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker8 = new google.maps.Marker({
    position: { lat: 2.424382, lng: -76.666301 },
    map: map,
    opacity: 0.1,
  });

  let data8 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>19</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>CAUCA</TD></tr>
  <tr><td>AREA</td><TD>29742787301.199001</TD></tr>
  <tr><td>PERIMETER</td><td> 1243388.952</td></tr>
  <tr><td>HECTARES</td><td>  2974278.73</td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow8 = new google.maps.InfoWindow(data8);

  const open8 = { map: map };

  google.maps.event.addListener(marker8, "mouseover", function () {
    infoWindow8.open(open8, marker8);
  });

  google.maps.event.addListener(marker8, "mouseout", function () {
    infoWindow8.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker9 = new google.maps.Marker({
    position: { lat: 9.323281, lng: -73.546117 },
    map: map,
    opacity: 0.1,
  });

  let data9 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>20</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>CESAR</TD></tr>
  <tr><td>AREA</td><TD>22973095679.787998</TD></tr>
  <tr><td>PERIMETER</td><td>1080343.6780000001</td></tr>
  <tr><td>HECTARES</td><td>2297309.568</td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow9 = new google.maps.InfoWindow(data9);

  const open9 = { map: map };

  google.maps.event.addListener(marker9, "mouseover", function () {
    infoWindow9.open(open9, marker9);
  });

  google.maps.event.addListener(marker9, "mouseout", function () {
    infoWindow9.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker10 = new google.maps.Marker({
    position: { lat: 8.705803, lng: -75.828181 },
    map: map,
    opacity: 0.1,
  });

  let data10 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>23</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>CORDOBA</TD></tr>
  <tr><td>AREA</td><TD>25059485605.51200</TD></tr>
  <tr><td>PERIMETER</td><td>814093.37199999997</td></tr>
  <tr><td>HECTARES</td><td>2505948.5610000002</td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow10 = new google.maps.InfoWindow(data10);

  const open10 = { map: map };

  google.maps.event.addListener(marker10, "mouseover", function () {
    infoWindow10.open(open10, marker10);
  });

  google.maps.event.addListener(marker10, "mouseout", function () {
    infoWindow10.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker11 = new google.maps.Marker({
    position: { lat: 4.861864, lng: -74.404666 },
    map: map,
    opacity: 0.1,
  });

  let data11 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>23</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>CUNDINAMARCA</TD></tr>
  <tr><td>AREA</td><TD>22800258637.522999</TD></tr>
  <tr><td>PERIMETER</td><td>1164175.024</td></tr>
  <tr><td>HECTARES</td><td>2280025.8640000001 </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow11 = new google.maps.InfoWindow(data11);

  const open11 = { map: map };

  google.maps.event.addListener(marker11, "mouseover", function () {
    infoWindow11.open(open11, marker11);
  });

  google.maps.event.addListener(marker11, "mouseout", function () {
    infoWindow11.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker12 = new google.maps.Marker({
    position: { lat: 5.682736, lng: -76.721860 },
    map: map,
    opacity: 0.1,
  });

  let data12 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>27</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>CHOCO</TD></tr>
  <tr><td>AREA</td><TD>46838522629.870003</TD></tr>
  <tr><td>PERIMETER</td><td>1797897.8729999999</td></tr>
  <tr><td>HECTARES</td><td>4683852.2630000003</td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow12 = new google.maps.InfoWindow(data12);

  const open12 = { map: map };

  google.maps.event.addListener(marker12, "mouseover", function () {
    infoWindow12.open(open12, marker12);
  });

  google.maps.event.addListener(marker12, "mouseout", function () {
    infoWindow12.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker13 = new google.maps.Marker({
    position: { lat: 2.537885, lng: -75.539528 },
    map: map,
    opacity: 0.1,
  });

  let data13 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>41</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>HUILA</TD></tr>
  <tr><td>AREA</td><TD>20318702519.012001</TD></tr>
  <tr><td>PERIMETER</td><td>929144.16599999997</td></tr>
  <tr><td>HECTARES</td><td>2031870.2520000001 </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow13 = new google.maps.InfoWindow(data13);

  const open13 = { map: map };

  google.maps.event.addListener(marker13, "mouseover", function () {
    infoWindow13.open(open13, marker13);
  });

  google.maps.event.addListener(marker13, "mouseout", function () {
    infoWindow13.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker14 = new google.maps.Marker({
    position: { lat: 11.414468, lng: -72.614154 },
    map: map,
    opacity: 0.1,
  });

  let data14 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>44</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>LA GUAJIRA</TD></tr>
  <tr><td>AREA</td><TD>21012349660.450001</TD></tr>
  <tr><td>PERIMETER</td><td>936598.02000000002</td></tr>
  <tr><td>HECTARES</td><td>2101234.966 </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow14 = new google.maps.InfoWindow(data14);

  const open14 = { map: map };

  google.maps.event.addListener(marker14, "mouseover", function () {
    infoWindow14.open(open14, marker14);
  });

  google.maps.event.addListener(marker14, "mouseout", function () {
    infoWindow14.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker15 = new google.maps.Marker({
    position: { lat: 10.198279, lng: -74.398998 },
    map: map,
    opacity: 0.1,
  });

  let data15 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>47</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>MAGDALENA</TD></tr>
  <tr><td>AREA</td><TD>22846394629.859001</TD></tr>
  <tr><td>PERIMETER</td><td>916642.46999999997</td></tr>
  <tr><td>HECTARES</td><td>2284639.463 </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow15 = new google.maps.InfoWindow(data15);

  const open15 = { map: map };

  google.maps.event.addListener(marker15, "mouseover", function () {
    infoWindow15.open(open15, marker15);
  });

  google.maps.event.addListener(marker15, "mouseout", function () {
    infoWindow15.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker16 = new google.maps.Marker({
    position: { lat: 3.327497, lng: -73.214917 },
    map: map,
    opacity: 0.1,
  });

  let data16 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>50</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>META</TD></tr>
  <tr><td>AREA</td><TD>85389685783.837997</TD></tr>
  <tr><td>PERIMETER</td><td>1680541.8119999999</td></tr>
  <tr><td>HECTARES</td><td>8538968.5779999997 </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow16 = new google.maps.InfoWindow(data16);

  const open16 = { map: map };

  google.maps.event.addListener(marker16, "mouseover", function () {
    infoWindow16.open(open16, marker16);
  });

  google.maps.event.addListener(marker16, "mouseout", function () {
    infoWindow16.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker17 = new google.maps.Marker({
    position: { lat: 1.463391, lng: -77.883773 },
    map: map,
    opacity: 0.1,
  });

  let data17 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>52</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>NARIÑO</TD></tr>
  <tr><td>AREA</td><TD>33283045970.747002</TD></tr>
  <tr><td>PERIMETER</td><td>1015680.966</td></tr>
  <tr><td>HECTARES</td><td>3328304.5970000001 </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow17 = new google.maps.InfoWindow(data17);

  const open17 = { map: map };

  google.maps.event.addListener(marker17, "mouseover", function () {
    infoWindow17.open(open17, marker17);
  });

  google.maps.event.addListener(marker17, "mouseout", function () {
    infoWindow17.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker18 = new google.maps.Marker({
    position: { lat: 8.193265, lng: -72.883132 },
    map: map,
    opacity: 0.1,
  });

  let data18 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>54</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>NORTE DE SANTANDER</TD></tr>
  <tr><td>AREA</td><TD>21443330911.238998</TD></tr>
  <tr><td>PERIMETER</td><td>914288.24399999995</td></tr>
  <tr><td>HECTARES</td><td>2144333.091 </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow18 = new google.maps.InfoWindow(data18);

  const open18 = { map: map };

  google.maps.event.addListener(marker18, "mouseover", function () {
    infoWindow18.open(open18, marker18);
  });

  google.maps.event.addListener(marker18, "mouseout", function () {
    infoWindow18.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker19 = new google.maps.Marker({
    position: { lat: 4.510654, lng: -75.679514 },
    map: map,
    opacity: 0.1,
  });

  let data19 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>63</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>QUINDIO</TD></tr>
  <tr><td>AREA</td><TD>1732025801.293</TD></tr>
  <tr><td>PERIMETER</td><td>207948.85699999999</td></tr>
  <tr><td>HECTARES</td><td>173202.57999999999 </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow19 = new google.maps.InfoWindow(data19);

  const open19 = { map: map };

  google.maps.event.addListener(marker19, "mouseover", function () {
    infoWindow19.open(open19, marker19);
  });

  google.maps.event.addListener(marker19, "mouseout", function () {
    infoWindow19.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker20 = new google.maps.Marker({
    position: { lat: 5.004377, lng: -75.996054 },
    map: map,
    opacity: 0.1,
  });

  let data20 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>66</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>RISARALDA</TD></tr>
  <tr><td>AREA</td><TD>4042733125.7610002</TD></tr>
  <tr><td>PERIMETER</td><td>436988.67700000003</td></tr>
  <tr><td>HECTARES</td><td>404273.31300000002 </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow20 = new google.maps.InfoWindow(data20);

  const open20 = { map: map };

  google.maps.event.addListener(marker20, "mouseover", function () {
    infoWindow20.open(open20, marker20);
  });

  google.maps.event.addListener(marker20, "mouseout", function () {
    infoWindow20.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker21 = new google.maps.Marker({
    position: { lat: 6.734252, lng: -73.387487 },
    map: map,
    opacity: 0.1,
  });

  let data21 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>68</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>SANTANDER</TD></tr>
  <tr><td>AREA</td><TD>30290221671.890999</TD></tr>
  <tr><td>PERIMETER</td><td>1036566.662</td></tr>
  <tr><td>HECTARES</td><td>3029022.1669999999 </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow21 = new google.maps.InfoWindow(data21);

  const open21 = { map: map };

  google.maps.event.addListener(marker21, "mouseover", function () {
    infoWindow21.open(open21, marker21);
  });

  google.maps.event.addListener(marker21, "mouseout", function () {
    infoWindow21.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker22 = new google.maps.Marker({
    position: { lat: 9.100692, lng: -75.055078 },
    map: map,
    opacity: 0.1,
  });

  let data22 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>70</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>SUCRE</TD></tr>
  <tr><td>AREA</td><TD>10823789104.326</TD></tr>
  <tr><td>PERIMETER</td><td>688869.68099999998</td></tr>
  <tr><td>HECTARES</td><td>1082378.9099999999 </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow22 = new google.maps.InfoWindow(data22);

  const open22 = { map: map };

  google.maps.event.addListener(marker22, "mouseover", function () {
    infoWindow22.open(open22, marker22);
  });

  google.maps.event.addListener(marker22, "mouseout", function () {
    infoWindow22.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker23 = new google.maps.Marker({
    position: { lat: 4.436493, lng: -75.170797 },
    map: map,
    opacity: 0.1,
  });

  let data23 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>73</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>TOLIMA</TD></tr>
  <tr><td>AREA</td><TD>23421273474.061001</TD></tr>
  <tr><td>PERIMETER</td><td>853045.77899999998</td></tr>
  <tr><td>HECTARES</td><td>2342127.3470000001  </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow23 = new google.maps.InfoWindow(data23);

  const open23 = { map: map };

  google.maps.event.addListener(marker23, "mouseover", function () {
    infoWindow23.open(open23, marker23);
  });

  google.maps.event.addListener(marker23, "mouseout", function () {
    infoWindow23.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker24 = new google.maps.Marker({
    position: { lat: 3.684896, lng: -76.431315 },
    map: map,
    opacity: 0.1,
  });

  let data24 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>76</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>VALLE DEL CAUCA</TD></tr>
  <tr><td>AREA</td><TD>22146825343.909</TD></tr>
  <tr><td>PERIMETER</td><td>995449.43400000001</td></tr>
  <tr><td>HECTARES</td><td>2214682.534   </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow24 = new google.maps.InfoWindow(data24);

  const open24 = { map: map };

  google.maps.event.addListener(marker24, "mouseover", function () {
    infoWindow24.open(open24, marker24);
  });

  google.maps.event.addListener(marker24, "mouseout", function () {
    infoWindow24.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker25 = new google.maps.Marker({
    position: { lat: 6.625258, lng: -71.022516 },
    map: map,
    opacity: 0.1,
  });

  let data25 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>81</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>ARAUCA</TD></tr>
  <tr><td>AREA</td><TD>24196379863.349998</TD></tr>
  <tr><td>PERIMETER</td><td>843446.02599999995</td></tr>
  <tr><td>HECTARES</td><td>2419637.986 </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow25 = new google.maps.InfoWindow(data25);

  const open25 = { map: map };

  google.maps.event.addListener(marker25, "mouseover", function () {
    infoWindow25.open(open25, marker25);
  });

  google.maps.event.addListener(marker25, "mouseout", function () {
    infoWindow25.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker26 = new google.maps.Marker({
    position: { lat: 5.437925, lng: -71.510442 },
    map: map,
    opacity: 0.1,
  });

  let data26 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>85</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>CASANARE</TD></tr>
  <tr><td>AREA</td><TD>44714094970.349998</TD></tr>
  <tr><td>PERIMETER</td><td>1101844.9099999999</td></tr>
  <tr><td>HECTARES</td><td>4471409.4970000004 </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow26 = new google.maps.InfoWindow(data26);

  const open26 = { map: map };

  google.maps.event.addListener(marker26, "mouseover", function () {
    infoWindow26.open(open26, marker26);
  });

  google.maps.event.addListener(marker26, "mouseout", function () {
    infoWindow26.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker27 = new google.maps.Marker({
    position: { lat: 0.467849, lng: -75.724539 },
    map: map,
    opacity: 0.1,
  });

  let data27 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>86</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>PUTUMAYO</TD></tr>
  <tr><td>AREA</td><TD>1194372.666</TD></tr>
  <tr><td>PERIMETER</td><td>1101844.9099999999</td></tr>
  <tr><td>HECTARES</td><td>2470768.1630000002  </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow27 = new google.maps.InfoWindow(data27);

  const open27 = { map: map };

  google.maps.event.addListener(marker27, "mouseover", function () {
    infoWindow27.open(open27, marker27);
  });

  google.maps.event.addListener(marker27, "mouseout", function () {
    infoWindow27.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker28 = new google.maps.Marker({
    position: { lat: -1.383664, lng: -71.189699 },
    map: map,
    opacity: 0.1,
  });

  let data28 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>91</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>AMAZONAS</TD></tr>
  <tr><td>AREA</td><TD>110029418235.446</TD></tr>
  <tr><td>PERIMETER</td><td>2562641.642</td></tr>
  <tr><td>HECTARES</td><td>11002941.823999999   </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow28 = new google.maps.InfoWindow(data28);

  const open28 = { map: map };

  google.maps.event.addListener(marker28, "mouseover", function () {
    infoWindow28.open(open28, marker28);
  });

  google.maps.event.addListener(marker28, "mouseout", function () {
    infoWindow28.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker29 = new google.maps.Marker({
    position: { lat: 2.718798, lng: -68.911532 },
    map: map,
    opacity: 0.1,
  });

  let data29 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>94</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>GUAINIA</TD></tr>
  <tr><td>AREA</td><TD>72111494561.285995</TD></tr>
  <tr><td>PERIMETER</td><td>1882807.1899999999</td></tr>
  <tr><td>HECTARES</td><td>7211149.4560000002  </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow29 = new google.maps.InfoWindow(data29);

  const open29 = { map: map };

  google.maps.event.addListener(marker29, "mouseover", function () {
    infoWindow29.open(open29, marker29);
  });

  google.maps.event.addListener(marker29, "mouseout", function () {
    infoWindow29.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker30 = new google.maps.Marker({
    position: { lat: 1.961467, lng: -72.639041 },
    map: map,
    opacity: 0.1,
  });

  let data30 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>95</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>GUAVIARE</TD></tr>
  <tr><td>AREA</td><TD>55671476686.650002</TD></tr>
  <tr><td>PERIMETER</td><td>1555059.3489999999</td></tr>
  <tr><td>HECTARES</td><td>5567147.6689999998 </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow30 = new google.maps.InfoWindow(data30);

  const open30 = { map: map };

  google.maps.event.addListener(marker30, "mouseover", function () {
    infoWindow30.open(open30, marker30);
  });

  google.maps.event.addListener(marker30, "mouseout", function () {
    infoWindow30.close();
  });


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker31 = new google.maps.Marker({
    position: { lat: 1.218272, lng: -70.257827 },
    map: map,
    opacity: 0.1,
  });

  let data31 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>97</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>VAUPES</TD></tr>
  <tr><td>AREA</td><TD>53087838626.980003</TD></tr>
  <tr><td>PERIMETER</td><td>1666564.449</td></tr>
  <tr><td>HECTARES</td><td>5308783.8629999999  </td></tr>
  </table>`,
    maxWidth: 310,
  };

  let infoWindow31 = new google.maps.InfoWindow(data31);

  const open31 = { map: map };

  google.maps.event.addListener(marker31, "mouseover", function () {
    infoWindow31.open(open31, marker31);
  });

  google.maps.event.addListener(marker31, "mouseout", function () {
    infoWindow31.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker32 = new google.maps.Marker({
    position: { lat: 4.841921, lng: -69.240939 },
    map: map,
    opacity: 0.1,
  });

  let data32 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>99</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>VICHADA</TD></tr>
  <tr><td>AREA</td><TD>100055282904.151</TD></tr>
  <tr><td>PERIMETER</td><td>1781121.9569999999</td></tr>
  <tr><td>HECTARES</td><td>10005528.289999999  </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow32 = new google.maps.InfoWindow(data32);

  const open32 = { map: map };

  google.maps.event.addListener(marker32, "mouseover", function () {
    infoWindow32.open(open32, marker32);
  });

  google.maps.event.addListener(marker32, "mouseout", function () {
    infoWindow32.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker33 = new google.maps.Marker({
    position: { lat: 12.547639, lng: -81.720543 },
    map: map,
    opacity: 0.1,
  });

  let data33 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>88</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>ARCHIPIELAGO DE SAN ANDRES PROVIDENCIA Y SANTA CATALINA</TD></tr>
  <tr><td>AREA</td><TD>49602521.129000001</TD></tr>
  <tr><td>PERIMETER</td><td>71946.251000000004</td></tr>
  <tr><td>HECTARES</td><td>4960.2520000000004 </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow33 = new google.maps.InfoWindow(data33);

  const open33 = { map: map };

  google.maps.event.addListener(marker33, "mouseover", function () {
    infoWindow33.open(open33, marker33);
  });

  google.maps.event.addListener(marker33, "mouseout", function () {
    infoWindow33.close();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let marker34 = new google.maps.Marker({
    position: { lat: 13.351228, lng: -81.369104 },
    map: map,
    opacity: 0.1,
  });

  let data34 = {
    content: `<table class="table table-striped table-hover">
  <tr><td>DPTO</td><TD>88</TD></tr>
  <tr><td>NOMBRE_DPTO</td><TD>ARCHIPIELAGO DE SAN ANDRES PROVIDENCIA Y SANTA CATALINA</TD></tr>
  <tr><td>AREA</td><TD>49602521.129000001</TD></tr>
  <tr><td>PERIMETER</td><td>71946.251000000004</td></tr>
  <tr><td>HECTARES</td><td>4960.2520000000004 </td></tr>
  </table>`,
    maxWidth: 300,
  };

  let infoWindow34 = new google.maps.InfoWindow(data34);

  const open34 = { map: map };

  google.maps.event.addListener(marker34, "mouseover", function () {
    infoWindow34.open(open34, marker34);
  });

  google.maps.event.addListener(marker34, "mouseout", function () {
    infoWindow34.close();
  });

}