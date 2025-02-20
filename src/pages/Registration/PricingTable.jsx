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
                            <td>March 8th</td>
                            <td>$40</td>
                            <td>$30</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                        <th>General Registration</th>
                            <td>March 23rd</td>
                            <td>$50</td>
                            <td>$40</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                        <th>Late Registration</th>
                            <td>March 28th</td>
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
