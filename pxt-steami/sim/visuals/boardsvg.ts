namespace pxsim.visuals {
    export const BOARD_SVG = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   id="steami"
   version="1.1"
   viewBox="0 0 220.06459 316.30044"
   height="316.30045mm"
   width="220.06459mm"
   sodipodi:docname="board.svg"
   inkscape:version="1.3.1 (9b9bdc1480, 2023-11-25, custom)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:dc="http://purl.org/dc/elements/1.1/">
  <sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#111111"
     borderopacity="1"
     inkscape:showpageshadow="0"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="1"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     inkscape:zoom="2.0282951"
     inkscape:cx="205.34487"
     inkscape:cy="309.37313"
     inkscape:window-width="1860"
     inkscape:window-height="1011"
     inkscape:window-x="60"
     inkscape:window-y="32"
     inkscape:window-maximized="1"
     inkscape:current-layer="screen_showcase" />
  <style
     id="style1">
   svg.sim { margin-bottom:1em; } 
   svg.sim.grayscale { 
      -moz-filter: grayscale(1); 
      -webkit-filter: grayscale(1); 
      filter: grayscale(1); } 
   
   .sim-button { pointer-events: none; } 
   .sim-button-outer:hover { stroke:grey; stroke-width: 3px; } 
   
   .sim-pin:hover { stroke:#D4AF37; stroke-width:2px; } 
   .sim-pin-touch.touched:hover { stroke:darkorange; } 
   
   .sim-led-back:hover { stroke:#a0a0a0; stroke-width:3px; } 
   .sim-led:hover { stroke:#ff7f7f; stroke-width:3px; } 
   
   .sim-systemled { fill:#333; stroke:#555; stroke-width: 1px; } 
   
   .sim-light-level-button { stroke:#fff; stroke-width: 3px; } 
   
   .sim-antenna { stroke:#555; stroke-width: 2px; } 
   
   .sim-text { 
      font-family:&quot;
      Lucida Console&quot;
      , Monaco, monospace; 
      font-size:25px; fill:#fff
      ; pointer-events: none; } 
   .sim-text-pin { 
      font-family:&quot;
      Lucida Console&quot;
      , Monaco, monospace;
       font-size:20px;
        fill:#fff;
         pointer-events: none; }
   .sim-thermometer { stroke:#aaa; stroke-width: 3px; } 
   
   /* animations */ 
   .sim-flash { 
      animation-name: sim-flash-animation; 
      animation-duration: 0.1s; 
   } 

   @keyframes sim-flash-animation { 
      from { fill: yellow; } 
      to { fill: default; } 
   } 

   .sim-flash-stroke { 
      animation-name: sim-flash-stroke-animation; 
      animation-duration: 0.4s; 
      animation-timing-function: ease-in; 
   } 

   @keyframes sim-flash-stroke-animation { 
      from { 
         stroke: yellow; 
      } 
      to { 
         stroke: default; 
      } 
   }
  </style>
  <defs
     id="defs7001">
    <marker
       style="overflow:visible"
       id="marker33752"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       markerWidth="2"
       markerHeight="2"
       viewBox="0 0 5.3244081 6.1553851"
       preserveAspectRatio="xMidYMid">
      <path
         transform="scale(0.5)"
         style="fill:context-stroke;fill-rule:evenodd;stroke:context-stroke;stroke-width:1pt"
         d="M 5.77,0 -2.88,5 V -5 Z"
         id="path33750" />
    </marker>
    <marker
       style="overflow:visible"
       id="TriangleStart"
       refX="0"
       refY="0"
       orient="auto-start-reverse"
       markerWidth="2"
       markerHeight="2"
       viewBox="0 0 5.3244081 6.1553851"
       preserveAspectRatio="xMidYMid">
      <path
         transform="scale(0.5)"
         style="fill:context-stroke;fill-rule:evenodd;stroke:context-stroke;stroke-width:1pt"
         d="M 5.77,0 -2.88,5 V -5 Z"
         id="path135" />
    </marker>
    <filter
       height="1.080566"
       y="-0.040251784"
       width="1.1485966"
       x="-0.07424071"
       id="filter9604"
       style="color-interpolation-filters:sRGB">
      <feGaussianBlur
         id="feGaussianBlur9606"
         stdDeviation="0.68192124" />
    </filter>
    <linearGradient
       id="linearGradient23785">
      <stop
         style="stop-color:#ffcc00;stop-opacity:1"
         offset="0"
         id="stop23787" />
      <stop
         style="stop-color:#c8ab37;stop-opacity:0;"
         offset="1"
         id="stop23789" />
    </linearGradient>
    <radialGradient
       r="249.35139"
       fy="503.09894"
       fx="132.58411"
       cy="503.09894"
       cx="132.58411"
       gradientTransform="matrix(0.66043213,-0.03125341,0.00703061,0.14871379,-4.2689633,221.75568)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient12353"
       xlink:href="#linearGradient10704" />
    <linearGradient
       id="linearGradient10704">
      <stop
         style="stop-color:#d4aa00;stop-opacity:1"
         offset="0"
         id="stop10706" />
      <stop
         style="stop-color:#d3b12c;stop-opacity:1"
         offset="1"
         id="stop10708" />
    </linearGradient>
    <radialGradient
       r="249.35139"
       fy="503.09894"
       fx="132.58411"
       cy="503.09894"
       cx="132.58411"
       gradientTransform="matrix(0.66043213,-0.03125341,0.00703061,0.14871379,-4.2689633,221.75568)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient12355"
       xlink:href="#linearGradient10704" />
    <radialGradient
       r="249.35139"
       fy="503.09894"
       fx="132.58411"
       cy="503.09894"
       cx="132.58411"
       gradientTransform="matrix(0.66043213,-0.03125341,0.00703061,0.14871379,-4.26896,221.75567)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient12359"
       xlink:href="#linearGradient23785" />
    <linearGradient
       gradientTransform="rotate(90,66.526448,186.74179)"
       xlink:href="#linearGradient10704"
       id="linearGradient10716"
       gradientUnits="userSpaceOnUse"
       x1="171.6794"
       y1="223.3912"
       x2="150.93372"
       y2="223.30081" />
    <linearGradient
       id="linearGradient10710">
      <stop
         style="stop-color:#ffe680;stop-opacity:1"
         offset="0"
         id="stop10712" />
      <stop
         style="stop-color:#d4aa00;stop-opacity:1"
         offset="1"
         id="stop10714" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient10704"
       id="linearGradient10806"
       gradientUnits="userSpaceOnUse"
       x1="171.6794"
       y1="223.3912"
       x2="150.93372"
       y2="223.30081"
       gradientTransform="rotate(90,47.583717,167.79906)" />
    <linearGradient
       xlink:href="#linearGradient10710"
       id="linearGradient10808"
       gradientUnits="userSpaceOnUse"
       gradientTransform="rotate(90,36.128205,154.93306)"
       x1="-215.44655"
       y1="128.35896"
       x2="-211.76324"
       y2="132.42793" />
    <linearGradient
       id="linearGradient24437">
      <stop
         id="stop24439"
         offset="0"
         style="stop-color:#ffff00;stop-opacity:0" />
      <stop
         style="stop-color:#ffdd55;stop-opacity:1"
         offset="0.25231078"
         id="stop24441" />
      <stop
         id="stop24443"
         offset="1"
         style="stop-color:#ffdd55;stop-opacity:0" />
    </linearGradient>
    <linearGradient
       id="linearGradient24361">
      <stop
         style="stop-color:#ffff00;stop-opacity:0"
         offset="0"
         id="stop24363" />
      <stop
         id="stop24369"
         offset="0.55225623"
         style="stop-color:#ffdd55;stop-opacity:1" />
      <stop
         style="stop-color:#ffdd55;stop-opacity:0"
         offset="1"
         id="stop24365" />
    </linearGradient>
    <linearGradient
       id="linearGradient22993">
      <stop
         style="stop-color:#808080;stop-opacity:1;"
         offset="0"
         id="stop22995" />
      <stop
         style="stop-color:#8c8c8c;stop-opacity:1"
         offset="1"
         id="stop22997" />
    </linearGradient>
    <linearGradient
       id="linearGradient23003">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop23005" />
      <stop
         style="stop-color:#ffffff;stop-opacity:0;"
         offset="1"
         id="stop23007" />
    </linearGradient>
    <linearGradient
       id="linearGradient23519">
      <stop
         id="stop23521"
         offset="0"
         style="stop-color:#cccccc;stop-opacity:1" />
      <stop
         id="stop23523"
         offset="1"
         style="stop-color:#8c8c8c;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       id="linearGradient24549">
      <stop
         id="stop24551"
         offset="0"
         style="stop-color:#ffffff;stop-opacity:1" />
      <stop
         style="stop-color:#adadad;stop-opacity:0.6;"
         offset="0.69260091"
         id="stop24555" />
      <stop
         id="stop24553"
         offset="1"
         style="stop-color:#333333;stop-opacity:0;" />
    </linearGradient>
    <linearGradient
       id="linearGradient24179">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop24181" />
      <stop
         style="stop-color:#000000;stop-opacity:0;"
         offset="1"
         id="stop24183" />
    </linearGradient>
    <linearGradient
       id="linearGradient24275">
      <stop
         style="stop-color:#333333;stop-opacity:1;"
         offset="0"
         id="stop24277" />
      <stop
         style="stop-color:#333333;stop-opacity:0;"
         offset="1"
         id="stop24279" />
    </linearGradient>
    <linearGradient
       id="linearGradient24539">
      <stop
         style="stop-color:#ffd5d5;stop-opacity:1"
         offset="0"
         id="stop24541" />
      <stop
         style="stop-color:#cccccc;stop-opacity:0;"
         offset="1"
         id="stop24543" />
    </linearGradient>
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient3637"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient3645"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient3679"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient3735"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient3743"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient3777"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient3833"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient3841"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient3875"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient3931"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient3939"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient3973"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient4029"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient4037"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient4071"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient4127"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient4135"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient4169"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient4225"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient4233"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient4267"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient4323"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient4331"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient4365"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient4421"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient4429"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient4463"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient4519"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient4527"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient4561"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient4617"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient4625"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient4659"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient4715"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient4723"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient4757"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient4813"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient4821"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient4855"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient4911"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient4919"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient4953"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient5009"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient5017"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient5051"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient5107"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient5115"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient5149"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient5205"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient5213"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient5247"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient5303"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient5311"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient5345"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient5401"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient5409"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient5443"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient5499"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient5507"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient5541"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient5597"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient5605"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient5639"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient5695"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient5703"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient5737"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient5793"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient5801"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient5835"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient5891"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient5899"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient5933"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <radialGradient
       xlink:href="#linearGradient23519"
       id="radialGradient5989"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.042022,-1.0083526,0.95442073,-1.0005399,40.179297,-1601.671)"
       cx="-290.16394"
       cy="-654.83032"
       fx="-290.16394"
       fy="-654.83032"
       r="4.6559095" />
    <radialGradient
       xlink:href="#linearGradient24549"
       id="radialGradient5997"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.7323378,3.7815376e-7,-2.6301646e-7,-2.3126096,901.4922,-2170.3816)"
       cx="241.00996"
       cy="-655.03149"
       fx="241.00996"
       fy="-655.03149"
       r="4.0617666" />
    <radialGradient
       xlink:href="#linearGradient24539"
       id="radialGradient6031"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.69969957,0.31804293,-0.27726489,-0.60998698,-259.33399,1138.6771)"
       cx="-265.55276"
       cy="655.29767"
       fx="-265.55276"
       fy="655.29767"
       r="18.04899" />
    <linearGradient
       xlink:href="#linearGradient7162"
       id="linearGradient7160"
       x1="221.32861"
       y1="86.331848"
       x2="221.31621"
       y2="85.812134"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.8,0,0,0.8,-153.17985,187.12018)" />
    <linearGradient
       id="linearGradient7162">
      <stop
         style="stop-color:#999999;stop-opacity:1"
         offset="0"
         id="stop7164" />
      <stop
         style="stop-color:#666666;stop-opacity:1"
         offset="1"
         id="stop7166" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient22703"
       id="linearGradient14874"
       gradientUnits="userSpaceOnUse"
       x1="489.07578"
       y1="252.94917"
       x2="489.07578"
       y2="254.40347"
       gradientTransform="matrix(0.28222222,0,0,0.28222222,-120.89059,202.50615)" />
    <linearGradient
       id="linearGradient22703">
      <stop
         style="stop-color:#cccccc;stop-opacity:1;"
         offset="0"
         id="stop22705" />
      <stop
         style="stop-color:#cccccc;stop-opacity:0;"
         offset="1"
         id="stop22707" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient7154"
       id="linearGradient7152"
       x1="98.347786"
       y1="-231.04932"
       x2="98.347786"
       y2="-231.61627"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.8,0,0,0.8,187.12018,153.17985)" />
    <linearGradient
       id="linearGradient7154">
      <stop
         id="stop7156"
         offset="0"
         style="stop-color:#cccccc;stop-opacity:1" />
      <stop
         id="stop7158"
         offset="1"
         style="stop-color:#999999;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient22993"
       id="linearGradient14872"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.28222221,0,0,0.28222221,183.89506,-120.89059)"
       x1="259.50125"
       y1="497.6174"
       x2="312.20377"
       y2="537.39496" />
    <linearGradient
       xlink:href="#linearGradient23003"
       id="linearGradient13378"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.28222221,0,0,0.28222221,183.89506,-120.89059)"
       x1="243.45654"
       y1="521.90735"
       x2="314.98929"
       y2="490.82068" />
    <filter
       style="color-interpolation-filters:sRGB"
       id="filter23159"
       x="-0.082563439"
       width="1.1651269"
       y="-0.082563439"
       height="1.1651269">
      <feGaussianBlur
         stdDeviation="1.0410454"
         id="feGaussianBlur23161" />
    </filter>
    <linearGradient
       xlink:href="#linearGradient23003"
       id="linearGradient14882"
       gradientUnits="userSpaceOnUse"
       gradientTransform="rotate(-165,285.96091,510.34836)"
       x1="267.24683"
       y1="527.85547"
       x2="287.50952"
       y2="509.34302" />
    <filter
       style="color-interpolation-filters:sRGB"
       id="filter23261"
       x="-0.019173586"
       width="1.038338"
       y="-0.019161761"
       height="1.0383107">
      <feGaussianBlur
         stdDeviation="0.22398929"
         id="feGaussianBlur23263" />
    </filter>
    <linearGradient
       gradientTransform="matrix(0.35277776,0,0,0.35277776,-4.0314059,40.36157)"
       xlink:href="#linearGradient23003"
       id="linearGradient23165"
       x1="267.24683"
       y1="527.85547"
       x2="287.50952"
       y2="509.34302"
       gradientUnits="userSpaceOnUse" />
    <filter
       style="color-interpolation-filters:sRGB"
       id="filter9372"
       x="-0.020713228"
       width="1.0414265"
       y="-0.020713228"
       height="1.0414265">
      <feGaussianBlur
         stdDeviation="0.057384014"
         id="feGaussianBlur9374" />
    </filter>
    <linearGradient
       y2="537.39496"
       x2="312.20377"
       y1="497.6174"
       x1="259.50125"
       gradientTransform="matrix(0.10968436,0,0,0.03571389,-5.4388938,67.979678)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient9616"
       xlink:href="#linearGradient22993" />
    <linearGradient
       y2="490.82068"
       x2="314.98929"
       y1="521.90735"
       x1="243.45654"
       gradientTransform="matrix(0.06615882,0,0,0.04107607,6.9904237,65.243097)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient9618"
       xlink:href="#linearGradient23003" />
    <linearGradient
       y2="517.77496"
       x2="264.10657"
       y1="517.77496"
       x1="314.45364"
       gradientTransform="matrix(0.023303,0,0,0.03571389,16.690226,67.979678)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient9620"
       xlink:href="#linearGradient22993" />
    <linearGradient
       y2="517.77496"
       x2="264.10657"
       y1="517.77496"
       x1="314.45364"
       gradientTransform="matrix(0.02577929,0,0,0.03571389,15.908359,67.979678)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient9622"
       xlink:href="#linearGradient22993" />
    <linearGradient
       y2="517.77496"
       x2="264.10657"
       y1="517.77496"
       x1="314.45364"
       gradientTransform="matrix(0.02598564,0,0,0.03571389,-36.09543,-104.43271)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient9624"
       xlink:href="#linearGradient22993" />
    <radialGradient
       r="4.6559095"
       fy="-654.83032"
       fx="-290.16394"
       cy="-654.83032"
       cx="-290.16394"
       gradientTransform="matrix(-0.13386972,-0.12043418,0.12261549,-0.11950106,12.93283,-199.25238)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient9626"
       xlink:href="#linearGradient23519" />
    <radialGradient
       r="4.0617666"
       fy="-655.03149"
       fx="241.00996"
       cy="-655.03149"
       cx="241.00996"
       gradientTransform="matrix(-0.35102647,4.5165391e-8,-3.3790016e-8,-0.27621018,108.04475,-267.17723)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient9628"
       xlink:href="#linearGradient24549" />
    <linearGradient
       y2="643.5799"
       x2="271.26025"
       y1="670.54395"
       x1="242.73628"
       gradientTransform="matrix(0.12657271,0,0,0.11746037,-59.221221,9.2342636)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient9630"
       xlink:href="#linearGradient24179" />
    <linearGradient
       y2="-655.11206"
       x2="-247.30458"
       y1="-655.11206"
       x1="-241.78746"
       gradientTransform="matrix(0.12540024,0,0,0.11943658,54.195076,164.45146)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient9632"
       xlink:href="#linearGradient24275" />
    <linearGradient
       y2="-655.11206"
       x2="-247.30458"
       y1="-655.11206"
       x1="-241.78746"
       gradientTransform="matrix(0.12540024,0,0,0.11943658,2.2352486,-7.9542797)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient9634"
       xlink:href="#linearGradient24275" />
    <radialGradient
       r="18.04899"
       fy="655.29767"
       fx="-265.55276"
       cy="655.29767"
       cx="-265.55276"
       gradientTransform="matrix(-0.08989118,0.03798596,-0.03562053,-0.07285476,-25.545974,143.95398)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient9636"
       xlink:href="#linearGradient24539" />
    <linearGradient
       y2="254.40347"
       x2="489.07578"
       y1="252.94917"
       x1="489.07578"
       gradientUnits="userSpaceOnUse"
       id="linearGradient10678"
       xlink:href="#linearGradient22703"
       gradientTransform="matrix(0.28222222,0,0,0.28222222,-167.03926,-326.67081)" />
    <linearGradient
       y2="254.40347"
       x2="489.07578"
       y1="252.94917"
       x1="489.07578"
       gradientUnits="userSpaceOnUse"
       id="linearGradient10680"
       xlink:href="#linearGradient22703"
       gradientTransform="matrix(0.28222222,0,0,0.28222222,-167.03926,-326.67081)" />
    <linearGradient
       y2="254.40347"
       x2="489.07578"
       y1="252.94917"
       x1="489.07578"
       gradientUnits="userSpaceOnUse"
       id="linearGradient10682"
       xlink:href="#linearGradient22703"
       gradientTransform="matrix(0.28222222,0,0,0.28222222,-120.89059,202.50615)" />
    <linearGradient
       y2="537.39496"
       x2="312.20377"
       y1="497.6174"
       x1="259.50125"
       gradientTransform="matrix(0.28222221,0,0,0.28222221,183.89506,-120.89059)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient10684"
       xlink:href="#linearGradient22993" />
    <linearGradient
       y2="132.42793"
       x2="-211.76324"
       y1="128.35896"
       x1="-215.44655"
       gradientTransform="rotate(90,55.070936,173.87579)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient10688"
       xlink:href="#linearGradient10710" />
    <linearGradient
       gradientTransform="rotate(90,66.526448,186.74179)"
       y2="223.30081"
       x2="150.93372"
       y1="223.3912"
       x1="171.6794"
       gradientUnits="userSpaceOnUse"
       id="linearGradient10690"
       xlink:href="#linearGradient10704" />
    <linearGradient
       y2="132.42793"
       x2="-211.76324"
       y1="128.35896"
       x1="-215.44655"
       gradientTransform="rotate(90,55.070936,173.87579)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient10692"
       xlink:href="#linearGradient10710" />
    <linearGradient
       gradientTransform="rotate(90,66.526448,186.74179)"
       y2="223.30081"
       x2="150.93372"
       y1="223.3912"
       x1="171.6794"
       gradientUnits="userSpaceOnUse"
       id="linearGradient10694"
       xlink:href="#linearGradient10704" />
    <linearGradient
       y2="132.42793"
       x2="-211.76324"
       y1="128.35896"
       x1="-215.44655"
       gradientTransform="rotate(90,55.070936,173.87579)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient10696"
       xlink:href="#linearGradient10710" />
    <linearGradient
       y2="132.42793"
       x2="-211.76324"
       y1="128.35896"
       x1="-215.44655"
       gradientTransform="rotate(90,55.070936,173.87579)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient10698"
       xlink:href="#linearGradient10710" />
    <linearGradient
       y2="382.10031"
       x2="43.168636"
       y1="372.25626"
       x1="38.412743"
       gradientUnits="userSpaceOnUse"
       id="linearGradient10700"
       xlink:href="#linearGradient24437"
       gradientTransform="matrix(0.38334691,0,0,0.36971417,12.067657,141.84403)" />
    <linearGradient
       y2="377.36786"
       x2="142.97569"
       y1="370.2446"
       x1="137.76236"
       gradientUnits="userSpaceOnUse"
       id="linearGradient10705"
       xlink:href="#linearGradient24361"
       gradientTransform="matrix(0.38334691,0,0,0.36971417,12.106977,141.85385)" />
    <linearGradient
       y2="377.98868"
       x2="252.1458"
       y1="371.15778"
       x1="251.10089"
       gradientUnits="userSpaceOnUse"
       id="linearGradient10709"
       xlink:href="#linearGradient24361"
       gradientTransform="matrix(0.38334691,0,0,0.36971417,12.106977,141.88333)" />
    <linearGradient
       y2="382.00784"
       x2="361.01593"
       y1="366.14532"
       x1="356.77228"
       gradientUnits="userSpaceOnUse"
       id="linearGradient10713"
       xlink:href="#linearGradient24361"
       gradientTransform="matrix(0.38334691,0,0,0.36971417,12.067657,141.87182)" />
    <linearGradient
       y2="382.00784"
       x2="361.01593"
       y1="366.14532"
       x1="356.77228"
       gradientUnits="userSpaceOnUse"
       id="linearGradient10715"
       xlink:href="#linearGradient24361"
       gradientTransform="matrix(0.38334691,0,0,0.36971417,12.067657,141.87182)" />
    <linearGradient
       y2="383.37164"
       x2="446.69507"
       y1="369.01877"
       x1="439.36942"
       gradientUnits="userSpaceOnUse"
       id="linearGradient10717"
       xlink:href="#linearGradient24437"
       gradientTransform="matrix(0.38334691,0,0,0.36971417,12.067657,141.84403)" />
    <linearGradient
       y2="381.72372"
       x2="466.07184"
       y1="368.43402"
       x1="464.57236"
       gradientUnits="userSpaceOnUse"
       id="linearGradient10721"
       xlink:href="#linearGradient24437"
       gradientTransform="matrix(0.38334691,0,0,0.36971417,12.067657,141.84403)" />
    <linearGradient
       y2="381.72372"
       x2="466.07184"
       y1="368.43402"
       x1="464.57236"
       gradientUnits="userSpaceOnUse"
       id="linearGradient10723"
       xlink:href="#linearGradient24437"
       gradientTransform="matrix(0.38334691,0,0,0.36971417,12.067657,141.84403)" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="85.812134"
       x2="221.31621"
       y1="86.331848"
       x1="221.32861"
       id="linearGradient7160-8"
       xlink:href="#linearGradient7162" />
    <linearGradient
       xlink:href="#linearGradient22703"
       id="linearGradient10678-4"
       gradientUnits="userSpaceOnUse"
       x1="489.07578"
       y1="252.94917"
       x2="489.07578"
       y2="254.40347"
       gradientTransform="matrix(0.35277777,0,0,0.35277777,40.361571,19.232455)" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="-231.61627"
       x2="98.347786"
       y1="-231.04932"
       x1="98.347786"
       id="linearGradient7152-0"
       xlink:href="#linearGradient7154" />
    <filter
       height="1.1651269"
       y="-0.082563439"
       width="1.1651269"
       x="-0.082563439"
       id="filter23159-4"
       style="color-interpolation-filters:sRGB">
      <feGaussianBlur
         id="feGaussianBlur23161-3"
         stdDeviation="1.0410454" />
    </filter>
    <filter
       height="1.0383107"
       y="-0.019161761"
       width="1.038338"
       x="-0.019173586"
       id="filter23261-7"
       style="color-interpolation-filters:sRGB">
      <feGaussianBlur
         id="feGaussianBlur23263-1"
         stdDeviation="0.22398929" />
    </filter>
    <filter
       height="1.0414265"
       y="-0.020713228"
       width="1.0414265"
       x="-0.020713228"
       id="filter9372-2"
       style="color-interpolation-filters:sRGB">
      <feGaussianBlur
         id="feGaussianBlur9374-2"
         stdDeviation="0.057384014" />
    </filter>
    <linearGradient
       y2="254.40347"
       x2="489.07578"
       y1="252.94917"
       x1="489.07578"
       gradientUnits="userSpaceOnUse"
       id="linearGradient19420"
       xlink:href="#linearGradient22703"
       gradientTransform="matrix(0.35277777,0,0,0.35277777,-400.27388,-174.43829)" />
    <linearGradient
       y2="254.40347"
       x2="489.07578"
       y1="252.94917"
       x1="489.07578"
       gradientUnits="userSpaceOnUse"
       id="linearGradient19422"
       xlink:href="#linearGradient22703"
       gradientTransform="matrix(0.35277777,0,0,0.35277777,-400.27388,-174.43829)" />
    <linearGradient
       y2="254.40347"
       x2="489.07578"
       y1="252.94917"
       x1="489.07578"
       gradientUnits="userSpaceOnUse"
       id="linearGradient19424"
       xlink:href="#linearGradient22703"
       gradientTransform="matrix(0.35277777,0,0,0.35277777,40.361571,19.232455)" />
    <linearGradient
       y2="537.39496"
       x2="312.20377"
       y1="497.6174"
       x1="259.50125"
       gradientTransform="matrix(0.35277776,0,0,0.35277776,-4.0314059,40.36157)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient19426"
       xlink:href="#linearGradient22993" />
    <linearGradient
       y2="537.39496"
       x2="312.20377"
       y1="497.6174"
       x1="259.50125"
       gradientTransform="matrix(0.35277776,0,0,0.35277776,-4.0145335,40.36157)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient19428"
       xlink:href="#linearGradient22993" />
    <linearGradient
       y2="490.82068"
       x2="314.98929"
       y1="521.90735"
       x1="243.45654"
       gradientTransform="matrix(0.35277776,0,0,0.35277776,-4.0145335,40.36157)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient19430"
       xlink:href="#linearGradient23003" />
    <linearGradient
       y2="509.34302"
       x2="287.50952"
       y1="527.85547"
       x1="267.24683"
       gradientTransform="rotate(-165,285.96091,510.34836)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient19432"
       xlink:href="#linearGradient23003" />
    <linearGradient
       y2="509.34302"
       x2="287.50952"
       y1="527.85547"
       x1="267.24683"
       gradientTransform="matrix(0.35277776,0,0,0.35277776,-4.0314059,40.36157)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient19434"
       xlink:href="#linearGradient23003" />
    <linearGradient
       xlink:href="#linearGradient7162"
       id="linearGradient7160-8-6"
       x1="221.32861"
       y1="86.331848"
       x2="221.31621"
       y2="85.812134"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       xlink:href="#linearGradient22703"
       id="linearGradient19420-1"
       gradientUnits="userSpaceOnUse"
       x1="489.07578"
       y1="252.94917"
       x2="489.07578"
       y2="254.40347"
       gradientTransform="matrix(0.35277777,0,0,0.35277777,40.361571,19.232455)" />
    <linearGradient
       xlink:href="#linearGradient7154"
       id="linearGradient7152-0-8"
       x1="98.347786"
       y1="-231.04932"
       x2="98.347786"
       y2="-231.61627"
       gradientUnits="userSpaceOnUse" />
    <filter
       style="color-interpolation-filters:sRGB"
       id="filter23159-0"
       x="-0.082563439"
       width="1.1651269"
       y="-0.082563439"
       height="1.1651269">
      <feGaussianBlur
         stdDeviation="1.0410454"
         id="feGaussianBlur23161-6" />
    </filter>
    <linearGradient
       xlink:href="#linearGradient23003"
       id="linearGradient14882-2"
       gradientUnits="userSpaceOnUse"
       gradientTransform="rotate(-165,285.96091,510.34836)"
       x1="267.24683"
       y1="527.85547"
       x2="287.50952"
       y2="509.34302" />
    <filter
       style="color-interpolation-filters:sRGB"
       id="filter23261-6"
       x="-0.019173586"
       width="1.038338"
       y="-0.019161761"
       height="1.0383107">
      <feGaussianBlur
         stdDeviation="0.22398929"
         id="feGaussianBlur23263-18" />
    </filter>
    <filter
       style="color-interpolation-filters:sRGB"
       id="filter9372-7"
       x="-0.020713228"
       width="1.0414265"
       y="-0.020713228"
       height="1.0414265">
      <feGaussianBlur
         stdDeviation="0.057384014"
         id="feGaussianBlur9374-9" />
    </filter>
    <linearGradient
       xlink:href="#linearGradient22703"
       id="linearGradient1691"
       gradientUnits="userSpaceOnUse"
       x1="489.07578"
       y1="252.94917"
       x2="489.07578"
       y2="254.40347"
       gradientTransform="matrix(0.35277777,0,0,0.35277777,-400.27388,-174.43829)" />
    <linearGradient
       xlink:href="#linearGradient22703"
       id="linearGradient1693"
       gradientUnits="userSpaceOnUse"
       x1="489.07578"
       y1="252.94917"
       x2="489.07578"
       y2="254.40347"
       gradientTransform="matrix(0.35277777,0,0,0.35277777,-400.27388,-174.43829)" />
    <linearGradient
       xlink:href="#linearGradient22703"
       id="linearGradient1695"
       gradientUnits="userSpaceOnUse"
       x1="489.07578"
       y1="252.94917"
       x2="489.07578"
       y2="254.40347"
       gradientTransform="matrix(0.35277777,0,0,0.35277777,40.361571,19.232455)" />
    <linearGradient
       xlink:href="#linearGradient22993"
       id="linearGradient1697"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.35277776,0,0,0.35277776,-4.0314059,40.36157)"
       x1="259.50125"
       y1="497.6174"
       x2="312.20377"
       y2="537.39496" />
    <linearGradient
       xlink:href="#linearGradient22993"
       id="linearGradient1699"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.35277776,0,0,0.35277776,-4.0314059,40.36157)"
       x1="259.50125"
       y1="497.6174"
       x2="312.20377"
       y2="537.39496" />
    <linearGradient
       xlink:href="#linearGradient23003"
       id="linearGradient1701"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.35277776,0,0,0.35277776,-4.0314059,40.36157)"
       x1="243.45654"
       y1="521.90735"
       x2="314.98929"
       y2="490.82068" />
    <linearGradient
       xlink:href="#linearGradient23003"
       id="linearGradient1703"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.35277776,0,0,0.35277776,-4.0314059,40.36157)"
       x1="267.24683"
       y1="527.85547"
       x2="287.50952"
       y2="509.34302" />
    <linearGradient
       y2="537.39496"
       x2="312.20377"
       y1="497.6174"
       x1="259.50125"
       gradientTransform="matrix(0.10968436,0,0,0.03571389,149.53752,144.7045)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient9616-9"
       xlink:href="#linearGradient22993" />
    <linearGradient
       y2="490.82068"
       x2="314.98929"
       y1="521.90735"
       x1="243.45654"
       gradientTransform="matrix(0.06615882,0,0,0.04107607,161.96684,141.96791)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient9618-8"
       xlink:href="#linearGradient23003" />
    <linearGradient
       y2="517.77496"
       x2="264.10657"
       y1="517.77496"
       x1="314.45364"
       gradientTransform="matrix(0.023303,0,0,0.03571389,171.66664,144.7045)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient9620-0"
       xlink:href="#linearGradient22993" />
    <linearGradient
       y2="517.77496"
       x2="264.10657"
       y1="517.77496"
       x1="314.45364"
       gradientTransform="matrix(0.02577929,0,0,0.03571389,170.88477,144.7045)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient9622-3"
       xlink:href="#linearGradient22993" />
    <linearGradient
       y2="517.77496"
       x2="264.10657"
       y1="517.77496"
       x1="314.45364"
       gradientTransform="matrix(0.02598564,0,0,0.03571389,-191.07184,-181.15753)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient9624-6"
       xlink:href="#linearGradient22993" />
    <radialGradient
       r="4.6559095"
       fy="-654.83032"
       fx="-290.16394"
       cy="-654.83032"
       cx="-290.16394"
       gradientTransform="matrix(-0.13386972,-0.12043419,0.12261549,-0.11950106,-142.04358,-275.9772)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient9626-1"
       xlink:href="#linearGradient23519" />
    <radialGradient
       r="4.0617666"
       fy="-655.03149"
       fx="241.00996"
       cy="-655.03149"
       cx="241.00996"
       gradientTransform="matrix(-0.35102647,4.5165392e-8,-3.3790017e-8,-0.27621018,263.02116,-343.90205)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient9628-3"
       xlink:href="#linearGradient24549" />
    <linearGradient
       y2="643.5799"
       x2="271.26025"
       y1="670.54395"
       x1="242.73628"
       gradientTransform="matrix(0.12657272,0,0,0.11746037,-214.19763,85.959081)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient9630-1"
       xlink:href="#linearGradient24179" />
    <linearGradient
       y2="-655.11206"
       x2="-247.30458"
       y1="-655.11206"
       x1="-241.78746"
       gradientTransform="matrix(0.12540024,0,0,0.11943658,209.17149,241.17627)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient9632-4"
       xlink:href="#linearGradient24275" />
    <linearGradient
       y2="-655.11206"
       x2="-247.30458"
       y1="-655.11206"
       x1="-241.78746"
       gradientTransform="matrix(0.12540024,0,0,0.11943658,-152.74116,-84.679097)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient9634-5"
       xlink:href="#linearGradient24275" />
    <radialGradient
       r="18.04899"
       fy="655.29767"
       fx="-265.55276"
       cy="655.29767"
       cx="-265.55276"
       gradientTransform="matrix(-0.08989118,0.03798596,-0.03562053,-0.07285476,-180.52239,220.6788)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient9636-6"
       xlink:href="#linearGradient24539" />
    <radialGradient
       r="4.6559095"
       fy="-654.83032"
       fx="-290.16394"
       cy="-654.83032"
       cx="-290.16394"
       gradientTransform="matrix(-0.13386972,-0.12043419,0.12261549,-0.11950106,-142.04358,-279.68137)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient9626-9"
       xlink:href="#linearGradient23519" />
    <radialGradient
       r="4.0617666"
       fy="-655.03149"
       fx="241.00996"
       cy="-655.03149"
       cx="241.00996"
       gradientTransform="matrix(-0.35102647,4.5165392e-8,-3.3790017e-8,-0.27621018,263.02116,-347.60621)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient9628-6"
       xlink:href="#linearGradient24549" />
    <radialGradient
       r="18.04899"
       fy="655.29767"
       fx="-265.55276"
       cy="655.29767"
       cx="-265.55276"
       gradientTransform="matrix(-0.08989118,0.03798596,-0.03562053,-0.07285476,-180.52239,224.38296)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient9636-7"
       xlink:href="#linearGradient24539" />
    <linearGradient
       xlink:href="#linearGradient22993"
       id="linearGradient10689"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.10968436,0,0,0.03571389,149.53752,148.40866)"
       x1="259.50125"
       y1="497.6174"
       x2="312.20377"
       y2="537.39496" />
    <linearGradient
       xlink:href="#linearGradient23003"
       id="linearGradient10691"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.06615882,0,0,0.04107607,161.96684,145.67208)"
       x1="243.45654"
       y1="521.90735"
       x2="314.98929"
       y2="490.82068" />
    <linearGradient
       xlink:href="#linearGradient22993"
       id="linearGradient10693"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.023303,0,0,0.03571389,171.66664,148.40866)"
       x1="314.45364"
       y1="517.77496"
       x2="264.10657"
       y2="517.77496" />
    <linearGradient
       xlink:href="#linearGradient22993"
       id="linearGradient10695"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.02577929,0,0,0.03571389,170.88477,148.40866)"
       x1="314.45364"
       y1="517.77496"
       x2="264.10657"
       y2="517.77496" />
    <linearGradient
       xlink:href="#linearGradient22993"
       id="linearGradient10697"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.02598564,0,0,0.03571389,-191.07184,-184.86169)"
       x1="314.45364"
       y1="517.77496"
       x2="264.10657"
       y2="517.77496" />
    <linearGradient
       xlink:href="#linearGradient24179"
       id="linearGradient10699"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.12657272,0,0,0.11746037,-214.19763,89.663243)"
       x1="242.73628"
       y1="670.54395"
       x2="271.26025"
       y2="643.5799" />
    <linearGradient
       xlink:href="#linearGradient24275"
       id="linearGradient10701"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.12540024,0,0,0.11943658,209.17149,244.88044)"
       x1="-241.78746"
       y1="-655.11206"
       x2="-247.30458"
       y2="-655.11206" />
    <linearGradient
       xlink:href="#linearGradient24275"
       id="linearGradient10703"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.12540024,0,0,0.11943658,-152.74116,-88.383259)"
       x1="-241.78746"
       y1="-655.11206"
       x2="-247.30458"
       y2="-655.11206" />
    <radialGradient
       r="4.6559095"
       fy="-654.83032"
       fx="-290.16394"
       cy="-654.83032"
       cx="-290.16394"
       gradientTransform="matrix(-0.13386973,-0.12043419,0.1226155,-0.11950107,8.9642167,-188.56488)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient9626-8"
       xlink:href="#linearGradient23519" />
    <radialGradient
       r="4.0617666"
       fy="-655.03149"
       fx="241.00996"
       cy="-655.03149"
       cx="241.00996"
       gradientTransform="matrix(-0.35102649,4.5165393e-8,-3.3790018e-8,-0.27621019,112.01337,-256.48973)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient9628-1"
       xlink:href="#linearGradient24549" />
    <radialGradient
       r="18.04899"
       fy="655.29767"
       fx="-265.55276"
       cy="655.29767"
       cx="-265.55276"
       gradientTransform="matrix(-0.08989118,0.03798596,-0.03562053,-0.07285476,-29.514589,133.26647)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient9636-4"
       xlink:href="#linearGradient24539" />
    <linearGradient
       xlink:href="#linearGradient22993"
       id="linearGradient15943"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.10968436,0,0,0.03571389,-1.4702797,57.292163)"
       x1="259.50125"
       y1="497.6174"
       x2="312.20377"
       y2="537.39496" />
    <linearGradient
       xlink:href="#linearGradient23003"
       id="linearGradient15945"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.06615882,0,0,0.04107607,10.959039,54.555582)"
       x1="243.45654"
       y1="521.90735"
       x2="314.98929"
       y2="490.82068" />
    <linearGradient
       xlink:href="#linearGradient22993"
       id="linearGradient15947"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.023303,0,0,0.03571389,20.658842,57.292163)"
       x1="314.45364"
       y1="517.77496"
       x2="264.10657"
       y2="517.77496" />
    <linearGradient
       xlink:href="#linearGradient22993"
       id="linearGradient15949"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.02577929,0,0,0.03571389,19.876974,57.292163)"
       x1="314.45364"
       y1="517.77496"
       x2="264.10657"
       y2="517.77496" />
    <linearGradient
       xlink:href="#linearGradient22993"
       id="linearGradient15951"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.02598564,0,0,0.03571389,-40.064046,-93.745197)"
       x1="314.45364"
       y1="517.77496"
       x2="264.10657"
       y2="517.77496" />
    <linearGradient
       xlink:href="#linearGradient24179"
       id="linearGradient15953"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.12657272,0,0,0.11746037,-63.189839,-1.4532539)"
       x1="242.73628"
       y1="670.54395"
       x2="271.26025"
       y2="643.5799" />
    <linearGradient
       xlink:href="#linearGradient24275"
       id="linearGradient15955"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.12540025,0,0,0.11943658,58.163693,153.76395)"
       x1="-241.78746"
       y1="-655.11206"
       x2="-247.30458"
       y2="-655.11206" />
    <linearGradient
       xlink:href="#linearGradient24275"
       id="linearGradient15957"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.12540025,0,0,0.11943658,-1.7333657,2.7332378)"
       x1="-241.78746"
       y1="-655.11206"
       x2="-247.30458"
       y2="-655.11206" />
    <radialGradient
       r="4.6559095"
       fy="-654.83032"
       fx="-290.16394"
       cy="-654.83032"
       cx="-290.16394"
       gradientTransform="matrix(-0.13386972,-0.12043419,0.12261549,-0.11950106,9.1324534,-192.52048)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient9626-18"
       xlink:href="#linearGradient23519" />
    <radialGradient
       r="4.0617666"
       fy="-655.03149"
       fx="241.00996"
       cy="-655.03149"
       cx="241.00996"
       gradientTransform="matrix(-0.35102646,4.5165392e-8,-3.3790016e-8,-0.27621018,111.84513,-260.44533)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient9628-4"
       xlink:href="#linearGradient24549" />
    <radialGradient
       r="18.04899"
       fy="655.29767"
       fx="-265.55276"
       cy="655.29767"
       cx="-265.55276"
       gradientTransform="matrix(-0.08989118,0.03798596,-0.03562053,-0.07285476,-29.34635,137.22207)"
       gradientUnits="userSpaceOnUse"
       id="radialGradient9636-77"
       xlink:href="#linearGradient24539" />
    <linearGradient
       xlink:href="#linearGradient22993"
       id="linearGradient16121"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.10968436,0,0,0.03571389,-1.6385168,61.247767)"
       x1="259.50125"
       y1="497.6174"
       x2="312.20377"
       y2="537.39496" />
    <linearGradient
       xlink:href="#linearGradient23003"
       id="linearGradient16123"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.06615882,0,0,0.04107607,10.790801,58.511185)"
       x1="243.45654"
       y1="521.90735"
       x2="314.98929"
       y2="490.82068" />
    <linearGradient
       xlink:href="#linearGradient22993"
       id="linearGradient16125"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.023303,0,0,0.03571389,20.490603,61.247767)"
       x1="314.45364"
       y1="517.77496"
       x2="264.10657"
       y2="517.77496" />
    <linearGradient
       xlink:href="#linearGradient22993"
       id="linearGradient16127"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.02577928,0,0,0.03571389,19.708736,61.247767)"
       x1="314.45364"
       y1="517.77496"
       x2="264.10657"
       y2="517.77496" />
    <linearGradient
       xlink:href="#linearGradient22993"
       id="linearGradient16129"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.02598564,0,0,0.03571389,-39.895807,-97.7008)"
       x1="314.45364"
       y1="517.77496"
       x2="264.10657"
       y2="517.77496" />
    <linearGradient
       xlink:href="#linearGradient24179"
       id="linearGradient16131"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.12657271,0,0,0.11746037,-63.021598,2.5023513)"
       x1="242.73628"
       y1="670.54395"
       x2="271.26025"
       y2="643.5799" />
    <linearGradient
       xlink:href="#linearGradient24275"
       id="linearGradient16133"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.12540024,0,0,0.11943658,57.995452,157.71955)"
       x1="-241.78746"
       y1="-655.11206"
       x2="-247.30458"
       y2="-655.11206" />
    <linearGradient
       xlink:href="#linearGradient24275"
       id="linearGradient16135"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.12540024,0,0,0.11943658,-1.5651284,-1.2223674)"
       x1="-241.78746"
       y1="-655.11206"
       x2="-247.30458"
       y2="-655.11206" />
    <filter
       style="color-interpolation-filters:sRGB"
       id="filter23159-6"
       x="-0.082563439"
       width="1.1651269"
       y="-0.082563439"
       height="1.1651269">
      <feGaussianBlur
         stdDeviation="1.0410454"
         id="feGaussianBlur23161-7" />
    </filter>
    <filter
       style="color-interpolation-filters:sRGB"
       id="filter23261-62"
       x="-0.019173586"
       width="1.038338"
       y="-0.019161761"
       height="1.0383107">
      <feGaussianBlur
         stdDeviation="0.22398929"
         id="feGaussianBlur23263-9" />
    </filter>
    <filter
       style="color-interpolation-filters:sRGB"
       id="filter9372-1"
       x="-0.020713228"
       width="1.0414265"
       y="-0.020713228"
       height="1.0414265">
      <feGaussianBlur
         stdDeviation="0.057384014"
         id="feGaussianBlur9374-27" />
    </filter>
    <linearGradient
       xlink:href="#linearGradient7162"
       id="linearGradient60"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.8,0,0,0.8,-153.17985,187.12018)"
       x1="221.32861"
       y1="86.331848"
       x2="221.31621"
       y2="85.812134" />
    <linearGradient
       xlink:href="#linearGradient22703"
       id="linearGradient61"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.28222222,0,0,0.28222222,-167.03926,-326.67081)"
       x1="489.07578"
       y1="252.94917"
       x2="489.07578"
       y2="254.40347" />
    <linearGradient
       xlink:href="#linearGradient22703"
       id="linearGradient62"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.28222222,0,0,0.28222222,-167.03926,-326.67081)"
       x1="489.07578"
       y1="252.94917"
       x2="489.07578"
       y2="254.40347" />
    <linearGradient
       xlink:href="#linearGradient22703"
       id="linearGradient63"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.28222222,0,0,0.28222222,-120.89059,202.50615)"
       x1="489.07578"
       y1="252.94917"
       x2="489.07578"
       y2="254.40347" />
    <linearGradient
       xlink:href="#linearGradient22703"
       id="linearGradient64"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.28222222,0,0,0.28222222,-120.89059,202.50615)"
       x1="489.07578"
       y1="252.94917"
       x2="489.07578"
       y2="254.40347" />
    <linearGradient
       xlink:href="#linearGradient7154"
       id="linearGradient65"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.8,0,0,0.8,187.12018,153.17985)"
       x1="98.347786"
       y1="-231.04932"
       x2="98.347786"
       y2="-231.61627" />
    <linearGradient
       xlink:href="#linearGradient22993"
       id="linearGradient66"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.28222221,0,0,0.28222221,183.89506,-120.89059)"
       x1="259.50125"
       y1="497.6174"
       x2="312.20377"
       y2="537.39496" />
    <linearGradient
       xlink:href="#linearGradient22993"
       id="linearGradient67"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.28222221,0,0,0.28222221,183.89506,-120.89059)"
       x1="259.50125"
       y1="497.6174"
       x2="312.20377"
       y2="537.39496" />
    <linearGradient
       xlink:href="#linearGradient23003"
       id="linearGradient68"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.28222221,0,0,0.28222221,183.89506,-120.89059)"
       x1="243.45654"
       y1="521.90735"
       x2="314.98929"
       y2="490.82068" />
    <linearGradient
       xlink:href="#linearGradient23003"
       id="linearGradient69"
       gradientUnits="userSpaceOnUse"
       gradientTransform="rotate(-165,285.96091,510.34836)"
       x1="267.24683"
       y1="527.85547"
       x2="287.50952"
       y2="509.34302" />
    <linearGradient
       xlink:href="#linearGradient23003"
       id="linearGradient70"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.35277776,0,0,0.35277776,-4.0314059,40.36157)"
       x1="267.24683"
       y1="527.85547"
       x2="287.50952"
       y2="509.34302" />
  </defs>
  <metadata
     id="metadata7004">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     transform="translate(1.6248036,24.153622)"
     id="layer1">
    <g
       transform="matrix(0.97011885,-0.24263021,0.43678787,1.7464278,-77.586056,-215.16412)"
       id="USB">
      <g
         transform="matrix(0.26458333,0,0,0.26458333,-1527.8789,182.85328)"
         id="g749"
         style="display:inline;enable-background:new">
        <g
           id="layer1-7" />
        <g
           transform="matrix(0.45604278,0,0,0.45604278,3620.8634,-271.47561)"
           id="g9786">
          <path
             id="path9359"
             d="m 5457.0966,169.08117 v -27.77492 l -5.6629,-4.58421 6.7415,-6.47182 6.7415,5.39319 0.2697,5.9325 h 11.5953 V 129.7109 l 5.1236,-5.12353 h 225.4352 l 4.1797,4.17972 v 12.2695 h 11.7302 v -4.04489 l 12.4043,-9.97739 5.9325,5.39319 -9.5729,9.5729 v 26.83111 z"
             style="fill:#999999;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
          <path
             id="path9361"
             d="m 5493.3658,169.04938 v -27.50526 h -6.7415 v 27.50526 z"
             style="fill:#d5d3ce;fill-opacity:1;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0" />
          <path
             id="path9363"
             d="m 5504.2196,124.59551 v 4.94355 5.41897 h 5.3932 v -10.40206 z"
             style="fill:#c2bfb8;fill-opacity:1;stroke:#000000;stroke-width:1.08323px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0" />
          <path
             style="fill:#c2bfb8;fill-opacity:1;stroke:#000000;stroke-width:1.07994px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0"
             d="m 5599.106,124.55373 v 10.29965 h 5.3932 v -10.33895 z"
             id="path9391" />
          <path
             style="fill:#d5d3ce;fill-opacity:1;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0"
             d="m 5704.7631,168.84626 -0.022,-27.74833 h -6.7415 l 0.022,27.74833 z"
             id="path9393" />
          <path
             id="path9472"
             d="m 5704.7631,168.84626 -0.022,-27.74833 18.5093,-0.0613 6.1246,4.17973 v 23.59519 z"
             style="fill:#bdbdb7;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
          <path
             id="path9367"
             d="m 5502.5342,138.39619 7.0786,-3.43816 h 75.9765 l 5.9381,3.42839 v 2.97603 h -89.128 z"
             style="fill:#333331;fill-opacity:1;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0" />
          <path
             style="fill:#333331;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0"
             d="m 5597.6081,138.31683 7.0786,-3.43816 h 75.9765 l 5.9381,3.42839 v 2.97603 h -89.128 z"
             id="path9389" />
          <path
             id="path9397"
             d="m 5579.6069,151.57727 v 14.13009 l 2.4501,2.57779 h 62.3442 l 2.5862,-2.721 v -14.08235 0 z"
             style="fill:#9a9a97;fill-opacity:0;stroke:#a1a19d;stroke-width:0.976316px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
          <path
             id="path9403"
             d="M 5493.3502,168.84626 V 141.341 l 204.6493,-0.24307 0.022,27.74833 z"
             style="fill:#8a8b87;fill-opacity:1;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0" />
          <path
             id="path9442"
             d="m 5723.2504,141.03659 v -4.04489 l 12.4043,-9.97739 5.9325,5.39319 -9.5729,9.5729 v 26.83111 h -2.6393 v -23.59519 z"
             style="fill:#8b8b88;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
          <path
             id="path9446"
             d="m 5465.1864,141.57591 -0.2697,-5.9325 -6.7415,-5.39319 -6.7415,6.47182 5.6629,4.58421 v 27.77492 h 2.6534 V 143.75 Z"
             style="fill:#8b8b88;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
          <path
             id="path9448"
             d="m 5476.7817,129.7109 5.1236,-5.12353 22.3143,0.008 0.01,5.11072 z"
             style="fill:#a9a8a3;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
          <path
             id="path9454"
             d="m 5509.6128,124.55597 v 10.40206 h 75.9765 v -10.42459 z"
             style="fill:#b0b0ab;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
          <path
             id="path9456"
             d="M 5459.75,169.08117 V 143.75 l 5.4364,-2.17409 21.4379,-0.0318 v 27.50526 z"
             style="fill:#c1c1bb;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
          <path
             id="path9458"
             d="m 5604.4992,124.51443 v 10.33895 l 76.164,0.0253 v -10.3345 z"
             style="fill:#b0b0ab;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
          <path
             id="path9460"
             d="m 5585.5893,134.95803 v -10.42459 l 13.5167,0.0203 v 10.29965 l 5.5807,0.0253 -7.0786,3.43816 -0.1348,2.96626 -5.9459,0.0794 v -2.97603 z"
             style="fill:#a3a39f;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
          <path
             id="path9462"
             d="M 5476.7817,141.57591 V 129.7109 l 27.4479,-0.005 -0.01,5.25213 5.3932,2.7e-4 -7.0786,3.43816 -0.1348,2.96626 z"
             style="fill:#bebdb8;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
          <path
             id="path9464"
             d="m 5686.6013,138.30706 v -13.72942 l -5.9381,-0.0335 v 10.3345 z"
             style="fill:#979794;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
          <path
             id="path9468"
             d="m 5686.6013,141.28309 v -2.97603 h 24.8769 l 0.042,2.72953 z"
             style="fill:#bcbab5;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
          <path
             id="path9470"
             d="m 5686.6013,138.30706 v -13.72942 l 20.7392,0.01 4.1797,4.17972 -0.042,9.53997 z"
             style="fill:#abaaa6;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
          <path
             style="fill:#949490;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
             d="m 5637.2361,154.49408 h 3.9775 v 14.23053 h -61.9603 v -14.14214 h 3.8891 v 10.34144 h 54.0937 z"
             id="path9508" />
          <path
             style="fill:#646461;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
             d="m 5579.2533,154.58247 4.1543,-3.18198 h 53.9169 l 3.8891,3.09359 z"
             id="path9510" />
          <path
             style="fill:#8b8b88;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
             d="m 5583.1424,154.58247 54.0937,-0.0884 v 10.42982 h -54.0937 z"
             id="path9512" />
          <path
             transform="matrix(1.0014187,0,0,0.97489213,-7.9559851,4.1582928)"
             id="path9514"
             d="m 5621.4989,164.83923 c 0.01,-1.60418 0.2928,-3.30043 0,-4.80508 -1.611,-2.74993 -3.547,-3.63268 -5.6569,-3.51591 -7.6461,-0.7846 -9.0406,6.04618 -16.2634,6.09424 -4.6775,-0.13012 -5.2207,-1.88444 -5.4801,-3.75029 l 0.052,-4.45349 v -30.22881"
             style="fill:none;stroke:#61615e;stroke-width:0.814227px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;filter:url(#filter9604)" />
        </g>
      </g>
      <path
         id="path783"
         d="m 88.921099,131.42692 32.692601,-0.0325 v 0"
         style="display:inline;fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;enable-background:new" />
    </g>
    <path
       id="background"
       style="display:inline;fill:#1a1a1a;fill-opacity:1;stroke-width:0.264583"
       d="m 107.45846,-20.090759 c -29.696083,7e-6 -58.175645,11.7965846 -79.173978,32.794896 C 16.066575,24.922044 6.9688341,40.2827 1.4949024,56.841494 c -0.132471,0.353348 -0.2573237,0.720307 -0.2573486,1.102775 0.3944986,1.673548 1.41732,2.471206 2.8752768,2.462901 v 0.0062 H 22.586121 c 0.257739,0 0.509064,0.02558 0.752409,0.07183 h -0.549836 c 2.038004,0 3.678328,1.640281 3.678328,3.678327 0,2.038046 -1.604637,3.766775 -3.642673,3.765661 l -2.203481,-0.0016 c -0.07411,-0.0044 -0.148511,-0.0072 -0.223761,-0.0072 H 7.2475229 l -1.7306438,-0.0011 c 9.16e-5,2.65e-4 -1.04e-4,5.29e-4 0,0.0011 H 2.629717 c -2.0380444,0 -3.6788452,1.640801 -3.6788452,3.678846 v 23.353612 c 0,2.038046 1.6408008,3.67833 3.6788452,3.67833 h 17.76739 c 0.02178,0 0.04344,-0.0011 0.06511,-0.0016 l 2.336289,0.0011 c 2.038049,7.94e-4 3.668512,1.716254 3.668512,3.754294 0,2.03805 -1.640324,3.67885 -3.678328,3.67885 h 0.340029 c -0.168764,0.0217 -0.339637,0.0367 -0.514696,0.0367 H 1.3197194 c -0.1574715,-0.003 -0.31692,-0.002 -0.45216894,-0.003 -1.37653631,-1.2e-4 -2.49247156,1.11582 -2.49235406,2.49235 0.6207561,5.9269 0.84198167,9.31357 1.92908102,14.01982 2.01757008,8.52854 4.44934678,16.59301 15.54582158,33.10961 0,0 3.561311,9.01165 2.971393,23.50295 -0.589915,14.49131 -5.331296,51.39559 -5.765021,64.39039 -0.867452,25.9896 -1.287943,32.25451 -1.183391,36.57814 0.209105,8.64725 5.736565,11.74036 12.483477,11.74036 H 190.80583 c 6.7469,0 12.3818,-5.28894 12.22871,-11.79412 0,0 0.63004,-24.43284 -0.82838,-37.61941 -1.287,-11.63673 -6.59006,-50.60571 -6.69571,-65.25286 -0.10565,-14.6471 4.98626,-21.90564 4.98626,-21.90564 5.36059,-8.7836 10.28514,-19.42477 13.86943,-30.44258 1.9886,-6.11278 3.22015,-10.51767 4.02612,-15.89774 h -5.3e-4 c 0.0319,-0.16013 0.048,-0.323 0.0481,-0.48628 -2.7e-4,-1.30683 -1.01008,-2.41059 -2.31356,-2.50424 v 0 h -23.03011 c -0.17507,0 -0.34594,-0.015 -0.5147,-0.0367 h 0.34313 c -2.03804,0 -3.67833,-1.64027 -3.67833,-3.67833 0,-2.03803 1.63047,-3.754029 3.66851,-3.754807 l 2.33629,-0.0011 c 0.0217,5.29e-4 0.0428,0.0021 0.0646,0.0021 h 17.7679 c 2.03805,0 3.67885,-1.640801 3.67885,-3.678844 V 71.527337 c 0,-2.038043 -1.6408,-3.678327 -3.67885,-3.678327 h -2.88716 c 8e-5,-2.65e-4 -9e-5,-7.94e-4 0,-0.0011 l -1.73064,0.0011 h -13.1501 c -0.0752,0 -0.14966,0.0028 -0.22376,0.0072 l -2.20297,0.0011 c -2.03804,0.0011 -3.64319,-1.727099 -3.64319,-3.765145 0,-2.038046 1.64081,-3.678846 3.67885,-3.678846 h -0.55294 c 0.24334,-0.04624 0.49467,-0.07183 0.75241,-0.07183 6.258,-0.03426 12.65195,0.04903 18.85983,-0.0047 1.37654,1.19e-4 2.50332,-1.054322 2.50321,-2.430859 -1.2e-4,-0.383855 -0.0889,-0.762495 -0.25942,-1.106392 C 208.60838,40.298113 198.97616,25.047276 186.63299,12.704112 165.63466,-8.2941994 137.15462,-20.090777 107.4585,-20.090784 Z m 92.5313,89.735607 h 3.8716 c 0.94655,0 1.70894,0.761878 1.70894,1.708422 v 0.09302 c 0,0.946544 -0.76239,1.708423 -1.70894,1.708423 h -3.8716 c -0.94654,0 -1.70842,-0.761879 -1.70842,-1.708423 v -0.09302 c 0,-0.946544 0.76188,-1.708422 1.70842,-1.708422 z m -188.138384,0.07183 h 3.872115 c 0.946538,0 1.708423,0.761881 1.708423,1.708422 v 0.09302 c 0,0.946542 -0.761885,1.708422 -1.708423,1.708422 h -3.872115 c -0.946548,0 -1.708423,-0.76188 -1.708423,-1.708422 V 71.4251 c 0,-0.946541 0.761875,-1.708422 1.708423,-1.708422 z m 179.365274,6.176367 c 0.005,-2.9e-5 0.0107,-2.9e-5 0.016,0 0.004,-1.6e-5 0.008,-1.6e-5 0.0119,0 0.79148,0.0065 1.42953,0.631854 1.42937,1.400948 -1.6e-4,0.773377 -0.64534,1.400286 -1.44126,1.400431 -0.79612,1.33e-4 -1.44162,-0.626856 -1.44177,-1.400431 -1.9e-4,-0.767737 0.63569,-1.392547 1.42575,-1.400948 z m -166.751574,0.07183 h 0.0031 c 0.0041,-1.9e-5 0.0083,-1.9e-5 0.01241,0 0.795917,1.45e-4 1.441101,0.627054 1.441254,1.400431 1.41e-4,0.773579 -0.645128,1.400802 -1.441254,1.400948 -0.796327,1.32e-4 -1.441913,-0.627171 -1.441773,-1.400948 1.09e-4,-0.767728 0.63621,-1.392306 1.426269,-1.400431 z m 166.720054,5.876126 c 0.005,-2.9e-5 0.0107,-2.9e-5 0.016,0 0.004,-1.6e-5 0.008,-1.6e-5 0.0119,0 0.79148,0.0065 1.42954,0.631854 1.42937,1.400947 -1.5e-4,0.773377 -0.64533,1.400286 -1.44125,1.400432 -0.79612,1.32e-4 -1.44162,-0.626856 -1.44177,-1.400432 -1.9e-4,-0.767736 0.63568,-1.392547 1.42575,-1.400947 z m -166.688532,0.07183 c 0.0013,-2e-6 0.0024,-2e-6 0.0036,0 0.004,-1.6e-5 0.0079,-1.6e-5 0.01188,0 0.79612,-1.32e-4 1.441619,0.626856 1.441772,1.400429 1.41e-4,0.773777 -0.645443,1.401083 -1.441772,1.400951 -0.79633,1.32e-4 -1.441913,-0.627174 -1.441773,-1.400951 1.08e-4,-0.767728 0.636209,-1.392303 1.426268,-1.400429 z m 166.756742,5.926252 c 0.005,-2.7e-5 0.01,-2.7e-5 0.015,0 0.004,-1.6e-5 0.008,-1.6e-5 0.0119,0 0.79127,0.0065 1.42925,0.631539 1.42937,1.400431 1.4e-4,0.773581 -0.64513,1.400805 -1.44126,1.400948 -0.79612,-1.46e-4 -1.44139,-0.62737 -1.44125,-1.400948 1.1e-4,-0.767728 0.63621,-1.392306 1.42627,-1.400431 z m -166.824438,0.07131 c 0.0013,-3e-6 0.0024,-3e-6 0.0036,0 0.004,-1.6e-5 0.0079,-1.6e-5 0.01188,0 0.79633,-1.33e-4 1.441913,0.627173 1.441773,1.40095 1.4e-4,0.773777 -0.645446,1.40108 -1.441773,1.400947 -0.796126,-1.42e-4 -1.441397,-0.627366 -1.441256,-1.400947 -1.88e-4,-0.767736 0.635687,-1.39255 1.425752,-1.40095 z m 175.450788,5.403289 h 3.8716 c 0.94654,0 1.70842,0.762397 1.70842,1.708938 v 0.0925 c 0,0.946544 -0.76188,1.708941 -1.70842,1.708941 h -3.8716 c -0.94655,0 -1.70842,-0.762397 -1.70842,-1.708941 v -0.0925 c 0,-0.946541 0.76187,-1.708938 1.70842,-1.708938 z m -187.918243,0.07183 h 3.872115 c 0.946548,0 1.708424,0.761881 1.708424,1.708425 v 0.09302 c 0,0.946541 -0.761876,1.708938 -1.708424,1.708938 h -3.872115 c -0.946548,0 -1.708423,-0.762397 -1.708423,-1.708938 v -0.09302 c 0,-0.946544 0.761875,-1.708425 1.708423,-1.708425 z" />
    <g
       id="U5"
       style="isolation:isolate"
       transform="matrix(0.71300408,0,0,0.71300408,-53.299026,-33.015256)">
      <path
         fill="#b2b2b2"
         id="path1243"
         d="m 301.70376,280.79916 v -3.48293 h 5.24449 v 3.48293 z m 0,-7.1251 v -3.48634 h 5.24449 v 3.48634 z m 10.13295,7.1251 v -3.48293 h 5.24335 v 3.48293 z m 0,-7.1251 v -3.48634 h 5.24335 v 3.48634 z" />
      <path
         fill="#999999"
         id="path1245"
         d="m 302.33543,280.79916 v -10.60803 h 13.95901 v 10.60803 z" />
      <path
         fill="#e5e5e5"
         id="path1247"
         d="m 303.07099,279.94151 v -8.89727 h 12.48789 v 8.89727 z" />
      <path
         fill="#cccccc"
         id="path1249"
         d="m 303.57148,279.47856 v -7.97024 h 11.48918 v 7.97024 z" />
      <circle
         stroke-miterlimit="4"
         stroke-linecap="butt"
         stroke-linejoin="miter"
         stroke="#aaaaaa"
         stroke-width="0.0364"
         fill="#3e2c28"
         id="ellipse1251"
         r="1.3088471"
         cy="275.46063"
         cx="311.93832"
         vector-effect="non-scaling-stroke" />
    </g>
    <g
       id="LED_up"
       transform="rotate(2.1354705,82.888926,5.0408548)">
      <g
         id="LED1">
        <g
           id="LED1_base">
          <rect
             ry="0"
             rx="0"
             y="74.45507"
             x="26.628592"
             height="2.1272275"
             width="6.5331335"
             id="rect9588-3"
             style="fill:url(#linearGradient15943);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0.30289618,0.95302356,0.95302357,-0.30289614,0,0)" />
          <rect
             style="opacity:0.5;fill:#e6e6e6;fill-opacity:1;stroke:url(#linearGradient15945);stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9590-17"
             width="3.9406195"
             height="2.4466155"
             x="27.907564"
             y="74.29538"
             rx="0"
             ry="0"
             transform="matrix(0.30289618,0.95302356,0.95302357,-0.30289614,0,0)" />
          <rect
             style="fill:url(#linearGradient15947);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9592-59"
             width="1.3879977"
             height="2.1272275"
             x="26.628592"
             y="74.45507"
             rx="0"
             ry="0"
             transform="matrix(0.30289618,0.95302356,0.95302357,-0.30289614,0,0)" />
          <rect
             ry="0"
             rx="0"
             y="74.45507"
             x="26.481098"
             height="2.1272275"
             width="1.5354927"
             id="rect9594-6"
             style="fill:url(#linearGradient15949);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0.30289618,0.95302356,0.95302357,-0.30289614,0,0)" />
          <rect
             style="fill:url(#linearGradient15951);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9596-2"
             width="1.5477839"
             height="2.1272275"
             x="-33.407063"
             y="-76.582291"
             rx="0"
             ry="0"
             transform="matrix(-0.30289618,-0.95302356,-0.95302357,0.30289614,0,0)" />
          <rect
             ry="0"
             rx="0"
             y="74.111923"
             x="27.64435"
             height="2.8268409"
             width="4.5883446"
             id="rect9598-1"
             style="opacity:0.5;fill:#cccccc;fill-opacity:1;stroke:none;stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0.30289618,0.95302356,0.95302357,-0.30289614,0,0)" />
          <rect
             transform="matrix(-0.30289618,-0.95302356,-0.95302357,0.30289614,0,0)"
             ry="0"
             rx="0"
             y="-76.281715"
             x="-33.247272"
             height="1.5431404"
             width="1.021361"
             id="rect9600-7"
             style="fill:url(#radialGradient9626-8);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
          <rect
             style="opacity:0.7;fill:url(#radialGradient9628-1);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9602-8"
             width="1.0436394"
             height="1.9009944"
             x="26.628592"
             y="-76.468056"
             rx="0"
             ry="0"
             transform="rotate(72.368362)" />
          <rect
             style="opacity:0.5;fill:#cccccc;fill-opacity:1;stroke:url(#linearGradient15953);stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9604-5"
             width="4.5205436"
             height="2.7800677"
             x="-32.207836"
             y="74.120415"
             rx="0"
             ry="0"
             transform="rotate(-107.63164)" />
          <rect
             ry="0"
             rx="0"
             y="74.44841"
             x="27.106573"
             height="2.1338816"
             width="0.57237053"
             id="rect9606-7"
             style="fill:url(#linearGradient15955);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0.30289618,0.95302356,0.95302357,-0.30289614,0,0)" />
          <rect
             style="fill:url(#linearGradient15957);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9608-4"
             width="0.57237053"
             height="2.1338816"
             x="-32.790485"
             y="-76.582298"
             rx="0"
             ry="0"
             transform="matrix(-0.30289618,-0.95302356,-0.95302357,0.30289614,0,0)" />
          <rect
             transform="rotate(-107.63164)"
             ry="0"
             rx="0"
             y="74.120415"
             x="-32.207836"
             height="2.7800677"
             width="4.5205436"
             id="rect9610-1"
             style="opacity:0.5;fill:url(#radialGradient9636-4);fill-opacity:1;stroke:url(#linearGradient14901);stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        </g>
        <rect
           style="opacity:0;fill:#000000;stroke-width:0.264605"
           id="LED1_led"
           width="2.6700001"
           height="4.4031935"
           x="74.434151"
           y="26.961067"
           ry="0"
           transform="rotate(-17.069222)" />
      </g>
      <g
         id="LED2">
        <g
           id="LED2_base">
          <rect
             ry="0"
             rx="0"
             y="78.410667"
             x="26.460352"
             height="2.1272273"
             width="6.533133"
             id="rect9588-0"
             style="fill:url(#linearGradient16121);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0.30178824,0.95337498,0.953375,-0.30178819,0,0)" />
          <rect
             style="opacity:0.5;fill:#e6e6e6;fill-opacity:1;stroke:url(#linearGradient16123);stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9590-9"
             width="3.9406192"
             height="2.4466155"
             x="27.739326"
             y="78.250977"
             rx="0"
             ry="0"
             transform="matrix(0.30178824,0.95337498,0.953375,-0.30178819,0,0)" />
          <rect
             style="fill:url(#linearGradient16125);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9592-2"
             width="1.3879976"
             height="2.1272273"
             x="26.460352"
             y="78.410667"
             rx="0"
             ry="0"
             transform="matrix(0.30178824,0.95337498,0.953375,-0.30178819,0,0)" />
          <rect
             ry="0"
             rx="0"
             y="78.410667"
             x="26.312859"
             height="2.1272273"
             width="1.5354925"
             id="rect9594-5"
             style="fill:url(#linearGradient16127);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0.30178824,0.95337498,0.953375,-0.30178819,0,0)" />
          <rect
             style="fill:url(#linearGradient16129);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9596-40"
             width="1.5477839"
             height="2.1272273"
             x="-33.238823"
             y="-80.537895"
             rx="0"
             ry="0"
             transform="matrix(-0.30178824,-0.95337498,-0.953375,0.30178819,0,0)" />
          <rect
             ry="0"
             rx="0"
             y="78.067528"
             x="27.47611"
             height="2.8268409"
             width="4.5883441"
             id="rect9598-5"
             style="opacity:0.5;fill:#cccccc;fill-opacity:1;stroke:none;stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0.30178824,0.95337498,0.953375,-0.30178819,0,0)" />
          <rect
             transform="matrix(-0.30178824,-0.95337498,-0.953375,0.30178819,0,0)"
             ry="0"
             rx="0"
             y="-80.23732"
             x="-33.079033"
             height="1.5431403"
             width="1.0213609"
             id="rect9600-94"
             style="fill:url(#radialGradient9626-18);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
          <rect
             style="opacity:0.7;fill:url(#radialGradient9628-4);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9602-6"
             width="1.0436393"
             height="1.9009943"
             x="26.460352"
             y="-80.423653"
             rx="0"
             ry="0"
             transform="rotate(72.434959)" />
          <rect
             style="opacity:0.5;fill:#cccccc;fill-opacity:1;stroke:url(#linearGradient16131);stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9604-9"
             width="4.5205431"
             height="2.7800677"
             x="-32.039597"
             y="78.076019"
             rx="0"
             ry="0"
             transform="rotate(-107.56504)" />
          <rect
             ry="0"
             rx="0"
             y="78.404015"
             x="26.938334"
             height="2.1338813"
             width="0.57237053"
             id="rect9606-2"
             style="fill:url(#linearGradient16133);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0.30178824,0.95337498,0.953375,-0.30178819,0,0)" />
          <rect
             style="fill:url(#linearGradient16135);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9608-2"
             width="0.57237053"
             height="2.1338813"
             x="-32.622246"
             y="-80.537903"
             rx="0"
             ry="0"
             transform="matrix(-0.30178824,-0.95337498,-0.953375,0.30178819,0,0)" />
          <rect
             transform="rotate(-107.56504)"
             ry="0"
             rx="0"
             y="78.076019"
             x="-32.039597"
             height="2.7800677"
             width="4.5205431"
             id="rect9610-4"
             style="opacity:0.5;fill:url(#radialGradient9636-77);fill-opacity:1;stroke:url(#linearGradient14901);stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        </g>
        <rect
           style="fill:#000000;stroke-width:0.264605;opacity:0"
           id="LED2_led"
           width="2.6700001"
           height="4.4031935"
           x="78.41935"
           y="26.875372"
           ry="0"
           transform="rotate(-17.069222)" />
      </g>
      <g
         id="LED3">
        <g
           id="LED3_base">
          <rect
             ry="0"
             rx="0"
             y="85.142578"
             x="22.659975"
             height="2.1272273"
             width="6.533133"
             id="rect9588"
             style="fill:url(#linearGradient9616);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0.26230372,0.96498537,0.96498536,-0.26230373,0,0)" />
          <rect
             style="opacity:0.5;fill:#e6e6e6;fill-opacity:1;stroke:url(#linearGradient9618);stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9590"
             width="3.9406195"
             height="2.4466152"
             x="23.93895"
             y="84.982887"
             rx="0"
             ry="0"
             transform="matrix(0.26230372,0.96498537,0.96498536,-0.26230373,0,0)" />
          <rect
             style="fill:url(#linearGradient9620);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9592"
             width="1.3879976"
             height="2.1272273"
             x="22.659975"
             y="85.142578"
             rx="0"
             ry="0"
             transform="matrix(0.26230372,0.96498537,0.96498536,-0.26230373,0,0)" />
          <rect
             ry="0"
             rx="0"
             y="85.142578"
             x="22.512482"
             height="2.1272273"
             width="1.5354925"
             id="rect9594"
             style="fill:url(#linearGradient9622);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0.26230372,0.96498537,0.96498536,-0.26230373,0,0)" />
          <rect
             style="fill:url(#linearGradient9624);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9596"
             width="1.5477839"
             height="2.1272273"
             x="-29.438446"
             y="-87.269806"
             rx="0"
             ry="0"
             transform="matrix(-0.26230372,-0.96498537,-0.96498536,0.26230373,0,0)" />
          <rect
             ry="0"
             rx="0"
             y="84.799438"
             x="23.675734"
             height="2.8268409"
             width="4.5883441"
             id="rect9598"
             style="opacity:0.5;fill:#cccccc;fill-opacity:1;stroke:none;stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0.26230372,0.96498537,0.96498536,-0.26230373,0,0)" />
          <rect
             transform="matrix(-0.26230372,-0.96498537,-0.96498536,0.26230373,0,0)"
             ry="0"
             rx="0"
             y="-86.969231"
             x="-29.278656"
             height="1.5431403"
             width="1.0213609"
             id="rect9600"
             style="fill:url(#radialGradient9626);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
          <rect
             style="opacity:0.7;fill:url(#radialGradient9628);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9602"
             width="1.0436393"
             height="1.9009943"
             x="22.659975"
             y="-87.155563"
             rx="0"
             ry="0"
             transform="rotate(74.793199)" />
          <rect
             style="opacity:0.5;fill:#cccccc;fill-opacity:1;stroke:url(#linearGradient9630);stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9604"
             width="4.5205431"
             height="2.7800677"
             x="-28.23922"
             y="84.80793"
             rx="0"
             ry="0"
             transform="rotate(-105.2068)" />
          <rect
             ry="0"
             rx="0"
             y="85.135925"
             x="23.137957"
             height="2.1338813"
             width="0.57237053"
             id="rect9606"
             style="fill:url(#linearGradient9632);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0.26230372,0.96498537,0.96498536,-0.26230373,0,0)" />
          <rect
             style="fill:url(#linearGradient9634);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9608"
             width="0.57237053"
             height="2.1338813"
             x="-28.821869"
             y="-87.269814"
             rx="0"
             ry="0"
             transform="matrix(-0.26230372,-0.96498537,-0.96498536,0.26230373,0,0)" />
          <rect
             transform="rotate(-105.2068)"
             ry="0"
             rx="0"
             y="84.80793"
             x="-28.23922"
             height="2.7800677"
             width="4.5205431"
             id="rect9610"
             style="opacity:0.5;fill:url(#radialGradient9636);fill-opacity:1;stroke:url(#linearGradient14901);stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        </g>
        <rect
           style="fill:#000000;stroke-width:0.264605;opacity:0"
           id="LED5_led"
           width="2.6700001"
           height="4.4031935"
           x="85.804054"
           y="20.847572"
           ry="0"
           transform="rotate(-15.242443,11.489467,2.0328553)" />
      </g>
    </g>
    <g
       id="LED_bottom"
       transform="translate(-6.879167,5.8208336)">
      <g
         id="LED5">
        <g
           id="LED5_base">
          <rect
             ry="0"
             rx="0"
             y="161.8674"
             x="177.63638"
             height="2.1272273"
             width="6.533133"
             id="rect9588-2"
             style="fill:url(#linearGradient9616-9);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0,1,1,0,0,0)" />
          <rect
             style="opacity:0.5;fill:#e6e6e6;fill-opacity:1;stroke:url(#linearGradient9618-8);stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9590-5"
             width="3.9406195"
             height="2.4466155"
             x="178.91536"
             y="161.7077"
             rx="0"
             ry="0"
             transform="matrix(0,1,1,0,0,0)" />
          <rect
             style="fill:url(#linearGradient9620-0);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9592-4"
             width="1.3879977"
             height="2.1272273"
             x="177.63638"
             y="161.8674"
             rx="0"
             ry="0"
             transform="matrix(0,1,1,0,0,0)" />
          <rect
             ry="0"
             rx="0"
             y="161.8674"
             x="177.48889"
             height="2.1272273"
             width="1.5354925"
             id="rect9594-7"
             style="fill:url(#linearGradient9622-3);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0,1,1,0,0,0)" />
          <rect
             style="fill:url(#linearGradient9624-6);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9596-4"
             width="1.5477839"
             height="2.1272273"
             x="-184.41486"
             y="-163.99463"
             rx="0"
             ry="0"
             transform="matrix(0,-1,-1,0,0,0)" />
          <rect
             ry="0"
             rx="0"
             y="161.52425"
             x="178.65215"
             height="2.8268409"
             width="4.5883441"
             id="rect9598-4"
             style="opacity:0.5;fill:#cccccc;fill-opacity:1;stroke:none;stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0,1,1,0,0,0)" />
          <rect
             transform="matrix(0,-1,-1,0,0,0)"
             ry="0"
             rx="0"
             y="-163.69405"
             x="-184.25507"
             height="1.5431403"
             width="1.0213609"
             id="rect9600-3"
             style="fill:url(#radialGradient9626-1);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
          <rect
             style="opacity:0.7;fill:url(#radialGradient9628-3);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9602-0"
             width="1.0436393"
             height="1.9009943"
             x="177.63638"
             y="-163.88039"
             rx="0"
             ry="0"
             transform="rotate(90)" />
          <rect
             style="opacity:0.5;fill:#cccccc;fill-opacity:1;stroke:url(#linearGradient9630-1);stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9604-7"
             width="4.5205436"
             height="2.7800677"
             x="-183.21564"
             y="161.53275"
             rx="0"
             ry="0"
             transform="rotate(-90)" />
          <rect
             ry="0"
             rx="0"
             y="161.86075"
             x="178.11436"
             height="2.1338813"
             width="0.57237053"
             id="rect9606-8"
             style="fill:url(#linearGradient9632-4);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0,1,1,0,0,0)" />
          <rect
             style="fill:url(#linearGradient9634-5);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9608-6"
             width="0.57237053"
             height="2.1338813"
             x="-183.79828"
             y="-163.99463"
             rx="0"
             ry="0"
             transform="matrix(0,-1,-1,0,0,0)" />
          <rect
             transform="rotate(-90)"
             ry="0"
             rx="0"
             y="161.53275"
             x="-183.21564"
             height="2.7800677"
             width="4.5205436"
             id="rect9610-8"
             style="opacity:0.5;fill:url(#radialGradient9636-6);fill-opacity:1;stroke:url(#linearGradient14901);stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        </g>
        <rect
           style="fill:#000000;stroke-width:0.264583;opacity:0"
           id="LED3_led"
           width="2.5069783"
           height="4.1802754"
           x="161.66763"
           y="178.8933" />
      </g>
      <g
         id="LED4">
        <g
           id="LED4_base">
          <rect
             ry="0"
             rx="0"
             y="165.57156"
             x="177.63638"
             height="2.1272273"
             width="6.533133"
             id="rect9588-6"
             style="fill:url(#linearGradient10689);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0,1,1,0,0,0)" />
          <rect
             style="opacity:0.5;fill:#e6e6e6;fill-opacity:1;stroke:url(#linearGradient10691);stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9590-1"
             width="3.9406195"
             height="2.4466155"
             x="178.91536"
             y="165.41187"
             rx="0"
             ry="0"
             transform="matrix(0,1,1,0,0,0)" />
          <rect
             style="fill:url(#linearGradient10693);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9592-5"
             width="1.3879977"
             height="2.1272273"
             x="177.63638"
             y="165.57156"
             rx="0"
             ry="0"
             transform="matrix(0,1,1,0,0,0)" />
          <rect
             ry="0"
             rx="0"
             y="165.57156"
             x="177.48889"
             height="2.1272273"
             width="1.5354925"
             id="rect9594-9"
             style="fill:url(#linearGradient10695);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0,1,1,0,0,0)" />
          <rect
             style="fill:url(#linearGradient10697);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9596-49"
             width="1.5477839"
             height="2.1272273"
             x="-184.41486"
             y="-167.69879"
             rx="0"
             ry="0"
             transform="matrix(0,-1,-1,0,0,0)" />
          <rect
             ry="0"
             rx="0"
             y="165.22841"
             x="178.65215"
             height="2.8268409"
             width="4.5883441"
             id="rect9598-0"
             style="opacity:0.5;fill:#cccccc;fill-opacity:1;stroke:none;stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0,1,1,0,0,0)" />
          <rect
             transform="matrix(0,-1,-1,0,0,0)"
             ry="0"
             rx="0"
             y="-167.39821"
             x="-184.25507"
             height="1.5431403"
             width="1.0213609"
             id="rect9600-9"
             style="fill:url(#radialGradient9626-9);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
          <rect
             style="opacity:0.7;fill:url(#radialGradient9628-6);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9602-1"
             width="1.0436393"
             height="1.9009943"
             x="177.63638"
             y="-167.58455"
             rx="0"
             ry="0"
             transform="rotate(90)" />
          <rect
             style="opacity:0.5;fill:#cccccc;fill-opacity:1;stroke:url(#linearGradient10699);stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9604-77"
             width="4.5205436"
             height="2.7800677"
             x="-183.21564"
             y="165.23691"
             rx="0"
             ry="0"
             transform="rotate(-90)" />
          <rect
             ry="0"
             rx="0"
             y="165.56491"
             x="178.11436"
             height="2.1338813"
             width="0.57237053"
             id="rect9606-1"
             style="fill:url(#linearGradient10701);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0,1,1,0,0,0)" />
          <rect
             style="fill:url(#linearGradient10703);fill-opacity:1;stroke:none;stroke-width:0.676892;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect9608-1"
             width="0.57237053"
             height="2.1338813"
             x="-183.79828"
             y="-167.69879"
             rx="0"
             ry="0"
             transform="matrix(0,-1,-1,0,0,0)" />
          <rect
             transform="rotate(-90)"
             ry="0"
             rx="0"
             y="165.23691"
             x="-183.21564"
             height="2.7800677"
             width="4.5205436"
             id="rect9610-5"
             style="opacity:0.5;fill:url(#radialGradient9636-7);fill-opacity:1;stroke:url(#linearGradient14901);stroke-width:0.112815;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        </g>
        <rect
           style="display:inline;fill:#000000;stroke-width:0.264583;opacity:0"
           id="LED4_led"
           width="2.4853795"
           height="4.1110773"
           x="165.37453"
           y="178.88417" />
      </g>
    </g>
    <g
       transform="matrix(0.90529196,0,0,0.90529196,-270.38639,7.8258306)"
       id="screen">
      <g
         id="screen_base">
        <path
           id="path18026"
           style="display:inline;fill:#bdbdb9;fill-opacity:1;stroke:#adada3;stroke-width:2.93291;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 1577.1621,32.410156 a 316.17052,316.38713 0 0 0 -315.8574,316.386724 316.17052,316.38713 0 0 0 144.6797,265.80273 v 112.75586 h 342.9824 V 614.59961 a 316.17052,316.38713 0 0 0 144.6797,-265.80273 316.17052,316.38713 0 0 0 -316.1719,-316.386724 316.17052,316.38713 0 0 0 -0.3125,0 z"
           transform="matrix(0.26458333,0,0,0.26458333,6.6092859e-6,-7.0879528e-7)" />
        <ellipse
           style="display:inline;fill:#030000;fill-opacity:1;stroke:#939393;stroke-width:0.881;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="screen_show"
           cx="417.37372"
           cy="92.285927"
           rx="77.698364"
           ry="76.823769" />
      </g>
      <g
         transform="translate(-0.65662065,1.7535772)"
         id="screen_showcase">
        <path
           id="path18596"
           style="fill:#ffff00;fill-opacity:1;stroke:#000000;stroke-width:0.775999;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 380.47626,65.632179 a 30,30 0 0 0 -29.61836,25.23205 h 10.19524 a 19.999999,19.999999 0 0 1 19.34404,-15.231629 19.999999,19.999999 0 0 1 0.0791,0 19.999999,19.999999 0 0 1 19.42309,15.231629 h 10.19577 a 30,30 0 0 0 -29.61886,-25.23205 z" />
        <path
           d="m 455.58397,65.313911 a 30.000001,30.000001 0 0 0 -29.61835,25.23205 h 10.19524 a 20,20 0 0 1 19.34403,-15.23163 20,20 0 0 1 0.0791,0 20,20 0 0 1 19.42309,15.23163 h 10.19577 a 30.000001,30.000001 0 0 0 -29.61886,-25.23205 z"
           style="fill:#ffff00;fill-opacity:1;stroke:#000000;stroke-width:0.775999;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="path18596-9" />
        <rect
           style="fill:#000000;stroke-width:0.265538;fill-opacity:0"
           id="screen_output"
           width="100.8751"
           height="95.900352"
           x="58.593052"
           y="67.627831"
           ry="0"
           transform="matrix(1.104616,0,0,1.104616,297.53497,-37.078593)" />
      </g>
    </g>
    <g
       transform="matrix(1.3065917,0,0,1.3065917,97.398426,190.51406)"
       id="LED6">
      <g
         id="LED6_base">
        <rect
           fill="#dcdcdc"
           width="15.307"
           x="0"
           y="3.402"
           height="1.984"
           id="rect6678" />
        <rect
           fill="#dcdcdc"
           width="15.307"
           x="0"
           y="12.756"
           height="1.984"
           id="rect6680" />
        <rect
           fill="#f0f0f0"
           width="14.173"
           x="0.56699997"
           y="1.984"
           height="14.173"
           id="rect6682" />
        <circle
           fill="#dcdcdc"
           r="6.0240002"
           cx="7.6539998"
           cy="9.0710001"
           id="circle6684" />
        <circle
           fill="#c8c8c8"
           r="4.961"
           cx="7.6539998"
           cy="9.0710001"
           id="circle6686" />
        <polygon
           fill="#e6e6e6"
           points="3.118,1.984 0.567,1.984 0.567,4.535 "
           id="polygon6688" />
        <path
           fill="#f0f0f0"
           d="M 10.726,6.236 V 6.36 c 0,0.157 -0.127,0.283 -0.283,0.283 H 8.437 C 8.28,6.643 8.154,6.516 8.154,6.36 V 4.161 c -0.167,-0.017 -0.329,-0.05 -0.5,-0.05 -0.171,0 -0.333,0.033 -0.5,0.05 v 6.905 c 0,0.157 -0.127,0.283 -0.283,0.283 H 4.864 c -0.157,0 -0.283,-0.127 -0.283,-0.283 V 6.236 C 4.581,6.079 4.454,5.953 4.298,5.953 H 3.824 c -0.696,0.854 -1.131,1.93 -1.131,3.118 0,1.263 0.486,2.402 1.263,3.278 H 6.87 c 0.157,0 0.283,0.127 0.283,0.283 v 1.349 c 0.167,0.017 0.329,0.05 0.5,0.05 0.171,0 0.333,-0.033 0.5,-0.05 V 7.927 C 8.153,7.77 8.28,7.644 8.436,7.644 h 2.006 c 0.157,0 0.283,0.127 0.283,0.283 v 3.979 c 0,0.157 0.127,0.283 0.283,0.283 h 0.473 c 0.696,-0.854 1.131,-1.93 1.131,-3.118 0,-1.188 -0.435,-2.264 -1.131,-3.118 H 11.01 c -0.157,0 -0.284,0.127 -0.284,0.283 z"
           id="path6690" />
        <rect
           fill="#645050"
           width="2.2679999"
           x="4.7220001"
           y="8.8439999"
           height="1.701"
           id="rect6692" />
        <rect
           fill="#ff4000"
           width="0.85000002"
           x="8.4949999"
           y="8.7869997"
           height="0.56699997"
           id="rect6694" />
        <rect
           fill="#40ff40"
           width="0.85000002"
           x="8.4949999"
           y="11.622"
           height="0.56699997"
           id="rect6696" />
        <rect
           fill="#4040ff"
           width="0.85000002"
           x="8.4949999"
           y="5.9530001"
           height="0.56699997"
           id="rect6698" />
        <text
           xml:space="preserve"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.175px;font-family:Ubuntu;-inkscape-font-specification:Ubuntu;fill:none;stroke:#ffffff;stroke-width:0.264583;stroke-opacity:1"
           x="101.32783"
           y="215.95039"
           id="text4823"
           transform="matrix(0.76535004,0,0,0.76535004,-74.543888,-145.80994)"><tspan
             id="tspan4821"
             style="stroke-width:0.264583"
             x="101.32783"
             y="215.95039">Led RGB</tspan></text>
      </g>
      <path
         style="fill:#000000;stroke-width:0.202499;opacity:0"
         id="LED6_led"
         d="M 12.943346,9.1339188 A 5.2593479,5.3070507 0 0 1 7.7102465,14.440903 5.2593479,5.3070507 0 0 1 2.4249122,9.186891 5.2593479,5.3070507 0 0 1 7.6052556,3.8274629 5.2593479,5.3070507 0 0 1 12.942298,9.0279795" />
    </g>
    <g
       id="BTN_menu"
       style="display:inline;enable-background:new"
       transform="matrix(6.1606194e-4,0.79999976,-0.79999976,6.1606194e-4,283.6596,152.86883)">
      <g
         id="BTN_menu_base">
        <path
           style="display:inline;enable-background:new;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           d="M 86.342987,209.89487 H 107.3555 v -0.77824 H 86.342987 Z"
           id="rect22675-3"
           transform="translate(1.3629339e-6,-1.138437e-5)" />
        <path
           style="display:inline;enable-background:new;fill:#666666;fill-opacity:1;stroke:none;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           d="m 107.35549,209.89487 v 21.01251 h 1.06172 v -21.01251 z"
           id="rect22681-7"
           transform="translate(1.3629339e-6,-1.138437e-5)" />
        <rect
           transform="matrix(0,0.99999999,0.99999999,0,1.3629339e-6,-1.138437e-5)"
           style="display:inline;enable-background:new;fill:url(#linearGradient7160-8-6);fill-opacity:1;stroke:none;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           id="rect22683-5"
           width="21.012514"
           height="0.77824152"
           x="209.89484"
           y="85.564751"
           rx="0"
           ry="0" />
        <rect
           transform="matrix(0,-0.99999999,-0.99999999,0,1.3629339e-6,-1.138437e-5)"
           style="display:inline;enable-background:new;fill:url(#linearGradient1691);fill-opacity:1;stroke:none;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           id="rect22685-2"
           width="1.5564823"
           height="0.77824152"
           x="-228.51706"
           y="-85.59256"
           rx="0"
           ry="0" />
        <rect
           ry="0"
           rx="0"
           y="-85.59256"
           x="-213.67488"
           height="0.77824152"
           width="1.5564823"
           id="rect22687-2"
           style="display:inline;enable-background:new;fill:url(#linearGradient1693);fill-opacity:1;stroke:none;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           transform="matrix(0,-0.99999999,-0.99999999,0,1.3629339e-6,-1.138437e-5)" />
        <rect
           ry="0"
           rx="0"
           y="108.07818"
           x="212.11839"
           height="0.77824152"
           width="1.5564823"
           id="rect22719-9"
           style="display:inline;enable-background:new;fill:url(#linearGradient1695);fill-opacity:1;stroke:none;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           transform="matrix(0,0.99999999,0.99999999,0,1.3629339e-6,-1.138437e-5)" />
        <rect
           transform="matrix(0,0.99999999,0.99999999,0,1.3629339e-6,-1.138437e-5)"
           style="display:inline;enable-background:new;fill:url(#linearGradient19420-1);fill-opacity:1;stroke:none;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           id="rect22721-7"
           width="1.5564823"
           height="0.77824152"
           x="226.96057"
           y="108.07818"
           rx="0"
           ry="0" />
        <rect
           transform="matrix(0.99999999,0,0,-0.99999999,1.3629339e-6,-1.138437e-5)"
           ry="0"
           rx="0"
           y="-231.68561"
           x="86.342987"
           height="0.77824152"
           width="21.012514"
           id="rect22677-3"
           style="display:inline;enable-background:new;fill:url(#linearGradient7152-0-8);fill-opacity:1;stroke:none;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        <rect
           style="display:inline;enable-background:new;fill:url(#linearGradient1697);fill-opacity:1;stroke:none;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           id="rect22851-6"
           width="21.012514"
           height="21.012514"
           x="86.342987"
           y="209.89487"
           rx="0"
           ry="0"
           transform="translate(1.3629339e-6,-1.138437e-5)" />
        <rect
           ry="0"
           rx="0"
           y="209.89487"
           x="86.342987"
           height="21.012514"
           width="21.012514"
           id="rect23001-1"
           style="opacity:0.5;fill:url(#linearGradient1699);fill-opacity:1;stroke:url(#linearGradient1701);stroke-width:0.132292;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        <text
           xml:space="preserve"
           style="display:inline;enable-background:new;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.175px;font-family:Ubuntu;-inkscape-font-specification:Ubuntu;fill:none;stroke:#ffffff;stroke-width:0.264583;stroke-opacity:1"
           x="103.34871"
           y="243.72841"
           id="text4811"
           transform="matrix(9.6259677e-4,-1.2499996,1.2499996,9.6259677e-4,-191.35903,354.42725)"><tspan
             id="tspan4809"
             style="stroke-width:0.264583"
             x="103.34871"
             y="243.72841">Menu</tspan></text>
        <circle
           style="display:inline;enable-background:new;fill:#333333;fill-opacity:1;stroke:#1a1a1a;stroke-width:0.375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter:url(#filter23159-0)"
           id="circle23013-2"
           cx="286.43359"
           cy="510.03323"
           r="16.266335"
           transform="matrix(0.35277776,0,0,0.35277776,-4.0314061,40.361571)" />
        <circle
           r="5.7384014"
           cy="220.40112"
           cx="96.849243"
           id="path23011-9"
           style="display:inline;enable-background:new;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.132292;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           transform="translate(1.3629339e-6,-1.138437e-5)" />
        <path
           id="circle23167-3"
           d="m 282.9269,526.03992 c 7.88098,1.68545 16.40643,-3.56301 18.41357,-11.37529 2.40818,-7.87087 -2.40449,-17.01212 -10.27502,-19.44269 -7.7626,-2.84898 -17.15863,1.55555 -19.98762,9.31618 -3.15747,7.58339 0.70491,17.13835 8.2792,20.34359 1.13436,0.53464 2.34319,0.90453 3.56987,1.15821 z"
           style="display:inline;enable-background:new;fill:#000000;fill-opacity:1;stroke:url(#linearGradient14882-2);stroke-width:0.15;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter:url(#filter23261-6)"
           transform="matrix(0.35277776,0,0,0.35277776,-4.0314061,40.361571)" />
        <circle
           style="fill:none;fill-opacity:1;stroke:url(#linearGradient1703);stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter:url(#filter9372-7)"
           id="BTN_menu_BTN"
           cx="96.849243"
           cy="220.40112"
           r="5.7384014" />
      </g>
    </g>
    <g
       id="BTN_a_b"
       transform="translate(0,11.112501)">
      <g
         id="BTN_b">
        <g
           id="BTN_b_base"
           transform="translate(0)">
          <path
             style="fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.635;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             d="m 151.49864,207.1255 10.68682,12.97568 0.48058,-0.39581 -10.68682,-12.97568 z"
             id="rect22675"
             transform="translate(0)" />
          <path
             style="fill:#666666;fill-opacity:1;stroke:none;stroke-width:0.635;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             d="m 162.18545,220.10118 -12.97568,10.68681 0.53998,0.65563 12.97569,-10.68681 z"
             id="rect22681"
             transform="translate(0)" />
          <rect
             transform="matrix(-0.77190232,0.63574115,0.63574115,0.77190232,0,-1e-6)"
             style="fill:url(#linearGradient7160);fill-opacity:1;stroke:none;stroke-width:0.635;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect22683"
             width="16.810011"
             height="0.62259322"
             x="14.736021"
             y="255.57198"
             rx="0"
             ry="0" />
          <rect
             transform="matrix(0.77190232,-0.63574115,-0.63574115,-0.77190232,0,-1e-6)"
             style="fill:url(#linearGradient10678);fill-opacity:1;stroke:none;stroke-width:0.635;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect22685"
             width="1.2451859"
             height="0.62259322"
             x="-29.633802"
             y="-255.59424"
             rx="0"
             ry="0" />
          <rect
             ry="0"
             rx="0"
             y="-255.59424"
             x="-17.760056"
             height="0.62259322"
             width="1.2451859"
             id="rect22687"
             style="fill:url(#linearGradient10680);fill-opacity:1;stroke:none;stroke-width:0.635;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0.77190232,-0.63574115,-0.63574115,-0.77190232,0,-1e-6)" />
          <rect
             ry="0"
             rx="0"
             y="273.58273"
             x="16.51487"
             height="0.62259322"
             width="1.2451859"
             id="rect22719"
             style="fill:url(#linearGradient10682);fill-opacity:1;stroke:none;stroke-width:0.635;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(-0.77190232,0.63574115,0.63574115,0.77190232,0,-1e-6)" />
          <rect
             transform="matrix(-0.77190232,0.63574115,0.63574115,0.77190232,0,-1e-6)"
             style="fill:url(#linearGradient14874);fill-opacity:1;stroke:none;stroke-width:0.635;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect22721"
             width="1.2451859"
             height="0.62259322"
             x="28.388617"
             y="273.58273"
             rx="0"
             ry="0" />
          <rect
             transform="matrix(0.63574115,0.77190232,0.77190232,-0.63574115,0,-1e-6)"
             ry="0"
             rx="0"
             y="-32.168636"
             x="256.19458"
             height="0.62259322"
             width="16.810011"
             id="rect22677"
             style="fill:url(#linearGradient7152);fill-opacity:1;stroke:none;stroke-width:0.635;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
          <rect
             style="fill:url(#linearGradient10684);fill-opacity:1;stroke:none;stroke-width:0.635;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect22851"
             width="16.810011"
             height="16.810011"
             x="256.19458"
             y="14.736046"
             rx="0"
             ry="0"
             transform="rotate(50.525024,1.0616353e-6,-4.955852e-7)" />
          <rect
             ry="0"
             rx="0"
             y="14.736046"
             x="256.19458"
             height="16.810011"
             width="16.810011"
             id="rect23001"
             style="opacity:0.5;fill:url(#linearGradient14872);fill-opacity:1;stroke:url(#linearGradient13378);stroke-width:0.105834;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="rotate(50.525024)" />
          <text
             xml:space="preserve"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.175px;font-family:Ubuntu;-inkscape-font-specification:Ubuntu;fill:none;stroke:#ffffff;stroke-width:0.264583;stroke-opacity:1"
             x="-23.61199"
             y="287.42441"
             id="text4815"
             transform="rotate(-37.9536,-16.157774,-5.5562505)"><tspan
               id="tspan4813"
               style="stroke-width:0.264583"
               x="-23.61199"
               y="287.42441">B</tspan></text>
          <circle
             style="fill:#333333;fill-opacity:1;stroke:#1a1a1a;stroke-width:0.375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter:url(#filter23159)"
             id="circle23013"
             cx="286.43359"
             cy="510.03323"
             r="16.266335"
             transform="matrix(0.17942028,0.21784798,-0.21784798,0.17942028,210.22538,65.093899)" />
          <circle
             r="4.5907211"
             cy="23.14105"
             cx="264.59958"
             id="path23011"
             style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.105834;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="rotate(50.525024,1.0616353e-6,-4.955852e-7)" />
          <path
             id="circle23167"
             d="m 282.9269,526.03992 c 7.88098,1.68545 16.40643,-3.56301 18.41357,-11.37529 2.40818,-7.87087 -2.40449,-17.01212 -10.27502,-19.44269 -7.7626,-2.84898 -17.15863,1.55555 -19.98762,9.31618 -3.15747,7.58339 0.70491,17.13835 8.2792,20.34359 1.13436,0.53464 2.34319,0.90453 3.56987,1.15821 z"
             style="fill:#000000;fill-opacity:1;stroke:url(#linearGradient14882);stroke-width:0.15;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter:url(#filter23261)"
             transform="matrix(0.17942028,0.21784798,-0.21784798,0.17942028,210.22538,65.093899)" />
          <circle
             style="fill:none;fill-opacity:1;stroke:url(#linearGradient23165);stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter:url(#filter9372)"
             id="BTN_b_BTN"
             cx="96.849243"
             cy="220.40112"
             r="5.7384014"
             transform="matrix(0.50859292,0.61752185,-0.61752185,0.50859292,237.19988,47.05577)" />
        </g>
      </g>
      <g
         id="BTN_a"
         transform="translate(0,-11.112501)">
        <g
           id="BTN_a_base"
           transform="translate(18.170174,-3.012105)">
          <path
             style="fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.635;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             d="m 151.49864,207.1255 10.68682,12.97568 0.48058,-0.39581 -10.68682,-12.97568 z"
             id="rect22675-8" />
          <path
             style="fill:#666666;fill-opacity:1;stroke:none;stroke-width:0.635;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             d="m 162.18545,220.10118 -12.97568,10.68681 0.53998,0.65563 12.97569,-10.68681 z"
             id="rect22681-79" />
          <rect
             transform="matrix(-0.77190232,0.63574115,0.63574115,0.77190232,0,-1e-6)"
             style="fill:url(#linearGradient60);fill-opacity:1;stroke:none;stroke-width:0.635;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect22683-2"
             width="16.810011"
             height="0.62259322"
             x="14.736021"
             y="255.57198"
             rx="0"
             ry="0" />
          <rect
             transform="matrix(0.77190232,-0.63574115,-0.63574115,-0.77190232,0,-1e-6)"
             style="fill:url(#linearGradient61);fill-opacity:1;stroke:none;stroke-width:0.635;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect22685-0"
             width="1.2451859"
             height="0.62259322"
             x="-29.633802"
             y="-255.59424"
             rx="0"
             ry="0" />
          <rect
             ry="0"
             rx="0"
             y="-255.59424"
             x="-17.760056"
             height="0.62259322"
             width="1.2451859"
             id="rect22687-23"
             style="fill:url(#linearGradient62);fill-opacity:1;stroke:none;stroke-width:0.635;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(0.77190232,-0.63574115,-0.63574115,-0.77190232,0,-1e-6)" />
          <rect
             ry="0"
             rx="0"
             y="273.58273"
             x="16.51487"
             height="0.62259322"
             width="1.2451859"
             id="rect22719-7"
             style="fill:url(#linearGradient63);fill-opacity:1;stroke:none;stroke-width:0.635;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="matrix(-0.77190232,0.63574115,0.63574115,0.77190232,0,-1e-6)" />
          <rect
             transform="matrix(-0.77190232,0.63574115,0.63574115,0.77190232,0,-1e-6)"
             style="fill:url(#linearGradient64);fill-opacity:1;stroke:none;stroke-width:0.635;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect22721-5"
             width="1.2451859"
             height="0.62259322"
             x="28.388617"
             y="273.58273"
             rx="0"
             ry="0" />
          <rect
             transform="matrix(0.63574115,0.77190232,0.77190232,-0.63574115,0,-1e-6)"
             ry="0"
             rx="0"
             y="-32.168636"
             x="256.19458"
             height="0.62259322"
             width="16.810011"
             id="rect22677-9"
             style="fill:url(#linearGradient65);fill-opacity:1;stroke:none;stroke-width:0.635;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
          <rect
             style="fill:url(#linearGradient66);fill-opacity:1;stroke:none;stroke-width:0.635;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect22851-2"
             width="16.810011"
             height="16.810011"
             x="256.19458"
             y="14.736046"
             rx="0"
             ry="0"
             transform="rotate(50.525024,1.0616353e-6,-4.955852e-7)" />
          <rect
             ry="0"
             rx="0"
             y="14.736046"
             x="256.19458"
             height="16.810011"
             width="16.810011"
             id="rect23001-2"
             style="opacity:0.5;fill:url(#linearGradient67);fill-opacity:1;stroke:url(#linearGradient68);stroke-width:0.105834;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="rotate(50.525024)" />
          <text
             xml:space="preserve"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.175px;font-family:Ubuntu;-inkscape-font-specification:Ubuntu;fill:none;stroke:#ffffff;stroke-width:0.264583;stroke-opacity:1"
             x="-30.677876"
             y="285.52975"
             id="text4819"
             transform="rotate(-44.114767,-5.3681989,23.927752)"><tspan
               id="tspan4817"
               style="stroke-width:0.264583"
               x="-30.677876"
               y="285.52975">A</tspan></text>
          <circle
             style="fill:#333333;fill-opacity:1;stroke:#1a1a1a;stroke-width:0.375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter:url(#filter23159-6)"
             id="circle23013-9"
             cx="286.43359"
             cy="510.03323"
             r="16.266335"
             transform="matrix(0.17942028,0.21784798,-0.21784798,0.17942028,210.22538,65.093899)" />
          <circle
             r="4.5907211"
             cy="23.14105"
             cx="264.59958"
             id="path23011-7"
             style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.105834;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             transform="rotate(50.525024,1.0616353e-6,-4.955852e-7)" />
          <path
             id="circle23167-36"
             d="m 282.9269,526.03992 c 7.88098,1.68545 16.40643,-3.56301 18.41357,-11.37529 2.40818,-7.87087 -2.40449,-17.01212 -10.27502,-19.44269 -7.7626,-2.84898 -17.15863,1.55555 -19.98762,9.31618 -3.15747,7.58339 0.70491,17.13835 8.2792,20.34359 1.13436,0.53464 2.34319,0.90453 3.56987,1.15821 z"
             style="fill:#000000;fill-opacity:1;stroke:url(#linearGradient69);stroke-width:0.15;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter:url(#filter23261-62)"
             transform="matrix(0.17942028,0.21784798,-0.21784798,0.17942028,210.22538,65.093899)" />
          <circle
             style="fill:none;fill-opacity:1;stroke:url(#linearGradient70);stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter:url(#filter9372-1)"
             id="BTN_a_BTN"
             cx="96.849243"
             cy="220.40112"
             r="5.7384014"
             transform="matrix(0.50859292,0.61752185,-0.61752185,0.50859292,237.19988,47.05577)" />
        </g>
      </g>
    </g>
    <g
       id="joystick"
       style="display:inline;enable-background:new"
       transform="rotate(135,71.389302,213.6569)">
      <g
         id="joystick_base"
         style="display:inline;enable-background:new"
         transform="translate(8.0940736e-6)">
        <path
           style="display:inline;enable-background:new;fill:#b3b3b3;fill-opacity:1;stroke:none;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           d="M 86.342987,209.89487 H 107.3555 v -0.77824 H 86.342987 Z"
           id="rect22675-7"
           transform="translate(8.0940736e-6)" />
        <path
           style="display:inline;enable-background:new;fill:#666666;fill-opacity:1;stroke:none;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           d="m 107.35549,209.89487 v 21.01251 h 1.06172 v -21.01251 z"
           id="rect22681-5"
           transform="translate(8.0940736e-6)" />
        <rect
           transform="matrix(0,1,1,0,8.0940736e-6,2.0208586e-6)"
           style="display:inline;fill:url(#linearGradient7160-8);fill-opacity:1;stroke:none;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;enable-background:new"
           id="rect22683-1"
           width="21.012514"
           height="0.77824152"
           x="209.89484"
           y="85.564751"
           rx="0"
           ry="0" />
        <rect
           transform="matrix(0,-1,-1,0,8.0940736e-6,2.0208586e-6)"
           style="display:inline;enable-background:new;fill:url(#linearGradient19420);fill-opacity:1;stroke:none;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           id="rect22685-4"
           width="1.5564823"
           height="0.77824152"
           x="-228.51706"
           y="-85.59256"
           rx="0"
           ry="0" />
        <rect
           ry="0"
           rx="0"
           y="-85.59256"
           x="-213.67488"
           height="0.77824152"
           width="1.5564823"
           id="rect22687-1"
           style="display:inline;enable-background:new;fill:url(#linearGradient19422);fill-opacity:1;stroke:none;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           transform="matrix(0,-1,-1,0,8.0940736e-6,2.0208586e-6)" />
        <rect
           ry="0"
           rx="0"
           y="108.07818"
           x="212.11839"
           height="0.77824152"
           width="1.5564823"
           id="rect22719-1"
           style="display:inline;enable-background:new;fill:url(#linearGradient19424);fill-opacity:1;stroke:none;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           transform="matrix(0,1,1,0,8.0940736e-6,2.0208586e-6)" />
        <rect
           transform="matrix(0,1,1,0,8.0940736e-6,2.0208586e-6)"
           style="display:inline;enable-background:new;fill:url(#linearGradient10678-4);fill-opacity:1;stroke:none;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           id="rect22721-1"
           width="1.5564823"
           height="0.77824152"
           x="226.96057"
           y="108.07818"
           rx="0"
           ry="0" />
        <rect
           transform="matrix(1,0,0,-1,8.0940736e-6,2.0208586e-6)"
           ry="0"
           rx="0"
           y="-231.68561"
           x="86.342987"
           height="0.77824152"
           width="21.012514"
           id="rect22677-1"
           style="display:inline;fill:url(#linearGradient7152-0);fill-opacity:1;stroke:none;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;enable-background:new" />
        <rect
           style="display:inline;fill:url(#linearGradient19426);fill-opacity:1;stroke:none;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;enable-background:new"
           id="rect22851-7"
           width="21.012514"
           height="21.012514"
           x="86.342987"
           y="209.89487"
           rx="0"
           ry="0"
           transform="translate(8.0940736e-6)" />
        <rect
           ry="0"
           rx="0"
           y="209.89487"
           x="86.359856"
           height="21.012514"
           width="21.012514"
           id="rect23001-0"
           style="display:inline;opacity:0.5;fill:url(#linearGradient19428);fill-opacity:1;stroke:url(#linearGradient19430);stroke-width:0.132292;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;enable-background:new"
           transform="translate(8.0940736e-6)" />
        <rect
           style="display:inline;fill:none;stroke:#ffffff;stroke-width:0.264583;stroke-opacity:1"
           id="rect2887"
           width="27.019096"
           height="27"
           x="181.30435"
           y="112.70005"
           transform="rotate(-90,193.00296,222.21204)" />
        <text
           xml:space="preserve"
           style="display:inline;enable-background:new;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.175px;font-family:Ubuntu;-inkscape-font-specification:Ubuntu;fill:none;stroke:#ffffff;stroke-width:0.264583;stroke-opacity:1"
           x="44.313618"
           y="248.744"
           id="text4124"
           transform="rotate(-135,71.389302,213.6569)"><tspan
             id="tspan4122"
             style="stroke-width:0.264583"
             x="44.313618"
             y="248.744">Down</tspan></text>
        <text
           xml:space="preserve"
           style="display:inline;enable-background:new;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.175px;font-family:Ubuntu;-inkscape-font-specification:Ubuntu;fill:none;stroke:#ffffff;stroke-width:0.264583;stroke-opacity:1"
           x="68.556328"
           y="227.92459"
           id="text4120"
           transform="rotate(-135,71.389302,213.6569)"><tspan
             id="tspan4118"
             style="stroke-width:0.264583"
             x="68.556328"
             y="227.92459">Right</tspan></text>
        <text
           xml:space="preserve"
           style="display:inline;enable-background:new;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.175px;font-family:Ubuntu;-inkscape-font-specification:Ubuntu;fill:none;stroke:#ffffff;stroke-width:0.264583;stroke-opacity:1"
           x="46.453568"
           y="206.35785"
           id="text4112"
           transform="rotate(-135,71.389302,213.6569)"><tspan
             id="tspan4110"
             style="stroke-width:0.264583"
             x="46.453568"
             y="206.35785">Up</tspan></text>
        <text
           xml:space="preserve"
           style="display:inline;enable-background:new;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.175px;font-family:Ubuntu;-inkscape-font-specification:Ubuntu;fill:none;stroke:#ffffff;stroke-width:0.264583;stroke-opacity:1"
           x="22.353609"
           y="228.20558"
           id="text4116"
           transform="rotate(-135,71.389302,213.6569)"><tspan
             id="tspan4114"
             style="stroke-width:0.264583"
             x="22.353609"
             y="228.20558">Left</tspan></text>
      </g>
      <g
         id="joystick_stick"
         style="display:inline;enable-background:new"
         transform="translate(8.0940736e-6)">
        <circle
           style="display:inline;fill:#333333;fill-opacity:1;stroke:#1a1a1a;stroke-width:0.375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter:url(#filter23159-4);enable-background:new"
           id="circle23013-4"
           cx="286.43359"
           cy="510.03323"
           r="16.266335"
           transform="matrix(0.35277777,0,0,0.35277777,-4.0314184,40.361582)" />
        <circle
           style="display:inline;fill:none;fill-opacity:1;stroke:url(#linearGradient19434);stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter:url(#filter9372-2);enable-background:new"
           id="osef1"
           cx="96.849243"
           cy="220.40112"
           r="5.7384014" />
        <path
           id="joystick_circle"
           d="m 282.9269,526.03992 c 7.88098,1.68545 16.40643,-3.56301 18.41357,-11.37529 2.40818,-7.87087 -2.40449,-17.01212 -10.27502,-19.44269 -7.7626,-2.84898 -17.15863,1.55555 -19.98762,9.31618 -3.15747,7.58339 0.70491,17.13835 8.2792,20.34359 1.13436,0.53464 2.34319,0.90453 3.56987,1.15821 z"
           style="display:inline;fill:#000000;fill-opacity:1;stroke:url(#linearGradient19432);stroke-width:0.15;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter:url(#filter23261-7);enable-background:new"
           transform="matrix(0.35277777,0,0,0.35277777,-4.0314184,40.361582)" />
      </g>
    </g>
    <g
       id="pinBlock_MidleArm">
      <g
         id="g17">
        <path
           id="J5_3"
           style="fill:#d3ae17;fill-opacity:1;stroke:#1c1c1c;stroke-width:0.00367878;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.956717"
           d="m 24.419795,86.713288 a 2.6122586,2.5979137 0 0 0 -1.583587,0.531727 c -0.141636,-0.03473 -0.289729,-0.05361 -0.442377,-0.05361 H 3.5993553 c -1.0190223,0 -1.8394677,0.820445 -1.8394677,1.839468 v 0.48629 c 0,1.019023 0.8204454,1.839472 1.8394677,1.839472 H 22.393831 c 0.126444,0 0.249576,-0.01332 0.368614,-0.03745 a 2.6122586,2.5979137 0 0 0 1.65735,0.589899 2.6122586,2.5979137 0 0 0 2.612247,-2.597991 2.6122586,2.5979137 0 0 0 -2.612247,-2.5978 z m 0.02947,1.217249 a 1.4260258,1.3806339 0 0 1 1.425987,1.380551 1.4260258,1.3806339 0 0 1 -1.425987,1.380742 1.4260258,1.3806339 0 0 1 -1.425988,-1.380742 1.4260258,1.3806339 0 0 1 1.425988,-1.380551 z" />
        <path
           id="J5_2"
           style="fill:#d3ae17;fill-opacity:1;stroke:#1c1c1c;stroke-width:0.00367878;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.956717"
           d="m 24.49188,80.716113 a 2.6122586,2.5979137 0 0 0 -1.583586,0.531728 c -0.141637,-0.03473 -0.289726,-0.05361 -0.442377,-0.05361 H 3.671441 c -1.0190186,0 -1.8394677,0.820446 -1.8394677,1.839464 v 0.486295 c 0,1.019018 0.8204491,1.839467 1.8394677,1.839467 h 18.794476 c 0.126443,0 0.249576,-0.01328 0.368614,-0.03745 a 2.6122586,2.5979137 0 0 0 1.657349,0.5899 2.6122586,2.5979137 0 0 0 2.612248,-2.597992 2.6122586,2.5979137 0 0 0 -2.612248,-2.597804 z m 0.02947,1.21725 a 1.4260258,1.3806339 0 0 1 1.425988,1.380554 1.4260258,1.3806339 0 0 1 -1.425988,1.380743 1.4260258,1.3806339 0 0 1 -1.425987,-1.380743 1.4260258,1.3806339 0 0 1 1.425987,-1.380554 z" />
        <path
           id="J5_1"
           style="fill:#d3ae17;fill-opacity:1;stroke:#1c1c1c;stroke-width:0.00367878;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.956717"
           d="m 24.45198,74.771718 a 2.6122586,2.5979137 0 0 0 -1.583586,0.531727 c -0.141633,-0.03474 -0.289726,-0.05361 -0.442377,-0.05361 H 3.6315409 c -1.0190186,0 -1.8394677,0.820447 -1.8394677,1.839467 v 0.486293 c 0,1.01902 0.8204491,1.839468 1.8394677,1.839468 H 22.426017 c 0.126443,0 0.249579,-0.0133 0.368617,-0.03745 a 2.6122586,2.5979137 0 0 0 1.657346,0.5899 2.6122586,2.5979137 0 0 0 2.612251,-2.597993 2.6122586,2.5979137 0 0 0 -2.612251,-2.597802 z m 0.02947,1.21725 a 1.4260258,1.3806339 0 0 1 1.425988,1.380551 1.4260258,1.3806339 0 0 1 -1.425988,1.380742 1.4260258,1.3806339 0 0 1 -1.425987,-1.380742 1.4260258,1.3806339 0 0 1 1.425987,-1.380551 z" />
      </g>
      <g
         id="J6">
        <path
           id="J6_3"
           style="fill:#d3ae17;fill-opacity:1;stroke:#1c1c1c;stroke-width:0.00367878;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.956717"
           d="m 191.29336,86.641687 a 2.6122586,2.5979137 0 0 1 1.58359,0.531727 c 0.14163,-0.03473 0.28973,-0.05361 0.44237,-0.05361 h 18.79448 c 1.01902,0 1.83947,0.820445 1.83947,1.839468 v 0.48629 c 0,1.019023 -0.82045,1.839472 -1.83947,1.839472 h -18.79448 c -0.12644,0 -0.24957,-0.01332 -0.36861,-0.03745 a 2.6122586,2.5979137 0 0 1 -1.65735,0.589899 2.6122586,2.5979137 0 0 1 -2.61225,-2.597991 2.6122586,2.5979137 0 0 1 2.61225,-2.5978 z m -0.0295,1.217249 a 1.4260258,1.3806339 0 0 0 -1.42598,1.380551 1.4260258,1.3806339 0 0 0 1.42598,1.380742 1.4260258,1.3806339 0 0 0 1.42599,-1.380742 1.4260258,1.3806339 0 0 0 -1.42599,-1.380551 z" />
        <path
           id="J6_2"
           style="fill:#d3ae17;fill-opacity:1;stroke:#1c1c1c;stroke-width:0.00367878;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.956717"
           d="m 191.22127,80.644512 a 2.6122586,2.5979137 0 0 1 1.58359,0.531728 c 0.14164,-0.03473 0.28973,-0.05361 0.44238,-0.05361 h 18.79447 c 1.01902,0 1.83947,0.820446 1.83947,1.839464 v 0.486295 c 0,1.019018 -0.82045,1.839467 -1.83947,1.839467 h -18.79447 c -0.12645,0 -0.24958,-0.01328 -0.36862,-0.03745 a 2.6122586,2.5979137 0 0 1 -1.65735,0.5899 2.6122586,2.5979137 0 0 1 -2.61224,-2.597992 2.6122586,2.5979137 0 0 1 2.61224,-2.597804 z m -0.0295,1.21725 a 1.4260258,1.3806339 0 0 0 -1.42599,1.380554 1.4260258,1.3806339 0 0 0 1.42599,1.380743 1.4260258,1.3806339 0 0 0 1.42599,-1.380743 1.4260258,1.3806339 0 0 0 -1.42599,-1.380554 z" />
        <path
           id="J6_1"
           style="fill:#d3ae17;fill-opacity:1;stroke:#1c1c1c;stroke-width:0.00367878;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.956717"
           d="m 191.26117,74.700117 a 2.6122586,2.5979137 0 0 1 1.58359,0.531727 c 0.14163,-0.03474 0.28973,-0.05361 0.44238,-0.05361 h 18.79447 c 1.01902,0 1.83947,0.820447 1.83947,1.839467 v 0.486293 c 0,1.01902 -0.82045,1.839468 -1.83947,1.839468 h -18.79447 c -0.12645,0 -0.24958,-0.0133 -0.36862,-0.03745 a 2.6122586,2.5979137 0 0 1 -1.65735,0.5899 2.6122586,2.5979137 0 0 1 -2.61225,-2.597993 2.6122586,2.5979137 0 0 1 2.61225,-2.597802 z m -0.0295,1.21725 a 1.4260258,1.3806339 0 0 0 -1.42599,1.380551 1.4260258,1.3806339 0 0 0 1.42599,1.380742 1.4260258,1.3806339 0 0 0 1.42599,-1.380742 1.4260258,1.3806339 0 0 0 -1.42599,-1.380551 z" />
      </g>
    </g>
    <g
       id="U11"
       transform="rotate(64.10689,155.01536,13.242261)">
      <g
         id="ToF"
         style="isolation:isolate"
         transform="matrix(0.61382666,0,0,0.517368,178.64245,-139.16453)">
        <path
           fill="#303030"
           id="path1221"
           d="M 33.83864,274.79446 H 49.9888 v 9.02393 H 33.83902 Z" />
        <path
           fill="#1f1f1f"
           id="path1223"
           d="m 49.9888,274.79446 -0.27338,0.15281 H 34.17154 l -0.3329,-0.15281 z m -0.27338,8.87112 H 34.11201 l -0.27299,0.15281 H 49.9888 Z" />
        <path
           fill="#000000"
           id="path1225"
           d="m 34.11201,283.66596 0.05953,-8.71869 -0.3329,-0.15281 v 9.02393 z" />
        <path
           fill="#3d3d3d"
           id="path1227"
           d="m 49.71542,283.66558 v -8.71831 l 0.273,-0.15281 v 9.02393 z" />
      </g>
      <rect
         style="fill:#c8ab37;fill-opacity:1;stroke:none;stroke-width:0.275062"
         id="rect17548-7"
         width="3.7852798"
         height="4.2245455"
         x="205.19006"
         y="3.2492681" />
      <rect
         style="fill:#c8ab37;fill-opacity:1;stroke:none;stroke-width:0.275062"
         id="rect17629"
         width="3.7852798"
         height="4.2245455"
         x="199.78381"
         y="3.2492681" />
    </g>
    <g
       id="U12"
       transform="matrix(1.7958015,2.0790475,-2.0790475,1.7958015,-160.17893,-450.52677)">
      <g
         id="BAROMETER"
         style="isolation:isolate"
         transform="matrix(0.26458333,0,0,0.26458333,162.38774,-41.719966)">
        <path
           fill="#303030"
           id="path1197"
           d="m 187.31158,244.39714 h 7.42122 v 7.42122 h -7.42122 z" />
        <path
           fill="#1f1f1f"
           id="path1199"
           d="m 194.7328,244.39676 -0.1255,0.12588 h -7.1433 l -0.15242,-0.12588 z m -0.1255,7.2961 h -7.17023 l -0.12549,0.12513 h 7.42122 z" />
        <path
           fill="#000000"
           id="path1201"
           d="m 187.43707,251.69286 0.0273,-7.17022 -0.1528,-0.12588 v 7.4216 z" />
        <path
           fill="#3d3d3d"
           id="path1203"
           d="m 194.6073,251.69286 v -7.17022 l 0.1255,-0.12588 v 7.4216 z" />
      </g>
      <rect
         style="fill:#afe8b3;fill-opacity:1;stroke:none;stroke-width:0.264583"
         id="rect17691"
         width="0.60097873"
         height="0.59436274"
         x="212.20319"
         y="24.131435" />
    </g>
    <g
       id="U15"
       transform="matrix(0.82109754,0.54857764,-0.54857764,0.82109754,-10.917499,-96.121248)">
      <g
         id="ToF-7"
         style="isolation:isolate"
         transform="matrix(0.88706859,0,0,0.67121229,163.68408,-183.54579)">
        <path
           fill="#303030"
           id="path1221-5"
           d="M 33.83864,274.79446 H 49.9888 v 9.02393 H 33.83902 Z" />
        <path
           fill="#1f1f1f"
           id="path1223-4"
           d="m 49.9888,274.79446 -0.27338,0.15281 H 34.17154 l -0.3329,-0.15281 z m -0.27338,8.87112 H 34.11201 l -0.27299,0.15281 H 49.9888 Z" />
        <path
           fill="#000000"
           id="path1225-8"
           d="m 34.11201,283.66596 0.05953,-8.71869 -0.3329,-0.15281 v 9.02393 z" />
        <path
           fill="#3d3d3d"
           id="path1227-1"
           d="m 49.71542,283.66558 v -8.71831 l 0.273,-0.15281 v 9.02393 z" />
      </g>
      <rect
         style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
         id="rect29710"
         width="0.67564428"
         height="5.3110137"
         x="197.7305"
         y="1.2396344" />
      <circle
         style="fill:#76778c;fill-opacity:1;stroke:none;stroke-width:0.264583"
         id="path29712"
         cx="195.86078"
         cy="4.0412903"
         r="1.1643426" />
      <circle
         style="fill:#76778c;fill-opacity:1;stroke:none;stroke-width:0.264583"
         id="circle29714"
         cx="205.91484"
         cy="4.0412903"
         r="1.1643426" />
    </g>
    <path
       style="fill:none;fill-opacity:1;stroke:#0b0b0b;stroke-width:1.565;stroke-dasharray:none;stroke-opacity:1"
       d="m 138.42053,-11.317012 -34.86577,-0.08353 -0.008,3.2925278 36.45387,0.08733 -0.009,3.6296234 -36.53391,-0.087525 -0.009,3.66219397 37.1069,0.088897 -0.0127,5.32017613 c 0,0 -0.0754,-1.8e-4 -35.80832,-0.085786 v 4.0184008"
       id="ukn" />
    <g
       id="pinBlock_bottom">
      <g
         id="pin_farLeft">
        <path
           style="fill:url(#radialGradient12353);fill-opacity:1;stroke:#d4aa00;stroke-width:0.264583"
           d="m 12.051377,274.07451 v 7.09851 c 0,3.99291 2.376751,7.46823 5.520196,9.3168 v -16.41531 z"
           id="path23711" />
        <path
           style="fill:#c8ab37;stroke-width:0.264583"
           d="m 12.051377,274.0745 v 7.09851 c 0,3.99292 2.37675,7.46823 5.5202,9.3168 V 274.0745 Z"
           id="path21922" />
      </g>
      <g
         id="pin_farRight">
        <path
           style="fill:url(#radialGradient12355);fill-opacity:1;stroke:#d4aa00;stroke-width:0.264583"
           d="m 197.43794,290.45285 c 3.14345,-1.84857 5.5202,-5.32389 5.5202,-9.27983 v -7.09851 h -5.5202 z"
           id="path23713" />
        <path
           style="fill:#c8ab37;stroke-width:0.264583"
           d="m 197.43794,290.45284 c 3.14345,-1.84857 5.5202,-5.32388 5.5202,-9.27983 v -7.09851 h -5.5202 z"
           id="path21924" />
      </g>
      <g
         id="pinBlock_small_left">
        <rect
           id="pin_small_9"
           height="18.226908"
           width="3.5267913"
           y="273.76993"
           x="51.649387"
           style="fill:#d3b12c;fill-opacity:1;stroke:#d4aa00;stroke-width:0.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <rect
           id="pin_small_8"
           height="18.226908"
           width="3.5267913"
           y="273.76993"
           x="46.942429"
           style="fill:#d3b12c;fill-opacity:1;stroke:#d4aa00;stroke-width:0.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <rect
           id="pin_small_7"
           height="18.226908"
           width="3.5267913"
           y="273.76993"
           x="42.235485"
           style="fill:#d3b12c;fill-opacity:1;stroke:#d4aa00;stroke-width:0.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <g
           id="pin_small_6">
          <rect
             style="display:inline;fill:url(#radialGradient12359);fill-opacity:1;stroke:#d4aa00;stroke-width:0.264583"
             x="37.620613"
             y="273.7048"
             width="3.5267916"
             height="18.226908"
             id="rect23715" />
          <rect
             id="rect21926"
             height="18.226908"
             width="3.5267916"
             y="273.7048"
             x="37.620613"
             style="fill:#c8ab37;stroke-width:0.264583" />
        </g>
      </g>
      <g
         id="pinBlock_small_midleLeft">
        <rect
           id="pin_small_5"
           height="18.226908"
           width="3.5267913"
           y="273.76993"
           x="94.011963"
           style="fill:#d3b12c;fill-opacity:1;stroke:#d4aa00;stroke-width:0.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <rect
           id="pin_small_4"
           height="18.226908"
           width="3.5267913"
           y="273.76993"
           x="89.305008"
           style="fill:#d3b12c;fill-opacity:1;stroke:#d4aa00;stroke-width:0.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <rect
           id="pin_small_3"
           height="18.226908"
           width="3.5267913"
           y="273.76993"
           x="84.598061"
           style="fill:#d3b12c;fill-opacity:1;stroke:#d4aa00;stroke-width:0.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <rect
           id="pin_small_2"
           height="18.226908"
           width="3.5267913"
           y="273.76993"
           x="79.891106"
           style="fill:#d3b12c;fill-opacity:1;stroke:#d4aa00;stroke-width:0.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <rect
           id="pin_small_1"
           height="18.226908"
           width="3.5267913"
           y="273.76993"
           x="75.184151"
           style="fill:#d3b12c;fill-opacity:1;stroke:#d4aa00;stroke-width:0.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      </g>
      <g
         id="pinBlock_small_midleRight">
        <rect
           id="3V3_1"
           height="18.226908"
           width="3.5267913"
           y="273.76993"
           x="136.37454"
           style="fill:#d3b12c;fill-opacity:1;stroke:#d4aa00;stroke-width:0.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <rect
           id="P16"
           height="18.226908"
           width="3.5267913"
           y="273.76993"
           x="131.66759"
           style="fill:#d3b12c;fill-opacity:1;stroke:#d4aa00;stroke-width:0.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <rect
           id="SP1_MOSI"
           height="18.226908"
           width="3.5267913"
           y="273.76993"
           x="126.96064"
           style="fill:#d3b12c;fill-opacity:1;stroke:#d4aa00;stroke-width:0.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <rect
           id="SP1_MISO"
           height="18.226908"
           width="3.5267913"
           y="273.76993"
           x="122.25368"
           style="fill:#d3b12c;fill-opacity:1;stroke:#d4aa00;stroke-width:0.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <rect
           id="SP1_CLK2"
           height="18.226908"
           width="3.5267913"
           y="273.76993"
           x="117.54673"
           style="fill:#d3b12c;fill-opacity:1;stroke:#d4aa00;stroke-width:0.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      </g>
      <g
         id="pinBlock_small_right">
        <rect
           id="GND"
           height="18.226908"
           width="3.5267913"
           y="273.76993"
           x="174.03018"
           style="fill:#d3b12c;fill-opacity:1;stroke:#d4aa00;stroke-width:0.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <rect
           id="SDA3"
           height="18.226908"
           width="3.5267913"
           y="273.76993"
           x="169.32321"
           style="fill:#d3b12c;fill-opacity:1;stroke:#d4aa00;stroke-width:0.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <rect
           id="SCL3"
           height="18.226908"
           width="3.5267913"
           y="273.76993"
           x="164.61627"
           style="fill:#d3b12c;fill-opacity:1;stroke:#d4aa00;stroke-width:0.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <rect
           id="3V3"
           height="18.226908"
           width="3.5267913"
           y="273.76993"
           x="159.90933"
           style="fill:#d3b12c;fill-opacity:1;stroke:#d4aa00;stroke-width:0.3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      </g>
      <g
         id="pin0"
         class="sim-pin">
        <path
           id="path10804"
           d="m 27.489254,259.1379 c -4.90685,0 -8.471924,3.80822 -8.855274,8.54056 v 22.87974 c 1.708302,0.87557 3.655595,1.37357 5.722648,1.37357 h 11.987899 v -24.25331 c 0,-4.69537 -3.948433,-8.54056 -8.855273,-8.54056 z"
           style="fill:url(#linearGradient10806);fill-opacity:1;stroke:url(#linearGradient10808);stroke-width:0.3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        <path
           d="m 25.813531,280.98816 c 0,-1.0352 0.805029,-1.88554 2.108408,-1.88554 1.265045,0 2.108408,0.88732 2.108408,1.88554 v 1.73766 c 0,1.0352 -0.843363,1.88554 -2.108408,1.88554 -1.265045,0 -2.108408,-0.88731 -2.108408,-1.88554 z m 2.913437,0 c 0,-0.48062 -0.306678,-0.85034 -0.843364,-0.85034 -0.498351,0 -0.805028,0.40669 -0.805028,0.85034 v 1.73766 c 0,0.44366 0.306677,0.85034 0.805028,0.85034 0.498351,0 0.843364,-0.40668 0.843364,-0.85034 z"
           id="path21984"
           style="stroke-width:0.264583" />
        <path
           d="m 25.829811,281.00444 c 0,-1.0352 0.805029,-1.88554 2.108408,-1.88554 1.265045,0 2.108408,0.88732 2.108408,1.88554 v 1.73766 c 0,1.0352 -0.843363,1.88554 -2.108408,1.88554 -1.265045,0 -2.108408,-0.88731 -2.108408,-1.88554 z m 2.913437,0 c 0,-0.48062 -0.306678,-0.85034 -0.843364,-0.85034 -0.498351,0 -0.805028,0.40669 -0.805028,0.85034 v 1.73766 c 0,0.44366 0.306677,0.85034 0.805028,0.85034 0.498351,0 0.843364,-0.40668 0.843364,-0.85034 z"
           id="path23949"
           style="fill:none;stroke:url(#linearGradient10700);stroke-width:0.132292;stroke-miterlimit:4;stroke-dasharray:none" />
        <path
           style="fill:none;stroke:none;stroke-width:0.264583"
           id="path23797"
           d="m 25.813531,280.98816 c 0,-1.0352 0.805029,-1.88554 2.108408,-1.88554 1.265045,0 2.108408,0.88732 2.108408,1.88554 v 1.73766 c 0,1.0352 -0.843363,1.88554 -2.108408,1.88554 -1.265045,0 -2.108408,-0.88731 -2.108408,-1.88554 z m 2.913437,0 c 0,-0.48062 -0.306678,-0.85034 -0.843364,-0.85034 -0.498351,0 -0.805028,0.40669 -0.805028,0.85034 v 1.73766 c 0,0.44366 0.306677,0.85034 0.805028,0.85034 0.498351,0 0.843364,-0.40668 0.843364,-0.85034 z" />
        <circle
           style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.565;stroke-dasharray:none;stroke-opacity:1"
           id="circle32796"
           cx="27.623285"
           cy="267.82693"
           r="7.2059999" />
        <circle
           style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           id="circle9997"
           cx="27.644232"
           cy="267.88681"
           r="7.1815476" />
      </g>
      <g
         id="pin1">
        <path
           style="fill:#d3b12c;fill-opacity:1;stroke:url(#linearGradient10688);stroke-width:0.3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           d="m 65.374937,259.13805 c -4.90685,0 -8.47197,3.80806 -8.85532,8.5404 v 24.25325 h 17.71063 v -24.25325 c 0,-4.69537 -3.94847,-8.5404 -8.85531,-8.5404 z"
           id="path23751" />
        <path
           id="path21962"
           d="m 65.374937,259.13805 c -4.90685,0 -8.47197,3.80806 -8.85532,8.5404 v 24.25325 h 17.71063 v -24.25325 c 0,-4.69537 -3.94847,-8.5404 -8.85531,-8.5404 z m 0.0767,15.82377 c -4.10181,0 -7.39859,-3.17955 -7.39859,-7.13549 0,-3.95594 3.29678,-7.13548 7.39859,-7.13548 4.10182,0 7.3986,3.21651 7.3986,7.13548 0,3.95594 -3.29678,7.13549 -7.3986,7.13549 z"
           style="fill:#c8ab37;stroke-width:0.264583" />
        <path
           style="fill:none;stroke:none;stroke-width:0.264583"
           id="path23803"
           d="m 64.37823,280.13782 c 1.073372,0 1.30338,-0.29577 1.30338,-0.92428 h 1.111706 v 5.28691 h -1.30338 v -3.51229 h -1.15004 v -0.85034 z" />
        <path
           d="m 64.43383,280.16392 c 1.073372,0 1.30338,-0.29577 1.30338,-0.92428 h 1.111706 v 5.28691 h -1.30338 v -3.51229 h -1.15004 v -0.85034 z"
           id="path23955"
           style="fill:none;stroke:url(#linearGradient10705);stroke-width:0.132292;stroke-miterlimit:4;stroke-dasharray:none" />
        <path
           d="m 64.37823,280.13782 c 1.073372,0 1.30338,-0.29577 1.30338,-0.92428 h 1.111706 v 5.28691 h -1.30338 v -3.51229 h -1.15004 v -0.85034 z"
           id="path21990"
           style="stroke-width:0.264583" />
        <circle
           style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.565;stroke-dasharray:none;stroke-opacity:1"
           id="circle32794"
           cx="65.576622"
           cy="268.23502"
           r="7.2059999" />
        <circle
           r="7.1815476"
           cy="268.13248"
           cx="65.630852"
           id="circle9999"
           style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
      </g>
      <g
         id="pinGND">
        <path
           style="fill:url(#linearGradient10716);fill-opacity:1;stroke:url(#linearGradient10698);stroke-width:0.3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           d="m 187.62426,259.24896 c -4.98351,0 -9.04699,3.91897 -9.04699,8.72526 v 0.037 0 23.92051 h 13.26381 c 1.64839,0 3.22011,-0.36972 4.83017,-0.99823 v -22.44165 -0.48063 c 0,-4.88023 -4.06348,-8.76223 -9.04699,-8.76223 z"
           id="path23757" />
        <path
           id="path21968"
           d="m 187.62426,259.24896 c -4.98351,0 -9.04699,3.91897 -9.04699,8.72526 0,0 0,0.037 0,0.037 v 0 23.92051 h 13.26381 c 1.64839,0 3.22011,-0.36972 4.83017,-0.99823 v -22.44165 c 0,-0.14789 0,-0.33274 0,-0.48063 0,-4.88023 -4.06348,-8.76223 -9.04699,-8.76223 z m -0.0767,16.00863 c -4.10181,0 -7.39859,-3.17954 -7.39859,-7.13549 0,-3.95594 3.29678,-7.13548 7.39859,-7.13548 4.10181,0 7.3986,3.21651 7.3986,7.13548 0,3.91897 -3.33512,7.13549 -7.3986,7.13549 z"
           style="fill:#c8ab37;stroke-width:0.264583" />
        <path
           d="m 182.42702,281.7069 h 2.83677 v 0.92429 h -0.57502 c -0.23001,1.22005 -1.15004,2.03342 -2.72176,2.03342 -1.84007,0 -2.8751,-1.294 -2.8751,-2.77285 0,-1.44189 1.07337,-2.77286 2.8751,-2.77286 1.45672,0 2.45342,0.85034 2.53009,1.84857 h -1.34172 c -0.0767,-0.40668 -0.53668,-0.81337 -1.18837,-0.81337 -1.03504,0 -1.57172,0.85034 -1.57172,1.73766 0,0.92428 0.53668,1.73765 1.68672,1.73765 0.7667,0 1.22671,-0.44365 1.30338,-0.99822 h -0.95837 z"
           id="path23973"
           style="fill:none;stroke:url(#linearGradient10717);stroke-width:0.132292;stroke-miterlimit:4;stroke-dasharray:none" />
        <path
           d="m 188.94392,282.66816 v -3.43834 h 1.26505 v 5.28691 h -1.34172 l -1.9934,-3.40137 v 3.40137 h -1.26505 v -5.28691 h 1.34172 z"
           id="path23979"
           style="fill:none;stroke:url(#linearGradient10721);stroke-width:0.132292;stroke-miterlimit:4;stroke-dasharray:none" />
        <path
           d="m 193.27574,279.22982 c 1.84007,0 2.8751,1.294 2.8751,2.66194 0,1.36794 -1.03503,2.66194 -2.8751,2.66194 H 191.244 v -5.28691 h 2.03174 z m -0.72836,1.0352 v 3.17954 h 0.69003 c 1.03503,0 1.61005,-0.7764 1.61005,-1.58977 0,-0.81337 -0.61335,-1.58977 -1.61005,-1.58977 z"
           id="path23981"
           style="fill:none;stroke:url(#linearGradient10723);stroke-width:0.132292;stroke-miterlimit:4;stroke-dasharray:none" />
        <path
           style="fill:none;stroke:none;stroke-width:0.264583"
           id="path23829"
           d="m 193.25946,279.21354 c 1.84007,0 2.8751,1.294 2.8751,2.66194 0,1.36794 -1.03503,2.66194 -2.8751,2.66194 h -2.03174 v -5.28691 h 2.03174 z m -0.72836,1.0352 v 3.17954 h 0.69003 c 1.03503,0 1.61005,-0.7764 1.61005,-1.58977 0,-0.81337 -0.61335,-1.58977 -1.61005,-1.58977 z" />
        <path
           style="fill:none;stroke:none;stroke-width:0.264583"
           id="path23827"
           d="m 188.92764,282.65188 v -3.43834 h 1.26505 v 5.28691 h -1.34172 l -1.9934,-3.40137 v 3.40137 h -1.26505 v -5.28691 h 1.34172 z" />
        <path
           style="fill:none;stroke:none;stroke-width:0.264583"
           id="path23821"
           d="m 182.41074,281.69062 h 2.83677 v 0.92429 h -0.57502 c -0.23001,1.22005 -1.15004,2.03342 -2.72176,2.03342 -1.84007,0 -2.8751,-1.294 -2.8751,-2.77285 0,-1.44189 1.07337,-2.77286 2.8751,-2.77286 1.45672,0 2.45342,0.85034 2.53009,1.84857 h -1.34172 c -0.0767,-0.40668 -0.53668,-0.81337 -1.18837,-0.81337 -1.03504,0 -1.57172,0.85034 -1.57172,1.73766 0,0.92428 0.53668,1.73765 1.68672,1.73765 0.7667,0 1.22671,-0.44365 1.30338,-0.99822 h -0.95837 z" />
        <path
           d="m 193.25946,279.21354 c 1.84007,0 2.8751,1.294 2.8751,2.66194 0,1.36794 -1.03503,2.66194 -2.8751,2.66194 h -2.03174 v -5.28691 h 2.03174 z m -0.72836,1.0352 v 3.17954 h 0.69003 c 1.03503,0 1.61005,-0.7764 1.61005,-1.58977 0,-0.81337 -0.61335,-1.58977 -1.61005,-1.58977 z"
           id="path22152"
           style="stroke-width:0.264583" />
        <path
           d="m 188.92764,282.65188 v -3.43834 h 1.26505 v 5.28691 h -1.34172 l -1.9934,-3.40137 v 3.40137 h -1.26505 v -5.28691 h 1.34172 z"
           id="path22150"
           style="stroke-width:0.264583" />
        <path
           d="m 182.41074,281.69062 h 2.83677 v 0.92429 h -0.57502 c -0.23001,1.22005 -1.15004,2.03342 -2.72176,2.03342 -1.84007,0 -2.8751,-1.294 -2.8751,-2.77285 0,-1.44189 1.07337,-2.77286 2.8751,-2.77286 1.45672,0 2.45342,0.85034 2.53009,1.84857 h -1.34172 c -0.0767,-0.40668 -0.53668,-0.81337 -1.18837,-0.81337 -1.03504,0 -1.57172,0.85034 -1.57172,1.73766 0,0.92428 0.53668,1.73765 1.68672,1.73765 0.7667,0 1.22671,-0.44365 1.30338,-0.99822 h -0.95837 z"
           id="path22144"
           style="stroke-width:0.264583" />
        <circle
           style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.565;stroke-dasharray:none;stroke-opacity:1"
           id="path32605"
           cx="187.62427"
           cy="268.34573"
           r="7.2059999" />
        <circle
           r="7.1815476"
           cy="268.46088"
           cx="187.57861"
           id="circle10003-3"
           style="display:inline;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
      </g>
      <g
         id="pin3V">
        <path
           style="fill:url(#linearGradient10694);fill-opacity:1;stroke:url(#linearGradient10696);stroke-width:0.3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           d="m 150.01793,259.13805 c -4.90684,0 -8.47196,3.80806 -8.85531,8.5404 v 24.25325 h 17.71062 v -24.25325 c 0,-4.69537 -3.94847,-8.5404 -8.85531,-8.5404 z"
           id="path23755" />
        <path
           id="path21966"
           d="m 150.01793,259.13805 c -4.90684,0 -8.47196,3.80806 -8.85531,8.5404 v 24.25325 h 17.71062 v -24.25325 c 0,-4.69537 -3.94847,-8.5404 -8.85531,-8.5404 z m 0.0383,15.82377 c -4.10181,0 -7.3986,-3.17955 -7.3986,-7.13549 0,-3.95594 3.29679,-7.13548 7.3986,-7.13548 4.10181,0 7.39859,3.21651 7.39859,7.13548 0,3.95594 -3.29678,7.13549 -7.39859,7.13549 z"
           style="fill:#c8ab37;stroke-width:0.264583" />
        <path
           d="m 153.33099,284.54452 h -1.18837 l -1.95507,-5.28691 h 1.34171 l 1.18838,3.73411 1.18837,-3.73411 h 1.38005 z"
           id="path23967"
           style="fill:none;stroke:url(#linearGradient10715);stroke-width:0.132292;stroke-miterlimit:4;stroke-dasharray:none" />
        <path
           style="fill:none;stroke:none;stroke-width:0.264583"
           id="path23815"
           d="m 153.31471,284.50045 h -1.18837 l -1.95507,-5.28691 h 1.34171 l 1.18838,3.73411 1.18837,-3.73411 h 1.38005 z" />
        <path
           d="m 153.31471,284.50045 h -1.18837 l -1.95507,-5.28691 h 1.34171 l 1.18838,3.73411 1.18837,-3.73411 h 1.38005 z"
           id="path22138"
           style="stroke-width:0.264583" />
        <path
           d="m 147.02782,282.72582 c 0,0.59154 0.34502,0.92429 0.84337,0.92429 0.46001,0 0.72836,-0.33275 0.72836,-0.70246 0,-0.44366 -0.23001,-0.73943 -0.80503,-0.73943 h -0.49835 v -0.96126 h 0.49835 c 0.57502,0 0.72836,-0.2588 0.72836,-0.66548 0,-0.40669 -0.26835,-0.59154 -0.61336,-0.59154 -0.53668,0 -0.69002,0.29577 -0.69002,0.7764 h -1.26505 c 0,-0.88732 0.57502,-1.70069 1.95507,-1.70069 0.9967,0 1.91674,0.48063 1.91674,1.47886 0,0.59154 -0.38335,1.0352 -0.80503,1.18308 0.49835,0.18486 0.8817,0.59154 0.8817,1.294 0,0.99823 -0.92004,1.58977 -1.99341,1.58977 -1.34171,0 -2.10841,-0.7764 -2.10841,-1.88554 z"
           id="path22136"
           style="stroke-width:0.264583" />
        <path
           style="fill:none;stroke:none;stroke-width:0.264583"
           id="path23813"
           d="m 147.02782,282.72582 c 0,0.59154 0.34502,0.92429 0.84337,0.92429 0.46001,0 0.72836,-0.33275 0.72836,-0.70246 0,-0.44366 -0.23001,-0.73943 -0.80503,-0.73943 h -0.49835 v -0.96126 h 0.49835 c 0.57502,0 0.72836,-0.2588 0.72836,-0.66548 0,-0.40669 -0.26835,-0.59154 -0.61336,-0.59154 -0.53668,0 -0.69002,0.29577 -0.69002,0.7764 h -1.26505 c 0,-0.88732 0.57502,-1.70069 1.95507,-1.70069 0.9967,0 1.91674,0.48063 1.91674,1.47886 0,0.59154 -0.38335,1.0352 -0.80503,1.18308 0.49835,0.18486 0.8817,0.59154 0.8817,1.294 0,0.99823 -0.92004,1.58977 -1.99341,1.58977 -1.34171,0 -2.10841,-0.7764 -2.10841,-1.88554 z" />
        <path
           d="m 147.0441,282.76989 c 0,0.59154 0.34502,0.92429 0.84337,0.92429 0.46001,0 0.72836,-0.33275 0.72836,-0.70246 0,-0.44366 -0.23001,-0.73943 -0.80503,-0.73943 h -0.49835 v -0.96126 h 0.49835 c 0.57502,0 0.72836,-0.2588 0.72836,-0.66548 0,-0.40669 -0.26835,-0.59154 -0.61336,-0.59154 -0.53668,0 -0.69002,0.29577 -0.69002,0.7764 h -1.26505 c 0,-0.88732 0.57502,-1.70069 1.95507,-1.70069 0.9967,0 1.91674,0.48063 1.91674,1.47886 0,0.59154 -0.38335,1.0352 -0.80503,1.18308 0.49835,0.18486 0.8817,0.59154 0.8817,1.294 0,0.99823 -0.92004,1.58977 -1.99341,1.58977 -1.34171,0 -2.10841,-0.7764 -2.10841,-1.88554 z"
           id="path23965"
           style="fill:none;stroke:url(#linearGradient10713);stroke-width:0.132292;stroke-miterlimit:4;stroke-dasharray:none" />
        <circle
           style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.565;stroke-dasharray:none;stroke-opacity:1"
           id="path32605-2"
           cx="150.15738"
           cy="268.27582"
           r="7.2059999" />
        <circle
           r="7.1815476"
           cy="268.13248"
           cx="150.20302"
           id="circle10003"
           style="display:inline;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
      </g>
      <g
         id="pin2">
        <path
           style="display:inline;fill:url(#linearGradient10690);fill-opacity:1;stroke:url(#linearGradient10692);stroke-width:0.3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           d="m 107.50476,259.13805 c -4.90684,0 -8.471973,3.80806 -8.855313,8.5404 v 24.25325 h 17.710623 v -24.25325 c 0,-4.69537 -3.94847,-8.5404 -8.85531,-8.5404 z"
           id="path23753" />
        <path
           id="path21964"
           d="m 107.50476,259.13805 c -4.90684,0 -8.471973,3.80806 -8.855313,8.5404 v 24.25325 h 17.710623 v -24.25325 c 0,-4.69537 -3.94847,-8.5404 -8.85531,-8.5404 z m 0.15334,15.82377 c -4.10181,0 -7.3986,-3.17955 -7.3986,-7.13549 0,-3.95594 3.29679,-7.13548 7.3986,-7.13548 4.10181,0 7.39859,3.21651 7.39859,7.13548 0,3.95594 -3.29678,7.13549 -7.39859,7.13549 z"
           style="display:inline;fill:#c8ab37;stroke-width:0.264583" />
        <path
           id="path24345"
           d="m 107.41267,259.20318 c -4.90684,0 -8.471973,3.80805 -8.855313,8.54039 v 24.25325 h 17.710623 v -24.25325 c 0,-4.69537 -3.94847,-8.54039 -8.85531,-8.54039 z"
           style="display:inline;fill:none;fill-opacity:1;stroke:#ffdd55;stroke-width:0.264583;stroke-opacity:0" />
        <path
           d="m 107.52202,281.82014 c 0.65169,-0.36971 1.15004,-0.62851 1.15004,-1.14611 0,-0.40669 -0.26834,-0.59154 -0.61335,-0.59154 -0.38335,0 -0.69003,0.22183 -0.69003,0.7764 h -1.26504 c 0,-0.96126 0.69002,-1.70069 1.95507,-1.70069 0.9967,0 1.8784,0.48063 1.8784,1.58977 0,0.88732 -0.8817,1.44189 -1.45672,1.73766 -0.76669,0.48063 -0.95837,0.66548 -0.95837,1.07217 h 2.33842 v 0.99823 h -3.83347 c 0.0383,-1.73766 0.65169,-2.21829 1.49505,-2.73589 z"
           id="path23961"
           style="display:inline;fill:none;stroke:url(#linearGradient10709);stroke-width:0.132292;stroke-miterlimit:4;stroke-dasharray:none" />
        <path
           style="display:inline;fill:none;stroke:none;stroke-width:0.264583"
           id="path23809"
           d="m 107.46642,281.76456 c 0.65169,-0.36971 1.15004,-0.62851 1.15004,-1.14611 0,-0.40669 -0.26834,-0.59154 -0.61335,-0.59154 -0.38335,0 -0.69003,0.22183 -0.69003,0.7764 h -1.26504 c 0,-0.96126 0.69002,-1.70069 1.95507,-1.70069 0.9967,0 1.8784,0.48063 1.8784,1.58977 0,0.88732 -0.8817,1.44189 -1.45672,1.73766 -0.76669,0.48063 -0.95837,0.66548 -0.95837,1.07217 h 2.33842 v 0.99823 h -3.83347 c 0.0383,-1.73766 0.65169,-2.21829 1.49505,-2.73589 z" />
        <path
           d="m 107.46642,281.76456 c 0.65169,-0.36971 1.15004,-0.62851 1.15004,-1.14611 0,-0.40669 -0.26834,-0.59154 -0.61335,-0.59154 -0.38335,0 -0.69003,0.22183 -0.69003,0.7764 h -1.26504 c 0,-0.96126 0.69002,-1.70069 1.95507,-1.70069 0.9967,0 1.8784,0.48063 1.8784,1.58977 0,0.88732 -0.8817,1.44189 -1.45672,1.73766 -0.76669,0.48063 -0.95837,0.66548 -0.95837,1.07217 h 2.33842 v 0.99823 h -3.83347 c 0.0383,-1.73766 0.65169,-2.21829 1.49505,-2.73589 z"
           id="path21996"
           style="display:inline;stroke-width:0.264583" />
        <circle
           style="display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.565;stroke-dasharray:none;stroke-opacity:1"
           id="circle32792"
           cx="107.70052"
           cy="268.22797"
           r="7.2059999" />
        <circle
           style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
           id="circle10001"
           cx="107.7752"
           cy="268.13248"
           r="7.1815476" />
      </g>
    </g>
    <g
       id="XYZ">
      <text
         style="font-style:normal;font-weight:400;font-size:2.75197px;font-family:'Open Sans';isolation:isolate;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.0263466"
         id="tspan729"
         transform="scale(0.99556842,1.0044513)"
         x="140.26192"
         y="10.449902">X</text>
      <text
         style="font-style:normal;font-weight:400;font-size:2.78365px;font-family:'Open Sans';isolation:isolate;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.0269213"
         id="tspan733"
         transform="scale(1.0073211,0.99273214)"
         x="132.3427"
         y="17.2437">Y</text>
      <text
         style="font-style:normal;font-weight:400;font-size:2.9831px;font-family:'Open Sans';isolation:isolate;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.0286908"
         id="tspan737"
         transform="scale(1.0804681,0.92552476)"
         x="129.12531"
         y="18.494904">Z</text>
      <path
         stroke-miterlimit="4"
         stroke-linecap="butt"
         stroke-linejoin="miter"
         stroke="#f9f9f9"
         stroke-width="0.323938"
         vector-effect="non-scaling-stroke"
         fill="none"
         id="path741"
         d="M 138.69239,9.9400725 V 14.04927 h -4.55404"
         style="isolation:isolate;stroke-width:0.345177;stroke-miterlimit:3;stroke-dasharray:none;marker-start:url(#marker33752);marker-end:url(#TriangleStart)" />
      <circle
         stroke-miterlimit="4"
         stroke-linecap="round"
         stroke-linejoin="round"
         stroke="#f9f9f9"
         stroke-width="0.352032"
         fill="none"
         id="ellipse743"
         cy="-138.66948"
         cx="14.043882"
         vector-effect="non-scaling-stroke"
         transform="rotate(90)"
         style="isolation:isolate"
         r="0.84673113" />
    </g>
    <g
       id="g2209">
      <g
         id="TP15">
        <circle
           style="fill:#ffffff;stroke-width:0.264583"
           id="path2067"
           cx="160.7636"
           cy="3.8460469"
           r="2" />
        <path
           id="path15626"
           style="fill:#c8ab37;stroke-width:0.264583"
           d="m 158.19497,-7.9377666 -4.84668,7.03236611 C 150.68391,2.9608033 151.75344,8.3677 155.79378,11.152071 c 4.04032,2.784371 9.13681,1.671846 12.13781,-2.0072731 l 5.38824,-7.818411 a 110.69444,104.49223 0.71228283 0 0 -15.12486,-9.2641535 z m 2.69283,9.7881583 a 2,2 0 0 1 1.37618,0.6703499 2,2 0 0 1 -0.17153,2.8232363 2,2 0 0 1 -2.82325,-0.1710191 2,2 0 0 1 0.17154,-2.8232363 2,2 0 0 1 1.44706,-0.4993308 z" />
      </g>
      <g
         id="TP17">
        <circle
           style="fill:#ffffff;stroke-width:0.264583"
           id="circle2121"
           cx="176.33943"
           cy="16.250622"
           r="2" />
        <path
           id="path21964-25-9"
           style="fill:#c8ab37;stroke-width:0.264583"
           d="m 176.56206,3.7777803 -6.55901,6.3590827 c -3.37111,3.268345 -3.38359,8.779621 0.0323,12.302552 3.41553,3.522933 8.63158,3.431817 12.29607,0.412963 l 7.28444,-7.062397 A 110.69444,104.49223 0.36870351 0 0 176.56206,3.7777803 Z m -0.22501,10.4735817 a 2,2 0 0 1 1.73564,0.993559 2,2 0 0 1 -0.72195,2.734779 2,2 0 0 1 -2.73479,-0.721448 2,2 0 0 1 0.72196,-2.734778 2,2 0 0 1 0.99914,-0.272112 z" />
      </g>
      <g
         id="TP10">
        <circle
           style="fill:#ffffff;stroke-width:0.264583"
           id="circle2123"
           cx="189.4335"
           cy="31.111546"
           r="2" />
        <path
           id="path21964-25-5"
           style="fill:#c8ab37;stroke-width:0.264583"
           d="m 192.06834,18.534134 -7.92032,5.531298 c -3.8496,2.688324 -4.7414,8.126843 -1.932,12.149807 2.80941,4.022967 7.97272,4.765714 12.07211,2.370512 l 8.37855,-5.85121 A 104.49223,110.69444 89.416217 0 0 192.06834,18.534134 Z m -2.62241,10.580112 a 2,2 0 0 1 1.85284,1.281884 2,2 0 0 1 -1.14885,2.58481 2,2 0 0 1 -2.58481,-1.149363 2,2 0 0 1 1.14937,-2.584297 2,2 0 0 1 0.73145,-0.133034 z" />
      </g>
      <g
         id="TP13">
        <circle
           style="fill:#ffffff;stroke-width:0.264583"
           id="circle2125"
           cx="199.76332"
           cy="48.008427"
           r="2" />
        <path
           id="path21964-25"
           style="fill:#c8ab37;stroke-width:0.264583"
           d="m 204.67439,36.012535 -8.89356,4.139106 c -4.2569,1.981201 -6.07664,7.183036 -4.00621,11.631666 2.07043,4.448629 7.02706,6.074241 11.47922,4.424982 l 9.19697,-4.280619 A 104.49223,110.69444 88.07818 0 0 204.67439,36.012535 Z M 199.678,46.01044 a 2,2 0 0 1 2.04949,1.614762 2,2 0 0 1 -1.57896,2.346121 2,2 0 0 1 -2.34663,-1.578939 2,2 0 0 1 1.57893,-2.346637 2,2 0 0 1 0.29717,-0.03531 z" />
      </g>
    </g>
    <g
       id="pinBlock_UpLeft">
      <g
         id="TP11">
        <path
           id="path15639"
           style="fill:#c8ab37;stroke-width:0.264583"
           d="m 38.938423,3.277829 6.523995,6.3950001 c 3.353114,3.2868049 3.335333,8.7980669 -0.09985,12.3021889 -3.434821,3.504127 -8.650292,3.384373 -12.298152,0.345444 L 25.818865,15.218175 A 104.49223,110.69444 89.945889 0 1 38.938423,3.277829 Z m 0.1675,10.47466 a 2,2 0 0 0 -1.74107,0.984013 2,2 0 0 0 0.706923,2.738702 2,2 0 0 0 2.738711,-0.706421 2,2 0 0 0 -0.706934,-2.738701 2,2 0 0 0 -0.99763,-0.277593 z" />
        <circle
           style="fill:#ffffff;stroke-width:0.264583"
           id="circle2135"
           cx="-39.065685"
           cy="15.752805"
           r="2"
           transform="scale(-1,1)" />
      </g>
      <g
         id="TP12">
        <circle
           style="fill:#ffffff;stroke-width:0.264583"
           id="circle2137"
           cx="-26.073811"
           cy="30.550949"
           r="2"
           transform="scale(-1,1)" />
        <path
           id="path15637"
           style="fill:#c8ab37;stroke-width:0.264583"
           d="m 23.309335,18.001498 7.978137,5.447574 c 3.8777,2.647631 4.826729,8.076456 2.059854,12.128785 -2.766884,4.052333 -7.922085,4.849419 -12.046474,2.497525 l -8.43971,-5.762643 A 104.49223,110.69444 89.980332 0 1 23.309335,18.001498 Z m 2.733695,10.551906 a 2,2 0 0 0 -1.839237,1.301327 2,2 0 0 0 1.17601,2.572567 2,2 0 0 0 2.572561,-1.176523 2,2 0 0 0 -1.176524,-2.572048 2,2 0 0 0 -0.73281,-0.125323 z" />
      </g>
      <g
         id="TP14">
        <circle
           style="fill:#ffffff;stroke-width:0.264583"
           id="circle2139"
           cx="-15.868192"
           cy="47.673"
           r="2"
           transform="scale(-1,1)" />
        <path
           id="path15635"
           style="fill:#c8ab37;stroke-width:0.264583"
           d="m 10.788973,35.749107 8.950774,4.013881 c 4.284286,1.921262 6.176853,7.097046 4.169061,11.574295 -2.007791,4.477248 -6.941118,6.172265 -11.415986,4.585652 L 3.236681,51.771813 a 110.69444,104.49223 1.1176716 0 1 7.552292,-16.022706 z m 5.136214,9.926798 a 2,2 0 0 0 -2.026626,1.643367 2,2 0 0 0 1.611732,2.32373 2,2 0 0 0 2.324239,-1.611718 2,2 0 0 0 -1.611709,-2.324246 2,2 0 0 0 -0.297636,-0.03114 z" />
      </g>
      <g
         id="TP16"
         transform="matrix(1.0256656,0,0,1.0081805,-1.6380517,-0.10255905)">
        <path
           id="path15641"
           style="display:inline;fill:#c8ab37;stroke-width:0.264583"
           d="m 57.51346,-8.1118879 4.84668,7.0323661 C 65.02452,2.786682 63.95499,8.1935787 59.91465,10.97795 55.87433,13.762321 50.77784,12.649796 47.77684,8.9706766 L 42.3886,1.1522656 A 104.49223,110.69444 89.287717 0 1 57.51346,-8.1118879 Z M 54.82063,1.6762704 A 2,2 0 0 0 53.44445,2.3466203 2,2 0 0 0 53.61598,5.1698566 2,2 0 0 0 56.43923,4.9988375 2,2 0 0 0 56.26769,2.1756012 2,2 0 0 0 54.82063,1.6762704 Z" />
        <circle
           style="fill:#ffffff;stroke-width:0.264583"
           id="circle2133"
           cx="-54.932598"
           cy="3.6708181"
           transform="scale(-1,1)"
           r="2" />
      </g>
    </g>
  </g>
</svg>
`;
}
