export default function Consonants() {
  return (
    <table className="table_sticky">
      <tbody>
        <tr>
          <th rowSpan={2} />
          <th rowSpan={2}>
            labial/
            <br />
            labiodental
          </th>
          <th colSpan={2}>dental/alveolar</th>
          <th rowSpan={2}>
            postalveolar/
            <br />
            palatal
          </th>
          <th rowSpan={2}>velar</th>
        </tr>
        <tr>
          <th>hard</th>
          <th>soft</th>
        </tr>
        <tr>
          <th>Voiceles stops</th>
          <td>
            <b>p</b> [p]
          </td>
          <td>
            <b>t</b> [t]
          </td>
          <td>
            <b>
              <font color="gray">t́</font>
            </b>
            <font color="gray">[tʲ] ~ [c]</font>
          </td>
          <td />
          <td>
            <b>k</b> [k]
          </td>
        </tr>
        <tr>
          <th>Voiced stops</th>
          <td>
            <b>b</b> [b]
          </td>
          <td>
            <b>d</b> [d]
          </td>
          <td>
            <b>
              <font color="gray">d́</font>
            </b>
            <font color="gray">[dʲ] ~ [ɟ]</font>
          </td>
          <td />
          <td>
            <b>g</b> [g]
          </td>
        </tr>
        <tr>
          <th>Voiceless fricatives</th>
          <td>
            <b>f</b> [f]
          </td>
          <td>
            <b>s</b> [s]
          </td>
          <td>
            <b>
              <font color="gray">ś</font>
            </b>
            <font color="gray"> [sʲ] ~ [ɕ]</font>
          </td>
          <td>
            <b>š</b> [ʃ] ~ [ʂ]
          </td>
          <td>
            <b>h</b> [x]
          </td>
        </tr>
        <tr>
          <th>Voiced fricatives</th>
          <td>
            <b>v</b> [v]
          </td>
          <td>
            <b>z</b> [z]
          </td>
          <td>
            <b>
              <font color="gray">ź</font>
            </b>
            <font color="gray"> [zʲ] ~ [ʑ]</font>
          </td>
          <td>
            <b>ž</b> [ʒ] ~ [ʐ]
          </td>
          <td />
        </tr>
        <tr>
          <th>Voiceless affricates</th>
          <td />
          <td>
            <b>c</b> [t͡s]
          </td>
          <td>
            <b>
              <font color="gray">ć</font>
            </b>
            <font color="gray">[t͡ɕ]</font>
          </td>
          <td>
            <b>č</b> [t͡ʃ] ~ [t͡ʂ]
          </td>
          <td />
        </tr>
        <tr>
          <th>Voiced affricates</th> <td /> <td />
          <td>
            <b>
              <font color="gray">đ</font>
            </b>
            <font color="gray">[d͡ʑ]</font>
          </td>
          <td>
            <b>dž</b> [d͡ʒ] ~ [d͡ʐ]
          </td>
          <td />
        </tr>
        <tr>
          <th>Trills</th> <td />
          <td>
            <b>r</b> [r]
          </td>
          <td>
            <b>
              <font color="gray">ŕ</font>
            </b>
            <font color="gray"> [rʲ] ~ [r̝]</font>
          </td>
          <td /> <td />
        </tr>
        <tr>
          <th>Nasals</th>
          <td>
            <b>m</b> [m]
          </td>
          <td>
            <b>n</b> [n]
          </td>
          <td />
          <td>
            <b>nj</b> [nʲ] ~ [ɲ]
          </td>
          <td />
        </tr>
        <tr>
          <th>Laterals</th> <td />
          <td>
            <b>l</b> [ɫ] ~ [l]
          </td>
          <td />
          <td>
            <b>lj</b> [l] ~ [ʎ]
          </td>
          <td />
        </tr>
        <tr>
          <th>Approximants</th> <td /> <td /> <td />
          <td>
            <b>j</b> [j]
          </td>
          <td />
        </tr>
      </tbody>
    </table>
  )
}