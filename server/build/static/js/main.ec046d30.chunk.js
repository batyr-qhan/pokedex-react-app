(this["webpackJsonppokedex-react-app"]=this["webpackJsonppokedex-react-app"]||[]).push([[0],{200:function(e,t,a){e.exports=a.p+"static/media/spinner.b4d932f2.gif"},232:function(e,t,a){e.exports=a(577)},236:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){},577:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(5),i=a.n(l),o=(a(236),a(97)),r=a(98),c=a(104),h=a(99),m=a(105),u=(a(237),a(578)),p=a(583),d=a(582),g=a(580),f=a(49),E=a(581),k=a(579),y=(a(238),a(200)),b=a.n(y),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).showModal=function(){a.setState({visible:!0})},a.handleOk=function(e){console.log(e),a.setState({visible:!1})},a.handleCancel=function(e){console.log(e),a.setState({visible:!1})},a.state={height:"",speed:"",attack:"",defense:"",hp:"",types:[],imageUrl:"",pokemonIndex:"",imageLoading:!0,visible:!1},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.url;fetch(t).then((function(t){return t.json().then((function(t){return e.setState({height:t.height,types:t.types,speed:t.stats[0].base_stat,attack:t.stats[4].base_stat,defense:t.stats[3].base_stat,hp:t.stats[5].base_stat})}))}));var a=t.split("/")[t.split("/").length-2],n="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/".concat(a,".png?raw=true");this.setState({imageUrl:n,pokemonIndex:a});document.getElementsByClassName("pokemon-type")}},{key:"render",value:function(){var e=this,t=this.props.name,a=this.state.types.map((function(e,t){return s.a.createElement("li",{key:t,className:"pokemon-type"},e.type.name)}));return s.a.createElement("div",{className:"site-card-border-less-wrapper"},s.a.createElement(k.a,{title:t,bordered:!1,style:{width:300}},this.state.imageLoading?s.a.createElement("img",{src:b.a,alt:"pokemon pic"}):null,s.a.createElement("img",{onLoad:function(){return e.setState({imageLoading:!1})},src:this.state.imageUrl,alt:"pokePic"}),s.a.createElement("div",{className:"card-content"},s.a.createElement("p",null,"height: ",this.state.height),s.a.createElement("p",null,"HP: ",this.state.hp),s.a.createElement("ul",{className:"types-list",style:{listStyle:"none"}},a)),s.a.createElement(f.a,{type:"primary",onClick:this.showModal,style:{marginTop:"1em"}},"Open Modal")),s.a.createElement(E.a,{title:t,visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},s.a.createElement("p",null,"speed: ",this.state.speed),s.a.createElement("p",null,"attack: ",this.state.attack),s.a.createElement("p",null,"defense: ",this.state.defense," ")))}}]),t}(n.Component),S=(a(318),u.a.Header),O=u.a.Content,C=u.a.Footer,x=p.a.Search,j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e,t){e<=1?a.setState({minValue:0,maxValue:t}):a.setState({minValue:e*t-t,maxValue:e*t})},a.onSearch=function(e){console.log(e.target.value),a.setState({search:e.target.value})},a.state={pokemons:[],length:void 0,minValue:0,maxValue:10,search:""},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((function(e){return e.json()})).then((function(t){return e.setState({pokemons:t.results,length:t.results.length})}))}},{key:"render",value:function(){var e=this,t=this.state.pokemons.filter((function(t){return-1!==t.name.indexOf(e.state.search)}));return s.a.createElement(u.a,{className:"layout"},s.a.createElement(S,null,s.a.createElement("div",{className:"logo"}),s.a.createElement(d.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],style:{lineHeight:"64px"}},s.a.createElement(d.a.Item,{key:"1"},"POKEDEX"))),s.a.createElement(O,{style:{padding:"0 50px"}},s.a.createElement("div",{className:"site-layout-content-header"},s.a.createElement("div",null,s.a.createElement(g.a,{showSizeChanger:!0,onShowSizeChange:this.handleChange,defaultCurrent:1,total:this.state.length,onChange:this.handleChange,pageSizeOptions:["10","20","50"]})),s.a.createElement("div",null,s.a.createElement(x,{placeholder:"input search text",onSearch:this.onSearch,enterButton:!0}))),s.a.createElement("div",{className:"site-layout-content"},t.slice(this.state.minValue,this.state.maxValue).map((function(e){return s.a.createElement(v,{key:e.name,name:e.name,url:e.url})})))),s.a.createElement(C,{style:{textAlign:"center"}},"Ant Design \xa92018 Created by Ant UED"))}}]),t}(n.Component);i.a.render(s.a.createElement(j,null),document.getElementById("root"))}},[[232,1,2]]]);
//# sourceMappingURL=main.ec046d30.chunk.js.map