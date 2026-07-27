import { TransliteratorElement as Isv } from "@site/src/components";

export default function Cardinals() {
  return (
    <table className="table_sticky">
      <thead>
        <tr>
          <th>0-9</th>
          <th>11-19 (<Isv>-nadset</Isv>)</th>
          <th>10-90 (<Isv>-deset</Isv>)</th>
          <th>100-900 (<Isv>-sto</Isv>/<Isv>-sot</Isv>)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Isv>nula</Isv> (0)</td>
          <td></td>
          <td><Isv>deset</Isv> (10)</td>
          <td><Isv>sto</Isv> (100)</td>
        </tr>
        <tr>
          <td><Isv>jedin</Isv>, <Isv>jedna</Isv>, <Isv>jedno</Isv> (1)</td>
          <td><Isv><strong>jedin</strong>nadset</Isv> (11)</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><Isv>dva</Isv>, <Isv>dvě</Isv> (2)</td>
          <td><Isv><strong>dva</strong>nadset</Isv> (12)</td>
          <td><Isv><strong>dva</strong>deset</Isv> (20)</td>
          <td><Isv><strong>dva</strong>sto</Isv>, <Isv><strong>dvě</strong>stě</Isv> (200)</td>
        </tr>
        <tr>
          <td><Isv>tri</Isv> (3)</td>
          <td><Isv><strong>tri</strong>nadset</Isv> (13)</td>
          <td><Isv><strong>tri</strong>deset</Isv> (30)</td>
          <td><Isv><strong>tri</strong>sto</Isv>, <Isv><strong>tri</strong>sta</Isv> (300)</td>
        </tr>
        <tr>
          <td><Isv>četyri</Isv> (4)</td>
          <td><Isv><strong>četyri</strong>nadset</Isv> (14)</td>
          <td><Isv><strong>četyri</strong>deset</Isv> (40)</td>
          <td><Isv><strong>četyri</strong>sto</Isv>, <Isv><strong>četyri</strong>sta</Isv> (400)</td>
        </tr>
        <tr>
          <td><Isv>pet</Isv> (5)</td>
          <td><Isv><strong>pet</strong>nadset</Isv> (15)</td>
          <td><Isv><strong>pet</strong>deset</Isv> (50)</td>
          <td><Isv><strong>pet</strong>sto</Isv>, <Isv><strong>pet</strong>sot</Isv> (500)</td>
        </tr>
        <tr>
          <td><Isv>šest</Isv> (6)</td>
          <td><Isv><strong>šest</strong>nadset</Isv> (16)</td>
          <td><Isv><strong>šest</strong>deset</Isv> (60)</td>
          <td><Isv><strong>šest</strong>sto</Isv>, <Isv><strong>šest</strong>sot</Isv> (600)</td>
        </tr>
        <tr>
          <td><Isv>sedm</Isv> (7)</td>
          <td><Isv><strong>sedm</strong>nadset</Isv> (17)</td>
          <td><Isv><strong>sedm</strong>deset</Isv> (70)</td>
          <td><Isv><strong>sedm</strong>sto</Isv>, <Isv><strong>sedm</strong>sot</Isv> (700)</td>
        </tr>
        <tr>
          <td><Isv>osm</Isv> (8)</td>
          <td><Isv><strong>osm</strong>nadset</Isv> (18)</td>
          <td><Isv><strong>osm</strong>deset</Isv> (80)</td>
          <td><Isv><strong>osm</strong>sto</Isv>, <Isv><strong>osm</strong>sot</Isv> (800)</td>
        </tr>
        <tr>
          <td><Isv>devet</Isv> (9)</td>
          <td><Isv><strong>devet</strong>nadset</Isv> (19)</td>
          <td><Isv><strong>devet</strong>deset</Isv> (90)</td>
          <td><Isv><strong>devet</strong>sto</Isv>, <Isv><strong>devet</strong>sot</Isv> (900)</td>
        </tr>
      </tbody>
    </table>
  );
}
