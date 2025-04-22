function PricingTable() {
  return (
    <>
      <div className="overflow-x-auto rounded-box shadow-md">
        <table className="table ">
          {/* head */}
          <thead className="bg-primary text-primary-content text-lg">
            <tr>
              <th>Registration Period</th>
              <th>Ends</th>
              <th>Competitor Price</th>
              <th>Guest Price</th>
            </tr>
          </thead>
          <tbody className="bg-base-100">
            {/* row 1 */}
            <tr className="bg-yellow-100">
              <th>Early Registration</th>
              <td>May 10th</td>
              <td>$35</td>
              <td>$25</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>General Registration</th>
              <td>June 8th</td>
              <td>$45</td>
              <td>$35</td>
            </tr>
            <tr>
              <th>Late Registration</th>
              <td>June 14th</td>
              <td>$55</td>
              <td>$45</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PricingTable;
