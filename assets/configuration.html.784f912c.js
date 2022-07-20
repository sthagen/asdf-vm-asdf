import{_ as l,o as a,c as i,a as e,b as s,d as n,e as t,r as d}from"./app.72755c2a.js";const c={},r=n(`<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1><p>Configuration of <code>asdf</code> encompasses both the sharable <code>.tool-versions</code> files as well as user specific customisations with <code>.asdfrc</code> and Environment Variables.</p><h2 id="tool-versions" tabindex="-1"><a class="header-anchor" href="#tool-versions" aria-hidden="true">#</a> <code>.tool-versions</code></h2><p>Whenever <code>.tool-versions</code> file is present in a directory, the tool versions it declares will be used in that directory and any subdirectories.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Global defaults can be set in the file <code>$HOME/.tool-versions</code></p></div><p>This is what a <code>.tool-versions</code> file looks like:</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">ruby 2.5.3</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 10.15.0</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre></div><p>You can also include comments:</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">ruby 2.5.3 # This is a comment</span></span>
<span class="line"><span style="color:#F8F8F2;"># This is another comment</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 10.15.0</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre></div><p>The versions can be in the following format:</p><ul><li><code>10.15.0</code> - an actual version. Plugins that support downloading binaries, will download binaries.</li><li><code>ref:v1.0.2-a</code> or <code>ref:39cb398vb39</code> - tag/commit/branch to download from github and compile</li><li><code>path:/src/elixir</code> - a path to custom compiled version of a tool to use. For use by language developers and such.</li><li><code>system</code> - this keyword causes asdf to passthrough to the version of the tool on the system that is not managed by asdf.</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Multiple versions can be set by separating them with a space. For example, to use Python <code>3.7.2</code>, fallback to Python <code>2.7.15</code> and finally to the <code>system</code> Python, the following line can be added to <code>.tool-versions</code>.</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">python 3.7.2 2.7.15 system</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre></div></div><p>To install all the tools defined in a <code>.tool-versions</code> file run <code>asdf install</code> with no other arguments in the directory containing the <code>.tool-versions</code> file.</p><p>To install a single tool defined in a <code>.tool-versions</code> file run <code>asdf install &lt;name&gt;</code> in the directory containing the <code>.tool-versions</code> file. The tool will be installed at the version specified in the <code>.tool-versions</code> file.</p><p>Edit the file directly or use <code>asdf local</code> (or <code>asdf global</code>) which updates it.</p><h2 id="home-asdfrc" tabindex="-1"><a class="header-anchor" href="#home-asdfrc" aria-hidden="true">#</a> <code>$HOME/.asdfrc</code></h2><p>Add an <code>.asdfrc</code> file to your home directory and asdf will use the settings specified in the file. The file below shows the required format with the default values to demonstrate:</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;"># See the docs for explanations: https://asdf-vm.com/manage/configuration.html</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span>
<span class="line"><span style="color:#F8F8F2;">legacy_version_file = no</span></span>
<span class="line"><span style="color:#F8F8F2;">use_release_candidates = no</span></span>
<span class="line"><span style="color:#F8F8F2;">always_keep_download = no</span></span>
<span class="line"><span style="color:#F8F8F2;">plugin_repository_last_check_duration = 60</span></span>
<span class="line"><span style="color:#F8F8F2;">disable_plugin_short_name_repository = no</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre></div><h3 id="legacy-version-file" tabindex="-1"><a class="header-anchor" href="#legacy-version-file" aria-hidden="true">#</a> <code>legacy_version_file</code></h3><p>Plugins <strong>with support</strong> can read the versions files used by other version managers, for example, <code>.ruby-version</code> in the case of Ruby&#39;s <code>rbenv</code>.</p>`,20),h=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Options"),e("th",{style:{"text-align":"left"}},"Description")])],-1),p={style:{"text-align":"left"}},u=e("code",null,"no",-1),f=t(),g=e("td",{style:{"text-align":"left"}},[t("Use "),e("code",null,".tool-versions"),t(" to read versions")],-1),y=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"yes")]),e("td",{style:{"text-align":"left"}},[t("Use plugin fallback to legacy version files ("),e("code",null,".ruby-version"),t(") if available")])],-1),_=e("h3",{id:"use-release-candidates",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#use-release-candidates","aria-hidden":"true"},"#"),t(),e("code",null,"use_release_candidates")],-1),m=e("p",null,[t("Configure the "),e("code",null,"asdf update"),t(" command to upgrade to the latest Release Candidate instead of the latest Semantic Version.")],-1),v=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Options"),e("th",{style:{"text-align":"left"}},"Description")])],-1),b={style:{"text-align":"left"}},x=e("code",null,"no",-1),F=t(),w=e("td",{style:{"text-align":"left"}},"Semantic Version is used",-1),k=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"yes")]),e("td",{style:{"text-align":"left"}},"Release Candidate is used")],-1),D=e("h3",{id:"always-keep-download",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#always-keep-download","aria-hidden":"true"},"#"),t(),e("code",null,"always_keep_download")],-1),T=e("p",null,[t("Configure the "),e("code",null,"asdf install"),t(" command to keep or delete the source code or binary it downloads.")],-1),S=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Options"),e("th",{style:{"text-align":"left"}},"Description")])],-1),O={style:{"text-align":"left"}},A=e("code",null,"no",-1),C=t(),E=e("td",{style:{"text-align":"left"}},"Delete source code or binary after successful install",-1),N=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"yes")]),e("td",{style:{"text-align":"left"}},"Keep source code or binary after install")],-1),I=e("h3",{id:"plugin-repository-last-check-duration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugin-repository-last-check-duration","aria-hidden":"true"},"#"),t(),e("code",null,"plugin_repository_last_check_duration")],-1),R=e("p",null,"Configure the duration since the last asdf plugin repository sync to the next. Sync events will trigger a check of the duration, if the duration has passed then a sync occurs.",-1),P=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Options"),e("th",{style:{"text-align":"left"}},"Description")])],-1),V={style:{"text-align":"left"}},M=t("integer in range "),L=e("code",null,"1",-1),U=t(" to "),$=e("code",null,"999999999",-1),B=t(),H=e("br",null,null,-1),j=t(),G=e("code",null,"60",-1),q=t(" is "),z=e("td",{style:{"text-align":"left"}},"Sync on trigger event if duration since last sync has passed",-1),K=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"0")]),e("td",{style:{"text-align":"left"}},"Sync on each trigger event")],-1),W=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"never")]),e("td",{style:{"text-align":"left"}},"Never sync")],-1),Y=n('<p>Sync events occur when the following commands are executed:</p><ul><li><code>asdf plugin add &lt;name&gt;</code></li><li><code>asdf plugin list all</code></li></ul><p><code>asdf plugin add &lt;name&gt; &lt;git-url&gt;</code> does NOT trigger a plugin sync.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Setting the value to <code>never</code> does not stop the plugin repository from being initially synced, for that behaviour see <code>disable_plugin_short_name_repository</code>.</p></div><h3 id="disable-plugin-short-name-repository" tabindex="-1"><a class="header-anchor" href="#disable-plugin-short-name-repository" aria-hidden="true">#</a> <code>disable_plugin_short_name_repository</code></h3><p>Disable synchronization of the asdf plugin short-name repository. Sync events will exit early if the short-name repository is disabled.</p>',6),J=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Options"),e("th",{style:{"text-align":"left"}},"Description")])],-1),Q={style:{"text-align":"left"}},X=e("code",null,"no",-1),Z=t(),ee=e("td",{style:{"text-align":"left"}},"Clone or update the asdf plugin repository on sync events",-1),te=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"yes")]),e("td",{style:{"text-align":"left"}},"Disable the plugin short-name repository")],-1),oe=n('<p>Sync events occur when the following commands are executed:</p><ul><li><code>asdf plugin add &lt;name&gt;</code></li><li><code>asdf plugin list all</code></li></ul><p><code>asdf plugin add &lt;name&gt; &lt;git-url&gt;</code> does NOT trigger a plugin sync.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Disabling the plugin short-name repository does not remove the repository if it has already synced. Remove the plugin repo with <code>rm --recursive --trash $ASDF_DATA_DIR/repository</code>.</p><p>Disabling the plugin short-name repository does not remove plugins previously installed from this source. Plugins can be removed with <code>asdf plugin remove &lt;name&gt;</code>. Removing a plugin will remove all installed versions of the managed tool.</p></div><h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment Variables</h2><ul><li><code>ASDF_CONFIG_FILE</code> - Defaults to <code>~/.asdfrc</code> as described above. Can be set to any location.</li><li><code>ASDF_DEFAULT_TOOL_VERSIONS_FILENAME</code> - The filename of the file storing the tool names and versions. Defaults to <code>.tool-versions</code>. Can be any valid filename. Typically you should not override the default value unless you know you want asdf to ignore <code>.tool-versions</code> files.</li><li><code>ASDF_DIR</code> - Defaults to <code>~/.asdf</code> - Location of the <code>asdf</code> scripts. If you install <code>asdf</code> to some other directory, set this to that directory. For example, if you are installing via the AUR, you should set this to <code>/opt/asdf-vm</code>. This must be set to an absolute path like <code>~/.asdf</code>, <code>${HOME}/.asdf</code>, <code>/home/my/working/dir/.asdf</code>.</li><li><code>ASDF_DATA_DIR</code> - Defaults to <code>~/.asdf</code> - Location where <code>asdf</code> install plugins, shims and installs. Can be set to any location before sourcing <code>asdf.sh</code> or <code>asdf.fish</code> mentioned in the section above. For Elvish, this can be set above <code>use asdf</code>. This must be set to an absolute path like <code>~/.asdf</code>, <code>${HOME}/.asdf</code>, <code>/home/my/working/dir/.asdf</code>.</li></ul><h2 id="internal-configuration" tabindex="-1"><a class="header-anchor" href="#internal-configuration" aria-hidden="true">#</a> Internal Configuration</h2><p>Users should not worry about this section as it describes configuration internal to <code>asdf</code> useful for Package Managers and integrators.</p><ul><li><code>$ASDF_DIR/asdf_updates_disabled</code>: Updates via the <code>asdf update</code> command are disabled when this file is present (content irrelevant). This is used by Package Managers like Pacman or Homebrew to ensure the correct update method is used for the particular installation.</li></ul>',9);function se(ne,le){const o=d("Badge");return a(),i("div",null,[r,e("table",null,[h,e("tbody",null,[e("tr",null,[e("td",p,[u,f,s(o,{type:"tip",text:"default",vertical:"middle"})]),g]),y])]),_,m,e("table",null,[v,e("tbody",null,[e("tr",null,[e("td",b,[x,F,s(o,{type:"tip",text:"default",vertical:"middle"})]),w]),k])]),D,T,e("table",null,[S,e("tbody",null,[e("tr",null,[e("td",O,[A,C,s(o,{type:"tip",text:"default",vertical:"middle"})]),E]),N])]),I,R,e("table",null,[P,e("tbody",null,[e("tr",null,[e("td",V,[M,L,U,$,B,H,j,G,q,s(o,{type:"tip",text:"default",vertical:"middle"})]),z]),K,W])]),Y,e("table",null,[J,e("tbody",null,[e("tr",null,[e("td",Q,[X,Z,s(o,{type:"tip",text:"default",vertical:"middle"})]),ee]),te])]),oe])}var ie=l(c,[["render",se],["__file","configuration.html.vue"]]);export{ie as default};
