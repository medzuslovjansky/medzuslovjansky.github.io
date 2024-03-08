export function Cell(props) {
  const { children = '—' } = props;
  return <td {...props} lang="art-x-interslv">{children}</td>
}

export function CodeCell(props) {
  const { children = '—' } = props;
  return <td {...props}><code>{children}</code></td>
}
