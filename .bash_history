ifconfig 
df -hT
mount /dev/cdrom /mnt
df -hT
vim /etc/yum.repos.d/rhel9.repo
yum cleana ll
yum cleana all
yum clean all
yum repolist all
yum search httpd 
yum info httpd.x86_64
yum install  httpd.x86_64 -y
httpd -v 
yum remove   httpd.x86_64 -y
httpd -v 
yum info httpd.x86_64
init 0
sestatus 
df -hT
mount /dev/cdrom /mnt
yum clean all
yum repolist all
yum info httpd 
init 0
ip r
