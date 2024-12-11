import fetchWithAuth from '../../utils/fetchWithAuth';

export default async function Dump() {
  let items = []; // Initialize items

    items = await fetchWithAuth('/dump');

  return (
    <>
      <h1 className="bg-red-500/80 p-4 text-white text-center">Student List</h1>

      <ul className="grid grid-cols-2 gap-4 p-4">
        {items.map((item) => (
          <li key={item.id} className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p>
              <strong>English Name:</strong> {item.english}
            </p>
            <p>
              <strong>National ID:</strong> {item.national_id}
            </p>
            <p>
              <strong>Birth Date:</strong> {item.birth_date || 'N/A'}
            </p>
            <p>
              <strong>Gender:</strong> {item.gender === 1 ? 'Male' : item.gender === 2 ? 'Female' : 'Unknown'}
            </p>
            <p>
              <strong>Student ID:</strong> {item.student_id}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
