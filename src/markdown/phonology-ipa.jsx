import IPAChart from '@site/static/img/docs/ipa-chart.svg';

export default function PhonologyIPA() {
  return (
    <table
      style={{
        textAlign: "center",
        background: 'none',
        borderCollapse: 'collapse',
        verticalAlign: 'middle',
        emptyCells: 'hide',
        fontSize: '90%',
      }}
      cellSpacing="0px"
      cellPadding={0}
    >
      <tbody>
      <tr>
        <th className="leeg" style={{ background: "transparent" }} />
        <th style={{ width: 55 }}>Front</th>
        <th style={{ width: 55, wordSpacing: "-.3em" }}>Near- front</th>
        <th style={{ width: 55 }}>Central</th>
        <th style={{ width: 55, wordSpacing: "-.3em" }}>Near- back</th>
        <th style={{ width: 55 }}>Back</th>
      </tr>
      <tr>
        <th style={{ height: 30 }}>Close</th>
        <td style={{ height: 210, background: "white" }} colSpan={5} rowSpan={7}>
          <div style={{ position: "relative" }}>
            <IPAChart />
            <div
              style={{
                background: "transparent",
                position: "absolute",
                top: 0,
                left: 0
              }}
            >
              <table
                style={{
                  position: "relative",
                  width: 300,
                  height: 210,
                  textAlign: "center",
                  background: "transparent"
                }}
              >
                <tbody>
                <tr>
                  <td
                    style={{
                      width: 300,
                      height: 210,
                      textAlign: "center",
                      background: "transparent",
                      fontSize: "100%",
                      border: 0
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "5%",
                        width: "2.3em",
                        top: "2%",
                        background: "white"
                      }}
                    >
                      <b>i</b>&nbsp;[i]
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: "84%",
                        width: "2.3em",
                        top: "2%",
                        background: "white"
                      }}
                    >
                      <b>u</b>&nbsp;[u]
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: "84%",
                        width: "3.5em",
                        top: "11%",
                        background: "white"
                      }}
                    >
                      <b>
                        <font color="gray">ų</font>
                      </b>{" "}
                      <font color="gray">[ʊ]</font>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: "26%",
                        width: "2.33em",
                        top: "13%",
                        background: "white"
                      }}
                    >
                      <b>y</b>&nbsp;[ɪ]
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: "54%",
                        width: "3.5em",
                        top: "44%",
                        background: "white"
                      }}
                    >
                      <b>
                        <font color="gray">ė ȯ</font>
                      </b>
                      <font color="gray">&nbsp;[ə]</font>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: "28%",
                        width: "4.5em",
                        top: "58%",
                        background: "white"
                      }}
                    >
                      <b>e</b>&nbsp;[ɛ] <b>ě</b>&nbsp;[jɛ]
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: "86%",
                        width: "2.7em",
                        top: "58%",
                        background: "white"
                      }}
                    >
                      <b>o</b>&nbsp;[ɔ]
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: "39%",
                        width: "2.3em",
                        top: "73%",
                        background: "white"
                      }}
                    >
                      <b>
                        <font color="gray">ę</font>
                      </b>
                      &nbsp;<font color="gray">[jæ]</font>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: "55%",
                        width: "2.7em",
                        top: "86%",
                        background: "white"
                      }}
                    >
                      <b>a</b>&nbsp;[a]
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: "86%",
                        width: "2.7em",
                        top: "86%",
                        background: "white"
                      }}
                    >
                      <b>
                        <font color="gray">å</font>
                      </b>
                      &nbsp;<font color="gray">[ɒ]</font>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <th style={{ height: 30 }}>Near-close</th>
      </tr>
      <tr>
        <th style={{ height: 30 }}>Close-mid</th>
      </tr>
      <tr>
        <th style={{ height: 30 }}>Mid</th>
      </tr>
      <tr>
        <th style={{ height: 30 }}>Open-mid</th>
      </tr>
      <tr>
        <th style={{ height: 30 }}>Near-open</th>
      </tr>
      <tr>
        <th style={{ height: 30 }}>Open</th>
      </tr>
      </tbody>
    </table>
  );
}
