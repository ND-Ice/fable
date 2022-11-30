function RecentOrdersTable() {
  return (
    <>
      <header className="text-foot-note">Recent Orders</header>
      <div className="relative overflow-x-auto">
        <table className="text-gray-500 w-full text-left text-sm">
          <thead className="text-gray-700 bg-gray-50 text-xs uppercase">
            <tr>
              <th scope="col" className="py-3 px-6">
                Number
              </th>
              <th scope="col" className="py-3 px-6">
                Order
              </th>
              <th scope="col" className="py-3 px-6">
                Date
              </th>
              <th scope="col" className="py-3 px-6">
                Summary
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td
                scope="row"
                className="text-gray-900 whitespace-nowrap py-4 px-6 font-medium"
              >
                849234
              </td>
              <td className="py-4 px-6">
                Jacket KLS Black M, Trousers KLS Black M, Shirt KLS White M
              </td>
              <td className="py-4 px-6">20.09.2022</td>
              <td className="py-4 px-6">€180</td>
              <td className="py-4 px-6">Paid</td>
            </tr>
            <tr className="bg-white">
              <td
                scope="row"
                className="text-gray-900 whitespace-nowrap py-4 px-6 font-medium"
              >
                835012
              </td>
              <td className="py-4 px-6">
                Short KLS Graphite S, Jacket KLS Graphite M
              </td>
              <td className="py-4 px-6">03.11.2021</td>
              <td className="py-4 px-6">€340</td>
              <td className="py-4 px-6">Delivered</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default RecentOrdersTable;
