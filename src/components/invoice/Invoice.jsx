export default function Invoice() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Invoice</h2>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p><b>Invoice From:</b></p>
          <p>Virginia Walker</p>
          <p>9694 Krajcik Locks Suite 635</p>
        </div>

        <div>
          <p><b>Invoice To:</b></p>
          <p>Austin Miller</p>
          <p>Brookview</p>
        </div>

        <div>
          <p>Invoice Date: 12 Nov 2026</p>
          <p>Due Date: 25 Dec 2026</p>
        </div>
      </div>

      <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Base Cost</th>
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Children Toy</td>
            <td>2</td>
            <td>$20</td>
            <td>$80</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Makeup</td>
            <td>2</td>
            <td>$50</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Asus Laptop</td>
            <td>5</td>
            <td>$100</td>
            <td>$500</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Iphone X</td>
            <td>4</td>
            <td>$1000</td>
            <td>$4000</td>
          </tr>
        </tbody>
      </table>

      <h3 style={{ textAlign: "right", marginTop: "10px" }}>
        Total = $4680
      </h3>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <button>Print</button>
        <button>Send</button>
      </div>
    </div>
  );
}