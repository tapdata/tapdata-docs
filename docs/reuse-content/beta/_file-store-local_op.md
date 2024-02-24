```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

```mdx-code-block
<Tabs className="unique-tabs">
<TabItem value="Local（本地）">
```
  <ol>
   <li>登录至用于存放文件的本地设备。</li>
   <li>为便于管理，新建一个文件夹用来存放文件，以 root 用户为例，我们新建一个文件夹为： <code>/root/files</code>。</li>
   <li>将文件存放至该文件夹。</li>
  </ol> 
  <p>后续在配置数据源时，您只需提供<strong>文件存放路径</strong>即可。</p>

   </TabItem>
   <TabItem value="FTP">
    <p>文件传输协议（FTP）是用于在网络上进行文件传输的一套标准协议。如需将 FTP 服务中的文件作为数据来源，准备工作如下：</p> 
  <ol>
   <li>安装 FTP 服务（如 <a href="https://security.appspot.com/vsftpd.html">vsftpd</a>）并保障网络通信正常。</li>
   <li>如开启了认证，您需要准备 FTP 的账号与密码，保障其具备文件读取权限。</li>
   <li>记录文件存放路径，后续配置数据源时使用。</li>
  </ol>

   </TabItem>
   <TabItem value="SFTP">
   <p>安全文件传输协议（SFTP）可为文件提供一种安全加密的网络传输方法。如需将 SFTP 服务中的文件作为数据来源，准备工作如下：</p> 
  <ol>
   <li>安装 SFTP 服务（openssh-client 与 openssh-server）并保障网络通信正常。</li>
   <li>准备 SFTP 服务的账号、密码，保障其具备文件读取权限。</li>
   <li>记录文件存放路径，后续配置数据源时使用。</li>
  </ol>

   </TabItem>
   <TabItem value="SMB">
   <p>信息服务快协议（SMB）是一种Linux、UNIX系统上可用于共享文件和打印机等资源的协议。如需将 Samba 服务中的文件作为数据来源，准备工作如下：</p> 
  <ol>
   <li>安装 SMB （支持 1.0/2.0/3.0 版本）协议的软件，如 Samba ，保障网络通信正常。</li>
   <li>准备 Samba 服务的账号、密码，保障其具备文件读取权限。</li>
   <li>记录文件存放的路径，后续配置数据源时使用。</li>
  </ol>
   </TabItem>
  </Tabs>