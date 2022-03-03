import './Table.css'

// simple table - just an example

export const Table = ({ data }: any) => (
  <table>
    {data.columns ? (
      <thead>
        {data.columns.map((col: string) => (
          <th key={`c${col}`}>{col}</th>
        ))}
      </thead>
    ) : (
      ''
    )}
    {data.rows ? (
      <tbody>
        {data.rows.map((row: [], r: number) => (
          <tr key={`r${r}`}>
            {row.map((col, c: number) => (
              <td key={`r${r}c${c}`}>{col}</td>
            ))}
          </tr>
        ))}
      </tbody>
    ) : (
      ''
    )}
  </table>
)
