(this["webpackJsonpmimo-projects"]=this["webpackJsonpmimo-projects"]||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),i=n(19),a=n.n(i),r=(n(25),n(8)),o=n(2),l=(n(26),n(27),n(0)),j=["https://mimo.app/i/cafe.png","https://mimo.app/i/mountain-road.png","https://mimo.app/i/flowers.png","https://mimo.app/i/kluane.png","https://mimo.app/i/bank-lobby.png"],h=function(){var t=j.map((function(t){return Object(l.jsx)("img",{src:t})}));return Object(l.jsxs)("div",{className:"PhotoApp",children:[Object(l.jsx)("h1",{children:"Interest in the Picturesque"}),t]})},d=n(9),u=n(10),p=n(12),b=n(11),x=(n(29),function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(){var t;return Object(d.a)(this,n),(t=e.call(this)).start=function(){clearInterval(t.stopwatch),t.stopwatch=setInterval(t.watchLoop,10)},t.stop=function(){clearInterval(t.stopwatch)},t.reset=function(){t.setState({mil:0,sec:0})},t.watchLoop=function(){var e=t.state.mil,n=t.state.sec;(e+=1)>99&&(n+=1,e=0),t.setState({mil:e,sec:n})},t.state={mil:0,sec:0},t.stopwatch=null,t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.mil,e=this.state.sec;return t<=9&&(t="0"+t),e<=9&&(e="0"+e),Object(l.jsxs)("main",{className:"Stopwatch",children:[Object(l.jsx)("h3",{children:"React Stopwatch"}),Object(l.jsx)("section",{children:Object(l.jsxs)("h1",{children:[e,".",Object(l.jsx)("span",{children:t})]})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:this.start,children:"Start"}),Object(l.jsx)("button",{onClick:this.stop,children:"Stop"}),Object(l.jsx)("button",{onClick:this.reset,children:"Reset"})]})]})}}]),n}(c.a.Component)),O=function(t){return Object(l.jsxs)("li",{className:"task",children:[Object(l.jsx)("input",{type:"checkbox",value:t.i,onClick:t.handler,checked:!1}),Object(l.jsx)("span",{children:t.t})]})},f=(n(30),function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(t){var s;return Object(d.a)(this,n),(s=e.call(this,t)).handleInput=function(t){s.setState({val:t.target.value})},s.addTask=function(){var t=s.state.val,e=s.state.tasks;if(0!=t.length){var n=e.concat(t);s.setState({tasks:n,val:""})}},s.handleCheckmark=function(t){var e=t.target.value,n=s.state.tasks.filter((function(t,n){return n!=e}));s.setState({tasks:n})},s.state={tasks:[],val:""},s}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.state.val,n=this.state.tasks.map((function(e,n){return Object(l.jsx)(O,{t:e,i:n,handler:t.handleCheckmark})}));return Object(l.jsxs)("div",{className:"ToDoList",children:[Object(l.jsx)("h1",{children:"To-Do List:"}),Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("input",{name:"newTaskInput",type:"text",placeholder:"ex. Pick up mail",value:e,onChange:this.handleInput}),Object(l.jsx)("button",{className:"taskSubmit",onClick:this.addTask,children:"+"})]}),Object(l.jsx)("ul",{children:n})]})}}]),n}(c.a.Component)),m=(n(31),n(18)),v=function(t){var e=t.box,n="box";return e.isRevealed&&(n="box revealed"),e.isMine&&(n+=" mine"),Object(l.jsx)("button",{className:n,box:e,onClick:function(){t.clickHandler(e.x,e.y)},children:e.neighbors})};function k(t,e,n,s,c){for(var i=[],a=s-1;a<=s+1;a++)if(!(a<0||a>=e))for(var r=c-1;r<=c+1;r++)r<0||r>=n||a==s&&r==c||i.push(t[a][r]);return i}function g(t,e,n){for(var s=[],c=0;c<e;c++)for(var i=0;i<n;i++)t[c][i].isRevealed||s.push(t[c][i]);return s}function C(t,e,n,s,c){return k(t,e,n,s,c).forEach((function(s){s.isRevealed||!s.isEmpty&&s.isMine||(t[s.x][s.y].isRevealed=!0,s.isEmpty&&C(t,e,n,s.x,s.y))})),t}function w(t,e,n){for(var s=0;s<e;s++)for(var c=0;c<n;c++)t[s][c].isRevealed=!0;return t}var S=function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(t){var s;return Object(d.a)(this,n),(s=e.call(this,t)).initializeBoard=function(){var t=function(t,e){for(var n=[],s=0;s<t;s++){n.push([]);for(var c=0;c<e;c++)n[s][c]={x:s,y:c,isMine:!1,isRevealed:!1,isEmpty:!1,neighbors:0}}return n}(s.props.width,s.props.height);s.setState({board:t,status:0,initialized:!1})},s.populateBoard=function(t){var e=Object(m.a)(s.state.board),n=s.props.width,c=s.props.height;e=function(t,e,n){for(var s=t,c=0;c<e;c++)for(var i=0;i<n;i++){var a=t[c][i];a.isMine||function(){var r=0;k(t,e,n,a.x,a.y).forEach((function(t){t.isMine&&r++})),0==r&&(s[c][i].isEmpty=!0),s[c][i].neighbors=r}()}return s}(e=function(t,e,n,s,c){for(var i=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},a=0;a<s;){var r=i(0,e-1),o=i(0,n-1);t[r][o].isMine||r==c.x||o==c.y||(t[r][o].isMine=!0,a++)}return t}(e,n,c,s.props.mines,t),n,c),s.setState({board:e,initialized:!0,status:0},(function(){s.handleBoxClick(t.x,t.y)}))},s.handleBoxClick=function(t,e){var n=s.props.width,c=s.props.height,i=s.props.mines,a=Object(m.a)(s.state.board),r=s.state.initialized,o=s.state.status,l=a[t][e];if(r){if(!l.isRevealed){if(l.isMine)return a=w(a,n,c),void s.setState({board:a,status:-1});l.isRevealed=!0,l.isEmpty&&(a=C(a,n,c,t,e)),g(a,n,c).length==i&&(o=1,a=w(a,n,c)),s.setState({board:a,status:o})}}else s.populateBoard(l)},s.state={board:null,initialized:!1,status:0},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.initializeBoard()}},{key:"render",value:function(){var t=this,e=this.props.width,n=this.props.height,s=this.props.mines,c=this.state.board,i=this.state.status;if(null==c)return Object(l.jsx)("p",{children:"Loading..."});var a=g(c,e,n).length-s;a<0&&(a=0);var r=null;return 1==i?r=Object(l.jsx)("p",{children:"You've won! Congratulations!"}):-1==i&&(r=Object(l.jsx)("p",{children:"You've lost... Try again?"})),Object(l.jsxs)("main",{children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("button",{onClick:this.initializeBoard,children:"New Game"}),Object(l.jsxs)("span",{children:[a," boxes remaining"]})]}),Object(l.jsx)("div",{className:"board",children:c.map((function(e){return Object(l.jsx)("div",{className:"column",children:e.map((function(e){return Object(l.jsx)(v,{box:e,clickHandler:t.handleBoxClick})}))})}))}),r]})}}]),n}(c.a.Component),y=function(){return Object(l.jsx)("div",{className:"Minesweeper",children:Object(l.jsx)(S,{width:10,height:10,mines:15})})},M=function(){return Object(l.jsxs)("div",{className:"AppMenu",children:[Object(l.jsx)("h1",{children:"Menu"}),Object(l.jsx)("p",{className:"marginBottom4px",children:"Students using M1M0 to learn React had to complete four projects that focused on concepts and skills taught on the M1M0 platform. The project code has been emulated here in their complete forms."}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsxs)(r.b,{to:"/photo",children:[Object(l.jsx)("h3",{children:"Photo App"}),Object(l.jsx)("p",{children:"Skills #1-3: JSX and Functional Components"})]})}),Object(l.jsx)("li",{children:Object(l.jsxs)(r.b,{to:"/stopwatch",children:[Object(l.jsx)("h3",{children:"Stopwatch"}),Object(l.jsx)("p",{children:"Skills #4-5: Class Components and State"})]})}),Object(l.jsx)("li",{children:Object(l.jsxs)(r.b,{to:"/todo",children:[Object(l.jsx)("h3",{children:"To-Do App"}),Object(l.jsx)("p",{children:"Skills #6-8: Update Methods, Multiple Components, Styling"})]})}),Object(l.jsx)("li",{children:Object(l.jsxs)(r.b,{to:"/minesweeper",children:[Object(l.jsx)("h3",{children:"Minesweeper (Unused)"}),Object(l.jsx)("p",{children:"Unused due to being too complicated for beginners"})]})})]})})]})},N=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(T,{}),Object(l.jsx)("div",{className:"AppContainer",children:Object(l.jsx)(h,{})})]})},B=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(T,{}),Object(l.jsx)("div",{className:"AppContainer",children:Object(l.jsx)(x,{})})]})},R=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(T,{}),Object(l.jsx)("div",{className:"AppContainer",children:Object(l.jsx)(f,{})})]})},A=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(T,{}),Object(l.jsx)("div",{className:"AppContainer",children:Object(l.jsx)(y,{})})]})},T=function(){return Object(l.jsx)("div",{className:"AppHeader",children:Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("button",{children:"Back"})})})},F=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(r.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/photo",component:Object(o.f)(N)}),Object(l.jsx)(o.a,{exact:!0,path:"/stopwatch",component:Object(o.f)(B)}),Object(l.jsx)(o.a,{exact:!0,path:"/todo",component:Object(o.f)(R)}),Object(l.jsx)(o.a,{exact:!0,path:"/minesweeper",component:Object(o.f)(A)}),Object(l.jsx)(o.a,{path:"/",component:Object(o.f)(M)})]})})})},I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),s(t),c(t),i(t),a(t)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(F,{})}),document.getElementById("root")),I()}},[[40,1,2]]]);
//# sourceMappingURL=main.356c8092.chunk.js.map