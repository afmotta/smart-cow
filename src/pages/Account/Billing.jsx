import { ArrowNarrowDownIcon, DocumentDownloadIcon } from "@heroicons/react/outline";

const data = [
  {
    id: "4571222f6rthswfg9981fr55",
    date: "7/12/2020",
    amount: "$28",
  },
  {
    id: "4571222f6rthswfg9981fr56",
    date: "7/12/2020",
    amount: "$36",
  },
  {
    id: "4571222f6rthswfg9981fr57",
    date: "7/12/2020",
    amount: "$14",
  },
];

export const Billing = () => {
  return (
    <table className='min-w-full divide-y divide-white'>
      <thead className='bg-white'>
        <tr>
          <th
            scope='col'
            className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-500'
          >
            REFERENCE ID
          </th>
          <th
            scope='col'
            className='px-3 py-3.5 text-left text-sm font-semibold text-gray-500 flex flex-row items-baseline'
          >
            DATE <ArrowNarrowDownIcon className="h-4 w-4" />
          </th>
          <th
            scope='col'
            className='px-3 py-3.5 text-left text-sm font-semibold text-gray-500'
          >
            AMOUNT
          </th>
          <th
            scope='col'
            className='px-3 py-3.5 text-left text-sm font-semibold text-gray-500'
          >
            INVOICE
          </th>
          <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
            <span className='sr-only'>Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className='bg-white'>
        {data.map((row) => (
          <tr key={row.id}>
            <td className='whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900'>
              {row.id}
            </td>
            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
              {row.date}
            </td>
            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
              {row.amount}
            </td>
            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 flex items-center'>
              <DocumentDownloadIcon className="h-8 w-8" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
