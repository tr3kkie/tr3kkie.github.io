[← Back to home](../README.md)

# Course 3 · Module 3 — Linux OS & Command Line

**Status:** 🔄 In Progress

---

## Key Concepts

- Linux file system hierarchy (`/`, `/etc`, `/var`, `/home`, etc.)
- Shell basics: Bash
- Permissions model (owner / group / other, `rwx`)

## Command Line Snippets

```bash
# Navigate & inspect
pwd                     # print working directory
ls -la                  # list all files, including hidden, long format
cd /var/log             # change directory

# File permissions
chmod 755 script.sh     # rwxr-xr-x
chown user:group file   # change ownership

# Process management
ps aux                  # list all running processes
top                     # live process/resource monitor
kill -9 <PID>           # force-kill a process

# Package management (Debian/Ubuntu)
sudo apt update && sudo apt upgrade
sudo apt install <package>
```

## Notes / Gotchas

- *(e.g., "sudo apt vs sudo apt-get — apt is the newer, friendlier front-end")*

## Useful Links

- [Example: Linux Command Line cheat sheet](https://www.gnu.org/software/bash/manual/bash.html)

---

[← Previous: Module 2](course3-module2.md) · [← Back to home](../README.md) · [Next: Module 4 →](course3-module4.md)
