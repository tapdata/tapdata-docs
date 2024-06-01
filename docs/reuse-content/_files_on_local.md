import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="unique-tabs">
   <TabItem value="local" label="Local">

<p>When you store files on TapData Agent's device, it can be used as a data source, and the preparations are as follows: </p>
  <ol>
   <li>Log in to TapData Agent's device. </li>
   <li>Create a folder first (e.g., <code>/root/files</code> for the root user) for easier file management.</li>
   <li>Save the files to the folder that you created. </li>
  </ol>
  <p>When configuring the data source later, all you need to do is specify the <strong>file path</strong>. </p>

</TabItem>
   <TabItem value="ftp" label="FTP">
    <p>File Transfer Protocol (FTP) is a set of standard protocols for file transfer over a network. To use the files in the FTP service as a data source, the preparations are as follows: </p>
  <ol>
   <li>Install the FTP server (such as <a href="https://security.appspot.com/vsftpd.html">vsftpd</a>) and ensure network communication capability. </li>
   <li>If authentication is enabled, you need to create an FTP account and ensure it has permission to read files. </li>
   <li>Save the path of the file and use it when configuring the data source later. </li>
  </ol>

</TabItem>
   <TabItem value="sftp" label="SFTP">
   <p>Secure File Transfer Protocol (SFTP) provides a secure and encrypted network transfer method for files. To use the files in the SFTP service as a data source, the preparations are as follows: </p>
  <ol>
   <li>Install the SFTP server (openssh-client and openssh-server) and ensure network communication capability. </li>
   <li>Create an SFTP service account and ensure it has permission to read files. </li>
   <li>Save the path of the file and use it when configuring the data source later. </li>
  </ol>

</TabItem>
   <TabItem value="smb" label="SMB">
   <p>The Server Message Block protocol (SMB protocol) is a client-server communication protocol used for sharing access to files, printers, serial ports and other resources on a network. To use the files in the SMB service as a data source, the preparations are as follows: </p>
  <ol>
   <li>Install SMB (support 1.0/2.0/3.0) protocol software, such as Samba, to ensure network communication. </li>
   <li>Create a Samba service account and ensure it has permission to read files. </li>
   <li>Save the path of the file and use it when configuring the data source later. </li>
  </ol>

</TabItem>
  </Tabs>