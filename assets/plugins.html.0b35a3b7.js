import{_ as r,o as d,c as p,a,b as e,w as i,e as s,d as n,r as t}from"./app.72755c2a.js";const c={},u=a("h1",{id:"plugins",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#plugins","aria-hidden":"true"},"#"),s(" Plugins")],-1),h=a("blockquote",null,[a("p",null,`Hi, we've recently migrated our docs and added some new pages. If you would like to help translate this page, see the "Edit this page" link at the bottom of the page.`)],-1),_=a("p",null,[s("Plugins s\xE3o como "),a("code",null,"asdf"),s(" sabe lidar com diferentes ferramentas, tais quais Node.js, Ruby, Elixir etc.")],-1),m=s("Veja "),g=s("Criando Plugins"),F=s(" para a API do plugin usada para suportar mais ferramentas."),f=n(`<h2 id="adicionar" tabindex="-1"><a class="header-anchor" href="#adicionar" aria-hidden="true">#</a> Adicionar</h2><p>Adicione os plugins via sua Url Git:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">git-url</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin add elm https://github.com/vic/asdf-elm</span></span>
<span class="line"></span></code></pre></div><p>ou pelo nome abreviado dentro do reposit\xF3rio de plugins:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin add erlang</span></span>
<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">Recommendation</p><p>Prefira o m\xE9todo mais longo <code>git-url</code>, pois ele \xE9 independente do reposit\xF3rio de nome abreviado.</p></div><h2 id="listar-instalados" tabindex="-1"><a class="header-anchor" href="#listar-instalados" aria-hidden="true">#</a> Listar Instalados</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin list</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin list</span></span>
<span class="line"><span style="color:#88846F;"># java</span></span>
<span class="line"><span style="color:#88846F;"># nodejs</span></span>
<span class="line"></span></code></pre></div><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin list --urls</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin list</span></span>
<span class="line"><span style="color:#88846F;"># java            https://github.com/halcyon/asdf-java.git</span></span>
<span class="line"><span style="color:#88846F;"># nodejs          https://github.com/asdf-vm/asdf-nodejs.git</span></span>
<span class="line"></span></code></pre></div><h2 id="listar-todos-nomes-abreviados-no-repositorio" tabindex="-1"><a class="header-anchor" href="#listar-todos-nomes-abreviados-no-repositorio" aria-hidden="true">#</a> Listar todos nomes abreviados no reposit\xF3rio</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin list all</span></span>
<span class="line"></span></code></pre></div>`,11),v=s("Veja "),b={href:"https://github.com/asdf-vm/asdf-plugin-template",target:"_blank",rel:"noopener noreferrer"},y=s("Plugins Shortname Index"),k=s(" para toda a lista de nomes curtos de plugins."),x=n(`<h2 id="atualizar" tabindex="-1"><a class="header-anchor" href="#atualizar" aria-hidden="true">#</a> Atualizar</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin update --all</span></span>
<span class="line"></span></code></pre></div><p>Se voc\xEA quiser atualizar um pacote espec\xEDfico, apenas use.</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin update </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin update erlang</span></span>
<span class="line"></span></code></pre></div>`,4),z=s("Esta atualiza\xE7\xE3o ir\xE1 buscar o \xFAltimo "),j=a("em",null,"commit",-1),E=s(" na "),I=a("em",null,"branch",-1),P=s(" padr\xE3o no "),L=a("em",null,"origin",-1),R=s(" de seu resposit\xF3rio. Plugins e atualiza\xE7\xF5es das vers\xF5es est\xE3o sendo desenvolvidas ("),V={href:"https://github.com/asdf-vm/asdf/pull/916",target:"_blank",rel:"noopener noreferrer"},w=s("#916"),N=s(")"),S=n(`<h2 id="remover" tabindex="-1"><a class="header-anchor" href="#remover" aria-hidden="true">#</a> Remover</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin remove </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin remove erlang</span></span>
<span class="line"></span></code></pre></div><p>Removendo o plugin ir\xE1 remover todas as instala\xE7\xF5es feitas com o plugin. Isso pode ser usado como um atalho para apagar/remover sujeiras de vers\xF5es n\xE3o utilizadas de uma ferramenta.</p><h2 id="sincronizar-nome-abreviado-no-repositorio" tabindex="-1"><a class="header-anchor" href="#sincronizar-nome-abreviado-no-repositorio" aria-hidden="true">#</a> Sincronizar nome abreviado no reposit\xF3rio</h2><p>O nome abreviado do reposit\xF3rio \xE9 sincronizado em seu m\xE1quina local e periodicamente atualizado. Esse per\xEDodo pode ser determinado com o seguinte m\xE9todo:</p>`,5),q=a("li",null,[s("comandos "),a("code",null,"asdf plugin add <name>"),s(" ou "),a("code",null,"asdf plugin list all"),s(" disparam a sincroniza\xE7\xE3o")],-1),A=a("li",null,[s("ocorre uma sincroniza\xE7\xE3o se n\xE3o houver nenhuma nos \xFAltimos "),a("code",null,"X"),s(" minutos")],-1),B=a("code",null,"X",-1),C=s(" por padr\xE3o \xE9 "),X=a("code",null,"60",-1),G=s(", mas pode ser mudado em "),H=a("code",null,".asdfrc",-1),O=s(" via as op\xE7\xF5es do "),T=a("code",null,"plugin_repository_last_check_duration",-1),U=s(". Seja mais em "),D=s("asdf documenta\xE7\xE3o de configura\xE7\xE3o"),J=s(".");function K(M,Q){const o=t("RouterLink"),l=t("ExternalLinkIcon");return d(),p("div",null,[u,h,_,a("p",null,[m,e(o,{to:"/pt-br/plugins/create.html"},{default:i(()=>[g]),_:1}),F]),f,a("p",null,[v,a("a",b,[y,e(l)]),k]),x,a("p",null,[z,j,E,I,P,L,R,a("a",V,[w,e(l)]),N]),S,a("ul",null,[q,A,a("li",null,[B,C,X,G,H,O,T,U,e(o,{to:"/pt-br/manage/configuration.html"},{default:i(()=>[D]),_:1}),J])])])}var Y=r(c,[["render",K],["__file","plugins.html.vue"]]);export{Y as default};
