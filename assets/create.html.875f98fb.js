import{_ as i,o as t,c as l,a as s,b as n,d as o,e,r}from"./app.72755c2a.js";const d={},c=o(`<h1 id="create-a-plugin" tabindex="-1"><a class="header-anchor" href="#create-a-plugin" aria-hidden="true">#</a> Create a Plugin</h1><h2 id="what-s-in-a-plugin" tabindex="-1"><a class="header-anchor" href="#what-s-in-a-plugin" aria-hidden="true">#</a> What&#39;s in a Plugin</h2><p>A plugin is a git repo, with a couple executable scripts, to support versioning another language or tool. These scripts are run when <code>list-all</code>, <code>install</code> or <code>uninstall</code> commands are run. You can set or unset env vars and do anything required to setup the environment for the tool.</p><h2 id="required-scripts" tabindex="-1"><a class="header-anchor" href="#required-scripts" aria-hidden="true">#</a> Required Scripts</h2><ul><li><code>bin/list-all</code> - lists all installable versions</li><li><code>bin/download</code> - download source code or binary for the specified version</li><li><code>bin/install</code> - installs the specified version</li></ul><h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment Variables</h2><p>All scripts except <code>bin/list-all</code> will have access to the following env vars to act upon:</p><ul><li><code>ASDF_INSTALL_TYPE</code> - <code>version</code> or <code>ref</code></li><li><code>ASDF_INSTALL_VERSION</code> - if <code>ASDF_INSTALL_TYPE</code> is <code>version</code> then this will be the version number. Else it will be the git ref that is passed. Might point to a tag/commit/branch on the repo.</li><li><code>ASDF_INSTALL_PATH</code> - the dir where the it <em>has been</em> installed (or <em>should</em> be installed in case of the <code>bin/install</code> script)</li></ul><p>These additional environment variables will be available to the <code>bin/install</code> script:</p><ul><li><code>ASDF_CONCURRENCY</code> - the number of cores to use when compiling the source code. Useful for setting <code>make -j</code>.</li><li><code>ASDF_DOWNLOAD_PATH</code> - the path to where the source code or binary was downloaded by the <code>bin/download</code> script.</li></ul><p>These additional environment variables will be available to the <code>bin/download</code> script:</p><ul><li><code>ASDF_DOWNLOAD_PATH</code> - the path to where the source code or binary should be downloaded.</li></ul><h4 id="bin-list-all" tabindex="-1"><a class="header-anchor" href="#bin-list-all" aria-hidden="true">#</a> bin/list-all</h4><p>Must print a string with a space-separated list of versions. Example output would be the following:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">1.0.1 1.0.2 1.3.0 1.4</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Note that the newest version should be listed last so it appears closer to the user&#39;s prompt. This is helpful since the <code>list-all</code> command prints each version on it&#39;s own line. If there are many versions it&#39;s possible the early versions will be off screen.</p>`,16),p=e("If versions are being pulled from releases page on a website it's recommended to not sort the versions if at all possible. Often the versions are already in the correct order or, in reverse order, in which case something like "),h=s("code",null,"tac",-1),u=e(" should suffice. If you must sort versions manually you cannot rely on "),b=s("code",null,"sort -V",-1),m=e(" since it is not supported on OSX. An alternate sort function "),f={href:"https://github.com/vic/asdf-idris/blob/master/bin/list-all#L6",target:"_blank",rel:"noopener noreferrer"},F=e("like this is a better choice"),y=e("."),g=o('<h4 id="bin-download" tabindex="-1"><a class="header-anchor" href="#bin-download" aria-hidden="true">#</a> bin/download</h4><p>This script must download the source or binary, in the path contained in the <code>ASDF_DOWNLOAD_PATH</code> environment variable. If the downloaded source or binary is compressed, only the uncompressed source code or binary may be placed in the <code>ASDF_DOWNLOAD_PATH</code> directory.</p><p>The script must exit with a status of <code>0</code> when the download is successful. If the download fails the script must exit with any non-zero exit status.</p><p>If possible the script should only place files in the <code>ASDF_DOWNLOAD_PATH</code>. If the download fails no files should be placed in the directory.</p><p>If this script is not present asdf will assume that the <code>bin/install</code> script is present and will download and install the version. asdf only works without this script to support legacy plugins. All plugins must include this script, and eventually support for legacy plugins will be removed.</p><h4 id="bin-install" tabindex="-1"><a class="header-anchor" href="#bin-install" aria-hidden="true">#</a> bin/install</h4><p>This script should install the version, in the path mentioned in <code>ASDF_INSTALL_PATH</code>. By default, asdf will create shims for any files in <code>$ASDF_INSTALL_PATH/bin</code> (this can be customized with the optional <a href="#binlist-bin-paths">bin/list-bin-paths</a> script).</p><p>The install script should exit with a status of <code>0</code> when the installation is successful. If the installation fails the script should exit with any non-zero exit status.</p>',8),v=e("If possible the script should only place files in the "),_=s("code",null,"ASDF_INSTALL_PATH",-1),w=e(" directory once the build and installation of the tool is deemed successful by the install script. asdf "),x={href:"https://github.com/asdf-vm/asdf/blob/242d132afbf710fe3c7ec23c68cec7bdd2c78ab5/lib/utils.sh#L44",target:"_blank",rel:"noopener noreferrer"},A=e("checks for the existence"),T=e(" of the "),k=s("code",null,"ASDF_INSTALL_PATH",-1),D=e(" directory in order to determine if that version of the tool is installed. If the "),I=s("code",null,"ASDF_INSTALL_PATH",-1),E=e(" directory is populated at the beginning of the installation process other asdf commands run in other terminals during the installation may consider that version of the tool installed, even when it is not fully installed."),S=o('<p>If you want your plugin to work with asdf version 0.7._ and earlier and version 0.8._ and newer check for the presence of the <code>ASDF_DOWNLOAD_PATH</code> environment variable. If it is not set download the source code in the bin/install callback. If it is set assume the <code>bin/download</code> script already downloaded it.</p><h2 id="optional-scripts" tabindex="-1"><a class="header-anchor" href="#optional-scripts" aria-hidden="true">#</a> Optional Scripts</h2><h4 id="bin-help-scripts" tabindex="-1"><a class="header-anchor" href="#bin-help-scripts" aria-hidden="true">#</a> bin/help scripts</h4><p>This is not one callback script but rather a set of callback scripts that each print different documentation to STDOUT. The possible callback scripts are listed below. Note that <code>bin/help.overview</code> is a special case as it must be present for any help output to be displayed for the script.</p><ul><li><code>bin/help.overview</code> - This script should output a general description about the plugin and the tool being managed. No heading should be printed as asdf will print headings. Output may be free-form text but ideally only one short paragraph. This script must be present if you want asdf to provide help information for your plugin. All other help callback scripts are optional.</li><li><code>bin/help.deps</code> - This script should output the list of dependencies tailored to the operating system. One dependency per line.</li><li><code>bin/help.config</code> - This script should print any required or optional configuration that may be available for the plugin and tool. Any environment variables or other flags needed to install or compile the tool (for the users operating system when possible). Output can be free-form text.</li><li><code>bin/help.links</code> - This should be a list of links relevant to the plugin and tool (again, tailored to the current operating system when possible). One link per line. Lines may be in the format <code>&lt;title&gt;: &lt;link&gt;</code> or just <code>&lt;link&gt;</code>.</li></ul><p>Each of these scripts should tailor their output to the current operating system. For example, when on Ubuntu the deps script could output the dependencies as apt-get packages that must be installed. The script should also tailor its output to the value of <code>ASDF_INSTALL_VERSION</code> and <code>ASDF_INSTALL_TYPE</code> when the variables are set. They are optional and will not always be set.</p><p>The help callback script MUST NOT output any information that is already covered in the core asdf-vm documentation. General asdf usage information must not be present.</p><h4 id="bin-latest-stable" tabindex="-1"><a class="header-anchor" href="#bin-latest-stable" aria-hidden="true">#</a> bin/latest-stable</h4><p>If this callback is implemented asdf will use it to determine the latest stable version of your tool instead of trying deduce it for you on its own. <code>asdf latest</code> deduces the latest version by looking at the last version printed by the <code>list-all</code> callback, after a few types of versions (like release candidate versions) are excluded from the output. This default behavior is undesirable when your plugin&#39;s <code>list-all</code> callback prints different variations of the same tool and the last version isn&#39;t the latest stable version of the variation you&#39;d like to default to. For example with Ruby the latest stable version should be the regular implementation of Ruby (MRI), but truffleruby versions are printed last by the <code>list-all</code> callback.</p><p>This callback is invoked with a single &quot;filter&quot; string as it&#39;s only argument. This should be used for filter all latest stable versions. For example with Ruby, the user may choose to pass in <code>jruby</code> to select the latest stable version of <code>jruby</code>.</p><h4 id="bin-list-bin-paths" tabindex="-1"><a class="header-anchor" href="#bin-list-bin-paths" aria-hidden="true">#</a> bin/list-bin-paths</h4><p>List executables for the specified version of the tool. Must print a string with a space-separated list of dir paths that contain executables. The paths must be relative to the install path passed. Example output would be:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">bin tools veggies</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will instruct asdf to create shims for the files in <code>&lt;install-path&gt;/bin</code>, <code>&lt;install-path&gt;/tools</code> and <code>&lt;install-path&gt;/veggies</code></p><p>If this script is not specified, asdf will look for the <code>bin</code> dir in an installation and create shims for those.</p><h4 id="bin-exec-env" tabindex="-1"><a class="header-anchor" href="#bin-exec-env" aria-hidden="true">#</a> bin/exec-env</h4><p>Setup the env to run the binaries in the package.</p><h4 id="bin-exec-path" tabindex="-1"><a class="header-anchor" href="#bin-exec-path" aria-hidden="true">#</a> bin/exec-path</h4><p>Get the executable path for the specified version of the tool. Must print a string with the relative executable path. This allows the plugin to conditionally override the shim&#39;s specified executable path, otherwise return the default path specified by the shim.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">Usage:</span></span>\n<span class="line"><span style="color:#F8F8F2;">  plugin/bin/exec-path </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">install-path</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">command</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">executable-path</span><span style="color:#F92672;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F8F8F2;">Example Call:</span></span>\n<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/plugins/foo/bin/exec-path </span><span style="color:#E6DB74;">&quot;~/.asdf/installs/foo/1.0&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;foo&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;bin/foo&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F8F8F2;">Output:</span></span>\n<span class="line"><span style="color:#F8F8F2;">  bin/foox</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="bin-uninstall" tabindex="-1"><a class="header-anchor" href="#bin-uninstall" aria-hidden="true">#</a> bin/uninstall</h4><p>Uninstalls a specific version of a tool.</p><h4 id="bin-list-legacy-filenames" tabindex="-1"><a class="header-anchor" href="#bin-list-legacy-filenames" aria-hidden="true">#</a> bin/list-legacy-filenames</h4><p>Register additional setter files for this plugin. Must print a string with a space-separated list of filenames.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">.ruby-version .rvmrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Note: This will only apply for users who have enabled the <code>legacy_version_file</code> option in their <code>~/.asdfrc</code>.</p><h4 id="bin-parse-legacy-file" tabindex="-1"><a class="header-anchor" href="#bin-parse-legacy-file" aria-hidden="true">#</a> bin/parse-legacy-file</h4><p>This can be used to further parse the legacy file found by asdf. If <code>parse-legacy-file</code> isn&#39;t implemented, asdf will simply cat the file to determine the version. The script will be passed the file path as its first argument.</p><h4 id="bin-post-plugin-add" tabindex="-1"><a class="header-anchor" href="#bin-post-plugin-add" aria-hidden="true">#</a> bin/post-plugin-add</h4><p>This can be used to run any post-installation actions after the plugin has been added to asdf.</p><p>The script has access to the path the plugin was installed (<code>${ASDF_PLUGIN_PATH}</code>) and the source URL (<code>${ASDF_PLUGIN_SOURCE_URL}</code>), if any was used.</p><p>See also the related hooks:</p><ul><li><code>pre_asdf_plugin_add</code></li><li><code>pre_asdf_plugin_add_${plugin_name}</code></li><li><code>post_asdf_plugin_add</code></li><li><code>post_asdf_plugin_add_${plugin_name}</code></li></ul><h4 id="bin-post-plugin-update" tabindex="-1"><a class="header-anchor" href="#bin-post-plugin-update" aria-hidden="true">#</a> bin/post-plugin-update</h4><p>This can be used to run any post-plugin-update actions after asdf has downloaded the updated plugin</p><p>The script has access to the path the plugin was installed (<code>${ASDF_PLUGIN_PATH}</code>), previous git-ref (<code>${ASDF_PLUGIN_PREV_REF}</code>), and updated git-ref (<code>${ASDF_PLUGIN_POST_REF}</code>).</p><p>See also the related hooks:</p><ul><li><code>pre_asdf_plugin_updated</code></li><li><code>pre_asdf_plugin_updated_${plugin_name}</code></li><li><code>post_asdf_plugin_updated</code></li><li><code>post_asdf_plugin_updated_${plugin_name}</code></li></ul><h4 id="bin-pre-plugin-remove" tabindex="-1"><a class="header-anchor" href="#bin-pre-plugin-remove" aria-hidden="true">#</a> bin/pre-plugin-remove</h4><p>This can be used to run any pre-removal actions before the plugin will be removed from asdf.</p><p>The script has access to the path the plugin was installed in (<code>${ASDF_PLUGIN_PATH}</code>).</p><p>See also the related hooks:</p><ul><li><code>pre_asdf_plugin_remove</code></li><li><code>pre_asdf_plugin_remove_${plugin_name}</code></li><li><code>post_asdf_plugin_remove</code></li><li><code>post_asdf_plugin_remove_${plugin_name}</code></li></ul><h2 id="extension-commands-for-asdf-cli" tabindex="-1"><a class="header-anchor" href="#extension-commands-for-asdf-cli" aria-hidden="true">#</a> Extension commands for asdf CLI.</h2><p>It&#39;s possible for plugins to define new asdf commands by providing <code>lib/commands/command*.bash</code> scripts or executables that will be callable using the asdf command line interface by using the plugin name as a subcommand.</p><p>For example, suppose a <code>foo</code> plugin has:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">foo/</span></span>\n<span class="line"><span style="color:#F8F8F2;">  lib/commands/</span></span>\n<span class="line"><span style="color:#F8F8F2;">    command.bash</span></span>\n<span class="line"><span style="color:#F8F8F2;">    command-bat.bash</span></span>\n<span class="line"><span style="color:#F8F8F2;">    command-bat-man.bash</span></span>\n<span class="line"><span style="color:#F8F8F2;">    command-help.bash</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Users can now execute</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">$ asdf foo         </span><span style="color:#88846F;"># same as running `$ASDF_DATA_DIR/plugins/foo/lib/commands/command.bash`</span></span>\n<span class="line"><span style="color:#F8F8F2;">$ asdf foo bar     </span><span style="color:#88846F;"># same as running `$ASDF_DATA_DIR/plugins/foo/lib/commands/command.bash bar`</span></span>\n<span class="line"><span style="color:#F8F8F2;">$ asdf foo </span><span style="color:#66D9EF;">help</span><span style="color:#F8F8F2;">    </span><span style="color:#88846F;"># same as running `$ASDF_DATA_DIR/plugins/foo/lib/commands/command-help.bash`</span></span>\n<span class="line"><span style="color:#F8F8F2;">$ asdf foo bat man </span><span style="color:#88846F;"># same as running `$ASDF_DATA_DIR/plugins/foo/lib/commands/command-bat-man.bash`</span></span>\n<span class="line"><span style="color:#F8F8F2;">$ asdf foo bat baz </span><span style="color:#88846F;"># same as running `$ASDF_DATA_DIR/plugins/foo/lib/commands/command-bat.bash baz`</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Plugin authors can use this feature to provide utilities related to their tools, or even create plugins that are just new command extensions for asdf itself.</p><p>When invoked, if extension commands do not have their executable-bit set they will be sourced as bash scripts. Also, the <code>$ASDF_CMD_FILE</code> resolves to the full path of the file being sourced. If the executable bit is set, they are just executed and replace the asdf execution.</p>',51),L=e("A good example of this feature is for plugins like "),N={href:"https://github.com/asdf-community/asdf-haxe",target:"_blank",rel:"noopener noreferrer"},O=s("code",null,"haxe",-1),P=e(" which provides the "),B=s("code",null,"asdf haxe neko-dylibs-link",-1),$=e(" to fix an issue where haxe executables expect to find dynamic libraries relative to the executable directory."),R=o(`<p>If your plugin provides an asdf extension command, be sure to mention about it on your plugin&#39;s README.</p><h2 id="custom-shim-templates" tabindex="-1"><a class="header-anchor" href="#custom-shim-templates" aria-hidden="true">#</a> Custom shim templates</h2><p><strong>PLEASE use this feature only if absolutely required</strong></p><p>asdf allows custom shim templates. For an executable called <code>foo</code>, if there&#39;s a <code>shims/foo</code> file in the plugin, then asdf will copy that file instead of using it&#39;s standard shim template.</p><p>This must be used wisely. For now AFAIK, it&#39;s only being used in the Elixir plugin, because an executable is also read as an Elixir file apart from just being an executable. Which makes it not possible to use the standard bash shim.</p><h2 id="testing-plugins" tabindex="-1"><a class="header-anchor" href="#testing-plugins" aria-hidden="true">#</a> Testing plugins</h2><p><code>asdf</code> contains the <code>plugin-test</code> command to test your plugin. You can use it as follows</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin </span><span style="color:#66D9EF;">test</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">plugin-name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">plugin-url</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> [--asdf-tool-version </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">] [--asdf-plugin-gitref </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">git-ref</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">] [test-command</span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Only the two first arguments are required. If _<em>version</em> is specified, the tool will be installed with that specific version. Defaults to whatever returns <code>asdf latest &lt;plugin-name&gt;</code>. If <em>git-ref</em> is specified, the plugin itself is checked out at that commit/branch/tag, useful for testing a pull-request on your plugin&#39;s CI.</p><p>Rest arguments are considered the command to execute to ensure the installed tool works correctly. Normally it would be something that takes <code>--version</code> or <code>--help</code>. For example, to test the NodeJS plugin, we could run</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin </span><span style="color:#66D9EF;">test</span><span style="color:#F8F8F2;"> nodejs https://github.com/asdf-vm/asdf-nodejs.git node --version</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>We strongly recommend you test your plugin on a CI environment and make sure it works on both Linux and OSX.</p><h4 id="example-github-action" tabindex="-1"><a class="header-anchor" href="#example-github-action" aria-hidden="true">#</a> Example GitHub Action</h4>`,13),q=e("The "),H={href:"https://github.com/asdf-vm/actions",target:"_blank",rel:"noopener noreferrer"},U=e("asdf-vm/actions"),G=e(" repo provides a GitHub Action for testing your plugins hosted on github."),C=o(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F92672;">steps</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">  - </span><span style="color:#F92672;">name</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">asdf_plugin_test</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">uses</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">asdf-vm/actions/plugin-test@v1</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">with</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">command</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&quot;my_tool --version&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#F92672;">env</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#F92672;">GITHUB_API_TOKEN</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">\${{ secrets.GITHUB_TOKEN }}</span><span style="color:#F8F8F2;"> </span><span style="color:#88846F;"># automatically provided</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-travisci-config" tabindex="-1"><a class="header-anchor" href="#example-travisci-config" aria-hidden="true">#</a> Example TravisCI config</h4><p>Here is a sample <code>.travis.yml</code> file, customize it to your needs</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F92672;">language</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">c</span></span>
<span class="line"><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">asdf plugin test nodejs $TRAVIS_BUILD_DIR &#39;node --version&#39;</span></span>
<span class="line"><span style="color:#F92672;">before_script</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">  - </span><span style="color:#E6DB74;">git clone https://github.com/asdf-vm/asdf.git asdf</span></span>
<span class="line"><span style="color:#F8F8F2;">  - </span><span style="color:#E6DB74;">. asdf/asdf.sh</span></span>
<span class="line"><span style="color:#F92672;">os</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">  - </span><span style="color:#E6DB74;">linux</span></span>
<span class="line"><span style="color:#F8F8F2;">  - </span><span style="color:#E6DB74;">osx</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: When using another CI, you will need to check what variable maps to the repo path.</p><p>You also have the option to pass a relative path to <code>plugin-test</code>.</p><p>For example, if the test script is ran in the repo directory: <code>asdf plugin test nodejs . &#39;node --version&#39;</code>.</p><h2 id="github-api-rate-limiting" tabindex="-1"><a class="header-anchor" href="#github-api-rate-limiting" aria-hidden="true">#</a> GitHub API Rate Limiting</h2><p>If your plugin&#39;s <code>list-all</code> depends on accessing the GitHub API, make sure you provide an Authorization token when accessing it, otherwise your tests might fail due to rate limiting.</p>`,9),j=e("To do so, create a "),V={href:"https://github.com/settings/tokens/new",target:"_blank",rel:"noopener noreferrer"},W=e("new personal token"),M=e(" with only "),z=s("code",null,"public_repo",-1),Y=e(" access."),K=o(`<p>Then on your travis.ci build settings add a <em>secure</em> environment variable for it named something like <code>GITHUB_API_TOKEN</code>. And <em>DO NOT</em> EVER publish your token in your code.</p><p>Finally, add something like the following to <code>bin/list-all</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">cmd=</span><span style="color:#E6DB74;">&quot;curl -s&quot;</span></span>
<span class="line"><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> [ </span><span style="color:#F92672;">-n</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$GITHUB_API_TOKEN</span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;"> ]</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">then</span></span>
<span class="line"><span style="color:#F8F8F2;"> cmd=</span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$cmd</span><span style="color:#E6DB74;"> -H &#39;Authorization: token </span><span style="color:#F8F8F2;">$GITHUB_API_TOKEN</span><span style="color:#E6DB74;">&#39;&quot;</span></span>
<span class="line"><span style="color:#F92672;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">cmd=</span><span style="color:#E6DB74;">&quot;</span><span style="color:#F8F8F2;">$cmd</span><span style="color:#E6DB74;"> </span><span style="color:#F8F8F2;">$releases_path</span><span style="color:#E6DB74;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="submitting-plugins-to-the-official-plugins-repository" tabindex="-1"><a class="header-anchor" href="#submitting-plugins-to-the-official-plugins-repository" aria-hidden="true">#</a> Submitting plugins to the official plugins repository</h2><p><code>asdf</code> can easily install plugins by specifying the plugin repository url, e.g. <code>plugin add my-plugin https://github.com/user/asdf-my-plugin.git</code>.</p><p>To make it easier on your users, you can add your plugin to the official plugins repository to have your plugin listed and easily installable using a shorter command, e.g. <code>asdf plugin add my-plugin</code>.</p>`,6),X=e("Follow the instruction at the plugins repository: "),J={href:"https://github.com/asdf-vm/asdf-plugins",target:"_blank",rel:"noopener noreferrer"},Q=e("asdf-vm/asdf-plugins"),Z=e(".");function ee(se,ae){const a=r("ExternalLinkIcon");return t(),l("div",null,[c,s("p",null,[p,h,u,b,m,s("a",f,[F,n(a)]),y]),g,s("p",null,[v,_,w,s("a",x,[A,n(a)]),T,k,D,I,E]),S,s("p",null,[L,s("a",N,[O,n(a)]),P,B,$]),R,s("p",null,[q,s("a",H,[U,n(a)]),G]),C,s("p",null,[j,s("a",V,[W,n(a)]),M,z,Y]),K,s("p",null,[X,s("a",J,[Q,n(a)]),Z])])}var oe=i(d,[["render",ee],["__file","create.html.vue"]]);export{oe as default};
