import React from 'react'
import styles from "./Keyboard.module.css";



function KeyText({ color, alt, shift, children }) {
    const x = alt ? 36.734 : 16.734;
    const y = shift ? 43.267 : 63.267;

    return (
        <text
            color={ color }
            style={{ whiteSpace: "pre" }}
            fontFamily="Open Sans"
            fontSize="11"
            fontWeight="600"
            letterSpacing="0em"
        >
            <tspan x={x} y={y}>
                {children}
            </tspan>
        </text>
    )
}

function Key ({ base, alt, shift, altShift, keyX, keyY }) {
    
    return (
        <g>
            <rect
                width="41"
                height="41"
                x={keyX}
                y={keyY}
                fill="#fff"
                stroke="#646464"
                rx="2.5"
            ></rect>
            <KeyText color="#671584" alt={true} shift={true}>{base}</KeyText>
            <KeyText color="#671584" alt>{alt}</KeyText>
            <KeyText color="#671584" shift>{shift}</KeyText>
            <KeyText color="#671584">{altShift}</KeyText>
        </g>
    )
}

export default function Keyboard() {
    
    const base = "qwertyuiop";
    const alt = "qwertyuiop[]";
    const shift = "QWERTYUIOP{}";
    const altShift = "QWERTYUIOP{}";

return (
    <>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="718"
            height="274"
            fill="none"
            viewBox="0 0 718 274"
        >
            <path fill="#E5E5E5" d="M0 0H718V274H0z"></path>
            <g clipPath="url(#clip0_358_2616)">
                <path
                    fill="#fff"
                    d="M0 0H1233V1248H0z"
                    transform="translate(-61 -243)"
                ></path>
                <g>
                    <rect
                        width="716"
                        height="272"
                        x="1"
                        y="1"
                        stroke="#777"
                        rx="8"
                    ></rect>
                        <g>
                            <g>
                                <Key base={base[0]} alt={alt[0]} shift={shift[0]} altShift={altShift[0]} keyX="9.5" keyY="28.5" />
                                <Key base={base[1]} alt={alt[1]} shift={shift[1]} altShift={altShift[1]} keyX="57.5" keyY="28.5" />
                                <Key base={base[2]} alt={alt[2]} shift={shift[2]} altShift={altShift[2]} keyX="105.5" keyY="28.5" />
                                <Key base={base[3]} alt={alt[3]} shift={shift[3]} altShift={altShift[3]} keyX="153.5" keyY="28.5" />
                            </g>
                        </g>
                        <g></g>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_358_2616">
                    <path
                    fill="#fff"
                    d="M0 0H1233V1248H0z"
                    transform="translate(-61 -243)"
                    ></path>
                </clipPath>
            </defs>
        </svg>
        
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="718"
      height="274"
      fill="none"
      viewBox="0 0 718 274"
    >
      <path fill="#E5E5E5" d="M0 0H718V274H0z"></path>
      <g clipPath="url(#clip0_358_2616)">
        <path
          fill="#fff"
          d="M0 0H1233V1248H0z"
          transform="translate(-61 -243)"
        ></path>
        <g>
          <rect
            width="716"
            height="272"
            x="1"
            y="1"
            stroke="#777"
            rx="8"
          ></rect>
          <g>
            <g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="9.5"
                  y="28.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="36.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="36.734" y="63.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="16.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="16.734" y="63.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="57.5"
                  y="28.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="84.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="84.734" y="63.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="64.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="64.734" y="63.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="105.5"
                  y="28.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="132.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="132.734" y="63.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="112.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="112.734" y="63.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="153.5"
                  y="28.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="180.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="180.734" y="63.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="160.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="160.734" y="63.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="201.5"
                  y="28.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="228.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="228.734" y="63.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="208.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="208.734" y="63.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="249.5"
                  y="28.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="276.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="276.734" y="63.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="256.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="256.734" y="63.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="297.5"
                  y="28.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="324.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="324.734" y="63.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="304.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="304.734" y="63.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="345.5"
                  y="28.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="372.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="372.734" y="63.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="352.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="352.734" y="63.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="393.5"
                  y="28.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="420.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="420.734" y="63.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="400.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="400.734" y="63.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="441.5"
                  y="28.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="468.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="468.734" y="63.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="448.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="448.734" y="63.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="489.5"
                  y="28.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="516.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="516.734" y="63.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="496.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="496.734" y="63.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="537.5"
                  y="28.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="564.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="564.734" y="63.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="544.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="544.734" y="63.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="585.5"
                  y="28.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="612.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="612.734" y="63.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="592.734" y="43.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="592.734" y="63.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="75"
                  height="41"
                  x="633.5"
                  y="28.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#646464"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Roboto"
                  fontSize="10"
                  fontWeight="500"
                  letterSpacing="0em"
                >
                  <tspan x="650.797" y="52.418">
                    backspace
                  </tspan>
                </text>
              </g>
            </g>
            <g>
              <g>
                <rect
                  width="75"
                  height="41"
                  x="9.5"
                  y="76.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#646464"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Roboto"
                  fontSize="10"
                  fontWeight="500"
                  letterSpacing="0em"
                >
                  <tspan x="27" y="100.418">
                    tab
                  </tspan>
                </text>
                <circle cx="19" cy="97" r="2" fill="#DADADA"></circle>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="91.5"
                  y="76.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="118.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="118.734" y="111.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="98.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="98.734" y="111.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="139.5"
                  y="76.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="166.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="166.734" y="111.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="146.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="146.734" y="111.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="187.5"
                  y="76.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="214.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="214.734" y="111.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="194.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="194.734" y="111.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="235.5"
                  y="76.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="262.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="262.734" y="111.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="242.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="242.734" y="111.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="283.5"
                  y="76.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="310.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="310.734" y="111.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="290.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="290.734" y="111.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="331.5"
                  y="76.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="358.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="358.734" y="111.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="338.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="338.734" y="111.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="379.5"
                  y="76.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="406.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="406.734" y="111.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="386.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="386.734" y="111.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="427.5"
                  y="76.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="454.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="454.734" y="111.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="434.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="434.734" y="111.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="475.5"
                  y="76.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="502.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="502.734" y="111.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="482.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="482.734" y="111.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="523.5"
                  y="76.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="550.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="550.734" y="111.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="530.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="530.734" y="111.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="571.5"
                  y="76.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="598.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="598.734" y="111.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="578.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="578.734" y="111.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="619.5"
                  y="76.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="646.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="646.734" y="111.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="626.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="626.734" y="111.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="667.5"
                  y="76.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="694.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="694.734" y="111.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="674.734" y="91.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="674.734" y="111.267">
                    ◌
                  </tspan>
                </text>
              </g>
            </g>
            <g>
              <g>
                <rect
                  width="89"
                  height="41"
                  x="9.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#646464"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Roboto"
                  fontSize="10"
                  fontWeight="500"
                  letterSpacing="0em"
                >
                  <tspan x="27" y="150.418">
                    caps lock
                  </tspan>
                </text>
                <circle cx="19" cy="147" r="2" fill="#DADADA"></circle>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="105.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="132.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="132.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="112.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="112.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="153.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="180.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="180.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="160.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="160.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="201.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="228.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="228.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="208.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="208.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="249.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="276.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="276.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="256.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="256.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="297.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="324.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="324.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="304.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="304.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="345.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="372.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="372.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="352.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="352.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="393.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="420.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="420.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="400.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="400.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="441.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="468.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="468.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="448.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="448.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="489.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="516.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="516.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="496.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="496.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="537.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="564.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="564.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="544.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="544.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="585.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="612.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="612.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="592.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="592.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="75"
                  height="41"
                  x="633.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#646464"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Roboto"
                  fontSize="10"
                  fontWeight="500"
                  letterSpacing="0em"
                >
                  <tspan x="675.846" y="150.418">
                    enter
                  </tspan>
                </text>
              </g>
            </g>
            <g>
              <g>
                <rect
                  width="113"
                  height="41"
                  x="9.5"
                  y="174.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#646464"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Roboto"
                  fontSize="10"
                  fontWeight="500"
                  letterSpacing="0em"
                >
                  <tspan x="27" y="198.418">
                    shift
                  </tspan>
                </text>
                <circle cx="19" cy="195" r="2" fill="#DADADA"></circle>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="129.5"
                  y="174.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="156.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="156.734" y="209.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="136.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="136.734" y="209.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="177.5"
                  y="174.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="204.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="204.734" y="209.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="184.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="184.734" y="209.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="225.5"
                  y="174.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="252.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="252.734" y="209.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="232.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="232.734" y="209.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="273.5"
                  y="174.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="300.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="300.734" y="209.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="280.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="280.734" y="209.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="321.5"
                  y="174.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="348.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="348.734" y="209.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="328.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="328.734" y="209.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="369.5"
                  y="174.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="396.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="396.734" y="209.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="376.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="376.734" y="209.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="417.5"
                  y="174.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="444.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="444.734" y="209.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="424.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="424.734" y="209.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="465.5"
                  y="174.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="492.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="492.734" y="209.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="472.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="472.734" y="209.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="513.5"
                  y="174.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="540.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="540.734" y="209.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="520.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="520.734" y="209.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="561.5"
                  y="174.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="588.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="588.734" y="209.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="568.734" y="189.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="568.734" y="209.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="99"
                  height="41"
                  x="609.5"
                  y="174.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#646464"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Roboto"
                  fontSize="10"
                  fontWeight="500"
                  letterSpacing="0em"
                >
                  <tspan x="678.883" y="198.418">
                    shift
                  </tspan>
                </text>
              </g>
            </g>
            <g>
              <g>
                <rect
                  width="102"
                  height="41"
                  x="9.5"
                  y="224.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#646464"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Roboto"
                  fontSize="10"
                  fontWeight="500"
                  letterSpacing="0em"
                >
                  <tspan x="27" y="248.418">
                    ctrl
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="92"
                  height="41"
                  x="118.5"
                  y="224.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#646464"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Roboto"
                  fontSize="10"
                  fontWeight="500"
                  letterSpacing="0em"
                >
                  <tspan x="136" y="248.418">
                    alt
                  </tspan>
                </text>
                <circle cx="128" cy="245" r="2" fill="#DADADA"></circle>
              </g>
              <g>
                <rect
                  width="238"
                  height="41"
                  x="217.5"
                  y="224.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
              </g>
              <g>
                <rect
                  width="44"
                  height="41"
                  x="462.5"
                  y="224.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#646464"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Roboto"
                  fontSize="10"
                  fontWeight="500"
                  letterSpacing="0em"
                >
                  <tspan x="478.865" y="248.418">
                    alt
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="44"
                  height="41"
                  x="513.5"
                  y="224.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#646464"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Roboto"
                  fontSize="10"
                  fontWeight="500"
                  letterSpacing="0em"
                >
                  <tspan x="528.181" y="248.418">
                    ctrl
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="44"
                  height="21"
                  x="564.5"
                  y="245.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <rect
                  width="44"
                  height="21"
                  x="662.5"
                  y="245.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <g>
                  <mask id="path-264-inside-1_358_2616" fill="#fff">
                    <path
                      fillRule="evenodd"
                      d="M615.94 224a2.94 2.94 0 00-2.94 2.94v37.12a2.94 2.94 0 002.94 2.94h39.12a2.94 2.94 0 002.94-2.94v-37.12a2.94 2.94 0 00-2.94-2.94h-39.12z"
                      clipRule="evenodd"
                    ></path>
                  </mask>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M615.94 224a2.94 2.94 0 00-2.94 2.94v37.12a2.94 2.94 0 002.94 2.94h39.12a2.94 2.94 0 002.94-2.94v-37.12a2.94 2.94 0 00-2.94-2.94h-39.12z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#646464"
                    d="M613 246h-1 1zm0 18.06h1-1zM658 245h1-1zm0-18.06h-1 1zm-44 0a1.94 1.94 0 011.94-1.94v-2a3.94 3.94 0 00-3.94 3.94h2zm0 19.06v-19.06h-2V246h2zm0 18.06V246h-2v18.06h2zm1.94 1.94a1.94 1.94 0 01-1.94-1.94h-2a3.94 3.94 0 003.94 3.94v-2zm39.12 0h-39.12v2h39.12v-2zm1.94-1.94a1.94 1.94 0 01-1.94 1.94v2a3.94 3.94 0 003.94-3.94h-2zm0-19.06v19.06h2V245h-2zm0-18.06V245h2v-18.06h-2zm-1.94-1.94a1.94 1.94 0 011.94 1.94h2a3.94 3.94 0 00-3.94-3.94v2zm-39.12 0h39.12v-2h-39.12v2z"
                    mask="url(#path-264-inside-1_358_2616)"
                  ></path>
                </g>
                <path stroke="#646464" d="M614 245h43"></path>
                <path fill="#646464" d="M589 258v-5l-5 2.5 5 2.5z"></path>
                <path fill="#646464" d="M685 258v-5l5 2.5-5 2.5z"></path>
                <path fill="#646464" d="M634 253h5l-2.5 5-2.5-5z"></path>
                <path fill="#646464" d="M634 238h5l-2.5-5-2.5 5z"></path>
              </g>
            </g>
            <g>
              <g>
                <rect
                  width="89"
                  height="41"
                  x="9.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#646464"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Roboto"
                  fontSize="10"
                  fontWeight="500"
                  letterSpacing="0em"
                >
                  <tspan x="27" y="150.418">
                    caps lock
                  </tspan>
                </text>
                <circle cx="19" cy="147" r="2" fill="#DADADA"></circle>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="105.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="132.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="132.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="112.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="112.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="153.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="180.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="180.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="160.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="160.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="201.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="228.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="228.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="208.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="208.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="249.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="276.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="276.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="256.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="256.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="297.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="324.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="324.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="304.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="304.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="345.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="372.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="372.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="352.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="352.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="393.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="420.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="420.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="400.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="400.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="441.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="468.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="468.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="448.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="448.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="489.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="516.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="516.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="496.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="496.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="537.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="564.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="564.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="544.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="544.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="41"
                  height="41"
                  x="585.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#671584"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="612.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#337093"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="612.734" y="161.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#8E4040"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="592.734" y="141.267">
                    ◌
                  </tspan>
                </text>
                <text
                  fill="#444"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Open Sans"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="592.734" y="161.267">
                    ◌
                  </tspan>
                </text>
              </g>
              <g>
                <rect
                  width="75"
                  height="41"
                  x="633.5"
                  y="126.5"
                  fill="#fff"
                  stroke="#646464"
                  rx="2.5"
                ></rect>
                <text
                  fill="#646464"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Roboto"
                  fontSize="10"
                  fontWeight="500"
                  letterSpacing="0em"
                >
                  <tspan x="675.846" y="150.418">
                    enter
                  </tspan>
                </text>
              </g>
            </g>
          </g>
          <g>
            <g>
              <circle
                cx="497.5"
                cy="13.5"
                r="3"
                fill="#000"
                fillOpacity="0.1"
                stroke="#293D2D"
              ></circle>
              <text
                fill="#333"
                xmlSpace="preserve"
                style={{ whiteSpace: "pre" }}
                fontFamily="Roboto"
                fontSize="9"
                fontWeight="bold"
                letterSpacing=".225em"
              >
                <tspan x="484" y="17.076">
                  0
                </tspan>
              </text>
            </g>
            <g>
              <g>
                <circle cx="520.5" cy="13.5" r="3.5" fill="#4C93C6"></circle>
                <circle
                  cx="520.5"
                  cy="13.5"
                  r="3"
                  stroke="#000"
                  strokeOpacity="0.1"
                ></circle>
              </g>
              <text
                fill="#333"
                xmlSpace="preserve"
                style={{ whiteSpace: "pre" }}
                fontFamily="Roboto"
                fontSize="9"
                fontWeight="bold"
                letterSpacing=".225em"
              >
                <tspan x="507" y="17.076">
                  1
                </tspan>
              </text>
            </g>
            <g>
              <circle
                cx="543.5"
                cy="13.5"
                r="3"
                fill="#000"
                fillOpacity="0.1"
                stroke="#293D2D"
              ></circle>
              <text
                fill="#333"
                xmlSpace="preserve"
                style={{ whiteSpace: "pre" }}
                fontFamily="Roboto"
                fontSize="9"
                fontWeight="bold"
                letterSpacing=".225em"
              >
                <tspan x="530" y="17.076">
                  2
                </tspan>
              </text>
            </g>
            <g>
              <circle
                cx="566.5"
                cy="13.5"
                r="3"
                fill="#000"
                fillOpacity="0.1"
                stroke="#293D2D"
              ></circle>
              <text
                fill="#333"
                xmlSpace="preserve"
                style={{ whiteSpace: "pre" }}
                fontFamily="Roboto"
                fontSize="9"
                fontWeight="bold"
                letterSpacing=".225em"
              >
                <tspan x="553" y="17.076">
                  3
                </tspan>
              </text>
            </g>
            <g>
              <circle
                cx="589.5"
                cy="13.5"
                r="3"
                fill="#000"
                fillOpacity="0.1"
                stroke="#293D2D"
              ></circle>
              <text
                fill="#333"
                xmlSpace="preserve"
                style={{ whiteSpace: "pre" }}
                fontFamily="Roboto"
                fontSize="9"
                fontWeight="bold"
                letterSpacing=".225em"
              >
                <tspan x="576" y="17.076">
                  4
                </tspan>
              </text>
            </g>
            <g>
              <circle
                cx="613.5"
                cy="13.5"
                r="3"
                fill="#000"
                fillOpacity="0.1"
                stroke="#293D2D"
              ></circle>
              <text
                fill="#333"
                xmlSpace="preserve"
                style={{ whiteSpace: "pre" }}
                fontFamily="Roboto"
                fontSize="9"
                fontWeight="bold"
                letterSpacing=".225em"
              >
                <tspan x="599" y="17.076">
                  5
                </tspan>
              </text>
            </g>
            <g>
              <circle
                cx="637.5"
                cy="13.5"
                r="3"
                fill="#000"
                fillOpacity="0.1"
                stroke="#293D2D"
              ></circle>
              <text
                fill="#333"
                xmlSpace="preserve"
                style={{ whiteSpace: "pre" }}
                fontFamily="Roboto"
                fontSize="9"
                fontWeight="bold"
                letterSpacing=".225em"
              >
                <tspan x="623" y="17.076">
                  6
                </tspan>
              </text>
            </g>
            <g>
              <circle
                cx="660.5"
                cy="13.5"
                r="3"
                fill="#000"
                fillOpacity="0.1"
                stroke="#293D2D"
              ></circle>
              <text
                fill="#333"
                xmlSpace="preserve"
                style={{ whiteSpace: "pre" }}
                fontFamily="Roboto"
                fontSize="9"
                fontWeight="bold"
                letterSpacing=".225em"
              >
                <tspan x="647" y="17.076">
                  7
                </tspan>
              </text>
            </g>
            <g>
              <circle
                cx="683.5"
                cy="13.5"
                r="3"
                fill="#000"
                fillOpacity="0.1"
                stroke="#293D2D"
              ></circle>
              <text
                fill="#333"
                xmlSpace="preserve"
                style={{ whiteSpace: "pre" }}
                fontFamily="Roboto"
                fontSize="9"
                fontWeight="bold"
                letterSpacing=".225em"
              >
                <tspan x="670" y="17.076">
                  8
                </tspan>
              </text>
            </g>
            <g>
              <circle
                cx="706.5"
                cy="13.5"
                r="3"
                fill="#000"
                fillOpacity="0.1"
                stroke="#293D2D"
              ></circle>
              <text
                fill="#333"
                xmlSpace="preserve"
                style={{ whiteSpace: "pre" }}
                fontFamily="Roboto"
                fontSize="9"
                fontWeight="bold"
                letterSpacing=".225em"
              >
                <tspan x="693" y="17.076">
                  9
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_358_2616">
          <path
            fill="#fff"
            d="M0 0H1233V1248H0z"
            transform="translate(-61 -243)"
          ></path>
        </clipPath>
      </defs>
        </svg>
    </>
)
}
