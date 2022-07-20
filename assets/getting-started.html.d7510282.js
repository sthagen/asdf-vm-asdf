import{_ as d,o as i,c as r,a as s,b as a,w as t,d as o,e,r as c}from"./app.72755c2a.js";const p={},h=o('<h1 id="\u5FEB\u901F\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5165\u95E8" aria-hidden="true">#</a> \u5FEB\u901F\u5165\u95E8</h1><p><code>asdf</code> \u5B89\u88C5\u8FC7\u7A0B\u5305\u62EC\uFF1A</p><ol><li>\u5B89\u88C5\u4F9D\u8D56</li><li>\u4E0B\u8F7D <code>asdf</code> \u6838\u5FC3</li><li>\u5B89\u88C5 <code>asdf</code></li><li>\u4E3A\u6BCF\u4E00\u4E2A\u4F60\u60F3\u8981\u7BA1\u7406\u7684\u5DE5\u5177/\u8FD0\u884C\u73AF\u5883\u5B89\u88C5\u63D2\u4EF6</li><li>\u5B89\u88C5\u5DE5\u5177/\u8FD0\u884C\u73AF\u5883\u7684\u4E00\u4E2A\u7248\u672C</li><li>\u901A\u8FC7 <code>.tool-versions</code> \u914D\u7F6E\u6587\u4EF6\u8BBE\u7F6E\u5168\u5C40\u548C\u9879\u76EE\u7248\u672C</li></ol><h2 id="_1-\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> 1. \u5B89\u88C5\u4F9D\u8D56</h2><p><strong>Linux</strong>\uFF1A</p><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6839\u636E\u4F60\u7684\u7CFB\u7EDF\u914D\u7F6E\u53EF\u80FD\u4F1A\u9700\u8981 <code>sudo</code> \u6743\u9650\u3002</p></div><table><thead><tr><th>\u5305\u7BA1\u7406\u5668</th><th>\u547D\u4EE4</th></tr></thead><tbody><tr><td>Aptitude</td><td><code>apt install curl git</code></td></tr><tr><td>DNF</td><td><code>dnf install curl git</code></td></tr><tr><td>Pacman</td><td><code>pacman -S curl git</code></td></tr><tr><td>Zypper</td><td><code>zypper install curl git</code></td></tr></tbody></table><p><strong>macOS</strong>\uFF1A</p><table><thead><tr><th>\u5305\u7BA1\u7406\u5668</th><th>\u547D\u4EE4</th></tr></thead><tbody><tr><td>Homebrew</td><td>Homebrew \u5C06\u4F1A\u81EA\u52A8\u5B89\u88C5\u6240\u9700\u8981\u7684\u4F9D\u8D56\u3002</td></tr><tr><td>Spack</td><td><code>spack install coreutils curl git</code></td></tr></tbody></table><h2 id="_2-\u4E0B\u8F7D-asdf" tabindex="-1"><a class="header-anchor" href="#_2-\u4E0B\u8F7D-asdf" aria-hidden="true">#</a> 2. \u4E0B\u8F7D asdf</h2><p>\u5C3D\u7BA1\u8FD8\u6709\u5176\u4ED6\u7279\u5B9A\u4E8E\u5E73\u53F0\u7684\u65B9\u6CD5\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u4F7F\u7528 Git\uFF1A</p>',11),F=s("thead",null,[s("tr",null,[s("th",null,"\u65B9\u6CD5"),s("th",null,"\u547D\u4EE4")])],-1),u=s("tr",null,[s("td",null,"Git"),s("td",null,[s("code",null,"git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.10.0")])],-1),_=s("tr",null,[s("td",null,"Homebrew"),s("td",null,[s("code",null,"brew install asdf")])],-1),m=s("td",null,"Pacman",-1),f=s("code",null,"git clone https://aur.archlinux.org/asdf-vm.git && cd asdf-vm && makepkg -si",-1),y=e(" \u6216\u8005\u4F7F\u7528\u4F60\u66F4\u4E60\u60EF\u7684 "),g={href:"https://wiki.archlinux.org/index.php/AUR_helpers",target:"_blank",rel:"noopener noreferrer"},b=e("AUR helper"),v=o(`<h2 id="_3-\u5B89\u88C5-asdf" tabindex="-1"><a class="header-anchor" href="#_3-\u5B89\u88C5-asdf" aria-hidden="true">#</a> 3. \u5B89\u88C5 asdf</h2><p>\u6839\u636E Shell \u811A\u672C\u3001\u64CD\u4F5C\u7CFB\u7EDF\u548C\u5B89\u88C5\u65B9\u6CD5\u7684\u7EC4\u5408\u4E0D\u540C\uFF0C\u76F8\u5E94\u7684\u914D\u7F6E\u4E5F\u4F1A\u4E0D\u540C\u3002\u5C55\u5F00\u4EE5\u4E0B\u4E0E\u4F60\u7684\u7CFB\u7EDF\u6700\u5339\u914D\u7684\u9009\u9879\uFF1A</p><details class="custom-container details"><summary>Bash &amp; Git</summary><p>\u5728 <code>~/.bashrc</code> \u6587\u4EF6\u4E2D\u52A0\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8865\u5168\u529F\u80FD\u5FC5\u987B\u5728 <code>.bashrc</code> \u6587\u4EF6\u4E2D\u52A0\u5165\u4EE5\u4E0B\u5185\u5BB9\u6765\u914D\u7F6E\u5B8C\u6210\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/completions/asdf.bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>Bash &amp; Git (macOS)</summary><p>\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528 <strong>macOS Catalina \u6216\u8005\u66F4\u65B0\u7684\u7248\u672C</strong>, \u9ED8\u8BA4\u7684 shell \u5DF2\u7ECF\u88AB\u4FEE\u6539\u4E3A <strong>ZSH</strong>\u3002\u9664\u975E\u4FEE\u6539\u56DE Bash, \u5426\u5219\u8BF7\u9075\u5FAA ZSH \u7684\u8BF4\u660E\u3002</p><p>\u5728 <code>~/.bash_profile</code> \u6587\u4EF6\u4E2D\u52A0\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8865\u5168\u529F\u80FD\u5FC5\u987B\u5728 <code>.bash_profile</code> \u6587\u4EF6\u4E2D\u4F7F\u7528\u4EE5\u4E0B\u5185\u5BB9\u624B\u52A8\u914D\u7F6E\u5B8C\u6210\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/completions/asdf.bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>`,4),k={class:"custom-container details"},x=o(`<summary>Bash &amp; Homebrew (macOS)</summary><p>\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528 <strong>macOS Catalina \u6216\u8005\u66F4\u65B0\u7684\u7248\u672C</strong>, \u9ED8\u8BA4\u7684 shell \u5DF2\u7ECF\u88AB\u4FEE\u6539\u4E3A <strong>ZSH</strong>\u3002\u9664\u975E\u4FEE\u6539\u56DE Bash, \u5426\u5219\u8BF7\u9075\u5FAA ZSH \u7684\u8BF4\u660E\u3002</p><p>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5C06 <code>asdf.sh</code> \u52A0\u5165\u5230 <code>~/.bash_profile</code> \u6587\u4EF6\u4E2D\uFF1A</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. $(brew --prefix asdf)/libexec/asdf.sh&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.bash_profile</span></span>
<span class="line"></span></code></pre></div>`,4),E=e("\u8865\u5168\u529F\u80FD\u5C06\u9700\u8981 "),H={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-bash",target:"_blank",rel:"noopener noreferrer"},D=e("\u6309\u7167 Homebrew \u7684\u8BF4\u660E\u5B8C\u6210\u914D\u7F6E"),S=e(" \u6216\u8005\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A"),w=o(`<div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. $(brew --prefix asdf)/etc/bash_completion.d/asdf.bash&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.bash_profile</span></span>
<span class="line"></span></code></pre></div>`,1),z={class:"custom-container details"},$=o(`<summary>Bash &amp; Pacman</summary><p>\u5728 <code>~/.bashrc</code> \u6587\u4EF6\u4E2D\u52A0\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),Z=e("\u4E3A\u4E86\u8BA9\u8865\u5168\u529F\u80FD\u6B63\u5E38\u5DE5\u4F5C\u9700\u8981\u5B89\u88C5 "),q={href:"https://wiki.archlinux.org/title/bash#Common_programs_and_options",target:"_blank",rel:"noopener noreferrer"},B=s("code",null,"bash-completion",-1),j=e(" \u3002"),O=o(`<details class="custom-container details"><summary>Fish &amp; Git</summary><p>\u5728 <code>~/.config/fish/config.fish</code> \u6587\u4EF6\u4E2D\u52A0\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/asdf.fish</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8865\u5168\u529F\u80FD\u5FC5\u987B\u6309\u7167\u4EE5\u4E0B\u547D\u4EE4\u624B\u52A8\u914D\u7F6E\u5B8C\u6210\uFF1A</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/completions</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> and ln -s </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/completions/asdf.fish </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/completions</span></span>
<span class="line"></span></code></pre></div></details>`,1),M={class:"custom-container details"},P=o(`<summary>Fish &amp; Homebrew</summary><p>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5C06 <code>asdf.fish</code> \u52A0\u5165\u5230 <code>~/.config/fish/config.fish</code> \u6587\u4EF6\u4E2D\uFF1A</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\nsource &quot;</span><span style="color:#F8F8F2;">(brew --prefix asdf)</span><span style="color:#E6DB74;">&quot;/libexec/asdf.fish&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/config.fish</span></span>
<span class="line"></span></code></pre></div>`,3),C=e("Fish shell \u7684\u8865\u5168\u529F\u80FD\u53EF\u4EE5\u4EA4\u7ED9 "),G={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-fish",target:"_blank",rel:"noopener noreferrer"},A=e(" Homebrew \u5904\u7406"),N=e(". \u5F88\u53CB\u597D\uFF01"),R=o(`<details class="custom-container details"><summary>Fish &amp; Pacman</summary><p>\u5728 <code>~/.config/fish/config.fish</code> \u6587\u4EF6\u4E2D\u52A0\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.fish</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8865\u5168\u529F\u80FD\u5C06\u4F1A\u5728\u5B89\u88C5\u8FC7\u7A0B\u4E2D\u7531 AUR \u5305\u7BA1\u7406\u5668\u81EA\u52A8\u914D\u7F6E\u5B8C\u6210\u3002</p></details><details class="custom-container details"><summary>Elvish &amp; Git</summary><p>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5C06 <code>asdf.elv</code> \u52A0\u5165\u5230 <code>~/.config/elvish/rc.elv</code> \u6587\u4EF6\u4E2D\uFF1A</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> ln -s </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/asdf.elv </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>
<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;use asdf _asdf; var asdf~ = $_asdf:asdf~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>
<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;set edit:completion:arg-completer[asdf] = $_asdf:arg-completer~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>
<span class="line"></span></code></pre></div><p>\u8865\u5168\u529F\u80FD\u5C06\u4F1A\u81EA\u52A8\u914D\u7F6E\u3002</p></details><details class="custom-container details"><summary>Elvish &amp; Homebrew</summary><p>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5C06 <code>asdf.elv</code> \u52A0\u5165\u5230 <code>~/.config/elvish/rc.elv</code> \u6587\u4EF6\u4E2D\uFF1A</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> ln -s (brew --prefix asdf)/libexec/asdf.elv </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>
<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;use asdf _asdf; var asdf~ = $_asdf:asdf~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>
<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;set edit:completion:arg-completer[asdf] = $_asdf:arg-completer~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>
<span class="line"></span></code></pre></div><p>\u8865\u5168\u529F\u80FD\u5C06\u4F1A\u81EA\u52A8\u914D\u7F6E\u3002</p></details><details class="custom-container details"><summary>Elvish &amp; Pacman</summary><p>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5C06 <code>asdf.elv</code> \u52A0\u5165\u5230 <code>~/.config/elvish/rc.elv</code> \u6587\u4EF6\u4E2D\uFF1A</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> ln -s /opt/asdf-vm/asdf.elv </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>
<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;use asdf _asdf; var asdf~ = $_asdf:asdf~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>
<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;set edit:completion:arg-completer[asdf] = $_asdf:arg-completer~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>
<span class="line"></span></code></pre></div><p>\u8865\u5168\u529F\u80FD\u5C06\u4F1A\u81EA\u52A8\u914D\u7F6E\u3002</p></details>`,4),L={class:"custom-container details"},I=o(`<summary>ZSH &amp; Git</summary><p>\u5728 <code>~/.zshrc</code> \u6587\u4EF6\u4E2D\u52A0\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),T=s("strong",null,"\u6216\u8005",-1),U=e(" \u4F7F\u7528 ZSH \u6846\u67B6\u63D2\u4EF6\uFF0C\u6BD4\u5982 "),V={href:"https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf",target:"_blank",rel:"noopener noreferrer"},W=e("asdf for oh-my-zsh"),J=e(" \u5C06\u4F1A\u4F7F\u811A\u672C\u751F\u6548\u5E76\u5B89\u88C5\u8865\u5168\u529F\u80FD\u3002"),K=o(`<p>\u8865\u5168\u529F\u80FD\u4F1A\u88AB ZSH \u6846\u67B6 <code>asdf</code> \u63D2\u4EF6\u6216\u8005\u901A\u8FC7\u5728 <code>.zshrc</code> \u6587\u4EF6\u4E2D\u52A0\u5165\u4EE5\u4E0B\u5185\u5BB9\u81EA\u52A8\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># append completions to fpath</span></span>
<span class="line"><span style="color:#F8F8F2;">fpath=(\${ASDF_DIR}/completions $fpath)</span></span>
<span class="line"><span style="color:#88846F;"># initialise completions with ZSH&#39;s compinit</span></span>
<span class="line"><span style="color:#F8F8F2;">autoload -Uz compinit </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> compinit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684 <code>compinit</code> \u914D\u7F6E\uFF0C\u8BF7\u786E\u4FDD <code>compinit</code> \u5728 <code>asdf.sh</code> \u751F\u6548\u4F4D\u7F6E\u7684\u4E0B\u65B9</li><li>\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684 <code>compinit</code> \u914D\u7F6E\u548C ZSH \u6846\u67B6\uFF0C\u8BF7\u786E\u4FDD <code>compinit</code> \u5728\u6846\u67B6\u751F\u6548\u4F4D\u7F6E\u7684\u4E0B\u65B9</li></ul><p><strong>\u8B66\u544A</strong></p>`,4),Q=e("\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528 ZSH \u6846\u67B6\uFF0C\u6709\u5173\u7684 "),X=s("code",null,"asdf",-1),Y=e(" \u63D2\u4EF6\u6216\u8BB8\u9700\u8981\u66F4\u65B0\u624D\u80FD\u901A\u8FC7 "),ss=s("code",null,"fpath",-1),es=e(" \u6B63\u786E\u5730\u4F7F\u7528\u6700\u65B0\u7684 ZSH \u8865\u5168\u529F\u80FD\u3002Oh-My-ZSH asdf \u63D2\u4EF6\u8FD8\u5728\u66F4\u65B0\u4E2D\uFF0C\u8BF7\u67E5\u770B "),as={href:"https://github.com/ohmyzsh/ohmyzsh/pull/8837",target:"_blank",rel:"noopener noreferrer"},os=e("ohmyzsh/ohmyzsh#8837"),ns=e(" \u4E86\u89E3\u66F4\u591A\u3002"),ls={class:"custom-container details"},ts=o('<summary>ZSH &amp; Homebrew</summary><p>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5C06 <code>asdf.sh</code> \u52A0\u5165\u5230 <code>~/.zshrc</code> \u6587\u4EF6\u4E2D\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. $(brew --prefix asdf)/libexec/asdf.sh&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> ${ZDOTDIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">~}/.zshrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',3),cs=s("strong",null,"\u6216\u8005",-1),ds=e(" \u4F7F\u7528 ZSH \u6846\u67B6\u63D2\u4EF6\uFF0C\u6BD4\u5982 "),is={href:"https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf",target:"_blank",rel:"noopener noreferrer"},rs=e("asdf for oh-my-zsh"),ps=e(" \u5C06\u4F1A\u4F7F\u811A\u672C\u751F\u6548\u5E76\u5B89\u88C5\u8865\u5168\u529F\u80FD\u3002"),hs=e("\u8865\u5168\u529F\u80FD\u53EF\u4EE5\u88AB ZSH \u6846\u67B6 "),Fs=s("code",null,"asdf",-1),us=e(" \u6216\u8005 "),_s={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-zsh",target:"_blank",rel:"noopener noreferrer"},ms=e("\u6309\u7167 Homebrew \u7684\u6307\u5F15"),fs=e(" \u5B8C\u6210\u914D\u7F6E\u3002\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528 ZSH \u6846\u67B6\uFF0C\u6709\u5173\u7684 "),ys=s("code",null,"asdf",-1),gs=e(" \u63D2\u4EF6\u6216\u8BB8\u9700\u8981\u66F4\u65B0\u624D\u80FD\u901A\u8FC7 "),bs=s("code",null,"fpath",-1),vs=e(" \u6B63\u786E\u5730\u4F7F\u7528\u6700\u65B0\u7684 ZSH \u8865\u5168\u529F\u80FD\u3002Oh-My-ZSH asdf \u63D2\u4EF6\u8FD8\u5728\u66F4\u65B0\u4E2D\uFF0C\u8BF7\u67E5\u770B "),ks={href:"https://github.com/ohmyzsh/ohmyzsh/pull/8837",target:"_blank",rel:"noopener noreferrer"},xs=e("ohmyzsh/ohmyzsh#8837"),Es=e(" \u4E86\u89E3\u66F4\u591A\u3002"),Hs={class:"custom-container details"},Ds=o(`<summary>ZSH &amp; Pacman</summary><p>\u5728 <code>~/.zshrc</code> \u6587\u4EF6\u4E2D\u52A0\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),Ss=e("\u8865\u5168\u529F\u80FD\u4F1A\u88AB\u653E\u5728\u4E00\u4E2A\u5BF9 ZSH \u5F88\u53CB\u597D\u7684\u4F4D\u7F6E\uFF0C\u4F46\u662F "),ws={href:"https://wiki.archlinux.org/index.php/zsh#Command_completion",target:"_blank",rel:"noopener noreferrer"},zs=e("ZSH \u5FC5\u987B\u4F7F\u7528\u81EA\u52A8\u8865\u5168\u5B8C\u6210\u914D\u7F6E"),$s=e("\u3002"),Zs=o('<p><code>asdf</code> \u811A\u672C\u9700\u8981\u5728\u8BBE\u7F6E\u597D\u7684 <code>$PATH</code> <strong>\u4E4B\u540E</strong>\u548C\u5DF2\u7ECF\u751F\u6548\u7684\u6846\u67B6\uFF08\u6BD4\u5982 oh-my-zsh \u7B49\u7B49\uFF09<strong>\u4E4B\u540E</strong>\u7684\u4F4D\u7F6E\u751F\u6548\u3002</p><p>\u901A\u5E38\u6253\u5F00\u4E00\u4E2A\u65B0\u7684\u7EC8\u7AEF\u6807\u7B7E\u9875\u6765\u91CD\u542F\u4F60\u7684 shell \u8BA9 <code>PATH</code> \u66F4\u6539\u5373\u65F6\u751F\u6548\u3002</p><h2 id="\u6838\u5FC3\u5B89\u88C5\u5B8C\u6210" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3\u5B89\u88C5\u5B8C\u6210" aria-hidden="true">#</a> \u6838\u5FC3\u5B89\u88C5\u5B8C\u6210\uFF01</h2><p>\u8FD9\u6837\u5C31\u5B8C\u6210\u4E86 <code>asdf</code> \u6838\u5FC3\u7684\u5B89\u88C5 \u{1F389}</p><p><code>asdf</code> \u4EC5\u5728\u4F60\u5B89\u88C5<strong>\u63D2\u4EF6</strong>\u3001<strong>\u5DE5\u5177</strong>\u548C\u7BA1\u7406\u5B83\u4EEC\u7684<strong>\u7248\u672C</strong>\u65F6\u624D\u5F00\u59CB\u771F\u6B63\u53D1\u6325\u4F5C\u7528\u3002\u8BF7\u7EE7\u7EED\u9605\u8BFB\u4E0B\u9762\u7684\u6307\u5357\u6765\u4E86\u89E3\u8FD9\u4E9B\u662F\u5982\u4F55\u505A\u5230\u7684\u3002</p><h2 id="_4-\u5B89\u88C5\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u5B89\u88C5\u63D2\u4EF6" aria-hidden="true">#</a> 4. \u5B89\u88C5\u63D2\u4EF6</h2>',6),qs=e("\u51FA\u4E8E\u6F14\u793A\u76EE\u7684\uFF0C\u6211\u4EEC\u5C06\u901A\u8FC7 "),Bs={href:"https://github.com/asdf-vm/asdf-nodejs/",target:"_blank",rel:"noopener noreferrer"},js=s("code",null,"asdf-nodejs",-1),Os=e(" \u63D2\u4EF6\u6765\u5B89\u88C5\u548C\u8BBE\u7F6E "),Ms={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},Ps=e("Node.js"),Cs=e("\u3002"),Gs=o(`<h3 id="\u63D2\u4EF6\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u4F9D\u8D56" aria-hidden="true">#</a> \u63D2\u4EF6\u4F9D\u8D56</h3><p>\u6BCF\u4E2A\u63D2\u4EF6\u90FD\u6709\u4F9D\u8D56\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u786E\u8BA4\u5E94\u8BE5\u5217\u4E3E\u4E86\u8FD9\u4E9B\u4F9D\u8D56\u7684\u63D2\u4EF6\u6E90\u7801\u3002\u5BF9\u4E8E <code>asdf-nodejs</code> \u6765\u8BF4\uFF0C\u5B83\u4EEC\u662F\uFF1A</p><table><thead><tr><th>\u64CD\u4F5C\u7CFB\u7EDF</th><th>\u5B89\u88C5\u4F9D\u8D56</th></tr></thead><tbody><tr><td>Linux (Debian)</td><td><code>apt-get install dirmngr gpg curl gawk</code></td></tr><tr><td>macOS</td><td><code>brew install gpg gawk</code></td></tr></tbody></table><p>\u6211\u4EEC\u5E94\u8BE5\u63D0\u524D\u5B89\u88C5\u8FD9\u4E9B\u4F9D\u8D56\uFF0C\u56E0\u4E3A\u6709\u4E9B\u63D2\u4EF6\u6709 post-install \u94A9\u5B50\u3002</p><h3 id="\u5B89\u88C5\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u63D2\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5\u63D2\u4EF6</h3><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git</span></span>
<span class="line"></span></code></pre></div><h2 id="_5-\u5B89\u88C5\u6307\u5B9A\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_5-\u5B89\u88C5\u6307\u5B9A\u7248\u672C" aria-hidden="true">#</a> 5. \u5B89\u88C5\u6307\u5B9A\u7248\u672C</h2><p>\u73B0\u5728\u6211\u4EEC\u5DF2\u7ECF\u6709\u4E86 Node.js \u63D2\u4EF6\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u5F00\u59CB\u5B89\u88C5\u67D0\u4E2A\u7248\u672C\u4E86\u3002</p><p>\u6211\u4EEC\u901A\u8FC7 <code>asdf list all nodejs</code> \u53EF\u4EE5\u770B\u5230\u6240\u6709\u53EF\u7528\u7684\u7248\u672C\u6216\u8005\u901A\u8FC7 <code>asdf list all nodejs 14</code> \u67E5\u770B\u7248\u672C\u5B50\u96C6\u3002</p><p>\u6211\u4EEC\u5C06\u53EA\u5B89\u88C5\u6700\u65B0\u53EF\u7528\u7684 <code>latest</code> \u7248\u672C\uFF1A</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install nodejs latest</span></span>
<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F</p><p><code>asdf</code> \u5F3A\u5236\u4F7F\u7528\u51C6\u786E\u7684\u7248\u672C\u3002<code>latest</code> \u662F\u4E00\u4E2A\u901A\u8FC7 <code>asdf</code> \u6765\u89E3\u6790\u5230\u6267\u884C\u65F6\u523B\u7684\u5B9E\u9645\u7248\u672C\u53F7\u7684\u8F85\u52A9\u5DE5\u5177\u3002</p></div><h2 id="_6-\u8BBE\u7F6E\u9ED8\u8BA4\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_6-\u8BBE\u7F6E\u9ED8\u8BA4\u7248\u672C" aria-hidden="true">#</a> 6. \u8BBE\u7F6E\u9ED8\u8BA4\u7248\u672C</h2><p><code>asdf</code> \u5728\u4ECE\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u4E00\u76F4\u5230 <code>$HOME</code> \u76EE\u5F55\u7684\u6240\u6709 <code>.tool-versions</code> \u6587\u4EF6\u4E2D\u8FDB\u884C\u5DE5\u5177\u7684\u7248\u672C\u67E5\u627E\u3002\u67E5\u627E\u5728\u6267\u884C <code>asdf</code> \u7BA1\u7406\u7684\u5DE5\u5177\u65F6\u5B9E\u65F6\u53D1\u751F\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u8B66\u544A</p><p>\u5982\u679C\u6CA1\u6709\u4E3A\u5DE5\u5177\u627E\u5230\u6307\u5B9A\u7684\u7248\u672C\uFF0C\u5219\u4F1A\u51FA\u73B0<strong>\u9519\u8BEF</strong>\u3002<code>asdf current</code> \u5C06\u663E\u793A\u5F53\u524D\u76EE\u5F55\u4E2D\u7684\u5DE5\u5177\u548C\u7248\u672C\u89E3\u6790\u7ED3\u679C\uFF0C\u6216\u8005\u4E0D\u5B58\u5728\uFF0C\u4EE5\u4FBF\u4F60\u53EF\u4EE5\u89C2\u5BDF\u54EA\u4E9B\u5DE5\u5177\u5C06\u65E0\u6CD5\u6267\u884C\u3002</p></div><h3 id="\u5168\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40" aria-hidden="true">#</a> \u5168\u5C40</h3><p>\u5168\u5C40\u9ED8\u8BA4\u914D\u7F6E\u5728 <code>$HOME/.tool-versions</code> \u6587\u4EF6\u4E2D\u8FDB\u884C\u7BA1\u7406\u3002\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E2A\u5168\u5C40\u7248\u672C\uFF1A</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf global nodejs latest</span></span>
<span class="line"></span></code></pre></div><p><code>$HOME/.tool-versions</code> \u6587\u4EF6\u5185\u5BB9\u5C06\u4F1A\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,20),As=e("\u67D0\u4E9B\u64CD\u4F5C\u7CFB\u7EDF\u5DF2\u7ECF\u6709\u4E00\u4E9B\u7531\u7CFB\u7EDF\u800C\u975E "),Ns=s("code",null,"asdf",-1),Rs=e(" \u5B89\u88C5\u548C\u7BA1\u7406\u7684\u5DE5\u5177\u4E86\uFF0C"),Ls=s("code",null,"python",-1),Is=e(" \u5C31\u662F\u4E00\u4E2A\u5E38\u89C1\u7684\u4F8B\u5B50\u3002\u4F60\u9700\u8981\u544A\u8BC9 "),Ts=s("code",null,"asdf",-1),Us=e(" \u5C06\u7BA1\u7406\u6743\u8FD8\u7ED9\u7CFB\u7EDF\u3002"),Vs=e("\u7248\u672C\u53C2\u8003\u90E8\u5206"),Ws=e(" \u5C06\u4F1A\u5F15\u5BFC\u4F60\u3002"),Js=o(`<h3 id="\u672C\u5730" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730" aria-hidden="true">#</a> \u672C\u5730</h3><p>\u672C\u5730\u7248\u672C\u88AB\u5B9A\u4E49\u5728 <code>$PWD/.tool-versions</code> \u6587\u4EF6\u4E2D\uFF08\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\uFF09\u3002\u901A\u5E38\uFF0C\u8FD9\u5C06\u4F1A\u662F\u4E00\u4E2A\u9879\u76EE\u7684 Git \u5B58\u50A8\u5E93\u3002\u5F53\u5728\u4F60\u60F3\u8981\u7684\u76EE\u5F55\u6267\u884C\uFF1A</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf </span><span style="color:#F92672;">local</span><span style="color:#F8F8F2;"> nodejs latest</span></span>
<span class="line"></span></code></pre></div><p><code>$PWD/.tool-versions</code> \u6587\u4EF6\u5185\u5BB9\u5C06\u4F1A\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u73B0\u6709\u5DE5\u5177\u7248\u672C\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u73B0\u6709\u5DE5\u5177\u7248\u672C\u6587\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528\u73B0\u6709\u5DE5\u5177\u7248\u672C\u6587\u4EF6</h3><p><code>asdf</code> \u652F\u6301\u4ECE\u5176\u4ED6\u7248\u672C\u7BA1\u7406\u5668\u7684\u73B0\u6709\u7248\u672C\u6587\u4EF6\u4E2D\u8FC1\u79FB\u8FC7\u6765\uFF0C\u6BD4\u5982 <code>rbenv</code> \u7684 <code>.ruby-version</code> \u6587\u4EF6\u3002\u8FD9\u5728\u6BCF\u4E2A\u63D2\u4EF6\u4E2D\u90FD\u539F\u751F\u652F\u6301\u3002</p>`,7),Ks={href:"https://github.com/asdf-vm/asdf-nodejs/",target:"_blank",rel:"noopener noreferrer"},Qs=s("code",null,"asdf-nodejs",-1),Xs=e(" \u652F\u6301\u4ECE "),Ys=s("code",null,".nvmrc",-1),se=e(" \u548C "),ee=s("code",null,".node-version",-1),ae=e(" \u6587\u4EF6\u8FDB\u884C\u8FC1\u79FB\u3002\u4E3A\u4E86\u542F\u7528\u6B64\u529F\u80FD\uFF0C\u8BF7\u5728 "),oe=s("code",null,"asdf",-1),ne=e(" \u914D\u7F6E\u6587\u4EF6 "),le=s("code",null,"$HOME/.asdfrc",-1),te=e(" \u4E2D\u52A0\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A"),ce=o(`<div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">legacy_version_file = yes</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),de=e("\u8BF7\u67E5\u770B "),ie=e("\u914D\u7F6E"),re=e(" \u53C2\u8003\u9875\u9762\u53EF\u4EE5\u4E86\u89E3\u66F4\u591A\u914D\u7F6E\u9009\u9879\u3002"),pe=o('<h2 id="\u5B8C\u6210\u6307\u5357" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6210\u6307\u5357" aria-hidden="true">#</a> \u5B8C\u6210\u6307\u5357\uFF01</h2><p>\u606D\u559C\u4F60\u5B8C\u6210\u4E86 <code>asdf</code> \u7684\u5FEB\u901F\u4E0A\u624B \u{1F389} \u4F60\u73B0\u5728\u53EF\u4EE5\u7BA1\u7406\u4F60\u7684\u9879\u76EE\u7684 <code>nodejs</code> \u7248\u672C\u4E86\u3002\u5BF9\u4E8E\u9879\u76EE\u4E2D\u7684\u5176\u4ED6\u5DE5\u5177\u7C7B\u578B\u53EF\u4EE5\u6267\u884C\u7C7B\u4F3C\u6B65\u9AA4\u5373\u53EF\uFF01</p><p><code>asdf</code> \u8FD8\u6709\u66F4\u591A\u547D\u4EE4\u9700\u8981\u719F\u6089\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u8FD0\u884C <code>asdf --help</code> \u6216\u8005 <code>asdf</code> \u6765\u67E5\u770B\u5B83\u4EEC\u3002\u547D\u4EE4\u4E3B\u8981\u5206\u4E3A\u4E09\u7C7B\uFF1A</p>',3),he=s("code",null,"asdf",-1),Fe=e(" \u6838\u5FC3"),ue=e("\u63D2\u4EF6"),_e=e("\uFF08\u5DE5\u5177\u7684\uFF09\u7248\u672C");function me(fe,ye){const n=c("ExternalLinkIcon"),l=c("RouterLink");return i(),r("div",null,[h,s("table",null,[F,s("tbody",null,[u,_,s("tr",null,[m,s("td",null,[f,y,s("a",g,[b,a(n)])])])])]),v,s("details",k,[x,s("p",null,[E,s("a",H,[D,a(n)]),S]),w]),s("details",z,[$,s("p",null,[Z,s("a",q,[B,a(n)]),j])]),O,s("details",M,[P,s("p",null,[C,s("a",G,[A,a(n)]),N])]),R,s("details",L,[I,s("p",null,[T,U,s("a",V,[W,a(n)]),J]),K,s("p",null,[Q,X,Y,ss,es,s("a",as,[os,a(n)]),ns])]),s("details",ls,[ts,s("p",null,[cs,ds,s("a",is,[rs,a(n)]),ps]),s("p",null,[hs,Fs,us,s("a",_s,[ms,a(n)]),fs,ys,gs,bs,vs,s("a",ks,[xs,a(n)]),Es])]),s("details",Hs,[Ds,s("p",null,[Ss,s("a",ws,[zs,a(n)]),$s])]),Zs,s("p",null,[qs,s("a",Bs,[js,a(n)]),Os,s("a",Ms,[Ps,a(n)]),Cs]),Gs,s("p",null,[As,Ns,Rs,Ls,Is,Ts,Us,a(l,{to:"/zh-hans/manage/versions.html"},{default:t(()=>[Vs]),_:1}),Ws]),Js,s("p",null,[s("a",Ks,[Qs,a(n)]),Xs,Ys,se,ee,ae,oe,ne,le,te]),ce,s("p",null,[de,a(l,{to:"/zh-hans/manage/configuration.html"},{default:t(()=>[ie]),_:1}),re]),pe,s("ul",null,[s("li",null,[a(l,{to:"/zh-hans/manage/core.html"},{default:t(()=>[he,Fe]),_:1})]),s("li",null,[a(l,{to:"/zh-hans/manage/plugins.html"},{default:t(()=>[ue]),_:1})]),s("li",null,[a(l,{to:"/zh-hans/manage/versions.html"},{default:t(()=>[_e]),_:1})])])])}var be=d(p,[["render",me],["__file","getting-started.html.vue"]]);export{be as default};
