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
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>Early Registration</th>
                            <td>March 15th</td>
                            <td>$35</td>
                            <td>$35</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                        <th>Early Registration</th>
                            <td>March 30th</td>
                            <td>$50</td>
                            <td>$40</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                        <th>Late Registration</th>
                            <td>March 1th</td>
                            <td>$60</td>
                            <td>$50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PricingTable;
