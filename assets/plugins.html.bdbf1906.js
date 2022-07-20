import{_ as c,o as d,c as p,a as s,b as e,w as o,e as n,d as l,r as i}from"./app.72755c2a.js";const r={},h=s("h1",{id:"plugins",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#plugins","aria-hidden":"true"},"#"),n(" Plugins")],-1),u=s("p",null,[n("Plugins are how "),s("code",null,"asdf"),n(" knows to handle different tools like Node.js, Ruby, Elixir etc.")],-1),_=n("See "),g=n("Creating Plugins"),f=n(" for the plugin API used to support more tools."),y=l(`<h2 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> Add</h2><p>Add plugins via their Git URL:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">git-url</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin add elm https://github.com/vic/asdf-elm</span></span>
<span class="line"></span></code></pre></div><p>or via the short-name association in the plugins repository:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin add erlang</span></span>
<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">Recommendation</p><p>Prefer the longer <code>git-url</code> method as it is independent of the short-name repo.</p></div><h2 id="list-installed" tabindex="-1"><a class="header-anchor" href="#list-installed" aria-hidden="true">#</a> List Installed</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin list</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin list</span></span>
<span class="line"><span style="color:#88846F;"># java</span></span>
<span class="line"><span style="color:#88846F;"># nodejs</span></span>
<span class="line"></span></code></pre></div><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin list --urls</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin list</span></span>
<span class="line"><span style="color:#88846F;"># java            https://github.com/halcyon/asdf-java.git</span></span>
<span class="line"><span style="color:#88846F;"># nodejs          https://github.com/asdf-vm/asdf-nodejs.git</span></span>
<span class="line"></span></code></pre></div><h2 id="list-all-in-short-name-repository" tabindex="-1"><a class="header-anchor" href="#list-all-in-short-name-repository" aria-hidden="true">#</a> List All in Short-name Repository</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin list all</span></span>
<span class="line"></span></code></pre></div>`,11),m=n("See "),F={href:"https://github.com/asdf-vm/asdf-plugins",target:"_blank",rel:"noopener noreferrer"},v=n("Plugins Shortname Index"),b=n(" for the entire short-name list of plugins."),k=l(`<h2 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> Update</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin update --all</span></span>
<span class="line"></span></code></pre></div><p>If you want to update a specific package, just say so.</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin update </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin update erlang</span></span>
<span class="line"></span></code></pre></div>`,4),x=n("This update will fetch the "),w=s("em",null,"latest commit",-1),R=n(" on the "),S=s("em",null,"default branch",-1),j=n(" of the "),L=s("em",null,"origin",-1),I=n(" of the plugin repository. Versioned plugins and updates are currently being developed ("),P={href:"https://github.com/asdf-vm/asdf/pull/916",target:"_blank",rel:"noopener noreferrer"},N=n("#916"),T=n(")"),V=l(`<h2 id="remove" tabindex="-1"><a class="header-anchor" href="#remove" aria-hidden="true">#</a> Remove</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin remove </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin remove erlang</span></span>
<span class="line"></span></code></pre></div><p>Removing a plugin will remove all installations of the tool made with the plugin. This can be used as a shorthand for cleaning/pruning many unused versions of a tool.</p><h2 id="syncing-the-asdf-short-name-repository" tabindex="-1"><a class="header-anchor" href="#syncing-the-asdf-short-name-repository" aria-hidden="true">#</a> Syncing the asdf Short-name Repository</h2><p>The short-name repo is synced to your local machine and periodically refreshed. This method to determine a sync is as follows:</p>`,5),A=s("li",null,[n("sync events are triggered by commands: "),s("ul",null,[s("li",null,[s("code",null,"asdf plugin add <name>")]),s("li",null,[s("code",null,"asdf plugin list all")])])],-1),E=n("if configuration option "),B=s("code",null,"disable_plugin_short_name_repository",-1),C=n(" is set to "),U=s("code",null,"yes",-1),X=n(", then sync is aborted early. See the "),z=n("asdf config docs"),G=n(" for more."),q=n("if there has not been a synchronization in the last "),D=s("code",null,"X",-1),H=n(" minutes then the sync will occur. "),J=s("code",null,"X",-1),K=n(" defaults to "),M=s("code",null,"60",-1),O=n(", but can be configured in your "),Q=s("code",null,".asdfrc",-1),W=n(" via the "),Y=s("code",null,"plugin_repository_last_check_duration",-1),Z=n(" option. See the "),$=n("asdf config docs"),ss=n(" for more.");function ns(es,as){const a=i("RouterLink"),t=i("ExternalLinkIcon");return d(),p("div",null,[h,u,s("p",null,[_,e(a,{to:"/plugins/create.html"},{default:o(()=>[g]),_:1}),f]),y,s("p",null,[m,s("a",F,[v,e(t)]),b]),k,s("p",null,[x,w,R,S,j,L,I,s("a",P,[N,e(t)]),T]),V,s("ul",null,[A,s("li",null,[E,B,C,U,X,e(a,{to:"/manage/configuration.html"},{default:o(()=>[z]),_:1}),G]),s("li",null,[q,D,H,s("ul",null,[s("li",null,[J,K,M,O,Q,W,Y,Z,e(a,{to:"/manage/configuration.html"},{default:o(()=>[$]),_:1}),ss])])])])])}var ls=c(r,[["render",ns],["__file","plugins.html.vue"]]);export{ls as default};
