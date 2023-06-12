import React from "react";
const Main=()=>{
    return(
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name </th>
            <th scope="col">Address</th>
            <th scope="col">Date of birth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Pankaj kumar kushwaha</td>
            <td>UP Kushinagar </td>
            <td>01/05/2002</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Vikash kumar kushwaha</td>
            <td>UP KUshinagr</td>
            <td>10/05/1999</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    )
}
export default Main;