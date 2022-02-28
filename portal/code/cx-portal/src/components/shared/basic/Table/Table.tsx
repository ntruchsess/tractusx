import './Table.css'

export const Table = ({ data }: any) => (
  <table>
    {data.columns ? (
      <thead>
        {data.columns.map((c: string) => (
          <th>{c}</th>
        ))}
      </thead>
    ) : (
      ''
    )}
    {data.rows ? (
      <tbody>
        {data.rows.map((r: []) => (
          <tr>
            {r.map((c) => (
              <td>{c}</td>
            ))}
          </tr>
        ))}
      </tbody>
    ) : (
      ''
    )}
  </table>
)
