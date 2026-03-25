const Table = () => {
  return (
    <div>
      <h2>Invoice</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>ADDRESS</th>
              <th>DATE</th>
              <th>TYPE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>00001</td>
              <td>Christine Brooks</td>
              <td>089 Kutch Green Apt. 448</td>
              <td>14 Feb 2026</td>
              <td>Electric</td>
              <td>Paid</td>
            </tr>
            <tr>
              <td>00002</td>
              <td>Rosie Pearson</td>
              <td>979 Immanuel Ferry Suite 526</td>
              <td>14 Feb 2026</td>
              <td>Book</td>
              <td></td>
            </tr>
            <tr>
              <td>00003</td>
              <td>Darrell Caldwell</td>
              <td>8587 Frida Ports</td>
              <td>14 Feb 2026</td>
              <td>Medicine</td>
              <td></td>
            </tr>
            <tr>
              <td>00004</td>
              <td>Gilbert Johnston</td>
              <td>768 Destiny Lake Suite 600</td>
              <td>14 Feb 2026</td>
              <td>Mobile</td>
              <td></td>
            </tr>
            <tr>
              <td>00005</td>
              <td>Alan Cain</td>
              <td>042 Mylene Throughway</td>
              <td>14 Feb 2026</td>
              <td>Watch</td>
              <td></td>
            </tr>
            <tr>
              <td>00006</td>
              <td>Alfred Murray</td>
              <td>543 Weimann Mountain</td>
              <td>14 Feb 2026</td>
              <td>Medicine</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Piece</th>
              <th>Aviable Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
