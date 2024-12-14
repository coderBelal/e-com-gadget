 
const OrdersCompleted = () => {
  const completedOrders = [
    {
      id: 1,
      customer: "Kabita Saha",
      items: "2x Mobile Phone, 1x Charger",
      total: "$450",
      date: "2024-12-10",
    },
    {
      id: 2,
      customer: "John Doe",
      items: "1x Laptop, 1x Mouse",
      total: "$1200",
      date: "2024-12-12",
    },
    {
      id: 3,
      customer: "Jane Smith",
      items: "1x Headphone",
      total: "$50",
      date: "2024-12-13",
    },
  ];

  return (
    <div className="p-6   min-h-screen">
      <h1 className="text-2xl text-white font-semibold mb-4">Completed Orders</h1>
      <div className="  shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className=" ">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium  text-white">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium  text-white">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium  text-white">
                Items
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium  text-white">
                Total
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium  text-white">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {completedOrders.map((order) => (
              <tr
                key={order.id}
                className="  hover:bg-gray-700  transition-colors duration-200"
              >
                <td className="px-6 py-4 text-sm text-white">{order.id}</td>
                <td className="px-6 py-4 text-sm  text-white">
                  {order.customer}
                </td>
                <td className="px-6 py-4 text-sm  text-white">
                  {order.items}
                </td>
                <td className="px-6 py-4 text-sm  text-white">
                  {order.total}
                </td>
                <td className="px-6 py-4 text-sm  text-white">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersCompleted;
